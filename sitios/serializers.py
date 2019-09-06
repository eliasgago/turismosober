from django.contrib.auth.models import User, Group
from sitios.models import Mirador
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class MiradorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Mirador
        fields = ['nombre', 'descripcion', 'latitud', 'longitud']