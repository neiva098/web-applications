import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SECRET_KEY = 'q10qik@a4@i+8dn)--(o4^%96t&r=*=)m5gqh02f*zzsjkrhk!'

DEBUG = True

INSTALLED_APPS = [
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'Api.apps.Api'
]

ROOT_URLCONF = 'main.urls'


