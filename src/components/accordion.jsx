import React from 'react';
import { useState } from 'react';
import './../css/accordion.scss'

export const Accordion =  ({accordion}) => {
    const [openId, setId] = useState(null);

    const clickHandler = (id) => {
        if(id === openId) setId(null)
        else setId(id)
    }
  return (
  
        <ul className='accordion'>
            {accordion.map((accordionItem, id) => {
                return(
                    <li className='accordion-item' key={id}>
                        <button className='accordion-header' onClick={()=> clickHandler(id)}>{accordionItem.header}</button>
                        <div className={`accordion-collapse ${id===openId?"open":""}`}>
                            <div className='accordion-body'>{accordionItem.text}</div>
                        </div>
                    </li>
                );
            })}
        </ul>
  
  );
};
