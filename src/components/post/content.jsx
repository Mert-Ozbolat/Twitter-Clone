import React from 'react'

const Content = ({ data }) => {
    return (
        <div className='my-1'>
            {data.text && <p>{data.text}</p>}
            {data.image && <img src={data.image} className='rounded-xl' />}
        </div>
    )
}

export default Content