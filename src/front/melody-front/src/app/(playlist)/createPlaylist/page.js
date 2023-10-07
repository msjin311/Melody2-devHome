"use client"
import React, {useContext, useEffect, useState} from 'react';

function Playlistform(props) {
    // Define state variables for form fields
    // const [userAccountId, setUserAccountId] = useState(0); // useraccount_id를 상태로 변경

    const [playlistName, setPlaylistName] = useState('');
    const [description, setDescription] = useState('');
    const [createdDate, setCreatedDate] = useState('');
    const [playlistHashtags, setPlaylistHashtags] = useState('');

    useEffect(() => {
        const createdDate = new Date().toISOString().slice(0, 10);
        setCreatedDate(createdDate);
    }, [createdDate]);

    const handlePlaylist_name = (e) => {
        setPlaylistName(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handlePlaylist_hashtags = (e) => {
        setPlaylistHashtags(e.target.value)
    }

    // const handlePlaylist_useraccount_id = (e) => {
    //     const userAccountId = parseInt(e.target.value);
    //     setUserAccountId(userAccountId);
    // }

    const handleCreatePlaylist = async (e) => {
        e.preventDefault()


        const playlist = {
            // userAccountId,
            playlistName,
            description,
            createdDate,
            playlistHashtags
        };

        try{
            const response = await fetch('/api/playlist',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(playlist),
            });

            if(response.ok) {
                console.log("유저어카운트",props.userAccountId)
                console.log(playlist)
                alert('create playlist successfully')
            } else {
                console.log("유저어카운트",props.userAccountId)
                console.log(playlist)
               alert('failed playlist Please try again')
            }


        } catch(error) {
            console.error('Error:', error);
        }


    }


    return (
        <>
            <form onSubmit={handleCreatePlaylist}>
                <h1>Playlist Create Page</h1>

                {/*<label>유저어카운트 temp</label><br/>*/}
                {/*<input*/}
                {/*    type="text"*/}
                {/*    name="input_playlist_account_id"*/}
                {/*    onChange={handlePlaylist_useraccount_id}*/}
                {/*/><br/>*/}

                <label>플레이리스트 이름</label><br/>
                <input
                    type="text"
                    name="input_playlistName"
                    onChange={handlePlaylist_name}
                /><br/>

                <label>설명</label><br/>
                <input
                    type="text"
                    name="input_description"
                    onChange={handleDescription}
                /><br/>

                <label>해쉬태그</label><br/>
                <input
                    type="text"
                    name="input_playlist_hashtags"
                    onChange={handlePlaylist_hashtags}
                /><br/><p/>


                <input
                    type="submit"
                    value="플레이리스트 생성"
                /><br/>

            </form>

        </>
    );
}


export default Playlistform;
