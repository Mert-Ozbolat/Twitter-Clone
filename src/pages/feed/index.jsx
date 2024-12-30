import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../../firebase'
import { toast } from 'react-toastify'

const Feed = () => {

    const handleClick = () => {
        signOut(auth)
            .then(() => toast.info("Çıkış Yapıldı"))
    }

    if (!auth.currentUser.emailVerified) return <h1>Bu sayfa görünemez, lütfen mail adresinizi doğrulayınız</h1>

    return (
        <div>
            <h1>Akış Sayfası</h1>

            <button onClick={handleClick}>Çıkış Yap</button>
        </div>
    )
}

export default Feed