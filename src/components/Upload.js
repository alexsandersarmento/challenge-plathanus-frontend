import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

import '../styles/drop-container.css';

function Upload(props) {
    const [borderColor, setBorderColor] = useState();
    const [fontcolor, setFontColor] = useState('#999');

    function renderDragMessage(isDragActive, isDragReject) {
        if (!isDragActive) {
            setBorderColor(null);
            setFontColor('#999')
            return (
                <p className="upload-message" style={{ color: fontcolor }}>Click or drag image here.</p>
            )
        } else {
            setBorderColor('#78e5d5');
            setFontColor('#78e5d5')
        }

        if (isDragReject) {
            setBorderColor('#e57878');
            setFontColor('#e57878')
            return (
                <p type="error" className="upload-message" style={{ color: fontcolor }}>File not supported.</p>
            )
        }

        return <p type="success" className="upload-message" style={{ color: fontcolor }}>Drop image here.</p>
    }

    const { onUpload } = props;

    return (
        <Dropzone accept="image/*" onDropAccepted={onUpload}>
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                <div
                    {...getRootProps()}
                    className="dropzone"
                    isDragActive={isDragActive}
                    isDragReject={isDragReject}
                    style={{ borderColor: borderColor }}
                >
                    <input {...getInputProps()} />
                    {renderDragMessage(isDragActive, isDragReject)}
                </div>
            )
            }
        </Dropzone>
    );
}

export default Upload;