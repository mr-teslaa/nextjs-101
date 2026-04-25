import Link from "next/link";

const fetchUsers = async () => {
    try {
        const apiResponse = await fetch('https://dummyjson.com/users')
        const result = await apiResponse.json()
        console.log(result);


        return result.users
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

export default async function ServerDataFetching() {
    const users = await fetchUsers()
    return (
        <div className="px-3 py-2">
            <h1 className="text-3xl mb-5">Server Data Fetching</h1>
            <ul>
                {
                    users.length && users.length > 0 ? users.map(user => <li key={user.id} className="mb-8">
                        <Link href={`/server-data-fetch/${user.id}`} className="px-5 py-3 bg-green-500 mb-3 rounded text-white cursor-pointer">
                            {user.firstName}
                        </Link>
                    </li>) : null
                }
            </ul>

        </div>
    );
}