'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import Loading from "../loading";
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function ClientDataFetching() {
    // const [loading, setLoading] = useState(false)
    // const [users, setUsers] = useState([])

    // const fetchUsers = async () => {
    //     try {
    //         setLoading(true)
    //         const apiResponse = await fetch('https://dummyjson.com/users')
    //         const result = await apiResponse.json()

    //         if (result?.users) {
    //             setUsers(result?.users)
    //             setLoading(false)
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         setLoading(false)
    //         throw new Error(error)
    //     }
    // }

    // useEffect(() => {
    //     fetchUsers()
    // }, [])

    const { data, error, isLoading } = useSWR('https://dummyjson.com/users', fetcher)

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <p className="text-3xl">
            Error fetching data
        </p>
    }

    return (
        <div className="px-3 py-2">
            <h1 className="text-3xl mb-5">Client Data Fetching</h1>

            <ul>
                {
                    data && data?.users?.length > 0 ? data.users?.map(user => <li key={user?.id} className="mb-8">
                        <Link href={`/server-data-fetch/${user.id}`} className="px-5 py-3 bg-green-500 mb-3 rounded text-white cursor-pointer">
                            {user.firstName}
                        </Link>
                    </li>) : null
                }
            </ul>
        </div>
    );
}