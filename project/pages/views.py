from django.shortcuts import render
from .models import StudentInfom
from .models import * 
import email
from django.shortcuts import render
from django.http import JsonResponse
# from .models import Contact
# Create your views here.


def update2(request):
    ID= request.POST.get('ID')
    Namef = request.POST.get('Namef')
    Namel= request.POST.get('Namel')
    MobilePhone = request.POST.get('MobilePhone')
    Gender= request.POST.get('Gender')
    Email = request.POST.get('Email')
    GPA= request.POST.get('GPA')
    level = request.POST.get('level')
    date1= request.POST.get('date1')
    time1= request.POST.get('time1')
    Status= request.POST.get('Status')
    


    data = StudentInfom(firstName=Namef,lastName=Namel,studentId=ID,phoneNumber=MobilePhone,
    gender=Gender,date=date1,time=time1,emailStudent=Email,GPA=GPA,level=level,active=Status)
    data.save()
    return render(request, 'pages/update2.html')

def pageOneMyTutorial(request):
    return render(request, 'pages/pageOneMyTutorial.html')

def update1(request):
    return render(request, 'pages/Update1.html')

def view(request):
    context = {
        'student': StudentInfom.objects.all(),
        

    }
    return render(request, 'pages/view.html',context)

def search(request):
    if 'search' in request.GET:
        search = request.GET['search']
        student = StudentInfom.objects.filter(firstName__contains=search)
    else:
        student = 'Null'
    context = {
        'student': student
        

    }
    return render(request, 'pages/searchpage.html',context)

def homeHomePage(request):
    return render(request, 'pages/homeHomePage.html')

def login(request):
    return render(request, 'pages/login.html')

def department(request):
    return render(request, 'pages/Departement-Assignment-Page.html')

def delete(request,id):
    #if(confirm("Are you sure you want to delete?")):
        #alert("The student is deleted successfuly")
    StudentInfom.objects.get(id=id).delete()
    #else: alert("The student deletion failed: You cancelled. ")
    return render(request, 'pages/view.html',{'student': StudentInfom.objects.all()})


def getdata(request):
    std_data = StudentInfom.objects.all()
    return JsonResponse({"std_data":list(std_data.values())})

def Update(request,id):
    return render(request, 'pages/Update1.html',{'x': StudentInfom.objects.get(id=id)})

def Edit(request,id):
    
    student = StudentInfom.objects.get(id=id)
    student.firstName = request.POST["Namef"]
    student.lastName = request.POST["Namel"]
    student.studentId = request.POST["ID"]
    student.phoneNumber =request.POST["MobilePhone"]
    student.date = request.POST["date1"]
    student.time = request.POST["time1"]
    student.emailStudent=request.POST["Email"]
    student.GPA = request.POST["GPA"]
    student.level =request.POST["level"]
    student.active = request.POST["Status"]
    student.save()
    return render(request, 'pages/view.html',{'student': StudentInfom.objects.all()})
