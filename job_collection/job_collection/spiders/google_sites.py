import scrapy
from scrapy.selector import Selector
from urllib.parse import urlparse
from ..items import GoogleCollection

class CrawlGoogle(scrapy.Spider):

    name = 'google_sites'
    page_count = 0
    page_number = 0
    start_urls = [
        'https://www.google.com/search?&q=site:recruiterbox.com',
        'https://www.google.com/search?&q=site:lever.co'
    ]

    def parse(self, response):
        items = GoogleCollection()
        selection = Selector(response)        
        next_page = response.xpath('/html/body/div/footer/div[1]/div/div/a/@href').extract_first()
        next_button = selection.xpath('//span[contains(text(), ">")]')

        if next_button:
            ref_links = response.xpath('//a[contains(@href, "url?")]/@href').extract()
            for link in ref_links:
                if 'google' not in urlparse(urlparse(link).query[2:]).netloc:
                    items['url'] = urlparse(link).query[2:]
                    items['domain'] = urlparse(link).netloc.split('.')[1]
                    yield items


        if next_page is not None and CrawlGoogle.page_number < 32:
            CrawlGoogle.page_count += 10
            CrawlGoogle.page_number += 1
            go_next = 'https://www.google.com/search?q=site:recruiterbox.com&start='+str(CrawlGoogle.page_count)
            yield response.follow(go_next, callback = self.parse)
