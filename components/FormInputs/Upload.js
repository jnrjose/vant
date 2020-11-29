import React, { Component } from "react";
import { ETIME } from "constants";

class FileUpload extends Component {
    state = {
        fileName: ""
    }

    handleUpload = ({ target }) => {
        this.setState({
            fileName: target.files[0].name
        })
    }

    render() {
        const { fileName } = this.state;
        const { handleChange, label, ...rest} = this.props;

        return (
            <div className="file-upload-container">
                <span className="custom-label">{ label }</span>
                <label className="custom-upload">
                    <input type="file" {...rest} onChange={this.handleUpload} className="upload-input" />
                    <span><span className="upload-label">Upload</span> {fileName ? <span className="uploaded-file">({fileName})</span> : ""}</span>
                </label>
            </div>
        )
    }
}

export default FileUpload;