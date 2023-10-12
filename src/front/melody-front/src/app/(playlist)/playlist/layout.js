// playlist layout.js
"use client"

import React, {useState} from 'react';
import Link from "next/link";
import Image from 'next/image';
import plusimg from './../../img/plus.png'
import registrationForm from "./../../../components/user/RegistrationForm";

const Layout = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-800 p-6 text-white">
                {/* Sidebar content goes here */}
                Sidebar
            </div>

            {/* Main Content */}
            <div className="w-3/4 p-6">
                {/* Header */}
                <header className="bg-white p-4 mb-4 shadow grid grid-cols-2">
                    {/* Header content goes here */}
                    <div className="col-span-1">
                        <h1><b>내 라이브러리</b></h1>
                    </div>
                    <div className="col-span-1 flex justify-end space-x-4">
                        {/*Playlist Header*/}
                        <div>
                            <button onClick={openModal}></button>
                            {isModalOpen && (
                                <div className="modal">
                                    <div className="modal-content">
                                        <Link href="/createPlaylist"><Image alt="noimage" src={plusimg} width={50} height={50}></Image></Link>
                                        <button onClick={closeModal}>Close Modal</button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <Link href="/createPlaylist"><Image alt="noimage" src={plusimg} width={50} height={50}></Image></Link>
                    </div>
                </header>

                {/* Main Content */}
                <main className="bg-white p-4 shadow">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;