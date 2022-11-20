import React, { useState, useEffect } from 'react';
import TecnologyCard from './TecnologyCard';
import { useTranslation } from 'react-i18next';

export default function Tecnologies({tecnologies}) {
    const [frontend, setFrontend] = useState([]);
    const [backend, setBackend] = useState([]);
    const [utils, setUtils] = useState([]);
    const [t] = useTranslation("global");

    useEffect(() => {
            const backendData = tecnologies.filter(el => el.type == 'backend');
            const frontendData = tecnologies.filter(el => el.type == 'frontend');
            const utilsData = tecnologies.filter(el => el.type == 'util');

            setFrontend(frontendData);
            setBackend(backendData);
            setUtils(utilsData);
    }, [tecnologies]);

  return (
    <div>
        <h3 data-aos="fade-right" data-aos-duration="500">{t("About.frontend-friends")}</h3>
        <div className='container-tecn'>
            {frontend.map((el, index) =>{ 
                return <TecnologyCard el={el} key={el._id} index={index}/>
            })}
        </div>

        <h3 data-aos="fade-right" data-aos-duration="500">{t("About.backend-friends1")} <span> {t("About.backend-friends2")}</span> {t("About.backend-friends3")}</h3>
        <div className='container-tecn'>
            {backend.map((el, index) =>{ 
                return <TecnologyCard el={el} key={el._id} index={index}/>
            })}
        </div>

        <h3 data-aos="fade-right" data-aos-duration="500">{t("About.utils-friends")}</h3>
        <div className='container-tecn'>
            {utils.map((el, index) =>{ 
                return <TecnologyCard el={el} key={el._id} index={index}/>
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

            @media only screen and (max-width: 600px) {
                .container-tecn{
                    flex-wrap: wrap;
                    overflow: scroll;
                }
            }

            @media only screen and (max-width: 425px){
                h3{
                    font-size: 18px;
                }
            }
        `}</style>
    </div>
  )
}
