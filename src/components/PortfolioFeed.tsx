import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import useEmblaCarousel from 'embla-carousel-react';
import { projects, Proyecto } from '@/data/portfolioData';

const ProjectCarousel = ({ imagenes }: { imagenes: string[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
      });

      // Estado inicial
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    }
  }, [emblaApi]);

  return (
    <div className="space-y-4">
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden rounded-lg">
          <div className="flex">
            {imagenes.map((img, idx) => (
              <div className="relative flex-[0_0_100%]" key={idx}>
                <div className="aspect-video">
                  <img
                    src={img}
                    alt={`Imagen ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="secondary"
          size="icon"
          className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 shadow-lg hover:bg-background",
            !canScrollPrev && "opacity-50 cursor-not-allowed"
          )}
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className={cn(
            "absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 shadow-lg hover:bg-background",
            !canScrollNext && "opacity-50 cursor-not-allowed"
          )}
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Miniaturas */}
      <div className="flex gap-2 overflow-auto pb-2">
        {imagenes.map((img, idx) => (
          <button
            key={idx}
            className={cn(
              "relative flex-0 min-w-[100px] cursor-pointer overflow-hidden rounded-md border-2 transition-all",
              selectedIndex === idx
                ? "border-primary"
                : "border-transparent opacity-70 hover:opacity-100"
            )}
            onClick={() => emblaApi?.scrollTo(idx)}
          >
            <div className="aspect-video w-[100px]">
              <img
                src={img}
                alt={`Miniatura ${idx + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: Proyecto }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="mb-8 overflow-hidden">
      <CardHeader>
        <h3 className="text-2xl font-bold">{project.titulo}</h3>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Carousel solo si hay imágenes */}
        {project.imagenes?.length > 0 && <ProjectCarousel imagenes={project.imagenes} />}

        <div className="space-y-4">
          <p className="text-muted-foreground">{project.resumen}</p>

          <div className="flex flex-wrap gap-2">
            {project.etiquetas.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div
            className={`space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${
              expanded ? 'max-h-[1000px]' : 'max-h-0'
            }`}
          >
            <div className="rounded-lg bg-muted/50 p-4 space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Reto</h4>
                <p className="text-muted-foreground">{project.detalles.reto}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Solución</h4>
                <p className="text-muted-foreground">{project.detalles.solucion}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Impacto</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {project.detalles.impacto.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {project.enlaceExterno && (
                <Button variant="link" className="flex items-center gap-2 text-md" asChild>
                  <a href={project.enlaceExterno.url} target="_blank" rel="noopener noreferrer">
                    {project.enlaceExterno.titulo}
                  </a>
                </Button>
              )}
            </div>
          </div>

          <Button variant="ghost" className="w-full" onClick={() => setExpanded(!expanded)}>
            {expanded ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" /> Mostrar menos
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" /> Ver más
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const PortfolioFeed = () => {
  return (
    <section className="relative z-10 min-h-screen bg-background/95 px-4 py-24 backdrop-blur-sm">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight">
          Proyectos
        </h2>

        <div className="space-y-8">
          {projects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioFeed;
