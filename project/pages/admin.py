from django.contrib import admin
from .models import StudentInfom
from .models import Userlogin
from .models import Departement

admin.site.register(StudentInfom)
admin.site.register(Userlogin)
admin.site.register(Departement)

# Register your models here.
