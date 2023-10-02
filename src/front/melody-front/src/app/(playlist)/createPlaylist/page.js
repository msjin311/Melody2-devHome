"use client"
import React, {useEffect, useState} from 'react';

function Playlistform() {
    // Define state variables for form fields
    const [useraccount_id, setUseraccount_id] = useState('');
    const [playlist_name, setPlaylist_name] = useState('');
    const [description, setDescription] = useState('');
    const [created_date, setCreated_date] = useState('');
    const [playlist_hashtags, setPlaylist_hashtags] = useState('');

    useEffect(() => {
        const created_date = new Date().toLocaleDateString();
        setCreated_date(created_date);
    }, []);

    const handlePlaylist_name = (e) => {
        setPlaylist_name(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handlePlaylist_hashtags = (e) => {
        setCreated_date(e.target.value)
    }

    const handleCreatePlaylist = async () => {
        e.preventDefault()

        const playlist = {
            useraccount_id,
            playlist_name,
            description,
            created_date,
            playlist_hashtags
        };

        try{
            const response = await fetch('/api/create-playlist',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(playlist),
            });

            if(response.ok) {
                alert('create playlist successfully')
            } else {
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

                <label>플레이리스트 이름</label><br/>
                <input
                    type="text"
                    name="input_playlist_name"
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
