'use client'
import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";
import {useUserContext} from "./../../Context/userAccount"
// import { useNavigate } from 'react-router-dom';
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'


const AuthPage = () => {
    const [userAccountId, setUserAccountId] = useState(0);
    const [accountId, setAccountId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('Male');
    const [userHashtags, setUserHashtags] = useState('');

    const {userAccount, setUserAccount} = useUserContext();
    const router = useRouter()

    useEffect(() => {
        console.log("login userAccount object", userAccount);
    }, [userAccount]); // userAccount가 업데이트될 때만 실행됩니다.

    const handleLogin = async (e) => {
        e.preventDefault()

        try{
            const response = await axios.get('/api/user-accounts/login',{
                params: {
                    id: accountId,
                    password: password,
                },
            })

            //로그인 성공
            const DBuserAccount = response.data;
            alert('로그인 성공');
            console.log('로그인 성공:', DBuserAccount);

            setUserAccountId(DBuserAccount.userAccountId);
            setName(DBuserAccount.name);
            setBirthDate(DBuserAccount.birthDate);
            setEmail(DBuserAccount.email);
            setGender(DBuserAccount.gender);
            setUserHashtags(DBuserAccount.userHashtags);

            // const jsonuserAccount = JSON.stringify(DBuserAccount)
            setUserAccount(DBuserAccount)
            // const jsonuserAccount = JSON.stringify(DBuserAccount)
            // console.log("josn",jsonuserAccount)




        } catch (error) {
            //로그인 실패
            console.error('로그인 실패', error)
        }

    }


    return (
    <div className="py-8">
    <h1 className="text-3xl font-bold mb-4">Authentication Page</h1>
    <div className="flex flex-col space-y-4">
    {/*<input*/}
    {/*    type="email"*/}
    {/*placeholder="Email"*/}
    {/*className="px-4 py-2 border border-gray-300 rounded"*/}
    {/*/>*/}
    <form onSubmit={handleLogin}>
        <input
            type="text"
            placeholder="ID"
            className="px-4 py-2 border border-gray-300 rounded"
            onChange={(e) => setAccountId(e.target.value)}
        />
        <input
            type="password"
        placeholder="Password"
        className="px-4 py-2 border border-gray-300 rounded"
            onChange={(e) => setPassword(e.target.value)}
        />
        <input
        className="px-4 py-2 bg-blue-500 text-white rounded"
        type="submit"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Sign In
        </button>
    </form>
        <button type="button" onClick={() => router.push('/playlist')}>
            Playlist
        </button>
    </div>
    </div>
)
}

export default AuthPage