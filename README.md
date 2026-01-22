# 📚 Sistema de Progreso de Cursos - Propel

Componente React desarrollado para **Nonprofit Academy** de Propel. Permite visualizar el progreso de los usuarios en diferentes cursos de forma clara e intuitiva.

## 🎯 Problema que resuelve

Este componente ayuda a que los usuarios vean de forma clara y rápida en qué punto van dentro de un curso. Les da retroalimentación inmediata sobre su progreso y los motiva a seguir avanzando mediante mensajes que se adaptan a su situación actual.

## ✨ Características

- ✅ Visualización clara del porcentaje de progreso
- ✅ Barra de progreso animada con gradientes
- ✅ Mensajes dinámicos según el avance del curso
- ✅ Botones adaptativos (Comenzar/Continuar/Revisar)
- ✅ Diseño responsive para móviles y escritorio
- ✅ Colores y tipografía oficial de Propel
- ✅ Animaciones suaves al interactuar

## 🚀 Demo

[Ver demo en vivo](#) _(wait)_

## 🛠️ Tecnologías utilizadas

- React 18
- CSS3 (con Grid y Flexbox)
- DM Mono (tipografía oficial de Propel)

## 📦 Instalación y uso

### Prerrequisitos

- Node.js (v14 o superior)
- npm o yarn

### Pasos

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/course-progress-propel.git
cd course-progress-propel
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm start
```

4. Abre tu navegador en `http://localhost:3000`

## 💻 Uso del componente
```javascript
import CourseProgress from './CourseProgress';

<CourseProgress 
  courseName="Introducción a React"
  completedLessons={7}
  totalLessons={10}
/>
```

### Props

| Prop | Tipo | Descripción |
|------|------|-------------|
| `courseName` | string | Nombre del curso |
| `completedLessons` | number | Lecciones completadas |
| `totalLessons` | number | Total de lecciones del curso |

## 🎨 Diseño

El componente respeta la identidad visual de Propel:
- **Color primario**: Verde oscuro `#0C5133`
- **Color secundario**: Naranja `#FC5C3A`
- **Tipografía**: DM Mono

## 📱 Responsive

El diseño se adapta perfectamente a:
- 📱 Móviles (< 480px)
- 📱 Tablets (480px - 768px)
- 💻 Desktop (> 768px)

## 🤝 Contribuir

Este proyecto fue desarrollado como parte del proceso de selección para **Developer Intern** en Propel.

## 👤 Autor

**[Tu Nombre]**
- GitHub: [@code-diego] (https://github.com/code-diego)
- LinkedIn: [Diego Torres](https://linkedin.com/in/diegotp)

## 📄 Licencia

Este proyecto es parte de una prueba técnica para Propel.

---

Desarrollado con ❤️ para [Propel](https://wepropel.org)