# Generated by Django 4.2.4 on 2024-02-25 15:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_user_user_location'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='user_location',
            new_name='user_vehicle_location',
        ),
    ]
