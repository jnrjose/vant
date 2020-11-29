import React from "react";

import Check from "../../vectors/Check";

const Checkbox = (props) => {
    const { label, handleChange, ...rest } = props;

    return (
        <div className="checkbox-component">
            <label>
                <input type="checkbox" onChange={handleChange} {...rest} />
                <span className="custom-checkbox"><Check /></span>
                <span className="custom-label">{ label }</span>
            </label>
        </div>
    )
}

export default Checkbox