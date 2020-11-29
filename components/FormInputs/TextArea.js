import React from "react";

const TextArea = (props) => {
    
        const { handleChange, className, name, row, ...rest} = props;

        return (
            <div className="textarea-component">
                <textarea {...rest} onChange={handleChange} className={`full-line-textarea ${className}`} rows={row} name={name} id={name}></textarea>
                <style jsx>{`
                .full-line-textarea{
                    border: 1px solid #4F4F4F;
                    border-radius: 3px;
                    width: 100%;
                    margin-top: 1.5rem;
                    background-color: var(--main-bg-color);
                    padding-left: 1.3rem;
                    font-family: "GT Eesti Pro Text Book";
                    font-size: 1.4rem;
                    padding-top: 1.6rem;
                    color: #787878;
                }
                textarea::placeholder{
                    color: #454647;
                    font-size: 1.4rem;
                    line-height: 132.24%;
                }
                
                `}</style>
            </div>
        )
    
}

export default TextArea;
