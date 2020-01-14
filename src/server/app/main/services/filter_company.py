from app.main import db
from app.main.models.job_details import JobDetails
from flask import jsonify
import json
def filter_company(company_type):
    """method to get all the batch list to the model Batch
    Args:
        data (dict): data which will be fetched from the batch table
                    using Batch model
    Returns:
        dict, int: response object containing appropriate response based on the response from save changes,
                    http response code specifying the success of getting data from table
    """
    filter_company = db.session.query(JobDetails).all()
    db.session.commit()
    items = list()
    for i in all_job:
        items.append({"job_id": i.job_id, " job_title ": i. job_title ," description ":i.description, "payscale" : i.payscale, "location" : i.location, "job_type" : i.job_type, " company_type" : i.company_type, " date_posted " : i.date_posted, "parent_source " : i.parent_source , " active " : i.active})
    response_object = jsonify({"data": items})
    return response_object, 200 