import styles from './Cadastro.module.css'
import { useState } from "react";
import Botao from "../../Botao";
import Formulario from "../../Formulario";

export default function Cadastro(props) {
 
  const [nome, setNome]= useState('')
  const [cpf, setCpf] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cidade, setCidade] = useState('')
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')

  const aoEnviar = (evento) =>{
  evento.preventDefault()
  setNome('')
  setCpf('')
  setTelefone('')
  setCidade('')
  setLogin('')
  setSenha('')
  setConfirmarSenha('')
  }

   
  return (
    <section className={styles.formularioc}>
      <form onSubmit={aoEnviar}>
        <h2>Cadastre seus Dados</h2>
        <Formulario
        obrigatorio={true}
        label="Nome"
        placeholder="Digite seu Nome"
        valor={nome}
        aoAlterado={valor =>setNome(valor)}
        
        />
        <Formulario
        obrigatorio={true}
        label="CPF"
        placeholder="Digite seu CPF"
        valor={cpf}
        aoAlterado={valor =>setCpf(valor)}
        />
        <Formulario
        obrigatorio={true}
        label="Telefone"
        placeholder="Informe seu Telefone"
        valor={telefone}
        aoAlterado={valor =>setTelefone(valor)}
        />
        <Formulario
        obrigatorio={true}
        label="Cidade"
        placeholder="Cidade onde mora"
        valor={cidade}
        aoAlterado={valor =>setCidade(valor)}
        />
        <Formulario
        obrigatorio={true}
        label="Login"
        placeholder="Digite um nome de usuário"
        valor={login}
        aoAlterado={valor =>setLogin(valor)}
        />
        <Formulario
        obrigatorio={true}
        label="Senha"
        placeholder="Digite sua senha, 6 dígitos"
        valor={senha}
        aoAlterado={valor =>setSenha(valor)}
        />
        <Formulario
        obrigatorio={true}
        label="Confirmar senha"
        placeholder="Repita sua senha"
        valor={confirmarSenha}
        aoAlterado={valor =>setConfirmarSenha(valor)}
        />
        <Botao>
          Enviar
        </Botao>
      </form>
    </section>
  )
}
