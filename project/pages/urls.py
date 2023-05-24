from django.urls import URLPattern, path
from . import views

#www.site.com/../......
urlpatterns = [
    path('', views.homeHomePage, name='home'),
    path('AddStudent/', views.update2, name='index1'),
    path('pageOneMyTutorial', views.pageOneMyTutorial, name='pageOneMyTutorial'),
    path('search/Update/<int:id>', views.Update, name='update1'), #########
    path('view', views.view, name='view'),
    path('search', views.search, name='search'),
    path('login', views.login, name='login'),
    path('department', views.department, name='departement'),
    path('search/Delete/<int:id>',views.delete,name='delete'),
    path('search/Update/UpdateStudent/<int:id>', views.Edit, name='Edit'),
    path('getdata',views.getdata,name='getdata'),
]
