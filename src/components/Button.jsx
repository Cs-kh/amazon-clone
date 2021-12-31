import React from 'react'

const Button = ({cardInfoHandler,title,width}) => {


    return (
        <button onClick={cardInfoHandler} className={`block mx-auto mt-5 bg-button px-3 py-0.5 ${width}`}>{title}</button>

    )
}

export default Button
