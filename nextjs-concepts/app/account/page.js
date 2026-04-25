import { redirect } from "next/navigation";

export default function Account() {
    const userProfile = null;

    if (userProfile === null) redirect('products?search=product111')

    return (
        <div>
            <p>Account</p>
        </div>
    );
}