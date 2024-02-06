// @ts-nocheck
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: '/assets/tepelnacerpadla.jpg',
    thumbnail: '/assets/tepelnacerpadla.jpg',
  },
  {
    original: '/assets/tepelnacerpadla2.jpg',
    thumbnail: '/assets/tepelnacerpadla2.jpg',
  },
];

export class MyGallery extends React.Component {
  render() {
    return (
      <div className="App grid h-screen place-items-center ">
        <h2 className="text-3xl font-medium tracking-tight underline decoration-red decoration-4 underline-offset-4 sm:text-4xl">
          Galerie
        </h2>
        <div className="w-1/2 rounded-lg p-10">
          <h3 className="text-2xl font-medium tracking-tight sm:text-2xl">Tepelná čerpadla</h3>
          <ImageGallery
            items={images}
            showPlayButton={true}
            slideOnThumbnailOver={true}
            showIndex={true}
          />
        </div>
      </div>
    );
  }
}
