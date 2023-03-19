import React from 'react'

const Success = ({ message, ...args }) => {
    return (
        <div {...args} className='success'>{message ? message : "Setting saved!"}</div>
    )
}

export default Success