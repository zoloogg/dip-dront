import { FC } from "react"

interface Props {
    text: string
}

export const PaymentButton: FC<Props> = (props) => {
    const { text } = props

    return (
        <button
            style={{
                backgroundColor: '#FF6500',
                border: '1px solid #FF6500',
                borderRadius: '6px',
                width: '280px', height: '68px',
            }}
            
        >
            {text}
        </button>
    )
}