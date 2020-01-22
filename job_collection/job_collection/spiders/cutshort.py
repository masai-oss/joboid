import scrapy
import boto3
import json
from bs4 import BeautifulSoup
import html.parser
from ..items import JobCollectionItem
from urllib.parse import urlparse
from scrapy.utils.response import open_in_browser

class CrawlCutShort(scrapy.Spider):

    name = 'cutshort'
    start_urls = [
        'https://cutshort.io/sitemap'
    ]

    page_number = 1
    inner_pages = 0
    page_count = 0


# CRAWLING

    def parse(self,response): 
        innerUrls = response.css('a::attr(href)').extract()
        for i in innerUrls:
            url = i[0:6]
            if url == '/jobs/':
                inner_url = "https://cutshort.io/"+i
                yield response.follow(inner_url, callback = self.parselvl2)

# PARSING JOBS

def parselvl2(self,response):
        items = JobCollectionItem()
        job_title=response.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "text_ellipsis", " " )) and contains(concat( " ", @class, " " ), concat( " ", "inline_top", " " ))]/text()').extract_first()
        company_name = response.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "text_ellipsis", " " ))]//*[contains(concat( " ", @class, " " ), concat( " ", "everyOtherLink", " " ))]/text()').extract_first()
        payscale  = payscale= response.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "mr20", " " ))]//span/text()').extract_first()
        location = response.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "mr20", " " )) and (((count(preceding-sibling::*) + 1) = 1) and parent::*)]//*[contains(concat( " ", @class, " " ), concat( " ", "inline_middle", " " ))]/text()').extract_first()
        job_type = "Full time"
        date_posted = "Yesterday"
        company_type = response.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "t", " " ))]//*[contains(concat( " ", @class, " " ), concat( " ", "t", " " ))]//*[contains(concat( " ", @class, " " ), concat( " ", "inline_middle", " " )) and (((count(preceding-sibling::*) + 1) = 3) and parent::*)]//span/text()').extract_first()
        parent_source = response.xpath('//*[contains(concat( " ", @class, " " ), concat( " ", "everyOtherBlueButton", " " ))]/@href').extract_first()
        active = True

        if job_type is None:
            job_type = 'Full-time'
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