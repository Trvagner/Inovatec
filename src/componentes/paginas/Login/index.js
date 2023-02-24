import styles from './Login.module.css'
import { useState } from "react";
import Botao from "../../Botao";
import Formulario from "../../Formulario";

export default function Login() {
  
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')

  const aoEntrar = (evento) =>{
    evento.preventDefault()
    setLogin('')
    setSenha('')
    }
  
  return (
    <section className={styles.formulario}>
      <form onSubmit={aoEntrar}>
        <h2>Digite seus dados para entrar</h2>
        <Formulario
        obrigatorio={true}
        label="Login"
        placeholder="Informe seu Usuário"
        valor={login}
        aoAlterado={valor =>setLogin(valor)}
        />
        <Formulario
        obrigatorio={true}
        label="Senha"
        placeholder="Informe sua Senha"
        valor={senha}
        aoAlterado={valor =>setSenha(valor)}
        />
        <Botao>
          Entrar
        </Botao>
      </form>
    </section>
  )
}