import { useState } from 'react';
import * as S from './Carousel.style';
import useMedia from '../../hooks/useMedia'

const Carousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const telaSM = useMedia('(max-width: 500px)');
  const telaMD = useMedia('(max-width: 768px)');

  const handleTela = (project) => {
    if(telaSM){
      return(project.imageSM);
    }
    if(telaMD){
      return(project.imageMD);
    }
    if(!telaSM && !telaMD){
      return(project.imageLG);
    }
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <S.CarouselContainer>
      <S.FiltroBlack/>  
      <S.ButtonPrev onClick={prevSlide}>
        {'<'}
      </S.ButtonPrev>
      <S.CarouselList totalItems={projects.length} style={{ transform: `translateX(-${currentIndex * (100 / projects.length)}%)`}}>
        {projects.map((project, index) => (
          <S.CarouselItem key={index}>
            <img src={`/img/screenshots/${handleTela(project)}`} alt={project.title} />
          </S.CarouselItem>
        ))}
      </S.CarouselList>
      <S.ButtonNext onClick={nextSlide}>
        {'>'}
      </S.ButtonNext>
      <S.LinksCarousel>
        <a href={currentProject.repositoryUrl} target='_blank' rel='noopener noreferrer'>
          Repositório
        </a>
        <a href={currentProject.liveUrl} target='_blank' rel='noopener noreferrer'>
          Site no ar
        </a>
      </S.LinksCarousel>
    </S.CarouselContainer>
  )
}

export default Carousel