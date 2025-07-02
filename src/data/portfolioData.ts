export interface Proyecto {
  id: number;
  titulo: string;
  resumen: string;
  imagenes: string[];
  etiquetas: string[];
  detalles: {
    reto: string;
    solucion: string;
    impacto: string[];
  };
  enlaceExterno?: {
    titulo: string;
    url: string;
  };
}

export const projects: Proyecto[] = [
  {
    id: 1,
    titulo: "HoneyX: Sistema de Honeypot distribuido",
    resumen: "Desarrollo e implementación de un sistema de honeypot avanzado para la detección, análisis y alerta en tiempo real de amenazas cibernéticas en un entorno controlado.",
    etiquetas: ["Ciberseguridad", "Honeypot", "Docker", "Docker-Compose", "Hacking-web", "Grafana", "Prometheus", "Node_Exporter"],
    detalles: {
      reto: "A veces contamos con poca seguridad informática, por lo que decidí desarrollar este proyecto para poder tener un honeypot distribuido en 2 servidores y poder visualizar todo lo que sucedía en tiempo real",
      solucion: "Implementación de una arquitectura modular de honeypot que integra múltiples servicios como FakeSSH, Apache, MySQL, ProFTPD, Loki, Grafana, Prometheus, Promtail y Node_Exporter, orquestados mediante Docker Compose para un despliegue rápido y fácil mantenimiento.",
      impacto: [
        "Detección temprana y clasificación de diversos ciberataques, incluyendo fuerza bruta, exploits web y ataques FTP.",
        "Proporciona un alto aprendizaje, con un fácil despliegue explicado en el mismo repositorio",
        "Mejora la seguridad de la red mediante los ataques que se visualizan en esta máquina honeypot."
      ]
    },
    enlaceExterno: {
      titulo: "Repositorio en GitHub",
      url: "https://github.com/GutiFer4/HoneyX"
    }
  }
];
