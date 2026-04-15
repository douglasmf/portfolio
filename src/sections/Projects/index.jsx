import { useState } from "react";
import * as S from "./styles";
import { projects } from "./data";
import { Title } from "../../components/Title";

export const Projects = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < projects.length - 1) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <S.Section id="projetos">
      <S.Container>

        <Title title="Projetos"/>
        <S.Carousel>

          {/* IMAGENS */}
          <S.Slides style={{ transform: `translateX(-${index * 100}%)` }}>
            {projects.map((project) => (
              <S.Slide key={project.id}>
                <img src={project.image} alt={project.title} />
              </S.Slide>
            ))}
          </S.Slides>

          {/* OVERLAY */}
          <S.Overlay>
            <S.Content key={index}>
              <h3>{projects[index].title}</h3>
              <p>{projects[index].description}</p>

              <S.Buttons>
                <a href={projects[index].site} target="_blank">
                  Ver Projeto
                </a>
                <a href={projects[index].repo} target="_blank">
                  Repositório
                </a>
              </S.Buttons>
            </S.Content>
          </S.Overlay>

          {/* SETAS */}
          <S.Arrow left onClick={prev} disabled={index === 0}>
            ‹
          </S.Arrow>

          <S.Arrow onClick={next} disabled={index === projects.length - 1}>
            ›
          </S.Arrow>

          {/* INDICADORES */}
          <S.Dots>
            {projects.map((_, i) => (
              <span
                key={i}
                className={i === index ? "active" : ""}
                onClick={() => setIndex(i)}
              />
            ))}
          </S.Dots>

        </S.Carousel>
      </S.Container>
    </S.Section>
  );
};