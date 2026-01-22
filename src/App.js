import React from 'react';
import './App.css';

const CourseProgress = ({ courseName, completedLessons, totalLessons }) => {
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100);
  
  const getProgressMessage = () => {
    if (progressPercentage === 0) {
      return "Estás iniciando el curso";
    } else if (progressPercentage < 30) {
      return "Estás iniciando el curso";
    } else if (progressPercentage < 75) {
      return "Estás avanzando";
    } else if (progressPercentage < 100) {
      return "Estás a un paso de terminar";
    } else {
      return "Curso completado";
    }
  };

  const getButtonText = () => {
    if (progressPercentage === 0) {
      return "Comenzar";
    } else if (progressPercentage === 100) {
      return "Revisar";
    } else {
      return "Continuar";
    }
  };

  return (
    <div className="course-card">
      <div className="course-header">
        <h3 className="course-title">{courseName}</h3>
        <button className="course-button">{getButtonText()}</button>
      </div>
      
      <div className="progress-section">
        <span className="progress-percentage">{progressPercentage}%</span>
        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
      
      <p className="progress-status">{getProgressMessage()}</p>
      <p className="lessons-info">{completedLessons} de {totalLessons} lecciones completadas</p>
    </div>
  );
};

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo">🚀 Propel</div>
        <h1 className="main-title">Hola Diego! Estos son tus cursos.</h1>
      </header>
      
      <div className="courses-grid">
        <CourseProgress 
          courseName="Introducción a React"
          completedLessons={0}
          totalLessons={10}
        />
        
        <CourseProgress 
          courseName="Diseño UX/UI Avanzado"
          completedLessons={4}
          totalLessons={10}
        />
        
        <CourseProgress 
          courseName="Gestión de Proyectos Ágiles"
          completedLessons={9}
          totalLessons={10}
        />
        
        <CourseProgress 
          courseName="Desarrollo Backend con Node.js"
          completedLessons={10}
          totalLessons={10}
        />

        <CourseProgress 
          courseName="WordPress para Principiantes"
          completedLessons={5}
          totalLessons={12}
        />
        
        <CourseProgress 
          courseName="Marketing Digital para ONGs"
          completedLessons={7}
          totalLessons={8}
        />
      </div>
    </div>
  );
}