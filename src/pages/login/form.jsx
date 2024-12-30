import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { auth } from '../../firebase'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import ForgotPassword from './forgot-password'



const Form = () => {

    const [isSignUp, setIsSignUp] = useState(false)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: ({ email, password }) => {
            if (isSignUp) {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((res) => {
                        toast.info('Mailinize doğrulama epostası gönderildi lütfen doğrulayın.')
                        sendEmailVerification(res.user)
                        navigate('/feed')
                    })
                    .catch((err) => toast.error('Hata' + err.code))
            } else {
                signInWithEmailAndPassword(auth, email, password)
                    .then(() => {
                        toast.success('Hesaba giriş yapıldı')
                        navigate('/feed')
                    })
                    .catch((err) => toast.error('Hata' + err.code))
            }
        },
    })

    return (
        <>
            <form className='flex flex-col' onSubmit={formik.handleSubmit}>
                <label>Email</label>
                <input type="text" name='email' onChange={formik.handleChange} className='input' />

                <label className='mt-5'>Şifre</label>
                <input type="text" name='password' onChange={formik.handleChange} className='input' />
                <ForgotPassword />

                <button className='mt-10 bg-white text-black rounded-full p-1 font-bold transition hover:bg-gray-300'>
                    {isSignUp ? 'Kaydol' : "Giriş Yap"}
                </button>

                <p className='mt-5'>
                    <span className='text-gray-500'>{isSignUp ? "Hesabınız Varsa" : "Hesabınız Yoksa"}</span>
                    <span
                        onClick={() => setIsSignUp(!isSignUp)}
                        className='cursor-pointer ms-2 text-blue-500 hover:underline'>{isSignUp ? "Giriş Yapın" : "Kaydolun"}</span>
                </p>
            </form>
        </>
    )
}

export default Form