'use client'
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { SubscriptionItem } from "./subscriptionItem";

export interface SubscriptionItemProps {
    id: number
    name: string
    price: number
    createCount: number
    editCount: number
    isGood?: boolean
}

const Page: FC = () => {
    const { token } = useAuth();
    const router = useRouter()

    const [data, setData] = useState<Array<SubscriptionItemProps>>([])
    const [selectedId, setSelectedId] = useState<number | null>(null)

    const init = async () => {
        // if (!token) {
        //     alert('Нэвтэрнэ үү.')
        //     router.replace('/login')
        // }

        const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subscriptions/list`)
        const data = await result.json()

        setData(data.plans)
    }

    useEffect(() => {
        init()
    }, [])

    const onSelect = (id: number) => {
        setSelectedId(id)
    }

    return (
        <div className="flex justify-center">
            {selectedId === null &&
                <div className="flex gap-8">
                    {
                        data.map((item) => (
                            <SubscriptionItem item={item} key={item.id} onSelect={onSelect} />
                        ))
                    }
                </div>
            }
        </div>
    );
}

export default Page;