import { FaHeart, FaRegComment, FaRegHeart, FaRetweet } from 'react-icons/fa'
import { FaShareNodes } from 'react-icons/fa6'
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'
import { db, auth } from '../../firebase/index'


const Buttons = ({ tweet }) => {

    const isLiked = tweet.likes.includes(auth.currentUser.uid)

    const toogleLike = () => {
        const tweetRef = doc(db, 'tweets', tweet.id)
        updateDoc(tweetRef, {
            likes: isLiked ? arrayRemove(tweet.user.id) : arrayUnion(tweet.user.id)
        })
    }


    return (
        <div className='flex justify-between items-center text-zinc-500'>

            <button className='post-icon hover:text-blue-400 hover:bg-blue-400/20'>
                <FaRegComment />
            </button>

            <button className='post-icon hover:text-green-400 hover:bg-green-400/20'>
                <FaRetweet />
            </button>

            <button className='flex items-center hover:text-pink-500 relative' onClick={toogleLike}>
                <div className='post-icon hover:bg-pink-400/20 '>
                    {isLiked ? <FaHeart className='text-pink-700' /> : <FaRegHeart />}
                </div>
                <span className={`${isLiked && "text-pink-700"} absolute -end-1`}>{tweet.likes.length}</span>
            </button>

            <button className='post-icon hover:text-blue-400 hover:bg-blue-400/20'>
                <FaShareNodes />
            </button>

        </div>
    )
}

export default Buttons