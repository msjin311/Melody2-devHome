"use client"

import Link from "next/link";
import ClientComponent from "../components/ClientComponent";
import UserAccountProvider , {UserAccountContext} from "../components/UserAccountContext";
import {useEffect, useState, useContext} from "react";
import Login from "./../components/user/Login";
import Playlist from "./../components/user/Playlist";
import {UserAccountContextProvider} from "./../app/Context/userAccount";


const Home = () => {
    const userAccount = useContext(UserAccountContext);

    return (
        <>
            <UserAccountContextProvider>
                <div>
                    <h1>Server Component</h1>
                    <ClientComponent />
                    <h1> <Link href="/login"> test </Link></h1>
                    <br/>
                    <Link href="/playlist"> playlist </Link>
                    <br/>
                    <Link href="/createPlaylist">Create Playlist</Link>

                    {/*<Login/>*/}
                    {/*<Playlist/>*/}
                </div>
            </UserAccountContextProvider>
        </>
    );
};

export default Home;