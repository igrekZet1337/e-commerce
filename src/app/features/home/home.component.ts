import { Component, OnInit, ViewChild } from '@angular/core';
import { Gallery, ImageItem } from 'ng-gallery';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private gallery: Gallery) {
  }
  galleryRef = this.gallery.ref('gallery')
  
  
  
  
  ngOnInit() {
    this.galleryRef.load([
      new ImageItem({ src: '../../assets/images/audi.jpg' }),
      new ImageItem({ src: '../../assets/images/volvo.jpg' }),
    ])
  }

  

}
