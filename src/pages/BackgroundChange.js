import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import Upload from '../components/Upload';
import randomId from '../utilities/randomId';

import '../styles/background-change.css';

function BackgroundChange() {
    const [uploadedFiles, setUploadedFiles] = useState();
    const [backgrounds, setBackgrounds] = useState([]);
    const [redirect, setRedirect] = useState();

    async function getBackgrounds() {
        const backgrounds = await axios.get('http://localhost:3333/backgrounds');
        setBackgrounds(backgrounds.data);
    };

    useEffect(() => {
        getBackgrounds();
    }, []);

    async function handleUpload(files) {
        const itensToSave = await files.map(file => ({
            file,
            key: randomId(),
            name: file.name,
            uploaded: false,
            error: false,
            url: null
        }));

        processUpload(itensToSave);
    };

    async function processUpload(sendFiles) {
        const data = new FormData();

        data.append('image', sendFiles[0].file, sendFiles[0].name);
        data.append('key', sendFiles[0].key)

        await axios.post('http://localhost:3333/background', data);

        await axios.get('http://localhost:3333/background/' + sendFiles[0].key)
            .then(res => setUploadedFiles(res.data[0].image))
            .then(res => setRedirect(true))
    };

    return (
        <>
            {redirect && <Redirect to={{ pathname: "/", state: { image: uploadedFiles } }} />}

            <div className="container">
                <h1>Choose a new background</h1>
                <div className="box">
                    <Upload onUpload={handleUpload} />
                </div>

                <h2>Scroll down to see a preview of your backgrounds</h2>
            </div>
            {  backgrounds.map(background => {
                return (
                    <div key={background.key} className="preview-background" style={{ background: `url(${background.image}) no-repeat center center / cover` }}>
                        <Link className="choose-button" to={{ pathname: "/", state: { image: background.image } }}>Choose</Link>
                    </div>
                )
            })}
        </>
    );
}

export default BackgroundChange;