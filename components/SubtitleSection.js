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
                        width: 20%;
                        letter-spacing: 1px;
                        font-weight: 600;
                    }

                    .subtitle_page hr{
                        width: 100%;
                        height: 2px;
                        border: none;
                        background-color: var(--color-vl);
                    }
                `
        }</style>
    </div>
  )
}
