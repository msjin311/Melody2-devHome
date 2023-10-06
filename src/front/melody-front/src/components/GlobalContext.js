import {createContext, useState} from "react";

const [userState, setUserState] = useState({
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

export const userContext = createContext(userState);