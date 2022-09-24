import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Panel = () => {
    const themeActive = useSelector(state => state.themeActive);
    
    return (
        <main>
           <Link href="/admin/add-project">
            <div>
                Add Project
            </div>
            </Link> 

            <Link href="/admin/add-tecnology">
            <div>
                Add Tecnology
            </div>
            </Link> 

            <style jsx>{`
                main{
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: var(--color-md); 
                    --color-vl: ${themeActive.color_vl} ;
                    --color-l: ${themeActive.color_l};
                    --color-md: ${themeActive.color_md};
                    --color-ldark: ${themeActive.color_ldark};
                    --color-dark: ${themeActive.color_dark};
                    --color-verydark: ${themeActive.color_vdark};
                    --text-color: ${themeActive.text_color};
                }  

                div {
                    cursor: Pointer;
                }
            `}</style>
        </main>
    );
}

export default Panel;
