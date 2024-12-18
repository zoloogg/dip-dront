'use client'
import { FC, useState } from "react"

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
             gap: '4px'

        }}>
            <span>Нэвтрэх</span>
            <input value={username} onChange={e => {setUsername(e.target.value)}}/>
            <input value={password} onChange={e => {setPassword(e.target.value)}}/>

            <button onClick={onLogin}>Login button</button>
            <button>Register button</button>
            <span>Forgot password button</span>
        </div>
        </div>
    )
}

export default Page