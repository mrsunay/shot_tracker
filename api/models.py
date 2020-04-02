from django.db import models
from django.contrib.auth.models import User


class Shots(models.Model):
    threes_made = models.IntegerField()
    threes_attempted = models.IntegerField()
    twos_made = models.IntegerField()
    twos_attempted = models.IntegerField()
    layups_made = models.IntegerField()
    layups_attempted = models.IntegerField()
    workout_date = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, related_name="shots",
                             on_delete=models.CASCADE, null=True)
