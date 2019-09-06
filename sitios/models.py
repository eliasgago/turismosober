from django.contrib.gis.db import models

class Mirador(models.Model):
    nombre = models.CharField(max_length=30)
    descripcion = models.CharField(max_length=30)
    latitud = models.DecimalField(max_digits=20, decimal_places=12)
    longitud = models.DecimalField(max_digits=20, decimal_places=12)
    # imagen_cabecera = models.ImageField(null=True, blank=True, upload_to="hero_headshots/")

    def __str__(self):
        ret = self.nombre
        return ret


class Carretera(models.Model):
    descripcion = models.CharField(max_length=100)
    geom = models.LineStringField()

    def __str__(self):
        ret = self.nombre
        return ret