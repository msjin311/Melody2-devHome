"use client"
import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import {data} from "autoprefixer";
import  {UserAccountContext}  from "./../../../components/UserAccountContext";
import { useRouter } from 'next/navigation'
import { usePathname, useSearchParams } from 'next/navigation'
import {useUserContext} from "./../../Context/userAccount"
import axios from "axios";


function Playlist   () {
    const userAccountId = useUserContext()
    const [playlistName, setPlaylistName] = useState('');
    const [description, setDescription] = useState('');
    const [createdDate, setCreatedDate] = useState('');
    const [playlistHashtags, setPlaylistHashtags] = useState('');

    const [playlists, setPlaylists] = useState([]);

    // const  userAccount  = useContext(UserAccountContext);
    const {userAccount,setUserAccount} = useUserContext()

    const playlist = {
        userAccountId,
        playlistName,
        description,
        createdDate,
        playlistHashtags
    };

    useEffect(() => {
        console.log("playlist userAccount object", userAccount);

    }, []);

    const getPlaylistsByUserAccountId = async (e) =>{
        try {
            const response = await axios.get(`/api/playlist/${}`, {
                params: {
                    id: userAccountId,
                },
            });
            const DBplaylists = response.data;
            console.log(DBplaylists);

        } catch (error) {
            console.error('playlist 리스트 실패', error);
        }

    }

    return (
        <>
            <h1>Playlists Page</h1>
            <Link href="/createPlaylist">Create Playlist</Link>

            <div>
                {/*<ul>*/}
                {/*    {playlists.map((playlist, index) => (*/}
                {/*        <li key={index}>{playlist}</li>*/}
                {/*    ))}*/}
                {/*</ul>*/}
            </div>
        </>
    );
}

export default Playlist;
