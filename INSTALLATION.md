# Guía de Instalación y Configuración para StoryCanvas

Esta guía proporciona instrucciones detalladas para configurar y personalizar StoryCanvas en diferentes entornos.

## Instalación Básica

### Requisitos previos
- Navegador web moderno
- Python 3.x o Node.js instalado
- Editor de código (VS Code recomendado)

### Pasos para ejecutar localmente

1. **Clonar el repositorio**
```bash
git clone https://github.com/CarlosRodera/StoryCanvas-Beta.git
cd StoryCanvas-Beta
```

2. **Iniciar un servidor local**

Con Python:
```bash
python -m http.server 8000
```

Con Node.js:
```bash
npx http-server -p 8000
```

3. **Acceder a la aplicación**
- Frontend: http://localhost:8000/frontend/index.html
- Portal: http://localhost:8000/portal/login.html (usar test@test.com / password123)

## Configuración de Desarrollo

### Configuración de Tailwind CSS

1. **Instalar Node.js y npm** (si no lo tienes):
   - Descargar e instalar desde [nodejs.org](https://nodejs.org/)

2. **Inicializar proyecto npm**:
```bash
npm init -y
```

3. **Instalar Tailwind CSS**:
```bash
npm install -D tailwindcss
```

4. **Crear archivo de configuración**:
```bash
npx tailwindcss init
```

5. **Configurar compilación**:
   - Asegúrate de que tu `tailwind.config.js` contenga algo similar a:
   ```javascript
   module.exports = {
     content: ["./**/*.{html,js}"],
     theme: {
       extend: {
         colors: {
           primary: "#FF5A5F",     // Rojo vibrante
           secondary: "#3D5A80",   // Azul educativo
           accent: "#FFB400",      // Amarillo énfasis
           dark: "#2A2A2A",        // Casi negro texto
           light: "#F9F9F9",       // Blanco roto fondo
           panel1: "#E0FBFC",     // Azul muy claro
           panel2: "#FFF1D0",     // Amarillo muy claro
           panel3: "#FFE5E5",     // Rosa muy claro
         },
         fontFamily: {
           heading: ["Bangers", "cursive"],
           body: ["Nunito", "sans-serif"],
           mono: ["Roboto Mono", "monospace"],
         },
       },
     },
     plugins: [],
   }
   ```

6. **Compilar CSS** (en modo desarrollo con watch):
```bash
npx tailwindcss -i ./frontend/css/main.css -o ./frontend/css/output.css --watch
```

7. **Para compilar para producción**:
```bash
npx tailwindcss -i ./frontend/css/main.css -o ./frontend/css/output.css --minify
```

## Integración de Backend

### Opción 1: Backend con Node.js/Express

1. **Crear estructura de carpetas**:
```bash
mkdir -p backend/src/{controllers,models,routes,middleware,config}
touch backend/src/app.js backend/src/server.js
```

2. **Instalar dependencias**:
```bash
cd backend
npm init -y
npm install express mongoose bcrypt jsonwebtoken cors dotenv
npm install --save-dev nodemon
```

3. **Configurar .env**:
```
# backend/.env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/storycanvas
JWT_SECRET=tu_secreto_super_seguro
```

4. **Configurar package.json**:
```json
{
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js"
  }
}
```

5. **Iniciar backend**:
```bash
npm run dev
```

### Opción 2: Backend con Python/Django

1. **Crear entorno virtual**:
```bash
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
```

2. **Instalar Django y dependencias**:
```bash
pip install django djangorestframework django-cors-headers python-dotenv
```

3. **Crear proyecto Django**:
```bash
django-admin startproject backend
cd backend
python manage.py startapp api
```

4. **Ejecutar el servidor**:
```bash
python manage.py runserver
```

## Configuración para despliegue

### Despliegue en GitHub Pages (solo frontend)

1. **Crea una rama gh-pages**:
```bash
git checkout -b gh-pages
```

2. **Configurar URLs relativas**:
   - Asegúrate de que todas las URLs en el código HTML usen rutas relativas
   - Actualiza los enlaces entre páginas para que funcionen en GitHub Pages

3. **Hacer push a GitHub**:
```bash
git push origin gh-pages
```

### Despliegue en Vercel o Netlify

1. **Crear archivo netlify.toml** (para Netlify):
```toml
[build]
  publish = "."
  command = "echo 'No build command'"

[[redirects]]
  from = "/*"
  to = "/frontend/index.html"
  status = 200
```

2. **Configurar _redirects** (alternativa para Netlify):
```
/* /frontend/index.html 200
```

## Personalización

### Cambiar colores y fuentes

1. Modifica `tailwind.config.js` para cambiar los colores principales y fuentes
2. Actualiza las importaciones de fuentes en los archivos HTML
3. Recompila el CSS con Tailwind

### Añadir nuevas páginas

1. Crea un nuevo archivo HTML en el directorio correspondiente
2. Copia la estructura básica de páginas similares
3. Actualiza la navegación en todas las páginas relacionadas
4. Añade JavaScript necesario para la funcionalidad

## Solución de problemas comunes

### Problemas de CSS
- **CSS no se aplica**: Verifica que la ruta a `output.css` sea correcta
- **Cambios no aparecen**: Asegúrate de recompilar Tailwind después de los cambios
- **Estilos inconsistentes**: Comprueba que todas las páginas usen la misma versión de CSS

### Problemas de JavaScript
- **Funcionalidad no funciona**: Abre la consola del navegador para ver errores
- **Navegación rota**: Verifica las rutas relativas entre páginas

### Problemas de servidor
- **No arranca el servidor**: Verifica que el puerto no esté en uso
- **No encuentra archivos**: Asegúrate de iniciar el servidor desde la raíz del proyecto

## Recursos adicionales

- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Guía de JavaScript MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide)
- [Tutorial de Express.js](https://expressjs.com/es/starter/installing.html)
- [Tutorial de Django REST Framework](https://www.django-rest-framework.org/tutorial/quickstart/)
