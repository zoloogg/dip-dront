
import { PaymentButton } from "@/components/paymentButton"
import { RegisterInput } from "@/components/registerInput"
import { FC } from "react"

const Page: FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#1B1B1B',
                border: '3px solid #FF6500',
                borderRadius: '20px',
                width: '765px',
                paddingTop: '32px',
                paddingBottom: '32px',
                paddingLeft: '170px',
                paddingRight: '170px',
                gap: '40px'
            }}>
                <div>
                    <span style={{
                        color: '#FFFFFF',
                        fontSize: '32px',
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 600,
                        display: 'flex',
                        justifyContent: 'center', gap: '30px',
                    }}>
                        Төлбөр төлөх хэсэг
                    </span>
                </div>
                <div className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'row', alignContent: 'start', padding: 'none'}}>
                    <div className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', alignContent: 'space-around'}}>
                        <RegisterInput title='Нэр' placeholder="Нэрээ оруулна уу."/>
                        <RegisterInput title='Имэйл хаяг' placeholder="Имэйл хаягаа оруулна уу."/>
                        <RegisterInput title='Гэрийн хаяг' placeholder="Хаягаа оруулна уу."/>
                        <RegisterInput title='Хот' placeholder="Хотоо оруулна уу."/>
                        <RegisterInput title='Зип код' placeholder="1234567."/>
                    </div>
                    <div className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', alignContent: 'space-around'}}>
                        <RegisterInput title='Картын дугаар' placeholder="1111-2222-3333-4444"/>
                        <RegisterInput title='Дуусах огноо' placeholder="Н"/>
                        <RegisterInput title='CVV' placeholder="123"/>
                        <PaymentButton text="Төлбөр төлөх" />
                    </div>
                </div>
            </div>
        </div>     
    )
}

export default Page