import React, { useEffect, useState } from 'react'
import Aside from './aside'
import Main from './main'
import Nav from './nav'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'

const Feed = () => {

    const [user, setUser] = useState(undefined)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => setUser(user))

        return () => unsub()
    }, [])


    return (
        <div className='h-screen bg-black overflow-hidden text-white grid grid-cols-[1fr_minmax(300px, 600px)_1fr]'>
            <Nav user={user} />
            <Main user={user} />
            <Aside />
        </div>
    )
}

export default Feed