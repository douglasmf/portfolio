import TitleSection from '../../components/TitleSection/TitleSection';
import * as S from './Skills.style';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap,FaGitSquare } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiStyledcomponents } from 'react-icons/si';

const habilidades = [
  { icon: <FaHtml5 />, title: 'HTML' },
  { icon: <FaCss3Alt />, title: 'CSS' },
  { icon: <FaJs />, title: 'JavaScript' },
  { icon: <FaReact />, title: 'React' },
  { icon: <FaNodeJs />, title: 'Node.js' },
  { icon: <FaBootstrap />, title: "Bootstrap" },
  { icon: <RiTailwindCssFill />, title: 'Tailwind CSS' },
  { icon: <FaGitSquare />, title: 'Git' },
  { icon: <SiStyledcomponents />, title: 'Styled Components' },
];

const Skills2 = () => {
  return (
    <S.SkillsContainer>
      <TitleSection title="Habilidades" />
      <S.GridContainer>
        {habilidades.map((skill, index) => (
          <S.SkillCard key={index}>
            <S.SkillIcon>{skill.icon}</S.SkillIcon>
            <S.SkillTitle>{skill.title}</S.SkillTitle>
          </S.SkillCard>
        ))}
      </S.GridContainer>
    </S.SkillsContainer>
  );
};

export default Skills2;
