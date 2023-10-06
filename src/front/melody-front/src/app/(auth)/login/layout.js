'use client'
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AppRouterContext} from "next/dist/shared/lib/app-router-context.shared-runtime";



const AuthPage = () => {
    const { globalState, setGlobalState } = useContext(AppRouterContext);
    // const [userAccountId, setUserAccountId] = useState(0);
    const [accountId, setAccountId] = useState('');
    const [password, setPassword] = useState('');
    // const [name, setName] = useState('');
    // const [birthDate, setBirthDate] = useState('');
    // const [email, setEmail] = useState('');
    // const [gender, setGender] = useState('Male');
    // const [hashtag, setHashtag] = useState('');



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
            const userAccount = response.data;
            setGlobalState({
                userAccountId: userAccount.userAccountId,
                accountId: userAccount.accountId,
                name: userAccount.name,
                birthDate: userAccount.birthDate,
                email: userAccount.email,
                gender: userAccount.gender,
                password: userAccount.password,
                hashtag: userAccount.hashtag,
            })
            alert('로그인 성공');
            console.log('로그인 성공:', userAccount);
            // setUserAccountId(userAccount.userAccountId);
            // setName(userAccount.name);
            // setBirthDate(userAccount.birthDate);
            // setEmail(userAccount.email);
            // setGender(userAccount.gender);
            // setHashtag(userAccount.userHashtags);
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
            placeholder="id"
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
    </div>
    </div>
)
}

export default AuthPage