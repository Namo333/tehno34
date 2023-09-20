from django.http import JsonResponse
from django.views.generic import View

class DataAPIView(View):
    def get(self, request, *args, **kwargs):
        data = {
            'name': 'John',
            'age': 30,
            'city': 'New York'
        }
        return JsonResponse(data)
