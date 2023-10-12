"use client"

import React, {useEffect, useState} from "react";
import { usePathname, useSearchParams } from "next/navigation"

function PlaylistDatail( ) {
    const path = usePathname();
    const searchParams = useSearchParams()

    const getItem = searchParams.get('playlist')

    const [playlistId, setPlaylistId] = useState(0)
    console.log(path);
    console.log(searchParams)


    useEffect(() => {
        setPlaylistId(parseInt(getItem));
    }, [path, searchParams ]);
    return(
        <>
            <p>Hello Playlist Detail</p>
            <p>path : { path } </p>
        </>
        )
}

export default PlaylistDatail;