"use client"

import Link from "next/link";
import ClientComponent from "../components/ClientComponent";
import React, { createContext, useContext, useState } from 'react';

const [globalState, setGlobalState] = useState({
    userAccountId: 0,
    name: '',
    accountId: '',
    birthDate: '',
    email: '',
    gender: '',
    password: '',
    hashtag: '',
    // 다른 전역 상태 변수들을 여기에 추가할 수 있습니다.
});

export const AppContext = createContext(globalState);

export const AppProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState({
        userAccountId: 0,
        name: '',
        accountId: '',
        birthDate: '',
        email: '',
        gender: '',
        password: '',
        hashtag: '',
        // 다른 전역 상태 변수들을 여기에 추가할 수 있습니다.
    });
    return (
        <AppContext.Provider value={{ globalState, setGlobalState }}>
            {children}
        </AppContext.Provider>
    );
};

const Home = () => {
    return (
        <>
            <AppProvider>
                <div>
                    <h1>Server Component</h1>
                    <ClientComponent />
                    <h1> <Link href="/login"> test </Link></h1>
                    <Link href="/playlist"> playlist </Link>
                    <Link href="/createPlaylist">Create Playlist</Link>
                </div>
            </AppProvider>
        </>
    );
};

export default Home;