import React from "react";
import "../css/welcome_info.scss"

function Welcome_Info() {
    return(
        <>
            <div className="info">
                <div className="info-title">
                    Этот тест разработан с целью обучения и проверки знаний персонала, работающего в компьютерных магазинах. Он охватывает ключевые аспекты, необходимые для эффективной работы в данной сфере.
                </div>
                <button className="button_test">Пройти тест</button>
            </div>
        </>
    )
    
}

export default Welcome_Info