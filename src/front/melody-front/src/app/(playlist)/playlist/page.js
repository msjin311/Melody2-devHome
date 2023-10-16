"use client"
import React, { useEffect, useState, useContext, useTransition } from 'react';
import Link from 'next/link';
import {data} from "autoprefixer";
import  {UserAccountContext}  from "./../../../components/UserAccountContext";
import { usePathname, useSearchParams } from 'next/navigation'
import {useUserContext} from "./../../Context/userAccount"
import axios from "axios";
import Image from "next/image";
import meatballMenu from '../../img/meatballs-menu.svg'
import plusImg from "../../img/plus.png";
import '../../../css/Playlistcss.css'

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

    //popup menu sector
    const [popMenuOpen, setPopupMenuOpen] = useState(Array(playlists.length).fill(false));

    const toggleMenu = (index) => {
        const updatedMenuOpen = [...popMenuOpen];
        updatedMenuOpen[index] = !updatedMenuOpen[index];
        setPopupMenuOpen(updatedMenuOpen);
    };

    const closeMenu = (index) => {
        const updatedMenuOpen = [...popMenuOpen];
        updatedMenuOpen[index] = false;
        setPopupMenuOpen(updatedMenuOpen);
    };


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

    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };
    //
    // const closeMenu = () => {
    //     setIsMenuOpen(false);
    // };

    useEffect(() => {

        getPlaylistsByUserAccountId()

    }, []);

    useEffect(() => {
        playlists.forEach(function(playlist) {
            console.log(playlist);
            if(playlists == null){
                setPlaylists([])
            }
        });
    }, [playlists]);

    const getPlaylistsByUserAccountId = (e) =>{
        axios.get(`/api/playlist/playlist/${userAccountId}`)
            .then(response =>{
                if(response.data){
                    setPlaylists(response.data);
                } else{
                    setPlaylists([]);
                }
                console.log('playlist 리스트 성공')
            })
            .catch (error =>{
                console.error('playlist 리스트 실패', error);
                setPlaylists([]);
            });
    }

    const deletePlaylist = (props) => {
        axios.delete(`/api/playlist/${props}`)
            .then(response =>{
                console.log('playlist delete success')

                const updatedPlaylists = playlists.filter(playlist => playlist.playlistId !== props);
                setPlaylists(updatedPlaylists)
        })
            .catch(error => {
                console.error('playlist delelte fail', error)
            })
    }

    return (
        <>
            {/* Header */}
            <header className="bg-white p-4 mb-4 shadow grid grid-cols-2">
                {/* Header content goes here */}
                <div className="col-span-1">
                    <h1><b>내 라이브러리</b></h1>
                </div>
                <div className="col-span-1 flex justify-end space-x-4">
                    {/*Playlist Header*/}
                    {/*<div>*/}
                    {/*    <button onClick={openModal}></button>*/}
                    {/*    {isModalOpen && (*/}
                    {/*        <div className="modal">*/}
                    {/*            <div className="modal-content">*/}
                    {/*                <Link href="/createPlaylist"><Image alt="add image" src={plusImg} width={50} height={50}></Image></Link>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    )}*/}
                    {/*</div>*/}
                    <Link href="/createPlaylist"><Image alt="noimage" src={plusImg} width={50} height={50}></Image></Link>

                </div>
            </header> {/*<button onClick={closeModal}>Close Modal</button>*/}


            <h1>Playlists Page</h1>

            <div>
                <ul>
                    {playlists.map((playlist, index) => (
                        <li key={index}>
                            {playlist.playlistName}
                            <div className="button-wrapper">
                                <Link
                                    key={index}
                                    href={`/playlist/${playlist.playlistId}`}
                                >
                                    <p>{playlist.playlistName}</p>
                                </Link>
                                {/*<button aria-haspopup="menu" data-testid="more-button" className="Button-sc-1dqy6lx-0 jVIpUU" aria-label="내 플레이리스트 #2에 대한 추가 옵션" data-encore-id="buttonTertiary" aria-expanded="false"><span aria-hidden="true" className="IconWrapper__Wrapper-sc-16usrgb-0 hYdsxw"><svg role="img" height="32" width="32" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 haNxPq"><path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg></span></button>*/}

                                {/*popup*/}
                                <div className="button-wrapper">
                                    <button onClick={() => toggleMenu(index)}>
                                        <Image src={meatballMenu} alt="meatball" />
                                    </button>
                                </div>
                            </div>

                            {popMenuOpen[index] && (
                                <div className="popup-menu">
                                    <ul>
                                        <li>Edit Playlist</li>
                                        <li>
                                            <span onClick={() => deletePlaylist(playlist.playlistId)}>Delete Playlist</span>
                                        </li>
                                    </ul>
                                </div>
                            )}

                            {/* 이벤트를 사용하여 메뉴를 닫을 수 있도록 */}
                            <div onClick={() => closeMenu(index)} className={popMenuOpen[index] ? "overlay" : ""}></div>
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
