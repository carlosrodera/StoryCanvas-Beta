# 🎨 StoryCanvas BETA - Plataforma de Cómics Educativos con IA

![Estado](https://img.shields.io/badge/Estado-Beta-yellow)
![Licencia](https://img.shields.io/badge/Licencia-MIT-blue)
![Versión](https://img.shields.io/badge/Versión-0.1.0-green)

## 📑 Descripción

**StoryCanvas** es una plataforma web que permite convertir contenido educativo complejo en cómics visuales atractivos utilizando inteligencia artificial. Este proyecto está en fase BETA y ha sido creado como recurso educativo para la comunidad de YouTube de Carlos Rodera.

La plataforma permite a educadores, formadores y creadores de contenido transformar conceptos complejos en narrativas visuales accesibles y atractivas, mejorando así la retención y comprensión del conocimiento.

![StoryCanvas Preview](docs/images/preview.png)

### 🚀 Características principales

- **Landing page** atractiva que explica los beneficios del servicio
- **Portal de usuario** con dashboard interactivo
- **Sistema de pedidos** para solicitar nuevos cómics educativos
- **Biblioteca de cómics** para acceder a los contenidos generados
- **Gestión de cuenta** y facturación
- **Formulario de briefing** paso a paso para nuevos proyectos

## 🛠️ Tecnologías utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Estilos**: Tailwind CSS
- **Servidor de desarrollo**: Python SimpleHTTPServer

## 📋 Requisitos previos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Python 3.x (para el servidor de desarrollo local)
- Editor de código (VS Code, Sublime Text, etc.)
- Conocimientos básicos de HTML, CSS y JavaScript
- [Opcional] Node.js y npm (para compilar Tailwind)

## 🚀 Instalación y configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/CarlosRodera/StoryCanvas-Beta.git
cd StoryCanvas-Beta
```

### 2. Iniciar el servidor de desarrollo

**Opción 1: Usando Python (recomendado para principiantes)**
```bash
python -m http.server 8000
# o para Python 2
# python -m SimpleHTTPServer 8000
```

**Opción 2: Usando Node.js**
```bash
# Primero instalar http-server si no lo tienes
npm install -g http-server
# Luego ejecutar
http-server -p 8000
```

### 3. Acceder a la aplicación

Abre tu navegador y visita:
- **Landing page**: http://localhost:8000/frontend/index.html
- **Portal de usuario**: http://localhost:8000/portal/login.html
  - Usuario: test@test.com
  - Contraseña: password123

## 📁 Estructura del proyecto

```
StoryCanvas/
├── docs/                     # Documentación
│   └── images/               # Imágenes para documentación
├── frontend/                 # Landing page
│   ├── assets/               # Recursos estáticos
│   │   └── icons/            # Iconos y favicon
│   ├── css/                  # Archivos CSS
│   │   ├── main.css          # CSS principal (sin compilar)
│   │   └── output.css        # CSS compilado
│   ├── index.html            # Página principal
│   └── tailwind.config.js    # Configuración de Tailwind
└── portal/                   # Portal de usuario
    ├── dashboard.html        # Panel principal
    ├── login.html            # Página de inicio de sesión
    ├── comics.html           # Visualización de cómics
    ├── pedidos.html          # Gestión de pedidos
    ├── cuenta.html           # Configuración de cuenta
    └── nuevo-briefing.html   # Formulario de nuevos proyectos
```

## ⚙️ Configuración de Tailwind CSS (opcional)

Si deseas personalizar los estilos con Tailwind:

1. **Instalar dependencias**
```bash
npm init -y
npm install tailwindcss
```

2. **Crear configuración de Tailwind**
```bash
npx tailwindcss init
```

3. **Compilar CSS**
```bash
npx tailwindcss -i ./frontend/css/main.css -o ./frontend/css/output.css --watch
```

## 🧠 Integración con IA

El proyecto está diseñado para ser ampliado con capacidades de IA. Algunas ideas para implementar:

1. **Generación automática de guiones** a partir del contenido educativo subido por el usuario
2. **Creación de personajes con IA generativa** (usando API de Stable Diffusion, DALL-E, etc.)
3. **Maquetación automática de cómics** usando modelos de composición visual
4. **Recomendación inteligente de estilos** basados en la temática y audiencia objetivo
5. **Análisis de sentimiento** del contenido para adaptar el tono del cómic

### APIs recomendadas para integración:
- OpenAI API (GPT-4, DALL-E)
- Stability AI (Stable Diffusion)
- Hugging Face Transformers
- Google Cloud Vision AI
- Microsoft Azure Cognitive Services

## 📝 Guía para contribuir con IA

Este proyecto fue iniciado usando Inteligencia Artificial y está diseñado para que puedas aprender y experimentar con la IA en el desarrollo web:

1. **Puedes utilizar Claude, ChatGPT o Gemini** para:
   - Mejorar el diseño y la experiencia de usuario
   - Implementar nuevas funcionalidades
   - Depurar problemas en el código
   - Crear una API de backend
   - Integrar servicios de terceros

2. **Prompts recomendados para desarrollar el proyecto**:
   - "Ayúdame a crear un backend en Node.js/Express para gestionar los usuarios de StoryCanvas"
   - "¿Cómo puedo integrar la API de OpenAI para generar automáticamente ideas de cómics?"
   - "Escribe una función que procese imágenes subidas por el usuario para su uso en los cómics"
   - "Diseña un sistema de recomendaciones basado en los intereses del usuario"

## 🧪 Próximos pasos

- [ ] Implementar backend real (Node.js, Django, etc.)
- [ ] Añadir base de datos (MongoDB, PostgreSQL)
- [ ] Integrar autenticación de usuarios (Auth0, Firebase)
- [ ] Desarrollar API para comunicación con servicios de IA
- [ ] Implementar pasarela de pagos (Stripe, PayPal)
- [ ] Añadir sistema de notificaciones
- [ ] Mejorar la gestión de archivos (almacenamiento en la nube)
- [ ] Crear paneles de administración

## 👥 Cómo contribuir

¡Las contribuciones son bienvenidas! Si deseas mejorar StoryCanvas:

1. Haz un Fork del repositorio
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`)
3. Realiza tus cambios
4. Haz commit de tus cambios (`git commit -m 'Añade nueva característica'`)
5. Sube los cambios a tu fork (`git push origin feature/nueva-caracteristica`)
6. Abre un Pull Request

## 📜 Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Créditos y agradecimientos

- Creado por [Carlos Rodera](https://github.com/CarlosRodera) para su comunidad de YouTube
- Desarrollado con la ayuda de IA (Claude de Anthropic)
- Inspirado en la necesidad de hacer más accesible el contenido educativo

---

## 📱 Contacto

Para preguntas, sugerencias o colaboraciones:
- YouTube: [Canal de Carlos Rodera](https://youtube.com/c/CarlosRodera)
- GitHub: [@CarlosRodera](https://github.com/CarlosRodera)

---

**Nota**: Este proyecto es con fines educativos y está en fase beta. ¡Disfruta explorando y mejorando StoryCanvas!
