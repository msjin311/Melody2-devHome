"use client"

import Link from "next/link";
import ClientComponent from "../components/ClientComponent";

const Home = () => {
    return (
        <div>
            <h1>Server Component</h1>
            <ClientComponent />
            <h1> <Link href="/login"> test </Link></h1>
            <Link href="/playlist"> playlist </Link>
        </div>
    );
};

export default Home;