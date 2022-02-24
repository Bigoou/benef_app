import React from 'react';
import { useState } from 'react';
import { setState } from 'react';

const LandingPage = () => {
    const [picture, setPicture] = useState({});

    const uploadPicture = (e) => {
        setPicture({
            /* contains the preview, if you want to show the picture to the user
                 you can access it with this.state.currentPicture
             */
            picturePreview: URL.createObjectURL(e.target.files[0]),
            /* this contains the file we want to send */
            pictureAsFile: e.target.files[0],
        });
    };

    const setImageAction = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("file", picture.pictureAsFile);
        formData.append('title', 'values.title');
        formData.append('desc', 'values.desc');
        formData.append('address', 'values.address');
        formData.append('postal', 'values.postal');
        formData.append('expiration', 'values.expiration');
        formData.append('category', 'values.category');
        formData.append('certified', 'values.certified');
        formData.append('cgu', ' values.cgu');

        console.log(picture.pictureAsFile);

        for (var key of formData.entries()) {
            console.log(key[0] + ", " + key[1]);
        }
        const data = await fetch("https://benef-app.fr/api-post.php", {
            method: "post",
            // headers: { "Content-Type": "multipart/form-data" },
            body: formData,
        });
        const uploadedImage = await data.json();
        if (uploadedImage) {
            console.log("Successfully uploaded image");
            console.log(data);
        } else {
            console.log("Error Found");
        }
    };

    // const setImageAction = () => {
    //     const formData = new FormData();
    //     formData.append(
    //         "file",
    //         this.state.pictureAsFile
    //     );
    //     console.log('haha');
    //     // do your post request

    // };

    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="content landing h-70% w-70%">
                <form onSubmit={setImageAction}>
                    <input type="file" name="image" onChange={uploadPicture} />
                    <br />
                    <br />
                    <button type="submit" name="upload">
                        Upload
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LandingPage;