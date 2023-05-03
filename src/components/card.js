import { useState } from "react";

function  Card ({id, image ,info , price,name, removeTour}){

        const [readmore,setReadmore]=useState(false);
        const [description,setDescription]= useState(`${info.substring(0,90)}...`);

        function readmoreHandeler(){
            setReadmore(!readmore);
            if(readmore==false){
                setDescription(info);
            }
            else setDescription(`${info.substring(0,90)}...`)
        }

        
    return (
        <div className="card">
            <img className="image" src={image} ></img>
            <div className="tour-details">
                <div className="tour-price">₹ {price}</div>
                <div  className="tour-name">{name}</div>
                <div className="description">{description}
            <span className="read-more" onClick={readmoreHandeler}>
                {readmore ? `Show less` :  `read more`}
            </span>
            </div>
            </div>
           
           <button className="btn-read" onClick={()=>removeTour(id)}>
            Not Intersted
            </button>

        </div>
    );
}

export default Card;