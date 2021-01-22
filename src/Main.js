import {useState} from 'react';
import Number from "./Number";
import Buttons from "./Buttons";

function Main() {

    const [counter, setCounter] = useState(0);

    return (
        <div className="main">
           <Number counter={counter} />
           <Buttons counter={counter} setCounter={setCounter} />
        </div>
    );
}

export default Main;