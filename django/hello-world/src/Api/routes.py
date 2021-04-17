from django.shortcuts import render
import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from rest_framework.views import APIView
from Api.controller import index, dislike, like, store

class Index(APIView):
    def get(self, request):
        return JsonResponse({
            "Api": "timdev"
        })

class Users(APIView):
    def get(self, request, contact_id=None):
        users = index(request.headers.user)
        return JsonResponse(users)
    def post(self, request):
        dev = store(request.body)
        return JsonResponse(dev)

class Likes(APIView):
    def post(self, request):
        loggedDev = like(request.headers.user, request.params.devId, request.connectedUsers, request.io)
        return JsonResponse(loggedDev)

class Dislikes(APIView):
    def post(self, request):
        loggedDev = dislike(request.params.devId, request.headers.user)
        return JsonResponse(loggedDev)