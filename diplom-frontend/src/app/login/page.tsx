'use client'
import { Container } from "postcss"
import { FC, useState } from "react"
// import { AuthContainer } from "./components/container/authContainer"
// import { Button } from "../button"

const Page: FC = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')


    const onLogin = async () => {
        alert(username)

        const result = await fetch('http://192.168.1.12:4000/api/v1/auth/login', {
            method:'POST',
            body: JSON.stringify({
                username, 
                password
            })
        })

        const data = await result.json()

        alert(JSON.stringify(data))
    }

    return (
        <div style={{display:'flex', justifyContent:'center'}}>
        <div style={{
            display:'flex', 
            flexDirection:'column',
             backgroundColor:'#1B1B1B',
             border: '3px solid #FF6500',
             borderRadius: '20px',
             width:'765px',
             paddingTop:'32px',
             paddingBottom:'32px',
             paddingLeft:'170px',
             paddingRight:'170px',
             gap: '10px'

        }}>
        <div><span style={{ 
                color: '#FFFFFF', 
                fontSize: '32px', 
                fontFamily: '"Open Sans", sans-serif', 
                fontWeight: 600, 
                display: 'flex', 
                justifyContent: 'center', gap: '30px',
            }}>
            Нэвтрэх
            </span>
        </div>
        {/* <AuthContainer input='1'/> */}
            <div style={{ backgroundColor:'#292929',
             border: '1px solid #FF6500',
             borderRadius: '12px',
             width:'422px', height: '54px', }}><input value={username} onChange={e => {setUsername(e.target.value)}}/></div>
            <div style={{ backgroundColor:'#292929',
             border: '1px solid #FF6500',
             borderRadius: '12px',
             width:'422px', height: '54px', }}><input value={password} onChange={e => {setPassword(e.target.value)}}/></div>

            <div style={{backgroundColor:'#FF6500',
             border: '1px solid #FF6500',
             borderRadius: '12px',
             width:'422px', height: '54px',}}>
                <div style={{
                display: 'flex',
                color: 'white',
                fontSize: '24px',
                fontFamily: '"Open Sans", sans-serif',
                fontWeight: 400,
                justifyContent: 'center',
                alignItems: 'center',}}>
                    {/* <Button text="Нэвтрэх" href='/login' /> */}
                <button onClick={onLogin}>Нэвтрэх</button>
                </div>
            </div>
            <div style={{backgroundColor:'#FF6500',
             border: '1px solid #FF6500',
             borderRadius: '12px',
             width:'422px', height: '54px',}}>
                <div style={{
                display: 'flex',
                color: 'white',
                fontSize: '24px',
                fontFamily: '"Open Sans", sans-serif',
                fontWeight: 400,
                justifyContent: 'center',
                alignItems: 'center',}}>
                <button>Бүртгүүлэх</button>
                </div>
            </div>
            <div><span style={{ 
                color: '#FFFFFF', 
                fontSize: '20px', 
                fontFamily: '"Open Sans", sans-serif', 
                fontWeight: 400, 
                display: 'flex', 
                justifyContent: 'center' 
            }}>
            Нууц үг мартсан?
            </span>
        </div>
        </div>
        </div>
        
    )
}

export default Page