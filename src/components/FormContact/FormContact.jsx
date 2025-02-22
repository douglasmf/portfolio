import {useState} from 'react'
import * as S from './FormContact.style'
import emailjs from '@emailjs/browser'

const FormContact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault()
        
        if(name === '' || email === '' || message === ''){
            alert("Preencha todos os campos")
            return;
        }

        const templateParams = {
            from_name: name,
            email: email,
            message: message
        }

        emailjs.send("service_6x1v0j7", "template_eedcpmc", templateParams, "5UmlU9L2Mnac7wX5t")
        .then((response) => {
          alert("Email Enviado")
          setName('')
          setEmail('')
          setMessage('')
        }, (err) => {
            console.log("ERRO: ", err)
        })
    }
  return (
    <S.FormStyle onSubmit={sendEmail}>
            <S.InputStyle
                type='text'
                placeholder='Digite seu nome...'
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <S.InputStyle
                type='text'
                placeholder='Digite seu email...'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <S.TextareaStyle
                placeholder="Digite sua mensagem..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
            />
            <S.ButtonSubmit type='submit' value='Enviar' />
        </S.FormStyle>
  )
}

export default FormContact