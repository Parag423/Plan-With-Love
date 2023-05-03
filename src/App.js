import React, { useState } from "react";
import data from './data';
import Tours from  './components/Tours';

const App = () => {

const [tours,setTours]=useState(data);

function removeTour(id){
  function fun(tour){
    return tour.id!=id;
  }
  const newtour=tours.filter(fun);
  setTours(newtour);
}

if(tours.length===0){
  return (
    <div className="refresh">
      <h2>No  Tours Left</h2>
      <button className="btn-read" onClick={()=>setTours(data)}>Refresh</button>
    </div>
  )
}

  return (<div className="App">
    <h2 className="heading">Plan With Love</h2>
    <Tours tours={tours} removeTour={removeTour} ></Tours>
  </div>);
};

export default App;
