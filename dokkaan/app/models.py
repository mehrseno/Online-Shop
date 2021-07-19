from django.db import models
from django.utils import timezone

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=250)
    ##  TODO: add category model
    price = models.IntegerField()
    amount = models.IntegerField()
    sold_count = models.IntegerField()
    created_date = models.DateTimeField(default = timezone.now)
    image = models.ImageField(upload_to="pictures/%Y/%m/%d/", default="bag.jpg", null=True, blank =True)
    ## TODO: add image to the model

    def __str__(self) -> str:
        return self.name


