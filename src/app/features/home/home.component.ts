import { AfterViewInit, Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { Gallery, ImageItem } from 'ng-gallery';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private gallery: Gallery) {
  }
  galleryRef = this.gallery.ref('gallery')
  
  currIndex: any
  ngOnInit(): void {
    this.galleryRef.load([
      new ImageItem({ src: '../../assets/images/audi.jpg', id: 'audi' }),
      new ImageItem({ src: '../../assets/images/volvo.jpg', id: 'volvo' }),
    ])
    this.currIndex = -1;
  }

  ngAfterViewInit(): void {
    this.currIndex = 0;
  }

  indexObserver(number: any) {
    this.currIndex = number?.currIndex;
    console.log(number)
  }
}


export interface GalleryState {
  behavior?: ScrollBehavior;
  currIndex?: number;
  hasNext?: boolean;
  hasPrev?: boolean;
  isPlaying?: boolean;
}
