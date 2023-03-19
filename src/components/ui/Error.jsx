import React from 'react'

const Error = ({ message, ...args }) => {
    return (
        <div {...args}  className='error'>{message ? message : "Something went wrong"}</div>
    )
}

export default Error