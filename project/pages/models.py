from django.db import models
level_list =[
        ('first', 'first'),
        ('second', 'second'),
        ('third', 'third'),
        ('fourth', 'fourth'),
    ]

department_list =[
        ('CS', 'CS'),
        ('IT', 'IT'),
        ('IS', 'IS'),
        ('AI', 'AI'),
        ('DS', 'DS'),
    ]

gender_list =[
        ('male', 'male'),
        ('female', 'female'),
    ]

active_list =[
        ('active', 'active'),
        ('inactive', 'inactive'),
    ]


class StudentInfom(models.Model):
    firstName = models.CharField(max_length=50,null=True)
    lastName = models.CharField(max_length=50,null=True)
    studentId = models.IntegerField(null=True)
    phoneNumber = models.IntegerField(null=True)
    gender = models.CharField(max_length=200, null=True, blank=True, choices=gender_list)
    date = models.DateField(null=True)
    time = models.TimeField(null=True)
    emailStudent = models.EmailField(null=True)
    GPA = models.IntegerField(null=True)
    level = models.CharField(max_length=200, null=True, blank=True, choices=level_list)
    active = models.CharField(max_length=200, null=True, blank=True, choices=active_list)
    class Meta:
        verbose_name = 'ourstudent'



class Userlogin(models.Model):
    email = models.EmailField(null=True)
    passWord = models.IntegerField(null=True)




class Departement(models.Model):
    name = models.CharField(max_length=50)
    studid = models.IntegerField()
    department_list = models.CharField(max_length=200, null=True, blank=True, choices=level_list)
    def __str__(self):
        return self.name
