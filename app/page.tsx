//import Image from "next/image";

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1>Welcome to the homepage</h1>
            <div>Homepage</div>
            <SignedIn>
                <Link
                    href="/dashboard"
                    className="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold"
                >
                    Dashboard
                </Link>
            </SignedIn>
            <SignedOut>
                <SignInButton>
                    <button className="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold">
                        Sign in
                    </button>
                </SignInButton>
            </SignedOut>`
        </>
    );
}
