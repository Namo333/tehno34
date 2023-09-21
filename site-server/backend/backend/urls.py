from django.contrib import admin
from django.urls import path

from api.views import ApplicationCreateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/application/', ApplicationCreateView.as_view(), name='application-create'),
    
]
