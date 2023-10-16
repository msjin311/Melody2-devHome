"use client"

import React, {useEffect, useState} from "react";
import { usePathname, useSearchParams } from "next/navigation"
import { useParams } from 'next/navigation'

function PlaylistDatail( ) {
    const path = usePathname();
    const searchParams = useSearchParams()
    const params = useParams()

    const getItem = searchParams.get('playlist')

    const [playlistId, setPlaylistId] = useState(0)
    console.log('path',path);
    console.log('searchparams',searchParams)
    console.log('params',params)


    useEffect(() => {
        // setPlaylistId(parseInt(getItem))
        setPlaylistId(params.playlistId)
    }, [path, searchParams ]);
    return(
        <>
            <p>Hello Playlist Detail</p>
            <p>path : { path } </p>
            <div>
                The playlist ID is: {playlistId}
            </div>
        </>
        )
}

export default PlaylistDatail;