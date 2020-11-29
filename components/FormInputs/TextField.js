import React from "react";

const TextField = (props) => {
    
        const { name, handleChange, ...rest} = props;

        return (
            <div className="textfield-component">
                <input {...rest} onChange={handleChange} className="single-line-textfield" name={name} id={name} />
                <style jsx>{`
                .single-line-textfield{
                    border: 1px solid #4F4F4F;
                    border-radius: 3px;
                    width: 100%;
                    margin-top: ${props.margintop || "1.5rem"};
                    height: ${props.height || "5rem"};
                    background-color: var(--main-bg-color);
                    padding-left: 1.3rem;
                    color: #787878;
                    font-family: "GT Eesti Pro Text Book";
                }
                input::placeholder{
                    color: #454647;
                    font-size: 1.4rem;
                    line-height: 132.24%;
                }
                
                `}</style>
            </div>
        )
    
}

export default TextField;
