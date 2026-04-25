import Link from "next/link";

const fetchUserDetails = async (userId) => {
    try {
        const apiResponse = fetch(`https://dummyjson.com/users/${userId}`)
        const result = (await apiResponse).json()

        return result;
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}


export default async function UserDetails({ params }) {
    const userId = params.userId
    const userDetails = await fetchUserDetails(userId)


    return (
        <div className="px-3 py-2">
            <h1 className="text-3xl mb-4">User details page</h1>
            <Link href={'/'} className="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">Go Home</Link>
            <table className="mt-5 table-auto">
                <tr>
                    <th>
                        Name:
                    </th>
                    <td>
                        {userDetails?.firstName} {userDetails?.lastName}
                    </td>
                </tr>
                <tr>
                    <th>
                        Age:
                    </th>
                    <td>
                        {userDetails?.age}
                    </td>
                </tr>
                <tr>
                    <th>
                        Email:
                    </th>
                    <td>
                        {userDetails?.email}
                    </td>
                </tr>
                <tr>
                    <th>
                        Phone:
                    </th>
                    <td>
                        {userDetails?.phone}
                    </td>
                </tr>
            </table>
        </div>
    );
}