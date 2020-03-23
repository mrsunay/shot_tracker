from django.db import models

class Shots(models.Model):
    threes_made = models.IntegerField()
    threes_attempted = models.IntegerField()
    twos_made = models.IntegerField()
    twos_attempted = models.IntegerField()
    layups_made = models.IntegerField()
    layups_attempted = models.IntegerField()
    workout_date = models.DateTimeField(auto_now_add=True)

