from api.models import Shots
from rest_framework import viewsets, permissions
from .serializers import ShotsSerializer

class ShotsViewSet(viewsets.ModelViewSet):
    queryset = Shots.objects.all()
    serializer_class = ShotsSerializer