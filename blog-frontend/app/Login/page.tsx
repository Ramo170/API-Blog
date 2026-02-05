"use client";

import { useRouter} from "next/navigation";
import { useState } from "react";

export default function Login() {

    
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const router = useRouter()

    const logar = async (e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()


     const res = await fetch("http://localhost:3001/login",{ 
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify({email,senha})
      })

      const data = await res.json()
      if(res.ok){
           localStorage.setItem("token",data.token)
           router.push("/Posts")
      }else{
        alert("Erro ao fazer login")
      }


    }


  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={logar}>
        <input
        type="email" 
        placeholder="Digite o seu email..."
        className="border p-2"
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        />

        <input
        type="password" 
        placeholder="Digite o sua senha..."
        className="border p-2"
        value={senha}
        onChange={(e)=>{setSenha(e.target.value)}}
      />
      </form>
    </main>
  )
}