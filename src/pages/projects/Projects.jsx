import * as S from './Projects.style'
import TitleSection from '../../components/TitleSection/TitleSection'
import Carousel from '../../components/Carousel/Carousel';

const projectsData = [
  {
    title: 'InDecor',
    imageSM: 'inDecorSM.png',
    imageMD: 'inDecorMD.png',
    imageLG: 'inDecorLG.png',
    repositoryUrl: 'https://github.com/douglasmf/inDecor',
    liveUrl: 'https://indecor-eight.vercel.app/',
  },
  {
    title: 'MoviesLib',
    imageSM: 'moviesLibSM.png',
    imageMD: 'moviesLibMD.png',
    imageLG: 'moviesLibLG.png',
    repositoryUrl: 'https://github.com/douglasmf/moviesLib',
    liveUrl: 'https://movies-lib-psi-pied.vercel.app/',
  },
  {
    title: 'WorkSpace',
    imageSM: 'workSpaceSM-414.png',
    imageMD: 'workSpaceMD-688.png',
    imageLG: 'workSpaceLG-959.png',
    repositoryUrl: 'https://github.com/douglasmf/WorkSpace',
    liveUrl: 'https://work-space-seven.vercel.app/',
  },
];
const Projects = () => {
  return (
    <S.ProjectsContainer>
        <TitleSection title="Projetos"/>
        <Carousel projects={projectsData}/>
    </S.ProjectsContainer>
  )
}

export default Projects