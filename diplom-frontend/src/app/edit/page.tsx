'use client'
import { ImageButton, ImageButtonProps } from "@/components/buttons/ImageButton"
import { Title } from "@/components/typography/title"
import { FC, useState } from "react"

interface GenerateResult {
    cost: number
    image: string
    seed: number

}
const Page: FC = () => {
    const buttons: ImageButtonProps[] = [
        {
            type: 'create',
            isActive: false,
            href: '/generate'
        },
        {
            type: 'edit',
            isActive: true,
            href: '/edit'
        },
        {
            type: 'history',
            isActive: false,
            href: '/history'
        }
    ]

    const [isLoading, setIsLoading] = useState(false)

    const [image, setImage] = useState('')
    const [imageData, setImageData] = useState('')

    const [newImage, setNewImage] = useState<GenerateResult | undefined>()

    const onImageChange = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));

            const reader = new FileReader()
            reader.readAsDataURL(event.target.files[0])
            reader.onload = () => {
                console.log('called: ', reader)
                setImageData(reader.result as string)
            }
        }
    }

    const onSubmit = async () => {
        setIsLoading(true)
        setNewImage(undefined)

        const cur = imageData.split(',')[1]

        const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pictures/edit`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer 0b6d06e5-4ec3-4253-8e45-49652aaa3df7'
            },
            body: JSON.stringify({
                image: cur,
            }),
        })

        const data = await result.json()

        setIsLoading(false)

        if (data.success === false) {
            alert(data.message)
            return
        }

        setNewImage(data.result)
    }

    return (
        <div className="flex divide-x divide-y">
            <div className="flex flex-col gap-8 px-4">
                {
                    buttons.map((button, index) => {
                        return (
                            <ImageButton key={index} {...button} />
                        )
                    })
                }
            </div>
            <div>
                <Title title="Зураг засах хэсэг" />
                <div className="flex w-full">
                    <div className="flex flex-col gap-4 w-full">
                        <input type="file" onChange={onImageChange} className="filetype" />
                        <img alt="preview image" src={image} />

                        <button
                            onClick={onSubmit}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Загрузка...' : 'Отправить'}
                        </button>
                    </div>
                    <div className="flex w-full">
                        <img height={250} src={`data:image/png;base64,${newImage?.image}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page