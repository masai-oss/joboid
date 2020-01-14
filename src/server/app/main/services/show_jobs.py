from app.main import db
from flask import jsonify, make_response
from app.main.models.job_details import JobDetails
from flask import jsonify
import json
def get_all_job():
    """method to get all the batch list to the model Batch
    Args:
        data (dict): data which will be fetched from the batch table
                    using Batch model
    Returns:
        dict, int: response object containing appropriate response based on the response from save changes,
                    http response code specifying the success of getting data from table
    """
    all_job = db.session.query(JobDetails).limit(10).all()
    db.session.commit()
    items = list()
    for i in all_job:
        items.append({"job_title": i.job_title ,"description":i.description, "payscale" : i.payscale, "location" : i.location, "job_type" : i.job_type, "company_type" : i.company_type, "date_posted" : i.date_posted, "parent_source" : i.parent_source , "active" : i.active})
    response_object = jsonify({"data": items})
    return (response_object)