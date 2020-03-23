from rest_framework import serializers
from api.models import Shots


class ShotsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shots
        fields = '__all__'
