# Guía de Contribución a StoryCanvas

¡Gracias por tu interés en contribuir a StoryCanvas! Este documento proporciona lineamientos para contribuir efectivamente al proyecto.

## 🌟 Filosofía del proyecto

StoryCanvas es un proyecto educativo que busca hacer el conocimiento más accesible y atractivo a través de la narrativa visual. Valoramos:

- **Simplicidad**: El código debe ser claro y fácil de entender
- **Accesibilidad**: La interfaz debe ser intuitiva para todo tipo de usuarios
- **Creatividad**: Fomentamos soluciones innovadoras
- **Aprendizaje**: Este es un espacio para experimentar y aprender

## 🛠️ Cómo contribuir

### 1. Prepara tu entorno

1. **Fork el repositorio** a tu cuenta de GitHub
2. **Clona tu fork** a tu máquina local:
   ```bash
   git clone https://github.com/TU_USUARIO/StoryCanvas-Beta.git
   cd StoryCanvas-Beta
   ```
3. **Añade el repositorio original como remoto**:
   ```bash
   git remote add upstream https://github.com/CarlosRodera/StoryCanvas-Beta.git
   ```

### 2. Encuentra o crea una tarea

- Revisa los [Issues](https://github.com/CarlosRodera/StoryCanvas-Beta/issues) existentes
- Si no encuentras ninguno que se ajuste a lo que quieres hacer, crea uno nuevo describiendo:
  - Qué quieres implementar o arreglar
  - Por qué es importante
  - Cómo planeas hacerlo

### 3. Crea una rama para tu contribución

```bash
git checkout -b feature/nombre-descriptivo
```

Utiliza prefijos como:
- `feature/` para nuevas características
- `fix/` para correcciones de errores
- `docs/` para cambios en la documentación
- `refactor/` para reorganizaciones de código

### 4. Desarrolla tu contribución

#### Estilo de código

- **HTML**: Usa indentación de 2 espacios, mantén el marcado semántico
- **CSS**: Sigue las convenciones de Tailwind CSS
- **JavaScript**: Usa camelCase para variables y funciones

#### Directrices de IA

Si usas IA para generar código:
1. Revisa siempre manualmente el código generado
2. Comprende lo que hace cada parte
3. Documenta apropiadamente
4. Simplifica donde sea posible

### 5. Prueba tus cambios

- Asegúrate de que tu código funcione correctamente
- Prueba en múltiples navegadores si es posible
- Verifica que sea responsivo en distintos tamaños de pantalla

### 6. Envía tus cambios

1. **Añade tus cambios**:
   ```bash
   git add .
   ```

2. **Haz un commit con un mensaje descriptivo**:
   ```bash
   git commit -m "Tipo: Descripción breve del cambio"
   ```
   Donde "Tipo" puede ser:
   - `Add` - Nuevas características
   - `Fix` - Correcciones de errores
   - `Docs` - Cambios en documentación
   - `Style` - Formato, punto y coma faltantes, etc.
   - `Refactor` - Refactorización del código
   - `Test` - Adición de pruebas

3. **Sube tus cambios a GitHub**:
   ```bash
   git push origin feature/nombre-descriptivo
   ```

4. **Crea un Pull Request**:
   - Ve a tu fork en GitHub
   - Haz clic en "Compare & pull request"
   - Proporciona una descripción detallada de tus cambios
   - Menciona cualquier Issue relacionado usando "#" seguido del número de Issue

### 7. Proceso de revisión

- Un mantenedor revisará tu PR
- Podría pedirte cambios o mejoras
- Una vez aprobado, tu código será fusionado al proyecto principal

## 🚀 Áreas para contribuir

### Frontend
- Mejora de la interfaz de usuario
- Optimización de la experiencia de usuario
- Implementación de nuevos componentes
- Mejora de la accesibilidad

### Backend (a desarrollar)
- Creación de API RESTful
- Integración con bases de datos
- Autenticación y autorización
- Gestión de archivos

### Integración con IA
- Conexión con APIs de IA como OpenAI, DALL-E, etc.
- Implementación de flujos de trabajo automáticos
- Mejora de la calidad de las sugerencias

### Documentación
- Tutoriales y guías
- Ejemplos de uso
- Comentarios en el código

## 📝 Buenas prácticas

### Git
- Mantén tus commits pequeños y enfocados
- Actualiza tu rama con los cambios del repositorio principal regularmente:
  ```bash
  git fetch upstream
  git rebase upstream/main
  ```
- Usa rebase para mantener un historial limpio

### Código
- Comenta tu código cuando sea necesario
- Sigue patrones de diseño consistentes
- Mantén las funciones pequeñas y con un solo propósito

### Comunicación
- Sé respetuoso y constructivo en comentarios y discusiones
- Proporciona contexto claro en Issues y Pull Requests
- Pregunta si no estás seguro de cómo proceder

## ✨ Reconocimiento

¡Tu contribución será reconocida! Los contribuyentes serán incluidos en:
- El archivo README.md en la sección de colaboradores
- Menciones en la documentación relevante
- Posible mención en el canal de YouTube de Carlos Rodera

## 🔮 Visión futura

A largo plazo, buscamos:
1. Crear un backend completo con autenticación
2. Implementar integración profunda con modelos de IA para generación de contenido
3. Desarrollar un sistema de colaboración para creación de cómics educativos
4. Implementar análisis de datos para mejorar el aprendizaje

¡Tus ideas para expandir esta visión son bienvenidas!

---

Si tienes alguna pregunta sobre cómo contribuir, no dudes en abrir un Issue con la etiqueta "pregunta" o contactar directamente a través de GitHub.

**¡Gracias por tu contribución y por hacer de StoryCanvas un mejor proyecto!**
