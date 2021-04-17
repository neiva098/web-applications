from django.urls import path
from Api.routes import Users, Likes, Dislikes, Index

urlpatterns = [
    path('users', Users.as_view()),
    path('likes', Likes.as_view()),
    path('dislikes', Dislikes.as_view()),
    path('', Index.as_view()),
]