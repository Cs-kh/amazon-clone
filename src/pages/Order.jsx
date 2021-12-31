import React from 'react'
import Nav from '../components/Nav'

const Order = () => {
    return (
        <div className='bg-main h-screen '>
            <Nav/>
            <div className="m-8">
                <h1 className='font-bold text-3xl'>Your Orders</h1>
            </div>
        </div>
    )
}

export default Order
