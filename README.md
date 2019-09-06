# turismosober

## Instalación del proyecto
Descargarse el proyecto.
```
git clone https://github.com/eliasgago/turismosober.git
```
Crear un virutalevn de Python (necesario tener Python y virtualenv instalado en el equipo)
```bash
mkvirtualenv -a $PWD turismosober
pip install -r requirements.txt
npm install
```

### Lanzar el servidor (backend)
Dentro del virtualenv creado
```
python manager.py runserver
```

### Lanzar el servidor (frontend)
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
