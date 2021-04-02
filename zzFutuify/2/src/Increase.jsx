import React,{useState} from 'react';


function Increase(props) {

    var [count, setCount] = useState(1);

    const handleClick = () => {
        setCount(++count);
    }

    return (
        <div className="content" onClick={()=>handleClick()}>
        <span className="increase">Increase</span>
        <input className="count" type="button" value={count}></input>
    </div>
    );
}

export default Increase;