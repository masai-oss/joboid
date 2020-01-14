import os
from environs import Env, EnvError

# uncomment the line below for postgres database url from environment variable
# postgres_local_base = os.environ['DATABASE_URL']

env = Env()
env.read_env()

# Logging Setup
LOG_TYPE = env.str("LOG_TYPE", "watched")  # Default is a Stream handler
LOG_LEVEL = env.str("LOG_LEVEL", "INFO")

# File Logging Setup
LOG_DIR = env.str("LOG_DIR", "/tmp")
APP_LOG_NAME = env.str("APP_LOG_NAME", "app.log")
WWW_LOG_NAME = env.str("WWW_LOG_NAME", "www.log")
LOG_MAX_BYTES = env.int("LOG_MAX_BYTES", 100000000)  # 100MB in bytes
LOG_COPIES = env.int("LOG_COPIES", 5)

basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'my_precious_secret_key')
    DEBUG = False


class DevelopmentConfig(Config):
    # uncomment the line below to use postgres
    # SQLALCHEMY_DATABASE_URI = postgres_local_base

    # mysql://root:@localhost:3306/practise
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://admin:EoVjzFtR9IOre5mY7Hgg@joboid.cl883jc32nuo.us-east-1.rds.amazonaws.com:3306/joboid'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    LOG_TYPE=LOG_TYPE
    LOG_LEVEL=LOG_LEVEL
    LOG_DIR=LOG_DIR
    APP_LOG_NAME=APP_LOG_NAME
    LOG_MAX_BYTES=LOG_MAX_BYTES
    LOG_COPIES=LOG_COPIES
    WWW_LOG_NAME=WWW_LOG_NAME


class TestingConfig(Config):
    DEBUG = True
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'mysql://root:Anuj@1996@localhost:3306/masai_oss'
    PRESERVE_CONTEXT_ON_EXCEPTION = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    LOG_TYPE=LOG_TYPE
    LOG_LEVEL=LOG_LEVEL


class ProductionConfig(Config):
    DEBUG = False
    LOG_TYPE=LOG_TYPE
    LOG_LEVEL=LOG_LEVEL
    # uncomment the line below to use postgres
    # SQLALCHEMY_DATABASE_URI = postgres_local_base


config_by_name = dict(
    dev=DevelopmentConfig,
    test=TestingConfig,
    prod=ProductionConfig
)

key = Config.SECRET_KEY