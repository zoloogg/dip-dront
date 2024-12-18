import { FC } from "react"

interface Props {
    onClick: () => void
    text: string
}

export const AuthButton: FC<Props> = (props) => {
    const { onClick, text } = props

    return (
        <button
            style={{
                backgroundColor: '#FF6500',
                border: '1px solid #FF6500',
                borderRadius: '12px',
                width: '422px', height: '54px',
            }}
            onClick={onClick}
        >
            {text}
        </button>
        // <div style={{
        //     backgroundColor: '#FF6500',
        //     border: '1px solid #FF6500',
        //     borderRadius: '12px',
        //     width: '422px', height: '54px',
        // }}>
        //     <div style={{
        //         display: 'flex',
        //         color: 'white',
        //         fontSize: '24px',
        //         fontFamily: '"Open Sans", sans-serif',
        //         fontWeight: 400,
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //     }}>
        //         {/* <Button text="Нэвтрэх" href='/login' /> */}
        //         <button onClick={onLogin}>Нэвтрэх</button>
        //     </div>
        // </div>
    )
}