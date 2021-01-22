import React from 'react';



function Buttons(props) {

    function plus() {
       props.setCounter(props.counter + 3)
    }

    function minus() {
        props.setCounter(props.counter -2)
        if (props.counter <= 1) {
            return props.setCounter(0)
        }
    }

    function reset() {
        props.setCounter(0)
    }

    return (
        <div className="buttons">
            <div className="firstbutton" onClick={plus}>Увеличить</div>
            <div className="secondbutton" onClick={minus}>Уменьшить</div>
            <div className="thirdbutton" onClick={reset}>Сбросить</div>
        </div>
    );
}

export default Buttons;