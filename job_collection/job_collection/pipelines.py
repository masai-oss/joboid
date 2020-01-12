# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html
import boto3

QUEUE_NAMES = dict(recruiterbox='RECRUITER_BOX_SUB_DOMAINS', lever='LEVER_SUB_DOMAINS', cutshort='CUTSHORT_SUB_DOMAINS')

class JobCollectionPipeline(object):
    def process_item(self, item, spider):
        return item

class GoogleCollectionPIpeline(object):
    def process_item(self, item, spider):
        sqs = boto3.resource('sqs')
        queue = sqs.get_queue_by_name(QueueName=QUEUE_NAMES.get(item.get('domain')))
        queue.send_message(MessageBody=json.dumps({'url': item['url']}))
        print('Pipeline:' + item['url'])
