# Generated by Django 3.0.4 on 2020-04-02 04:59

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Shots',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('threes_made', models.IntegerField()),
                ('threes_attempted', models.IntegerField()),
                ('twos_made', models.IntegerField()),
                ('twos_attempted', models.IntegerField()),
                ('layups_made', models.IntegerField()),
                ('layups_attempted', models.IntegerField()),
                ('workout_date', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='shots', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
