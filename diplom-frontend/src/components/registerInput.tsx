import { FC } from "react"

interface Props {
    title: string
    placeholder: string
}

export const RegisterInput: FC<Props> = ({ title, placeholder}) => {
    return (
        <div>
            <span style={{
            color: '#FFFFFF',
            fontSize: '20px',
            fontFamily: '"Open Sans", sans-serif',
            fontWeight: 400,
            display: 'flex',
            justifyContent: 'start', 
            }}>
            {title}
            </span>
            <input
            placeholder={placeholder}
            style={{
                backgroundColor: '#1B1B1B',
                border: '1px solid #FF6500',
                borderRadius: '4px',
                width: '280px',
                height: '32px',
                padding: '0 20px',
                }}>
            </input>
         </div>
    )
}