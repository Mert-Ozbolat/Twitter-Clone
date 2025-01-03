import React from 'react'
import Modal from '.'
import { doc, updateDoc } from 'firebase/firestore';

const EditModal = ({ isOpen, close, tweet }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const text = e.target[0].defaultValue
        const tweetRef = doc(db, "tweets", tweet.id)

        await updateDoc(tweetRef, {
            'content.text': text,
        })
    }

    return (
        <Modal isOpen={isOpen} close={close}>
            <h1 className='text-2xl'>Edit Modal</h1>

            <form onSubmit={handleSubmit} className='flex flex-col mt-10'>
                <label>Update your tweet</label>
                <textarea
                    type="text"
                    className='mt-3 input resize-y min-h-12 max-h-[250px]'
                    defaultValue={tweet.content.text} />

                <div className='flex justify-end gap-5 mt-10'>
                    <button
                        type='button'
                        onClick={close}>Cancel</button>
                    <button
                        type='submit'
                        className='bg-secondary text-black transition px-3 py-1 rounded-md'>Save</button>
                </div>
            </form>
        </Modal>
    )
}

export default EditModal