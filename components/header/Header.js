import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../assets/images/image.png';
import Navigation from './Navigation';
import { useSelector } from 'react-redux';

export default function Header({}) {
  const themeActive = useSelector(state => state.themeActive);
  
  return (
    <header style={{backgroundColor: `${themeActive.color_dark}`}}>

      <Navigation />

        <style jsx>{`
              header{
                z-index: 9999;
                position: fixed;
                display: flex;
                width: 100%;
                height: 60px;
                --color-vl: ${themeActive.color_vl} ;
                --color-l: ${themeActive.color_l};
                --color-md: ${themeActive.color_md};
                --color-ldark: ${themeActive.color_ldark};
                --color-dark: ${themeActive.color_dark};
                --color-verydark: ${themeActive.color_vdark};
                --text-color: ${themeActive.text_color};
            }    

            .logo{
              display: flex;
              justify-content: center;
              align-items: center;
              width: 13%;
              height: 100%;
              position: absolute;
            }
        `}</style>
    </header>
  )
}