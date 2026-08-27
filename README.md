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

## Publicar con Vercel

1. Entra a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
2. Pulsa **Add New... > Project** e importa el repositorio `TallerDespliegue`.
3. Como es un sitio estático, deja el *Framework Preset* en **Other** y no configures comandos de build ni carpeta de salida.
4. Pulsa **Deploy**. En unos segundos el sitio queda disponible en `https://<proyecto>.vercel.app`.

Cada `git push` a la rama `main` genera un nuevo despliegue automático.
