import scrapy
import boto3
import json
from bs4 import BeautifulSoup
import html.parser
from ..items import JobCollectionItem
from urllib.parse import urlparse
from scrapy.utils.response import open_in_browser

class CrawlRB(scrapy.Spider):

    name = 'recruiterbox'
    
    def start_requests(self):
        sqs = boto3.resource('sqs')
        queue = sqs.get_queue_by_name(QueueName='RECRUITER_BOX_SUB_DOMAINS')
        while True:
            n = urlparse(str(json.loads(queue.receive_messages()[0].body).get('url')))
            yield self.make_requests_from_url(
                '{}://{}'.format(n.scheme, n.netloc)
            )

    
    page_number = 1
    inner_pages = 0
    page_count = 0


# CRAWLING

    def parse(self, response):
        CrawlRB.inner_pages += 1
        html_source = response.body
        html = BeautifulSoup(html_source, 'html.parser')
        with open ('../HTML/RB/innerpage'+str(CrawlRB.inner_pages)+'.html', 'w', encoding='utf-8') as f:
            f.write(str(html.prettify()))

# PARSING JOBS

class crawlPost(scrapy.Spider):
    name = "rbjob"
    start_urls = [
        'file:///tmp/joboid/job_collection/job_collection/HTML/RB/innerpage1.html'

    ]
    next_job = 1

    def parse(self, response):
        jobs = response.css('a::attr(href)').extract()
        for i in jobs:
            if i[0:6] == '/jobs/':
                url = "https://mainebhr.recruiterbox.com"+i
                yield response.follow(url, callback = self.parseJob)

        crawlPost.next_job += 1
        go_next = 'file:///tmp/joboid/job_collection/job_collection/HTML/RB/innerpage'+str(crawlPost.next_job)+'.html'
        yield response.follow(go_next, callback = self.parse)

    
    def parseJob(self, response):
        items = JobCollectionItem()
        job_title = response.xpath('/html/body/div[2]/div/div/header/h1/text()').extract()
        company_name = response.xpath('/html/body/div[1]/div/div/div/div[1]/a/img/@alt').extract()
        description = response.xpath('/html/body/div[2]/div/div/div/div[1]/div/p[26]/text()').extract()
        payscale = 'Best In Industry'
        location = response.xpath('/html/body/div[2]/div/div/header/p/span/text()').extract()
        job_type = response.xpath('/html/body/div[2]/div/div/header/p/small/text()').extract()
        company_type = None
        date_posted = 'Yesterday'
        parent_source = response.xpath('/html/body/div[2]/div/div/div/div[1]/section/div[1]/div[1]/div[1]/a/@href').extract()
        active = True
        if len(job_type) == 0:
            job_type = 'Full-time'
        if len(description) == 0:
            job_tag = " ".join(job_title)
            description = 'Our'+ job_tag +' will be the master of all things content execution and strategy. Your objective will be to generate content that is aligned with our positioning, thought leadership, Inbound and demand generation strategy. You will need to conduct user persona research, competitive research, keyword research, topic research, create a list of content topics and organize them in a content calendar, write some compelling content yourself, assign the right content topic(s) to the right freelancer/ agency, supervise and approve their work, make sure content is properly linked internally and externally, launch the content on our website / blog/ email list/ newsletter, track traffic and conversion overtime and assist with tweaking content to improve conversion. Own the impact content has on site traffic, demo request/ trial conversion and wins. The role will report to the VP-Product Marketing who reports to the CEO.'

        items['job_title'] = job_title
        items['company_name'] = company_name
        items['description'] = description
        items['payscale'] = payscale
        items['location'] = location
        items['job_type'] = job_type
        items['company_type'] = company_type
        items['date_posted'] = date_posted
        items['parent_source'] = parent_source
        items['active'] = active

        yield items
