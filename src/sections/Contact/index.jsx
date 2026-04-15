import * as S from './styles'
import { Title } from '../../components/Title'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { useRef, useState } from 'react'

export const Contact = () => {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)

  const sendEmail = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)

    // Criamos o objeto de dados usando o FormData do próprio navegador
    const formData = new FormData(formRef.current);
    
    // Adicionamos sua Access Key manualmente ou via input hidden (veja o formulário abaixo)
    formData.append("access_key", "70b77800-2726-4c92-bf26-567f1369cf01"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        formRef.current.reset();
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <S.ContactSection id="contato">
      <S.Container>
        <Title title="Interessado no meu trabalho?" />

        <S.Content>
          <S.Form ref={formRef} onSubmit={sendEmail}>
            {/* Configurações do Web3Forms */}
            <input type="hidden" name="subject" value="Novo contato do Portfólio" />
            <input type="hidden" name="from_name" value="Meu Site Pessoal" />
            
            {/* Opcional: Honeypot para evitar spam de robôs */}
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

            <S.Input
              type="text"
              name="name"
              placeholder="Seu nome"
              required
            />

            <S.Input
              type="email"
              name="email"
              placeholder="Seu email (opcional)"
            />

            <S.TextArea
              name="message"
              placeholder="Sua mensagem"
              required
            />

            <S.Button type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Enviar mensagem"}
            </S.Button>

            {success === true && <p>Mensagem enviada com sucesso!</p>}
            {success === false && <p>Erro ao enviar. Tente novamente.</p>}
          </S.Form>

          <S.Info>
            <S.SubTitle>Vamos nos conectar</S.SubTitle>
            <S.Links>
              <S.Link>
                <FaEnvelope />
                <span>douglas.m.f.1995@gmail.com</span>
              </S.Link>
              <S.Link href="www.linkedin.com/in/douglas-monteiro-421b90300" target="_blank">
                <FaLinkedin />
                <span>Linkedin</span>
              </S.Link>

              <S.Link href="https://github.com/douglasmf" target="_blank">
                <FaGithub />
                <span>GitHub</span>
              </S.Link>
            </S.Links>
          </S.Info>
        </S.Content>
      </S.Container>
    </S.ContactSection>
  )
}