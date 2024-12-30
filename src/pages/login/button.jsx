import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Button = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                toast.success("Giriş Yapıldı")
                navigate("/feed")
            })
            .catch((err) => {
                toast.error('Hata' + err.code)
            })
    }

    return (
        <button
            onClick={handleLogin}
            className='bg-white flex items-center py-2 px-10 rounded-full text-black hover:bg-gray-300 whitespace-nowrap gap-x-2'>
            <img src="google.png" alt="google logo" className='h-[20px]' />
            <span>Google ile giriş yap</span>
        </button>
    )
}

export default Button