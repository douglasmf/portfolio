import { useInView } from "../../hooks/UseInView";
import * as S from './styles'
import { Title } from '../../components/Title'
import { skills } from './data'

export const Skills = () => {
  const { ref, visible } = useInView();

  return (
    <S.SkillsSection
      id="habilidades"
      className={visible ? "show" : ""}
      ref={ref}
    >
      <Title title="Skills" />

      <S.Container>
        <S.Grid>
          {skills.map((skill, i) => (
            <S.Card
              key={skill.name}
              style={{
                transitionDelay: `${i * 0.1}s`
              }}
              className={visible ? "show" : ""}
            >
              <S.Icon>{skill.icon}</S.Icon>
              <span>{skill.name}</span>
            </S.Card>
          ))}
        </S.Grid>
        <S.ExtraSkills>
          <S.SubTitle>Outras habilidades</S.SubTitle>
          <S.SkillGrid>
            {[
              "Responsividade",
              "Acessibilidade",
              "Desenvolvimento de API",
              "Componentização",
              "Consumo de APIs",
              "organização de código",
            ].map((skill) => (
              <S.SkillItem key={skill}>
                {skill}
                <span />
              </S.SkillItem>
            ))}
          </S.SkillGrid>
        </S.ExtraSkills>
      </S.Container>
      
    </S.SkillsSection>
  )
}