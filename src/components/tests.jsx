import React, { useEffect, useState } from 'react';
import Questions from './questions'
import axios from 'axios';
import './../css/staff_test.scss'


function Tests() {

    const src = "http://localhost:8080/api/tests/";
    const [Tests, setTests] = useState([]);
    useEffect(()=>{
        axios.get(src).then(data => {
            setTests(data.data)     
        })
    },[])

    return(
        <>
            <section>
                <div className='answers'>
                        <label className='answer'>
                            {Tests.map(tests =>
                                <div>
                                    {tests.title}
                                    <p>{tests.description}</p>
                                </div>
                            )}
                        </label>
                    </div>
               
            </section>
        </>
    )
}

export default Tests
