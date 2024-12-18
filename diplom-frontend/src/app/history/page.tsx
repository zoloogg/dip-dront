'use client'
import { ImageButton, ImageButtonProps } from "@/components/buttons/ImageButton"
import { Title } from "@/components/typography/title"
import { FC, useEffect, useState } from "react"

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
            isActive: false,
            href: '/edit'
        },
        {
            type: 'history',
            isActive: true,
            href: '/history'
        }
    ]

    const [isLoading, setIsLoading] = useState(false)

    const [data, setData] = useState<Array<GenerateResult> | undefined>()

    const init = async () => {
        setIsLoading(true)

        const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pictures/history`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer 0b6d06e5-4ec3-4253-8e45-49652aaa3df7'
            },
        })

        const data = await result.json()

        setIsLoading(false)

        if (data.success === false) {
            console.error(data.message)
            return
        }

        setData(data.history)
    }

    useEffect(() => {
        init()
    }, [])
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
                <Title title="Үүсгэсэн зургууд" />
                <div className="grid grid-cols-5 gap-4">
                    {
                        isLoading
                            ? <div>Loading...</div>
                            : data?.map((item, index) => {
                                return (
                                    <img key={index} height={250} src={`data:image/png;base64,${item.image}`} alt="Generated" />
                                )
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default Page