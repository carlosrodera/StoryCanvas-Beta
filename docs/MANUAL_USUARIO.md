# Manual de Usuario y Despliegue - StoryCanvas

## Índice
1. [Introducción](#introducción)
2. [Instalación Local](#instalación-local) (Para desarrollo y pruebas)
3. [Primeros pasos](#primeros-pasos)
4. [Área de Landing Page](#área-de-landing-page)
5. [Portal de Usuario](#portal-de-usuario)
   - [Dashboard](#dashboard)
   - [Mis Pedidos](#mis-pedidos)
   - [Mis Cómics](#mis-cómics)
   - [Mi Cuenta](#mi-cuenta)
   - [Crear Nuevo Briefing](#crear-nuevo-briefing)
6. [Despliegue en Producción](#despliegue-en-producción)
   - [Preparación de Servidor](#preparación-de-servidor)
   - [Configuración del Dominio](#configuración-del-dominio)
   - [Instalación en la Nube](#instalación-en-la-nube)
   - [Servicios de Bases de Datos](#servicios-de-bases-de-datos)
   - [Configuración de Seguridad](#configuración-de-seguridad)
7. [Integración de Sistemas de Pago](#integración-de-sistemas-de-pago)
8. [Gestión como Negocio](#gestión-como-negocio)
   - [Marketing Digital](#marketing-digital)
   - [Análisis y Métricas](#análisis-y-métricas)
   - [Escalabilidad](#escalabilidad)
   - [Aspectos Legales](#aspectos-legales)
9. [Mantenimiento y Actualizaciones](#mantenimiento-y-actualizaciones)
10. [Preguntas Frecuentes](#preguntas-frecuentes)
11. [Solución de Problemas](#solución-de-problemas)

---

## Introducción

StoryCanvas es una plataforma web diseñada para transformar contenido educativo complejo en cómics visuales atractivos. Este manual te guiará a través de la instalación, configuración y uso de todas las funcionalidades de la plataforma.

### ¿Para quién es este manual?

Este manual está orientado a todos los usuarios de StoryCanvas, sin necesidad de conocimientos técnicos avanzados.

---

## Instalación Local

Esta sección describe cómo instalar StoryCanvas localmente para desarrollo y pruebas:

1. **Requisitos previos**:
   - Navegador web actualizado (Chrome, Firefox, Safari o Edge recomendados)
   - Node.js (v16 o superior) y NPM instalados
   - Git (opcional, para clonar el repositorio)
   - Conexión a Internet

2. **Instalación local**:
   - Descarga los archivos del proyecto desde el repositorio o clónalo:
     ```
     git clone https://github.com/usuario/storycanvas.git
     ```
   - Navega al directorio del proyecto:
     ```
     cd storycanvas
     ```
   - Instala las dependencias:
     ```
     npm install
     ```

3. **Configuración del entorno**:
   - Crea un archivo `.env` basado en `.env.example`:
     ```
     cp .env.example .env
     ```
   - Ajusta las variables de entorno según tu configuración

4. **Iniciar el servidor local**:
   - Ejecuta el siguiente comando para iniciar el servidor:
     ```
     npm start
     ```
   - El servidor se iniciará en el puerto 8080

5. **Acceso a la plataforma**:
   - Abre tu navegador e ingresa la siguiente dirección:
     ```
     http://localhost:8080/frontend/index.html
     ```

> **Nota**: La instalación local es solo para desarrollo y pruebas. Para un entorno de producción, consulta la sección [Despliegue en Producción](#despliegue-en-producción).

---

## Primeros pasos

Antes de comenzar a utilizar StoryCanvas, es recomendable familiarizarse con las dos áreas principales de la plataforma:

1. **Landing Page** (`/frontend/`): Página informativa sobre los servicios de StoryCanvas.
2. **Portal** (`/portal/`): Área de usuario donde podrás gestionar tus pedidos, ver tus cómics y administrar tu cuenta.

---

## Área de Landing Page

La landing page de StoryCanvas contiene toda la información sobre nuestros servicios y está estructurada en las siguientes secciones:

### Navegación principal

El menú principal te permite acceder rápidamente a todas las secciones de la landing page:

- **Inicio**: Introducción a StoryCanvas
- **Solución**: El problema educativo y nuestra solución
- **Servicios**: Nuestros servicios principales
- **Proceso**: El proceso de trabajo
- **Precios**: Paquetes y precios disponibles
- **Ejemplos**: Galería de ejemplos de nuestro trabajo
- **Contacto**: Formulario para ponerte en contacto con nosotros

### Secciones de contenido

En la landing page encontrarás información detallada sobre:

- **El Reto Educativo vs. Nuestra Solución**: Explicación del problema y cómo StoryCanvas lo resuelve
- **Servicios**: Simplificación de contenido complejo, formación y marketing de contenidos
- **Proceso de Trabajo**: Los 5 pasos de nuestro proceso (Briefing, Guionización, Ilustración, Revisión y Entrega)
- **Paquetes y Precios**: Detalles de nuestros paquetes (Inicial, Profesional e Institucional)
- **Ejemplos**: Visualización de trabajos realizados por categorías
- **Testimonios**: Opiniones de clientes satisfechos
- **Formulario de Contacto**: Para iniciar tu proyecto o resolver dudas

---

## Portal de Usuario

El Portal de StoryCanvas es el área privada donde gestionarás todos tus proyectos y cuenta.

### Acceso al portal

Para acceder al portal:

1. Haz clic en "LOGIN" en la esquina superior derecha de la landing page
2. Introduce tus credenciales:
   - Usuario: tu dirección de email
   - Contraseña: tu contraseña

#### Datos de acceso para pruebas
- **Email**: test@test.com
- **Contraseña**: password123

### Dashboard

El dashboard es la página principal del portal y muestra un resumen de tu actividad en StoryCanvas:

- **Mis Pedidos**: Acceso rápido a tus pedidos en curso
- **Mis Cómics**: Acceso a tus cómics finalizados
- **Mi Cuenta**: Gestión de tu información personal
- **Nuevo Proyecto**: Botón para iniciar un nuevo briefing

### Mis Pedidos

En esta sección podrás:

- Ver todos tus pedidos activos e históricos
- Filtrar pedidos por estado, fecha o búsqueda
- Ver los detalles de cada pedido, incluyendo:
  - Información básica (referencia, fecha, título)
  - Estado actual (pendiente, en proceso, en revisión, completado)
  - Barra de progreso
  - Fecha de entrega estimada

### Mis Cómics

Esta sección muestra todos tus cómics finalizados. Desde aquí podrás:

- Buscar cómics por título
- Ordenar por fecha o alfabéticamente
- Ver la información de cada cómic (título, fecha, páginas, formato)
- Acceder a la vista previa del cómic
- Descargar el cómic en los formatos disponibles

### Mi Cuenta

En esta sección podrás gestionar tu información personal y configuración:

- **Información personal**: Nombre, apellidos, email, teléfono, empresa, dirección
- **Facturación**: Datos fiscales, método de pago y acceso a facturas
- **Seguridad**: Cambio de contraseña y gestión de sesiones
- **Preferencias**: Notificaciones, idioma y zona horaria

### Crear Nuevo Briefing

Esta es una de las funcionalidades principales. Para crear un nuevo proyecto de cómic:

1. Haz clic en "CREAR NUEVO BRIEFING" en el dashboard
2. Completa el formulario en 4 pasos:
   
   **Paso 1: Información básica**
   - Título del cómic
   - Categoría
   - Descripción del proyecto
   - Audiencia objetivo
   
   **Paso 2: Contenido**
   - Contenido principal que quieres transformar en cómic
   - Objetivos de aprendizaje
   - Archivos de referencia (opcional)
   
   **Paso 3: Estilo y formato**
   - Estilo visual
   - Formato de entrega
   - Longitud aproximada
   - Preferencias de color
   - Personajes
   
   **Paso 4: Revisión y envío**
   - Resumen del briefing
   - Fecha de entrega estimada
   - Aceptación de términos y condiciones

3. Haz clic en "Enviar briefing" para finalizar
4. Serás redirigido al dashboard, donde podrás ver tu nuevo pedido en la sección "Mis Pedidos"

---

## Preguntas Frecuentes

### ¿Cuánto tiempo tarda en completarse un proyecto?
El tiempo de entrega depende del paquete elegido:
- **Paquete Inicial**: 7 días laborables
- **Paquete Profesional**: 5 días laborables
- **Paquete Institucional**: Variable según acuerdo

### ¿En qué formatos se entregan los cómics?
Los formatos estándar son PDF y JPG/PNG. Si necesitas formatos adicionales, puedes indicarlo en el briefing.

### ¿Puedo solicitar modificaciones a mi cómic?
Sí, cada paquete incluye un número específico de revisiones:
- **Paquete Inicial**: 1 revisión por tira
- **Paquete Profesional**: 2 revisiones por tira
- **Paquete Institucional**: Revisiones ilimitadas

### ¿Puedo usar mis propios personajes?
Sí, a partir del Paquete Profesional puedes solicitar personajes personalizados. Indica sus características en el formulario de briefing.

---

## Despliegue en Producción

Esta sección explica cómo desplegar StoryCanvas en un entorno de producción para operar como un negocio real.

### Preparación de Servidor

1. **Selección de proveedor de hosting**:
   - Recomendamos proveedores como AWS, Google Cloud, DigitalOcean o Heroku
   - Para sitios de menor tráfico, servicios como Netlify (frontend) + Render (backend) ofrecen planes gratuitos o económicos
   - Considera el tráfico esperado, escalabilidad y presupuesto

2. **Requisitos del servidor**:
   - Para iniciar: 2 CPU cores, 4GB RAM, 20GB SSD (ajustar según escala)
   - Sistema operativo recomendado: Ubuntu Server 22.04 LTS
   - Ancho de banda: Mínimo 1TB/mes para empezar

3. **Configuración inicial del servidor**:
   ```bash
   # Actualizar el sistema
   sudo apt update && sudo apt upgrade -y
   
   # Instalar Node.js y npm
   curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
   sudo apt install -y nodejs
   
   # Instalar PM2 para gestionar el proceso Node.js
   sudo npm install -g pm2
   
   # Instalar Nginx como proxy inverso
   sudo apt install -y nginx
   
   # Configurar firewall básico
   sudo ufw allow 'Nginx Full'
   sudo ufw allow OpenSSH
   sudo ufw enable
   ```

### Configuración del Dominio

1. **Adquirir un dominio**:
   - Registra un dominio en servicios como Namecheap, GoDaddy o Google Domains
   - Elige un nombre de dominio memorable, relacionado con tu marca
   - Presupuesto aproximado: 10-15€/año

2. **Configurar DNS**:
   - Apunta el dominio a la IP de tu servidor:
     ```
     Tipo A: tudominio.com -> IP_DEL_SERVIDOR
     Tipo A: www.tudominio.com -> IP_DEL_SERVIDOR
     ```
   - Configura registros MX para correo electrónico

3. **Configurar SSL/TLS**:
   ```bash
   # Instalar Certbot para certificados gratuitos Let's Encrypt
   sudo apt install -y certbot python3-certbot-nginx
   
   # Obtener certificado SSL
   sudo certbot --nginx -d tudominio.com -d www.tudominio.com
   ```

### Instalación en la Nube

1. **Clonar e instalar el proyecto**:
   ```bash
   # Clonar el repositorio
   git clone https://github.com/usuario/storycanvas.git /var/www/storycanvas
   cd /var/www/storycanvas
   
   # Instalar dependencias
   npm install --production
   
   # Crear y configurar archivo .env para producción
   cp .env.example .env
   nano .env # Configura las variables para producción
   ```

2. **Configurar Nginx como proxy inverso**:
   ```bash
   sudo nano /etc/nginx/sites-available/storycanvas
   ```
   Añadir la siguiente configuración:
   ```nginx
   server {
       listen 80;
       server_name tudominio.com www.tudominio.com;
       
       location / {
           proxy_pass http://localhost:8080;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
   Activar el sitio:
   ```bash
   sudo ln -s /etc/nginx/sites-available/storycanvas /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

3. **Iniciar la aplicación en modo producción**:
   ```bash
   cd /var/www/storycanvas
   # Iniciar con PM2 para gestión de procesos
   pm2 start npm --name "storycanvas" -- start
   # Configurar autoarranque
   pm2 startup
   pm2 save
   ```

### Servicios de Bases de Datos

1. **Implementación de base de datos**:
   - Opción local: Instalar MongoDB o PostgreSQL en el servidor
   - Opción recomendada: Servicios gestionados como MongoDB Atlas o AWS RDS
   - Beneficios: Copias de seguridad automatizadas, escalabilidad, alta disponibilidad

2. **Configuración de MongoDB Atlas** (recomendado):
   - Crear cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Crear un cluster (el plan gratuito es suficiente para empezar)
   - Configurar IP whitelist para permitir conexiones desde tu servidor
   - Obtener la cadena de conexión y añadirla a tu archivo `.env`

3. **Importar estructura inicial**:
   ```bash
   # Desde tu entorno local, exporta la estructura de la base de datos
   mongoexport --uri="mongodb://localhost:27017/storycanvas" --collection=templates --out=templates.json
   
   # Importa a la base de datos en la nube
   mongoimport --uri="mongodb+srv://usuario:contraseña@clustername.mongodb.net/storycanvas" --collection=templates --file=templates.json
   ```

### Configuración de Seguridad

1. **Hardening del servidor**:
   - Configurar un usuario no-root para ejecutar la aplicación
   - Implementar autenticación por clave SSH
   - Configurar fail2ban para prevenir ataques de fuerza bruta
   
2. **Seguridad de la aplicación**:
   - Implementar límites de tasa (rate limiting)
   - Configurar cabeceras de seguridad HTTP
   - Validación estricta de entrada de datos
   
3. **Monitorización y alertas**:
   - Configurar monitorización con servicios como UptimeRobot (gratuito)
   - Implementar alertas por email o SMS para problemas críticos
   - Instalar herramientas de logging como ELK Stack o Papertrail

## Integración de Sistemas de Pago

1. **Selección de proveedor de pagos**:
   - [Stripe](https://stripe.com): Fácil de implementar, comisiones razonables (2.9% + 0.30€)
   - [PayPal](https://developer.paypal.com): Ampliamente conocido, similar a Stripe en comisiones
   - [Redsys](https://www.redsys.es): Popular en España, requiere contrato con entidad bancaria

2. **Implementación de Stripe** (recomendado):
   - Crear cuenta en Stripe y verificar identidad
   - Instalar dependencias:
     ```bash
     npm install stripe
     ```
   - Configurar claves API en archivo `.env`:
     ```
     STRIPE_PUBLIC_KEY=pk_live_xxxxxxxxxxx
     STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxx
     ```
   - Implementar endpoints para procesar pagos

3. **Configuración de webhooks**:
   - Crear endpoint para recibir notificaciones de eventos de pago
   - Configurar la URL del webhook en el dashboard de Stripe
   - Implementar lógica para manejar eventos como pagos exitosos, fallidos o disputas

4. **Facturación automática**:
   - Integrar con proveedores de facturación electrónica
   - Configurar emisión automática de facturas tras pagos exitosos
   - Almacenar historial de transacciones y facturas

## Gestión como Negocio

### Marketing Digital

1. **Optimización SEO**:
   - Investigar palabras clave relevantes para el sector educativo y cómics
   - Optimizar metadatos, URLs y contenido
   - Crear blog con contenido relevante para atraer tráfico orgánico
   - Registrar el sitio en Google Search Console y Bing Webmaster Tools

2. **Estrategia de contenidos**:
   - Crear ejemplos de cómics educativos gratuitos para demostración
   - Desarrollar casos de estudio con clientes exitosos
   - Publicar artículos sobre cómics en educación

3. **Redes sociales**:
   - Canales recomendados: Instagram, LinkedIn, Pinterest, Twitter
   - Crear calendario editorial para publicaciones regulares
   - Compartir ejemplos visuales del trabajo realizado

4. **Email marketing**:
   - Implementar captación de leads con descuentos en primer pedido
   - Crear campañas de nurturing para leads
   - Enviar newsletters mensuales con consejos y ejemplos

### Análisis y Métricas

1. **Implementación de Google Analytics**:
   - Crear cuenta y propiedad en Google Analytics
   - Configurar objetivos para conversiones (registros, compras)
   - Implementar embudos de conversión

2. **Métricas clave para seguimiento**:
   - Tasa de conversión de visitantes a registros
   - Tasa de conversión de registros a compras
   - Valor medio de pedido
   - Tiempo promedio para completar un pedido
   - NPS (Net Promoter Score) para medir satisfacción

3. **Dashboards de negocio**:
   - Implementar herramienta de BI como Google Data Studio o Tableau
   - Crear informes automáticos semanales/mensuales
   - Monitorear KPIs (Indicadores Clave de Rendimiento)

### Escalabilidad

1. **Escalado del equipo**:
   - Proceso de contratación para diseñadores e ilustradores
   - Establecer procesos estándar de trabajo
   - Documentar guía de estilo y procedimientos

2. **Escalado técnico**:
   - Configurar autoescalado de servidores según demanda
   - Implementar CDN para entrega optimizada de contenidos
   - Configurar caché para mejorar rendimiento

3. **Diversificación del producto**:
   - Explorar nuevos formatos (animación, realidad aumentada)
   - Desarrollar herramientas de auto-servicio para clientes
   - Crear planes de suscripción recurrentes

### Aspectos Legales

1. **Documentos legales necesarios**:
   - Términos y condiciones de servicio
   - Política de privacidad (RGPD compliant)
   - Acuerdos de nivel de servicio (SLA)
   - Contratos de cesión de derechos para ilustraciones

2. **Cumplimiento normativo**:
   - RGPD (Reglamento General de Protección de Datos)
   - LSSI (Ley de Servicios de la Sociedad de la Información)
   - Normativa de comercio electrónico

3. **Propiedad intelectual**:
   - Registrar marca StoryCanvas
   - Establecer política clara sobre propiedad de los cómics
   - Gestionar licencias de uso con clientes

## Mantenimiento y Actualizaciones

1. **Mantenimiento regular**:
   - Actualizaciones de seguridad (semanal)
   - Backups completos (diario)
   - Pruebas de restauración (mensual)

2. **Ciclo de desarrollo**:
   - Planificación de nuevas funcionalidades
   - Entorno de staging para pruebas
   - Despliegue controlado mediante CI/CD

3. **Gestión de incidencias**:
   - Implementar sistema de tickets para soporte
   - Establecer tiempos de respuesta según gravedad
   - Documentar soluciones para problemas comunes

## Solución de Problemas

### No puedo acceder al portal
- Verifica que estás utilizando las credenciales correctas
- Comprueba tu conexión a Internet
- Asegúrate de que el servidor está en ejecución (puerto 8080)

### No veo mis cómics/pedidos
- Verifica que has iniciado sesión correctamente
- Comprueba que tienes pedidos o cómics activos
- Intenta refrescar la página

### El formulario de briefing no se envía
- Asegúrate de completar todos los campos obligatorios (marcados con *)
- Acepta los términos y condiciones
- Verifica que el tamaño de los archivos adjuntos no supera 10MB

### Errores en la visualización
- Prueba con otro navegador
- Limpia la caché del navegador
- Verifica que tienes JavaScript habilitado

### Problemas con el servidor de producción
- Verificar logs del sistema: `pm2 logs storycanvas`
- Comprobar disponibilidad de recursos: `htop`
- Verificar conectividad a base de datos externa
- Reiniciar servicio si es necesario: `pm2 restart storycanvas`

---

Si necesitas ayuda adicional, no dudes en contactarnos a través del formulario de contacto en la landing page o enviando un email a soporte@storycanvas.edu.

---

© 2025 StoryCanvas Educativo. Todos los derechos reservados.
