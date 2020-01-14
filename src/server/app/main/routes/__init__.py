from app.main.routes.auth_controller import UserLogin, LogoutAPI, UserSignUp, FacebookAuthorize, GithubAuthorize,JobDetails,FilterCompany,FilterTitle
from app.main import api

def add_resources(app):
    """
    Method to add resources to app context
    
    Args:
        app (object): object of Flask representing the app in context
    """
    api.add_resource(UserLogin, '/login')
    api.add_resource(LogoutAPI, '/logout')
    api.add_resource(UserSignUp, '/signup')
    api.add_resource(FacebookAuthorize, '/facebook')
    api.add_resource(GithubAuthorize, '/github')
    api.add_resource(JobDetails, '/jobdetails')
    api.add_resource(FilterCompany, '/filtercompany')
    api.add_resource(FilterTitle, '/filtertitle')

def register_blueprints(app):
    """
    Method to add blueprints to app context
    
    Args:
        app (object): object of Flask representing the app in context
    """
    pass