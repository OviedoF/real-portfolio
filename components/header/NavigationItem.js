import React from 'react'

export default function NavigationItem({position, handleAppear, setDotOpacity, text}) {
  return (
    <li onMouseEnter={(e) => handleAppear(position)} >
        <a href="" onMouseLeave={() => setDotOpacity(0)}> {text} </a>

        <style jsx>{`
            li{
                margin-lefT: 20px;
            }
            
            a {
                color: var(--text-color);
                font-weight: 500;
                text-decoration: none;
                font-size: 1.2em;
                text-transform: uppercase;
                display: flex;
                justify-content: center;
                -webkit-transition: all 0.2s ease-in-out;
                transition: all 0.2s ease-in-out;
            }

            a:hover {
                color: var(--light-color);
            }
        `}</style>
    </li>
  )
}
