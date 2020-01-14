# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html
import boto3
import MySQLdb
import sys
import hashlib

QUEUE_NAMES = dict(recruiterbox='RECRUITER_BOX_SUB_DOMAINS', lever='LEVER_SUB_DOMAINS', cutshort='CUTSHORT_SUB_DOMAINS')

class JobCollectionPipeline(object):
    def __init__(self):
        self.conn = MySQLdb.connect('joboid.cl883jc32nuo.us-east-1.rds.amazonaws.com','admin','EoVjzFtR9IOre5mY7Hgg','joboid', charset="utf8",use_unicode=True)
        # mysql+pymysql://admin:EoVjzFtR9IOre5mY7Hgg@joboid.cl883jc32nuo.us-east-1.rds.amazonaws.com:3306/joboid
        self.cursor = self.conn.cursor()

    def process_item(self, item, spider):
        try:
            self.cursor.execute("""insert into jobs (job_title, company_name, description, payscale, location, job_type, company_type, date_posted, parent_source, active) values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)""",(
                item['job_title'][0].encode('utf8'),
                item['company_name'][0].encode('utf8'),
                item['description'][0].encode('utf8'),
                item['payscale'][0].encode('utf8'),
                item['location'][0].encode('utf8'),
                item['job_type'][0].encode('utf8'),
                item['comapny_type'][0].encode('utf8'),
                item['date_posted'][0].encode('utf8'),
                item['parent_source'][0].encode('utf8'),
                item['active'][0].encode('utf8')
                )
            )
            self.conn.commit()
        except:
            return item

class GoogleCollectionPIpeline(object):
    def process_item(self, item, spider):
        sqs = boto3.resource('sqs')
        queue = sqs.get_queue_by_name(QueueName=QUEUE_NAMES.get(item.get('domain')))
        queue.send_message(MessageBody=json.dumps({'url': item['url']}))
        print('Pipeline:' + item['url'])