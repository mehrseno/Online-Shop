# Generated by Django 3.2.5 on 2021-07-20 23:19

import app.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_auto_20210720_2321'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.ForeignKey(default=app.models.get_default_category_id, on_delete=models.SET(app.models.get_defult_category), related_name='products', to='app.category'),
        ),
    ]