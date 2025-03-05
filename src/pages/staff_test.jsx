import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';
import './../css/staff_test.scss'


const src = "http://localhost:8080/api/question/"

function Staff_Test (){

    const [Questions, setQuestions] = useState([]);
    useEffect(()=>{
        axios.get(src).then(data => {
            setQuestions(data.data)
            console.log(data.data);
            
        })
    },[])

    return(
        <>
            <Header/>
                <section>
                    <div className='question'>
                        {Questions.map(question =>{
                            return(
                                <>
                                    <p>{question.text}</p>
                                    <p>{question.points}</p>
                                </>
                            )
                        })}
                    </div>
                        <hr/>
                    <div className='answers'>
                        Выберите ответ
                        <label className='answer'>
                            <input type='radio' name='radio' value={1} />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis provident quae maiores facere nam enim sit, suscipit nihil ipsa impedit, ex quos similique vitae vero ratione tempora harum repellendus ea.
                        </label>
                        <label>
                            <input type='radio' name='radio' value={1} />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis provident quae maiores facere nam enim sit, suscipit nihil ipsa impedit, ex quos similique vitae vero ratione tempora harum repellendus ea.
                        </label>
                        <label>
                            <input type='radio' name='radio' value={1} />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis provident quae maiores facere nam enim sit, suscipit nihil ipsa impedit, ex quos similique vitae vero ratione tempora harum repellendus ea.
                        </label>
                        <label>
                            <input type='radio' name='radio' value={1} />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis provident quae maiores facere nam enim sit, suscipit nihil ipsa impedit, ex quos similique vitae vero ratione tempora harum repellendus ea.
                        </label>
                        <label>
                            <input type='radio' name='radio' value={1} />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis provident quae maiores facere nam enim sit, suscipit nihil ipsa impedit, ex quos similique vitae vero ratione tempora harum repellendus ea.
                        </label>
                    </div>
                    <button className='button_test'  type='submit'>Подтвердить</button>
                </section>
            <Footer/>
        </>
    )
}

export default Staff_Test