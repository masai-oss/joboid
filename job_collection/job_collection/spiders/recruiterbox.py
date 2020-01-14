import scrapy
import boto3
import json

class CrawlRB(scrapy.Spider):

    name = 'recruiterbox'
    
    def start_requests(self):
        sqs = boto3.resource('sqs')
        queue = sqs.get_queue_by_name(QueueName='RECRUITER_BOX_SUB_DOMAINS')
        while True:
            # url = 
            yield self.make_requests_from_url(
                str(json.loads(queue.receive_messages()[0].body).get('url'))
            )
    
    def parse(self, reponse):
        print(reponse)