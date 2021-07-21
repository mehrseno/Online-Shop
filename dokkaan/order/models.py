from django.db import models
from django.contrib.auth.models import User

from app.models import Product
import random

def create_new_ref_number():
    return str(random.randint(1000000000, 9999999999))

class Order(models.Model):
    user = models.ForeignKey(User, related_name='orders', on_delete=models.CASCADE) # TODO change the cascade 
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    address = models.CharField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    paid_amount = models.IntegerField()
    # code = models.CharField(max_length=10, blank=True, editable=False, unique=True, default=create_new_ref_number)

    class Meta:
        ordering = ['created_at', ]

    def __str__(self) -> str:
        return f'{self.first_name} : {self.code}' 

class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, related_name='items',  on_delete=models.CASCADE)
    price = models.IntegerField()
    quantity = models.IntegerField(default=1)

    def __str__(self) -> str:
        return '$s' %self.id