from api.models import Shots
from rest_framework import viewsets, permissions
from .serializers import ShotsSerializer

class ShotsViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = ShotsSerializer

    def get_queryset(self):
        return self.request.user.shots.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)



    

