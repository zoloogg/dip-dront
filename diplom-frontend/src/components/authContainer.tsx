import { FC } from "react"

interface Props {
    input: string
}

export const AuthContainer: FC<Props> = ({ input }) => {
    return (
        <div>
            <div style={{ backgroundColor:'#292929',
             border: '1px solid #FF6500',
             borderRadius: '12px',
             width:'422px', }}><p>{input}</p>
                </div>
        </div>
    )
}