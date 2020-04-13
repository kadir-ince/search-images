import React, {Component} from 'react';
import Image from './image'
import '../Styles/ListImages.css'

const ImageList = ({ images }) => {

    const preparedImages = images.map(image => {
        return(
            <Image image={image} key={image.id}/>
        )
    })


        return (
        <div className={"list-Images"}>
            {preparedImages}
        </div>
    )
}

export default ImageList;