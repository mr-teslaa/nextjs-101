'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter()

	const handleNav = () => {
		router.push('products')
	}

	return (
		<main className="p-24">
			<div className="pb-7">
				<p className="py-5 text-3xl">Welcome to nextjs app</p>
				<div className="flex justify-start gap-2">
					<Link href={'products'} className="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">Products</Link>

					<Link href={'server-data-fetch'} className="py-2 px-5 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-75">All User</Link>

					<Link href={'profile'} className="py-2 px-5 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-75">Profile</Link>

					<Link href={'account'} className="py-2 px-5 bg-slate-950 text-white font-semibold rounded-full shadow-md hover:bg-slate-700 focus:outline-none focus:ring focus:ring-slate-400 focus:ring-opacity-75">Account</Link>

					<Link href={'account/membership'} className="py-2 px-5 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-75">Membership</Link>

					<Link href={'cart'} className="py-2 px-5 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-400 focus:ring-opacity-75">Cart</Link>
				</div>
			</div>

			<div>
				<p className="py-3 text-3xl">Route using "useRoute"</p>
				<button onClick={handleNav} className="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
					Products
				</button>
			</div>
		</main>
	);
}
