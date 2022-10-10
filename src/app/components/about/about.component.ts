import { Component, OnInit } from '@angular/core';

interface aboutImage {
    imageSrc: string;
    imageAlt: string;
}

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    // @Input() images: aboutImage[] = []
    // @Input indicators = true;
    // @Input () controls = true;
    // @Input() autoSlide = false;
    // @Input() slideInterval = 3000; //default to 3 second interval between slides


    selectedIndex = 0

    ngOnInit(): void {
      // if(this.autoSlide){
      //   autoSlideImages();
      // }
    }

    // Changes slide in every 3 second interval
    autoSlideImages(): void {
      // setInterval(() => {
      //   this.onNextClick();
      // }, this.slideInterval);
    }

    // sets index of image on dot/indicator click
    selectedImage(index: number): void{
      this.selectedIndex = index;
    }

    onPrevClick(): void {
      if(this.selectedIndex === 0) {
        this.selectedIndex = this.images.length -1;
      }
      else{
        this.selectedIndex--;
      }
    }

    onNextClick(): void {
      if(this.selectedIndex === this.images.length -1) {
        this.selectedIndex = 0;
      }
      else{
        this.selectedIndex++;
      }
    }
    // Note: these might have to go into app.components.ts?
    images = [
        {
          imageSrc:
            '/src/assets/images/david.jfif',
          imageAlt: 'david',
        },
        {
          imageSrc:
            '/src/assets/images/jerry.jfif',
          imageAlt: 'jerry',
        },
        {
          imageSrc:
            '/src/assets/images/tristan.jfif',
          imageAlt: 'tristan',
        },
        {
          imageSrc:
            '/src/assets/images/bruce.jfif',
          imageAlt: 'bruce',
        },
        {
          imageSrc:
            '/src/assets/images/joel.jfif',
          imageAlt: 'joel',
        },
        {
          imageSrc:
            '/src/assets/images/salvator.jfif',
          imageAlt: 'salvator',
        },
        {
          imageSrc:
            '/src/assets/images/raphael.jfif',
          imageAlt: 'raphael',
        },
        {
          imageSrc:
            '/src/assets/images/varada.jfif',
          imageAlt: 'varada',
        },
        {
          imageSrc:
            '/src/assets/images/sam.jfif',
          imageAlt: 'sam',
        },
    ]
}