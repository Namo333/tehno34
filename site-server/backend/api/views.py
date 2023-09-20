from django.http import JsonResponse, Http404
from django.views.generic import View
from .models import UserProfile

class DataAPIView(View):
    def get(self, request, *args, **kwargs):
        try:
            user_profile = UserProfile.objects.first()
            data = {
                'name': user_profile.name,
                'age': user_profile.age,
                'city': user_profile.city
            }
        except UserProfile.DoesNotExist:
            raise Http404("UserProfile not found")

        return JsonResponse(data)