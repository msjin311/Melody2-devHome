"use client"
import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import {data} from "autoprefixer";
import { UserAccountContext } from "./../../../components/UserAccountContext";
import { useRouter } from 'next/navigation'
import { usePathname, useSearchParams } from 'next/navigation'


function Playlist   () {
    const [useraccount_id, setUseraccount_id] = useState('')
    const [playlists, setPlaylists] = useState([]);

    const { userAccount } = useContext(UserAccountContext);

    useEffect(() => {
        console.log("Global place playlist", userAccount);

    }, []);

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
