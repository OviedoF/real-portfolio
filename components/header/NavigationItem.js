import React from 'react'

export default function NavigationItem({position, text, redirect}) {
  return (
    <li>
        <a href={redirect}> {text} </a>

        <style jsx>{`
            li{
                margin-lefT: 20px;
                overflow: hidden;
            }
            
            a {
                color: var(--text-color);
                font-weight: 500;
                text-decoration: none;
                font-size: 1em;
                position: relative;
                top: 0px;
                text-transform: uppercase;
                display: flex;
                justify-content: center;
                -webkit-transition: all 0.2s ease-in-out;
                transition: all 0.2s ease-in-out;
                animation: appear .5s ease;
            }

            a:hover {
                color: var(--color-l);
            }

            @keyframes appear{
                0%{
                    top: 100%;
                }

                100%{
                    top: 0;
                }
            }
        `}</style>
    </li>
  )
}
