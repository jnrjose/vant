import React from 'react';


const SliderToggle = ({ active, handleImageChange, index }) => {
   

    return (
        <div onClick={() => handleImageChange(index)}  >
            &nbsp;
            <style jsx>{` 
               div {
                background-color:${ active ? "#FFFA46" :"#555145"};
                width: 6px;
                height: 17px;
                margin-bottom: 8px;
                opacity: ${ active ? "0.5":"1"};
            }
                 
            `}</style>
        </div>

    )
}

export default SliderToggle;