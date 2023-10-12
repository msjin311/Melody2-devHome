"use client"
import React, { useEffect, useState, useContext, useTransition } from 'react';
import Link from 'next/link';
import {data} from "autoprefixer";
import  {UserAccountContext}  from "./../../../components/UserAccountContext";
import { useRouter} from 'next/navigation'
import { usePathname, useSearchParams } from 'next/navigation'
import {useUserContext} from "./../../Context/userAccount"
import axios from "axios";

function Playlist   () {
    // const  userAccount  = useContext(UserAccountContext);
    const {userAccount,setUserAccount} = useUserContext()
    const userAccountId = userAccount.userAccountId
    const [playlistId, setPlaylistId] = useState(0);
    const [playlistName, setPlaylistName] = useState('');
    const [description, setDescription] = useState('');
    const [createdDate, setCreatedDate] = useState('');
    const [playlistHashtags, setPlaylistHashtags] = useState({});

    const [playlists, setPlaylists] = useState([]);
    const router = useRouter()

    //구종
    const [isComponentVisible, setComponentVisible] = useState(false);

    const toggleComponentVisibility = () => {
        setComponentVisible(!isComponentVisible);
    };

    const playlist = {
        playlistId,
        userAccountId,
        playlistName,
        description,
        createdDate,
        playlistHashtags
    };

    // useEffect(() => {
    //     axios.get(`/api/playlist/${userAccountId}`)
    //         .then(response =>{
    //             setPlaylists(response.data)
    //             console.log(playlists);
    //         })
    //         .catch (error =>{
    //             console.error('playlist 리스트 실패', error);
    //         });
    // }, [userAccountId]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        getPlaylistsByUserAccountId()
    }, []);

    useEffect(() => {
        playlists.forEach(function(playlist) {
            console.log(playlist);
        });
    }, [playlists]);

    const getPlaylistsByUserAccountId = (e) =>{
        axios.get(`/api/playlist/playlist/${userAccountId}`)
            .then(response =>{
                setPlaylists(response.data)
            })
            .catch (error =>{
                console.error('playlist 리스트 실패', error);
            });
    }

    return (
        <>
            <h1>Playlists Page</h1>

            <div>
                <ul>
                    {playlists.map((playlist, index) => (
                        <li key={index}>
                            {playlist.playlistName}
                            <Link
                                key={index}
                                href={`/playlist/${playlist.playlistId}`}
                            >
                                <p>{playlist.playlistName}</p>
                            </Link>

                            {/*modal*/}
                            <button onClick={toggleMenu}>Toggle Menu</button>

                            {isMenuOpen && (
                                <div className="menu">
                                    <ul>
                                        <li>Edit Playlist</li>
                                        <li>Delete Playlist</li>
                                    </ul>
                                </div>
                            )}

                            {/* 이벤트를 사용하여 메뉴를 닫을 수 있도록 */}
                            <div onClick={closeMenu} className={isMenuOpen ? "overlay" : ""}></div>

                        </li>
                    ))}
                </ul>
            </div>

            {/*<button type="button" onClick={() => router.push('/createPlaylist')}>*/}
            {/*    create playlist*/}
            {/*</button>*/}

            {/*<Router>*/}
            {/*    <Switch>*/}
            {/*        <Route path="/" exact component={Home} />*/}
            {/*        <Route path="/about" component={createPlaylist} />*/}
            {/*        <Route path="/about" component={regifrom} />*/}
            {/*    </Switch>*/}
            {/*</Router>*/}
        </>
    );
}

export default Playlist;
