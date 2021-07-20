from django.db import models
from django.db.models.fields import CharField
from django.utils import timezone

# Create your models here.

class Category(models.Model):
    title = models.CharField(max_length=256, primary_key=True)

    def __str__(self) -> str:
        return self.title

def get_defult_category():
    return Category.objects.get_or_create(title="undefined")[0]


class Product(models.Model):
    name = models.CharField(max_length=250)
    caregory = models.ForeignKey(Category, on_delete=models.SET(get_defult_category), default=get_defult_category().title)
    ##  TODO: add category model
    price = models.IntegerField()
    amount = models.IntegerField()
    sold_count = models.IntegerField()
    created_date = models.DateTimeField(default = timezone.now)
    image = models.ImageField(upload_to="pictures/%Y/%m/%d/", default="bag.jpg", null=True, blank =True)

    def __str__(self) -> str:
        return self.name
