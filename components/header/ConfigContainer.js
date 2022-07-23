import React from 'react';
import { faArrowRightFromBracket, faLanguage, faPalette } from '@fortawesome/free-solid-svg-icons';
import ConfigButton from './ConfigButton';

const ConfigContainer = () => {
    const handleHeader = () =>{
        console.log('holi')
    }

    return (
        <div>
            <ConfigButton icon={faPalette} />
            <ConfigButton icon={faLanguage} />
            <ConfigButton icon={faArrowRightFromBracket} action={handleHeader}/>

            <style jsx>{`
                div{
                    width: 20%;
                    display: flex;
                    justify-content: flex-end;
                }
            `}</style>
        </div>
    );
}

export default ConfigContainer;
