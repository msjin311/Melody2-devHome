"use client"
import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import {data} from "autoprefixer";
// import { UserAccountContext } from "./../../../components/UserAccountContext";
import {UserAccountContext} from "./../UserAccountContext"

function Playlist   () {
    const [useraccount_id, setUseraccount_id] = useState('')
    const [playlists, setPlaylists] = useState([]);

    const userAccount = useContext(UserAccountContext);

    useEffect(() => {
        console.log("component playlist", userAccount);
    }, [userAccount]);

    // useEffect(()=>{
    //     fetch("/api/playlist",{
    //         method:"POST",
    //         headers: {
    //             "Content-type": "application/json",
    //         },
    //         body: JSON.stringify(useraccount_id),
    //     }).then((res) => res.json())
    //         .then(data => {
    //             console.log(data)
    //             console.log(typeof data)
    //             setPlaylists(data);
    //         })
    //
    // },[])

    return (
        <>
            <h1>Playlists Page</h1>
            <Link href="/createPlaylist">Create Playlist</Link>
            <h1>{userAccount.accountId}</h1>

            <div>
                <ul>
                    {/*{playlists.map((playlist, index) => (*/}
                    {/*    <li key={index}>{playlist}</li>*/}
                    {/*))}*/}
                </ul>
            </div>
        </>
    );
}

export default Playlist;
