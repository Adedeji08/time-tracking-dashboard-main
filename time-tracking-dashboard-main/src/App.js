import React, {useState, useEffect } from 'react';
import './App.css';
import Data from './data.json';
import Track from  './Track/Track'

function App() {
 const [show, setShow] = useState(true)

 const DailyRoutine = () => {
   useEffect(() => {
     console.log('did mount')

     return () => {
       console.log('will unmount')
     }
   }, []);}
 

  return (
    <div className="App">
      <Track show={show} setShow={setShow}/>
      <div className="container">
       { show  ? Data.map(item => {
            return(
               <div className='side' key={item.title}>
                 <h6> { item.title } </h6>
                 <ul type='none'>
                    <li className='curr'>{item.timeframes.daily.current}hrs<br />
                  <span className='prev'>  Last Week-{item.timeframes.daily.previous} </span>
                    </li>
                  
                    <li className='curr'>{item.timeframes.weekly.current}hrs<br />
                   <span className='prev'> Last Week-{item.timeframes.weekly.previous} </span>
                    </li> 

                    <li className='curr'> {item.timeframes.monthly.current}hrs<br />
                   <span className='prev'> Last Week-{item.timeframes.monthly.previous} </span>
                    </li>
                 </ul>
                 {setShow}
                </div>
               )
        }) : <div> No Data </div>}
      </div>
    </div> 
  );
}


export default App;

