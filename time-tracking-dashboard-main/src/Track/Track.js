import React from 'react';
function Track({show,setShow}) {
//const handleClick = () => {
    //setShow(!show)
//}
console.log('The value of show is ' + show);
return (
    <div className='dash_second'>
        <img src='./image-jeremy.png' className='icon' alt="fireSpot"/>
        <h6 className='for'>Report for</h6>
        <h2>Jeremy Robson</h2>
        <ul className='list' type='none'>
            <li onClick={() => setShow(true)} >Daily</li><br />
            <li onClick={() => setShow(true)} >Weekly </li> <br />
            <li onClick={() => setShow(true)} >Monthly </li> <br />
        </ul> 
        
    </div>
)
}


export default Track 

