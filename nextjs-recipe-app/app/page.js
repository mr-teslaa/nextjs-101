import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"


export default function Home() {
	return (
		<main className="px-5 py-10 text-center">
			<h1 className=" text-5xl">NitFo Recipe</h1>
			<Link href={'/recipes'} className={`${buttonVariants({ variant: "outline" })} mt-5`}>Start reading recipes</Link>

		</main >
	);
}
