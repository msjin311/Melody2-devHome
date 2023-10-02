"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {data} from "autoprefixer";

function Playlist   () {
    const [useraccount_id, setUseraccount_id] = useState('')
    const [playlists, setPlaylists] = useState([]);

    useEffect(()=>{
        fetch("api/get-playlist",{
            method:"POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(useraccount_id),
        }).then((res) => res.json())
            .then(data => {
                console.log(data)
                console.log(typeof data)
                setPlaylists(data);
            })

    })

    return (
        <>
            <h1>Playlists Page</h1>
            <Link href="/createPlaylist">Create Playlist</Link>

            <div>
                <ul>
                    {playlists.map((playlist, index) => (
                        <li key={index}>{playlist}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Playlist;
