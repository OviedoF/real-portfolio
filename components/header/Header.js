import React from 'react';
import Image from 'next/image';
import logo from '../../assets/images/image.png';
import Navigation from './Navigation';
import ConfigContainer from './ConfigContainer';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Image src={logo} width={100} height={100} layout='fixed' srcSet={'1x'} objectFit='contain' style={{cursor: 'pointer'}} alt="logo"/>
      </div>

      <Navigation />

      <ConfigContainer />

        <style jsx>{`
            header{
                position: relative;
                display: flex;
                background-color: var(--dark);
                width: 100%;
                height: 60px;
            }    

            .logo{
              display: flex;
              justify-content: center;
              align-items: center;
              width: 13%;
              height: 100%;
              position: relative;
            }
        `}</style>
    </header>
  )
}
