# Generated by Django 4.0.4 on 2022-05-21 15:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0002_alter_userlogin_email_alter_userlogin_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentinfom',
            name='GPA',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='studentinfom',
            name='date',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='studentinfom',
            name='emailStudent',
            field=models.EmailField(max_length=254, null=True),
        ),
        migrations.AlterField(
            model_name='studentinfom',
            name='firstName',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='studentinfom',
            name='lastName',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='studentinfom',
            name='phoneNumber',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='studentinfom',
            name='studentId',
            field=models.IntegerField(null=True),
        ),
    ]
