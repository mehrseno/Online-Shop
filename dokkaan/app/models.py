from os import name
from django.db import models
from django.db.models.fields import CharField
from PIL import Image
from django.core.files import File
from io import BytesIO

class Category(models.Model):
    title = models.CharField(max_length=256)
    slug = models.SlugField()

    class Meta:
        ordering = ('title', )
    
    def get_absolute_url(self):
        return f'/{self.slug}/'

    def __str__(self) -> str:
        return self.title

def get_defult_category():
    return Category.objects.get_or_create(title="undefined", slug="undefined")[0]

def get_default_category_id():
    return get_defult_category().id

class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.SET(get_defult_category),related_name="products",  default=get_default_category_id)
    name = models.CharField(max_length=250)
    slug = models.SlugField()
    price = models.IntegerField()
    amount = models.IntegerField()
    sold_count = models.IntegerField()
    created_date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to="pictures/%Y/%m/%d/", default="bag.jpg", null=True, blank =True)
    thumbnail = models.ImageField(upload_to="pictures/%Y/%m/%d/", blank=True, null=True)


    def __str__(self) -> str:
        return self.name

    class Meta:
        ordering = ('created_date',)

    def get_image(self):
        return 'http://127.0.0.1:8000' + self.image.url

    def get_thumbnail(self):
        if not self.thumbnail:
            self.thumbnail = self.make_thumbnail(self.image)
        return 'http://127.0.0.1:8000' + self.thumbnail.url


    def make_thumbnail(self, image, size=(300, 200)):
        img = Image.open(image)
        img = img.convert('RGB')
        img.thumbnail(size)
        thumb_io = BytesIO()
        img.save(thumb_io, 'JPEG', quality=85)
        thumbnail = File(thumb_io, name=image.name)
        return thumbnail


    def get_absolute_url(self):
        return f'/{self.category.slug}/{self.slug}/'
    
    def get_category(self):
        return self.category.title


