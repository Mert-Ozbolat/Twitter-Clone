import React from 'react'
import { FaRegComment, FaRegHeart, FaRetweet } from 'react-icons/fa'
import { FaShareNodes } from 'react-icons/fa6'

const Buttons = ({ tweet }) => {
    return (
        <div className='flex justify-between items-center'>

            <button className='post-icon hover:text-blue-400 hover:bg-blue-400/30'>
                <FaRegComment />
            </button>

            <button className='post-icon hover:text-green-400 hover:bg-green-400/30'>
                <FaRetweet />
            </button>

            <div className='flex items-center gap-2 hover:text-red-400'>
                <button className='post-icon hover:bg-red-400/30 '>
                    <FaRegHeart />
                    {tweet.likes.length}
                </button>
            </div>

            <button className='post-icon hover:text-blue-400 hover:bg-blue-400/30'>
                <FaShareNodes />
            </button>

        </div>
    )
}

export default Buttons