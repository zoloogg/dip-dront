import { FC } from "react"

interface Props {
    href: string
    text: string
}

export const Button: FC<Props> = (props) => {
    const { href, text } = props

    return (
        <a href={href}>
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
                text
                </div>
            </div>
        </a>
    )
}