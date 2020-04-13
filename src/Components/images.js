import React, {Component} from 'react';

const ImageList = ({ images }) => {

    const preparedImages = images.map(image => {
        return(
            <img src={image.urls.small} key={image.id} alt={image.id}/>
        )
    })


        return (
        <div>
            {preparedImages}
        </div>
    )
}

export default ImageList;