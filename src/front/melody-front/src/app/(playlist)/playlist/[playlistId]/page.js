"use client"

import React, {useEffect, useState} from "react";
import { usePathname, useSearchParams } from "next/navigation"
import { useParams } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";
import "../../../../../public/css/playlistdetail.css"
import plusImg from "../../../../app/img/plus.png";
import axios from "axios";
import DeleteSongFromPlaylist from "../../../../components/playlist/DeleteSongFromPlaylist";
import AddSongToPlaylist from "../../../../components/playlist/addSongToPlaylist";


function PlaylistDatail( ) {
    const path = usePathname();
    const searchParams = useSearchParams();
    const params = useParams();

    const getItem = searchParams.get('playlist')



    const [playlistId, setPlaylistId] = useState(0);
    const [songId, setSongId] = useState(0);
    const [playlist, setPlaylist] = useState([]);
    const [songs, setSongs] = useState([]);
    console.log('path',path);
    console.log('searchparams',searchParams)
    console.log('params',params)
    console.log('playlistId 변수', playlistId)
    console.log('songId', songId)
    console.log("songs",playlist.songs)

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

    const handleDeleteSuccess = () => {
        // 삭제 성공 시, 플레이리스트 데이터를 다시 불러와서 상태를 업데이트
        getSongsById(playlistId);
    };

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
            <div className="bg-white p-4 mb-4 shadow">
                <h1>Songs</h1><br/>
                <ul className="songlist">
                    {playlist.songs && playlist.songs.map((song, index) => (
                        <li key={index}>
                            <span>Title: {song.title}</span>
                            <span>Group: {song.artist.groupName}</span>
                            <span>Artist: {song.soloArtist.singerName}</span>
                            <span>Song Info: {song.songInfo}</span>
                            {/*<span className="deleteSongButton"><Image src={CloseImg} alt="noimage"></Image></span>*/}
                            <span className="deleteSongButton"><DeleteSongFromPlaylist playlistId={playlistId} songId={song.songId} onDeleteSuccess={handleDeleteSuccess} ></DeleteSongFromPlaylist></span>
                        </li>
                    ))}
                </ul>
                {/*<div>*/}
                {/*{playlist.songs && playlist.songs.map(song => (*/}
                {/*    <li key={song.songId}>*/}
                {/*        <div className="flex space-x-32">*/}
                {/*            <span>Title: {song.title}</span>*/}
                {/*            <span>Artist: {song.artist.groupName}</span>*/}
                {/*        </div>*/}
                {/*    </li>*/}
                {/*))}*/}
                {/*</div>*/}

                {/*Usage example*/}
                {/*<AddSongToPlaylist playlistId={playlistId} songId={songId}></AddSongToPlaylist>*/}

            </div>
        </>
        )
}

export default PlaylistDatail;