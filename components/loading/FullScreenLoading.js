import React from 'react'
import HashLoader from 'react-spinners/HashLoader'

export default function FullScreenLoading({loader}) {
  return (
    <div>
        <HashLoader loading={true} color={'#FEFEFE'} size={80}/>

        <style jsx>{`
            div{
                width: 100vw;
                height: 100vh;
                background-color: #00000090;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                z-index: 999999999999999999;
                position: fixed;
                top: 0;
                left: 0;
            }
        `}</style>
    </div>
  )
}
