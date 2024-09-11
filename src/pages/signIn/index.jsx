import { useState } from "react"
import { FiMail, FiLock } from "react-icons/fi"
import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input"
import { Button } from "../../components/button"
import { Container, Form, Background } from "./style";

export function SignIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signIn} = useAuth();

  function handleSingIn(){
    signIn({email, password});
  }
 return( 
<Container>
  <Form>
    <h1>Rocket Notes</h1>
    <p>Aplicação para salvar e gerenciar seus links úteis</p>

    <h2>Faça seu Login</h2>

    <Input 
    placeholder="E-mail" 
    type="Text" 
    icon={FiMail}
    onChange ={e => setEmail(e.target.value)}
    />

    <Input 
    placeholder="Senha" 
    type="Password" 
    icon={FiLock} 
    onChange ={ e => setPassword(e.target.value)}

    />

    <Button title="Entrar" onClick={handleSingIn}/>

    <Link to="/register">Criar Conta</Link>
  </Form>
  <Background />
</Container>
)
 }
