# Generated by Django 3.1.6 on 2021-03-25 10:11

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
            name='ProfileModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('avatar', models.URLField(blank=True, error_messages={'max_length': 'Please attach a link with less than 1000 characters.'}, max_length=1000, verbose_name='Profile picture link')),
                ('bio', models.TextField(blank=True, verbose_name='Boigraphy')),
                ('phone', models.CharField(blank=True, error_messages={'max_length': "Please make sure it's 10 numbers."}, max_length=10, verbose_name='Phone number')),
                ('date_created', models.DateTimeField(auto_now_add=True, verbose_name='Created')),
                ('account', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Username')),
            ],
        ),
    ]