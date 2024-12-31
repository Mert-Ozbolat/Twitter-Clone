import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase';
import PageLoader from '../loader/page-loader';
import { toast } from 'react-toastify';

const Protected = () => {

    const [user, setUser] = useState();


    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => setUser(user))

        return () => unsub()
    }, [])


    if (user === undefined) {
        return <PageLoader />

    }

    if (user === null || !user?.emailVerified) {

        if (!user?.emailVerified) toast.info('Lütfen mail adresinizi doğrulayınız')
        return <Navigate to='/' replace />

    }

    return (
        <Outlet />
    )
}

export default Protected