import React from "react";

const Radio = (props) => {
    const { label, handleChange, ...rest } = props;

    return (
        <div className="radio-component">
            <label>
                <input type="radio" {...rest} onChange={handleChange} />
                <span className="custom-radio" />
                <span className="custom-label">{ label }</span>
            </label>
        </div>
    )
}

export default Radio