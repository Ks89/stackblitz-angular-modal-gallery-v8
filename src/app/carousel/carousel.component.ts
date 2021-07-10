/*
 The MIT License (MIT)

 Copyright (c) 2017-2020 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */

import { Component } from '@angular/core';

import { AccessibilityConfig, Image, ImageEvent } from '@ks89/angular-modal-gallery';

@Component({
  selector: 'ks-carousel-page',
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css']
})
export class CarouselExampleComponent {
  imageIndex = 1;
  galleryId = 1;
  autoPlay = true;
  showArrows = true;
  showDots = true;

  imagesRect: Image[] = [
    new Image(
      0,
      {
        img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/milan-pegasus-gallery-statue.jpg',
        description: 'Description 1'
      },
      {
        img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/thumbs/t-milan-pegasus-gallery-statue.jpg',
        title: 'First image title',
        alt: 'First image alt',
        ariaLabel: 'First image aria-label'
      }
    ),
    new Image(1, { img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/pexels-photo-47223.jpeg' }, { img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/thumbs/t-pexels-photo-47223.jpg' }),
    new Image(
      2,
      {
        img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/pexels-photo-52062.jpeg',
        description: 'Description 3',
        title: 'Third image title',
        alt: 'Third image alt',
        ariaLabel: 'Third image aria-label'
      },
      {
        img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/thumbs/t-pexels-photo-52062.jpg',
        description: 'Description 3'
      }
    ),
    new Image(
      3,
      {
        img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/pexels-photo-66943.jpeg',
        description: 'Description 4',
        title: 'Fourth image title (modal obj)',
        alt: 'Fourth image alt (modal obj)',
        ariaLabel: 'Fourth image aria-label (modal obj)'
      },
      {
        img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/thumbs/t-pexels-photo-66943.jpg',
        title: 'Fourth image title (plain obj)',
        alt: 'Fourth image alt (plain obj)',
        ariaLabel: 'Fourth image aria-label (plain obj)'
      }
    ),
    new Image(4, { img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/pexels-photo-93750.jpeg' }, { img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/thumbs/t-pexels-photo-93750.jpg' }),
    new Image(
      5,
      {
        img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/pexels-photo-94420.jpeg',
        description: 'Description 6'
      },
      { img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/thumbs/t-pexels-photo-94420.jpg' }
    ),
    new Image(6, { img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/pexels-photo-96947.jpeg' }, { img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/thumbs/t-pexels-photo-96947.jpg' })
  ];

  imagesRectNoTitles: Image[] = [
    new Image(
      0,
      { img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/milan-pegasus-gallery-statue.jpg', title: '' },
      { img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/thumbs/t-milan-pegasus-gallery-statue.jpg', title: '' }
    ),
    new Image(
      1,
      { img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/pexels-photo-47223.jpeg', title: '' },
      { img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/thumbs/t-pexels-photo-47223.jpg', title: '' }
    ),
    new Image(
      2,
      { img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/pexels-photo-52062.jpeg', title: '' },
      { img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/thumbs/t-pexels-photo-52062.jpg', title: '' }
    ),
    new Image(
      3,
      { img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/pexels-photo-66943.jpeg', title: '' },
      { img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/thumbs/t-pexels-photo-66943.jpg', title: '' }
    ),
    new Image(
      4,
      { img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/pexels-photo-93750.jpeg', title: '' },
      { img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/thumbs/t-pexels-photo-93750.jpg', title: '' }
    ),
    new Image(
      5,
      { img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/pexels-photo-94420.jpeg', title: '' },
      { img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/thumbs/t-pexels-photo-94420.jpg', title: '' }
    ),
    new Image(
      6,
      { img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/pexels-photo-96947.jpeg', title: '' },
      { img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/thumbs/t-pexels-photo-96947.jpg', title: '' }
    )
  ];

  fallbackRectImages: Image[] = [
    new Image(0, {
      // this file is not available so the browser returns an error
      img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/UNEXISTING_IMG1.jpg',
      // because the img above doesn't exists, the library will use this file
      fallbackImg: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/fallback-carousel1.jpg'
    }),
    new Image(1, {
      img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/UNEXISTING_IMG2.jpg',
      fallbackImg: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/fallback-carousel2.jpg'
    }),
    new Image(
      2,
      {
        img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/UNEXISTING_IMG3.jpg',
        fallbackImg: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/fallback-carousel3.jpg'
      },
      {
        img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/thumbs/UNEXISTING_IMG3.png',
        fallbackImg: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/fallback-carousel3.jpg'
      }
    ),
    new Image(3, {
      img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/UNEXISTING_IMG4.jpg',
      fallbackImg: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/fallback-carousel4.jpg'
    }),
    new Image(
      4,
      {
        img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/UNEXISTING_IMG5.jpg',
        fallbackImg: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/fallback-carousel5.jpg'
      },
      {
        img: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/thumbs/UNEXISTING_IMG5.jpg',
        fallbackImg: 'https://stackblitz.com/files/angular-modal-gallery-v8/github/Ks89/stackblitz-angular-modal-gallery-v8/master/src/assets/images/gallery/fallback-carousel5.jpg'
      }
    )
  ];

  accessibilityConfig: AccessibilityConfig = {
    backgroundAriaLabel: 'CUSTOM Modal gallery full screen background',
    backgroundTitle: 'CUSTOM background title',

    plainGalleryContentAriaLabel: 'CUSTOM Plain gallery content',
    plainGalleryContentTitle: 'CUSTOM plain gallery content title',

    modalGalleryContentAriaLabel: 'CUSTOM Modal gallery content',
    modalGalleryContentTitle: 'CUSTOM modal gallery content title',

    loadingSpinnerAriaLabel: 'CUSTOM The current image is loading. Please be patient.',
    loadingSpinnerTitle: 'CUSTOM The current image is loading. Please be patient.',

    mainContainerAriaLabel: 'CUSTOM Current image and navigation',
    mainContainerTitle: 'CUSTOM main container title',
    mainPrevImageAriaLabel: 'CUSTOM Previous image',
    mainPrevImageTitle: 'CUSTOM Previous image',
    mainNextImageAriaLabel: 'CUSTOM Next image',
    mainNextImageTitle: 'CUSTOM Next image',

    dotsContainerAriaLabel: 'CUSTOM Image navigation dots',
    dotsContainerTitle: 'CUSTOM dots container title',
    dotAriaLabel: 'CUSTOM Navigate to image number',

    previewsContainerAriaLabel: 'CUSTOM Image previews',
    previewsContainerTitle: 'CUSTOM previews title',
    previewScrollPrevAriaLabel: 'CUSTOM Scroll previous previews',
    previewScrollPrevTitle: 'CUSTOM Scroll previous previews',
    previewScrollNextAriaLabel: 'CUSTOM Scroll next previews',
    previewScrollNextTitle: 'CUSTOM Scroll next previews',

    carouselContainerAriaLabel: 'Current image and navigation',
    carouselContainerTitle: '',
    carouselPrevImageAriaLabel: 'Previous image',
    carouselPrevImageTitle: 'Previous image',
    carouselNextImageAriaLabel: 'Next image',
    carouselNextImageTitle: 'Next image',
    carouselPreviewsContainerAriaLabel: 'Image previews',
    carouselPreviewsContainerTitle: '',
    carouselPreviewScrollPrevAriaLabel: 'Scroll previous previews',
    carouselPreviewScrollPrevTitle: 'Scroll previous previews',
    carouselPreviewScrollNextAriaLabel: 'Scroll next previews',
    carouselPreviewScrollNextTitle: 'Scroll next previews'
  };

  addRandomImage() {
    const imageToCopy: Image = this.imagesRect[Math.floor(Math.random() * this.imagesRect.length)];
    const newImage: Image = new Image(this.imagesRect.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
    this.imagesRect = [...this.imagesRect, newImage];
  }

  onChangeAutoPlay() {
    this.autoPlay = !this.autoPlay;
  }

  onChangeShowArrows() {
    this.showArrows = !this.showArrows;
  }

  onChangeShowDots() {
    this.showDots = !this.showDots;
  }

  // output evets
  onShow(event: ImageEvent) {
    console.log('show', event);
  }

  onFirstImage(event: ImageEvent) {
    console.log('firstImage', event);
  }

  onLastImage(event: ImageEvent) {
    console.log('lastImage', event);
  }
}
