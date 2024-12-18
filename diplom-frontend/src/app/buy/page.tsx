'use client'
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";

const Page: FC = () => {
    const { token } = useAuth();
    const router = useRouter()

    const init = async () => {
        if (!token) {
            alert('Нэвтэрнэ үү.')
            router.replace('/login')
        }
    }

    useEffect(() => {
        init()
    }, [])
    return (
        <div>
            <h1>Buy</h1>
        </div>
    );
}

export default Page;