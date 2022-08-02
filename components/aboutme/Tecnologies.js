import React, { useState, useEffect } from 'react';
import TecnologyCard from './TecnologyCard';

export default function Tecnologies({tecnologies}) {
    const [frontend, setFrontend] = useState([]);
    const [backend, setBackend] = useState([]);

    useEffect(() => {
        const backendData = tecnologies.filter(el => el.type == 'backend');
        const frontendData = tecnologies.filter(el => el.type == 'frontend');

        setFrontend(frontendData);
        setBackend(backendData);
    }, [tecnologies]);

  return (
    <div>
        <h3>My friends as Front-End are...</h3>
        <div className='container-tecn'>
            {frontend.map(el =>{ 
                return <TecnologyCard el={el} key={el._id}/>
            })}
        </div>

        <h3>And, in the <span>dark side</span> Back-End are...</h3>
        <div className='container-tecn'>
            {backend.map(el =>{ 
                return <TecnologyCard el={el} key={el._id}/>
            })}
        </div>

        <style jsx>{`
            h3{
                margin-top: 40px;
                font-size: 22px;
                font-style: italic;
                text-align: center;
            }
            span{
                text-decoration: line-through;
            }
            .container-tecn{
                width: 100%;
                justify-content: center;
                display: flex;
            }
        `}</style>
    </div>
  )
}
