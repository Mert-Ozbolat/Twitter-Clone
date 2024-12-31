import React, { useRef, useState } from 'react'
import Modal from '../../components/modal'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../firebase'
import { toast } from 'react-toastify'

const ForgotPassword = () => {

    const [isOpen, setIsOpen] = useState(false)
    const inputRef = useRef()

    const handleReset = (e) => {
        e.preventDefault();
        const email = inputRef.current.value
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.info(
                    "Mailinize şifre sıfırlama bağlantısı gönderildi. Lütfen kontrol edin"
                )
                setIsOpen(false)
            })
            .catch(() => {
                toast.error("Mail gönderilemedi")
            })
    }

    return (
        <>
            <span
                className='flex  justify-end mt-2 text-end text-sm cursor-pointer text-gray-500 hover:text-gray-400'
                onClick={() => setIsOpen(true)}>Şifreni mi unuttun?</span>

            <Modal isOpen={isOpen} close={() => setIsOpen(false)}>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-3xl'>Şifreni mi unuttun?</h1>

                    <p className='text-gray-400'>Email adresinize bir şifre değiştirme bağlantısı gönderilecek</p>

                    <input type="text" className='mt-5 input' ref={inputRef} />

                    <button onClick={handleReset} className='bg-white hover:bg-gray-300 transition text-black rounded-full mt-8 py-1'>Mail Gönder</button>

                    <button className='bg-white hover:bg-gray-300 transition text-black rounded-full mt-4 py-1'>iptal</button>
                </div>
            </Modal>
        </>
    )
}

export default ForgotPassword