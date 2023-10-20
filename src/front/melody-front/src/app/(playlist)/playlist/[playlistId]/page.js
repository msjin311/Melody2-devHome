"use client"

import React, {useEffect, useState} from "react";
import { usePathname, useSearchParams } from "next/navigation"
import { useParams } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";
import plusImg from "../../../../app/img/plus.png";
import meatballMenu from "../../../../app/img/meatballs-menu.svg";
import EditModal from "../../../..//components/EditPlaylistModal";
import axios from "axios";

function PlaylistDatail( ) {
    const path = usePathname();
    const searchParams = useSearchParams();
    const params = useParams();

    const getItem = searchParams.get('playlist')



    const [playlistId, setPlaylistId] = useState(0);
    const [playlist, setPlaylist] = useState([]);
    console.log('path',path);
    console.log('searchparams',searchParams)
    console.log('params',params)

    const getSongsById = (playlistId) => {
        axios.get(`/api/playlist/songs/${playlistId}`)
            .then(r =>{
                console.log(playlistId)
                if(r.data){
                    setPlaylist(r.data);
                    console.log('data',r.data);
                } else{

                }
                console.log('playlist 리스트업 성공')
            })
            .catch(err =>{
            console.error(err);
            })
    }

    useEffect(() => {
        // setPlaylistId(parseInt(getItem))
        setPlaylistId(parseInt(params.playlistId))
        getSongsById(params.playlistId)
    }, [params.playlistId, path, searchParams]);


    return(
        <>
            <p>Hello Playlist Detail</p>
            <p>path : { path } </p>
            <p>params : {params.playlistId }</p>
            <div>
                The playlist ID is: {playlistId}
            </div>
            {/* Header */}
            <header className="bg-white p-4 mb-4 shadow grid grid-cols-2">
                {/* Header content goes here */}
                <div className="col-span-1">
                    <h1><b>Playlist Detail Page</b></h1>
                </div>
                <div className="col-span-1 flex justify-end space-x-4">
                    <Link href="/createPlaylist"><Image alt="noimage" src={plusImg} width={50} height={50}></Image></Link>
                </div>
            </header>
            <div className="bg-white p-4 mb-4 shadow grid grid-cols-2">
                <h1>Songs</h1><br/>
                {/*<ul>*/}
                {/*    {playlist.songs.map((song, index) => (*/}
                {/*        <li key={index}>*/}
                {/*            <p>Title: {song.title}</p>*/}
                {/*            <p>Song Info: {song.songInfo}</p>*/}
                {/*        </li>*/}
                {/*    ))}*/}
                {/*</ul>*/}
                <div>
                {playlist.songs && playlist.songs.map(song => (
                    <li key={song.songId}>
                        <div className="flex space-x-32">
                            <span>Title: {song.title}</span>
                            <span>Artist: {song.artist.groupName}</span>
                        </div>
                    </li>
                ))}
                </div>

            </div>



        </>
        )
}

export default PlaylistDatail;