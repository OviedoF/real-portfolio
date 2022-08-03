import React from 'react'

export default function SubtitleSection({section, number}) {
  return (
    <div className="subtitle_page" id='aboutMe_section'>
        <h2><span>{number}.</span> {section}</h2>
        <hr />

        <style jsx> {
                `
                    .subtitle_page{
                        display: flex;
                        width: 100%;
                        align-items: center;
                    }

                    h2{
                        color: var(--color-vl);
                        font-size: 25px;
                        letter-spacing: 1px;
                        font-weight: 600;
                    }

                    .subtitle_page hr{
                        width: 50%;
                        height: 2px;
                        border: none;
                        background-color: var(--color-vl);
                    }

                    @media only screen and (max-width: 600px){
                        h2{
                            font-size: 20px
                        }
                    }
                `
        }</style>
    </div>
  )
}
