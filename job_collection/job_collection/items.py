# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class JobCollectionItem(scrapy.Item):
    job_title = scrapy.Field()
    company_name = scrapy.Field()
    description = scrapy.Field()
    payscale = scrapy.Field()
    location = scrapy.Field()
    job_type = scrapy.Field()
    company_type = scrapy.Field()
    date_posted = scrapy.Field()
    parent_source = scrapy.Field()
    active = scrapy.Field()

class GoogleCollection(scrapy.Item):
    url = scrapy.Field()
    domain = scrapy.Field()