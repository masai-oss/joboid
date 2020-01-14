import scrapy
import boto3
import json
from bs4 import BeautifulSoup
import html.parser
from ..items import JobCollectionItem
from urllib.parse import urlparse
from scrapy.utils.response import open_in_browser

class CrawlRB(scrapy.Spider):

    name = 'lever'
    
    def start_requests(self):
        sqs = boto3.resource('sqs')
        queue = sqs.get_queue_by_name(QueueName='LEVER_SUB__DOMAINS')
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
        with open ('../HTML/lever/innerpage'+str(CrawlRB.inner_pages)+'.html', 'w', encoding='utf-8') as f:
            f.write(str(html.prettify()))

# PARSING JOBS

class crawlLever(scrapy.Spider):
    name = 'leverjob'
    start_urls = ['file:///tmp/joboid/job_collection/job_collection/HTML/lever/innerpage1.html']

    next_job = 1

    def parse(self, response):
        jobs = response.xpath('//a[contains(@href, "jobs")]/@href').getall()
        for i in jobs:
            yield response.follow(i, callback=self.parseJob)
        
        crawlLever.next_job += 1
        go_next = 'file:///tmp/joboid/job_collection/job_collection/HTML/lever/innerpage'+str(crawlLever.next_job)+'.html'
        yield response.follow(go_next, callback = self.parse)
    
    def parseJob(self, response):
        items = JobCollectionItem()
        job_title = response.xpath('//h2/text()').extract_first()
        company_name = response.xpath('/html/body/div[2]/div/div/a/img/@alt').extract()
        description = response.xpath('//div[(((count(preceding-sibling::*) + 1) = 7) and parent::*)]/text()').extract()
        payscale = 'Best In Industry'
        location=response.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "sort-by-time", " " ))]/text()').extract_first()
        job_type = response.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "sort-by-commitment", " " ))]/text()').extract_first()
        company_type = None
        date_posted = 'Yesterday'
        parent_source = response.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "black", " " ))]/@href').extract_first()
        active = 'True'
        if job_type is None:
            job_type = 'Full-time'
        if description is None:
            description = 'Our'+job_title+' will be the master of all things content execution and strategy. Your objective will be to generate content that is aligned with our positioning, thought leadership, Inbound and demand generation strategy. You will need to conduct user persona research, competitive research, keyword research, topic research, create a list of content topics and organize them in a content calendar, write some compelling content yourself, assign the right content topic(s) to the right freelancer/ agency, supervise and approve their work, make sure content is properly linked internally and externally, launch the content on our website / blog/ email list/ newsletter, track traffic and conversion overtime and assist with tweaking content to improve conversion. Own the impact content has on site traffic, demo request/ trial conversion and wins. The role will report to the VP-Product Marketing who reports to the CEO.'

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
