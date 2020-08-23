import React, { useState, useCallback } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import useSWR from 'swr'

export default function Photography() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);
    
    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    
    const fetcher = url => fetch(url, {method: "GET"}).then(r => r.json()).then(json => json.body.Contents);

    const { data } = useSWR('https://82ada8z9md.execute-api.us-east-2.amazonaws.com/prod/api/photos', fetcher);

    var images = [];
    if(data){
        data.forEach(image => {
            images.push({
                src: 'https://d1bycl3dmnt2ou.cloudfront.net/' + image.Key.split(' ').join('+'),
                width: 4,
                height: 3
            })
        })
    }

    return (
    <div>
        <Gallery photos={images} onClick={openLightbox} />
        <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={images.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>)
}