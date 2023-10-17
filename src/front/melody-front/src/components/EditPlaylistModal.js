'use client'

import React, {useContext, useEffect, useState} from 'react';
import {useUserContext} from "./UserAccountContext";
import axios from "axios";
import "./EditPlaylistModal.css"


function EditModal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="edit-modal-overlay">
            <div className="edit-modal">
                <div className="modal-content">
                    {children}
                    <button onClick={onClose} className="close-button">
                        수정하기
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditModal;