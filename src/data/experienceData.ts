export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    title: "Técnico de Sistemas",
    company: "VIEWNEXT",
    dates: "03/2022 - 06/2022",
    description: [
      "Proporcioné soporte Helpdesk, asistiendo a empleados con hardware, software y consultas generales de TI, incluyendo también resolución de problemas en remoto.",
      "Utilicé sistemas de tickets para rastrear y resolver problemas técnicos de manera eficiente.",
      "Cableé y configuré un Centro de Datos (CPD) para la instalación de nuevos servidores, colaborando en su puesta en marcha.",
      "Preparé nuevos espacios de trabajo y salas de reuniones, asegurando que los empleados contaran con todos los recursos necesarios.",
      "Maqueté y configuré equipos informáticos, adaptando sistemas según las necesidades específicas de los usuarios.",
      "Gestioné el inventario de TI, garantizando que los empleados dispusieran de las herramientas y materiales necesarios para el correcto desarrollo de su puesto.",
      "Administré el almacenamiento y seguridad de backups, asegurando su correcto almacenamiento y preparación para traslado fuera de sitio.",
      "Supervisé alertas de seguridad y colaboré en la respuesta a incidencias utilizando herramientas de protección y monitorización."
    ]
  },
  {
    title: "Sistemas y Explotación",
    company: "RTVE",
    dates: "04/2024 - 06/2024",
    description: [
      "WSL para integración de entornos Linux en Windows.",
      "Docker para contenerizar aplicaciones y entender su funcionamiento básico.",
      "Docker Compose, desarrollando una aplicación de prueba para aprender a orquestar aplicaciones multi-contenedor de forma eficiente.",
      " Configuración de una pila LAMP como parte del aprendizaje en infraestructura.",
      "Uso de GitLab para control de versiones e integración continua (CI/CD), asegurando el seguimiento y prueba de cada cambio en la aplicación.",
      "Kubernetes, instalando un clúster OKD completo y desplegando una aplicación similar a la creada con Docker Compose, diseñada para ejecutarse en el entorno del clúster."
    ]
  }
];
