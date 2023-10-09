"use client"

import Link from "next/link";
import ClientComponent from "../components/ClientComponent";
import {UserAccountProvider} from "../components/UserAccountProvider";
import {useEffect, useState, useContext} from "react";
import {UserAccountContext  } from "../components/UserAccountContext";
import Login from "./../components/user/Login";
import Playlist from "./../components/user/Playlist";
// import {useHistory} from "react-router";

const Home = () => {
    const userAccount = useContext(UserAccountContext);
    // const history = useHistory();

    return (
        <>
            <UserAccountProvider>
                <div>
                    <h1>Server Component</h1>
                    <ClientComponent />
                    <h1> <Link href="/login"> test </Link></h1>
                    <br/>
                    <Link href="/playlist" state={{UserAccountContext}}> playlist </Link>
                    <br/>
                    <Link href="/createPlaylist">Create Playlist</Link>

                    <Login/>
                    <Playlist/>
                </div>
            </UserAccountProvider>
        </>
    );
};

export default Home;