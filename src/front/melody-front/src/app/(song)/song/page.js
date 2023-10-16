"use client"

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';

function SongDetail() {
    const router = useRouter();
    const { songId } = router.query.songId;

    const [song, setSong] = useState(null);

    useEffect(() => {
        if (songId) {
            // 여기에서 songId를 사용하여 노래 상세 정보를 가져오는 API 호출을 수행합니다.
            axios.get(`/api/songs/${songId}`)
                .then((response) => {
                    setSong(response.data);
                })
                .catch((error) => {
                    console.error('Failed to fetch song details:', error);
                });
        }
    }, []);

    // if (!song) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div>
            <p>되나나나나나</p>
            <h1>{song.title}</h1>
            <p>가수: {song.artistName}</p>
            <p>장르: {song.genre}</p>
            <p>가사: {song.lyrics}</p>
            {/* 그 외 노래 상세 정보 표시 */}
        </div>
    );
}

export default SongDetail;