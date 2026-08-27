# TallerDespliegue

Página web básica creada como parte del Taller de Despliegue. Es un sitio estático hecho con HTML, CSS y JavaScript, sin dependencias ni proceso de compilación.

## Estructura

```
TallerDespliegue/
├── index.html      # Estructura de la página
├── css/
│   └── styles.css  # Estilos y diseño responsive
├── js/
│   └── script.js   # Interacción (saludo y formulario)
└── README.md
```

## Contenido

- **Inicio:** presentación del taller con un botón que muestra un saludo según la hora.
- **Pasos:** tres tarjetas con las etapas del despliegue (desarrollar, versionar, publicar).
- **Contacto:** formulario con validación del navegador y confirmación en pantalla.

## Ejecutar en local

Basta con abrir `index.html` en el navegador. También se puede levantar un servidor local:

```bash
python -m http.server 8000
```

Y visitar `http://localhost:8000`.

## Publicar con GitHub Pages

1. En el repositorio, entra a **Settings > Pages**.
2. En *Source* elige **Deploy from a branch**.
3. Selecciona la rama `main` y la carpeta `/ (root)`, luego guarda.
4. En unos minutos el sitio queda disponible en `https://<usuario>.github.io/TallerDespliegue/`.
