import React from 'react';

const Button = (props) => {
    const{width,height,color,bgcolor,message,fontSize, border,borderradius,...rest} = props
    return (
        <button {...rest}>
            {message}
            <style jsx>{`
            button{
                width: ${width};
                height: ${height};
                color: ${color};
                background-color: ${bgcolor};
                border: ${border ? border : "none"};
                font-size:${fontSize};
                border-radius: ${borderradius ? borderradius : 'none'};
            }
            
            `}</style>
        </button>
    )
}

export default Button
