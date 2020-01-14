""" Model for jobs """
from app.main import flask_bcrypt, db
import datetime
import jwt
from app.main.settings import key
class JobDetails(db.Model):
    """
    [summary]
    Args:
        UserMixin ([type]): [description]
        db ([type]): [description]
    """
    __tablename__ = "jobs"
    job_id = db.Column(db.Integer, primary_key=True,autoincrement=True)
    job_title = db.Column(db.String(250), nullable = True)
    description = db.Column(db.String(250), nullable = True)
    payscale = db.Column(db.String(250), nullable = True)
    location = db.Column(db.String(250), nullable = True)
    job_type= db.Column(db.String(250), nullable = True)
    company_type = db.Column(db.String(250), nullable = True)
    date_posted = db.Column(db.String(250), nullable = True)
    parent_source = db.Column(db.String(250), nullable = True)
    active = db.Column(db.Boolean(), nullable = True)