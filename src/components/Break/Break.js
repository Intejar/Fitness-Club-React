import React from 'react';
import './Break.css'
const Break = () => {
    const showNumber=(num)=>{
        let getNumber = num;
        let showTime = document.getElementById('time-display');
        localStorage.setItem('break',getNumber);
        showTime.innerText = localStorage.getItem('break');

    }
    return (
        <div className='time-container'>
            <p onClick={()=>showNumber(10)}><span>10</span>s</p>
            <p onClick={()=>showNumber(20)}><span>20</span>s</p>
            <p onClick={()=>showNumber(30)}><span>30</span>s</p>
            <p onClick={()=>showNumber(40)}><span>40</span>s</p>
            <p onClick={()=>showNumber(50)}><span>50</span>s</p>
        </div>
    );
};

export default Break;