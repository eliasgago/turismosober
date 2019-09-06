from django.contrib.auth.models import User, Group
from sitios.models import Mirador
from rest_framework import viewsets
from sitios.serializers import UserSerializer, GroupSerializer, MiradorSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class MiradorViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows miradores to be viewed or edited.
    """
    queryset = Mirador.objects.all()
    serializer_class = MiradorSerializer