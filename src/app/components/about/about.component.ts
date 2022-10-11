import { Component, Input, OnInit } from '@angular/core';

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

    @Input() images: aboutImage[] = [];

    ngOnInit(): void {
    }
}