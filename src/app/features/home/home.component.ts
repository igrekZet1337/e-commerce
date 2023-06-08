import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Gallery, GalleryComponent, GalleryRef, GalleryState, ImageItem } from 'ng-gallery';
import { of } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit {
  
  
  galleryRef: GalleryRef | undefined = this.gallery.ref('gallery')
  currIndex: number | undefined


  
  @ViewChild(GalleryComponent, { read: ElementRef }) galleryHtmlTree: ElementRef<HTMLElement> | undefined
  
  constructor(private gallery: Gallery) { }
  

  ngOnInit(): void {
    this.galleryRef?.load([
      new ImageItem({ src: '../../assets/images/audi.jpg', id: 'audi' }),
      new ImageItem({ src: '../../assets/images/volvo.jpg', id: 'volvo' }),
    ])
  }

  ngAfterViewInit(): void {
    this.currIndex = 0;
    this.getTemplateClass(this.currIndex)
    console.log(this.currIndex)
  }

  public indexObserver($EVENT: GalleryState | undefined) {
    this.currIndex = $EVENT?.currIndex || 0;
    this.getTemplateClass(this.currIndex)
  }

  public getTemplateClass(index: number): void {
    const galleryTree: HTMLElement | undefined = this.galleryHtmlTree?.nativeElement;
    const imgGalleryTree: (NodeListOf<HTMLImageElement>) | undefined = galleryTree?.querySelectorAll('img');
    imgGalleryTree?.forEach((item, i) => {
      (index === i) ? item.classList.add('zoomIn') : item.classList.remove('zoomIn');
      (index !== i) ? item.classList.add('zoomOut') : item.classList.remove('zoomOut');
    });

    console.log(imgGalleryTree)
    console.log()

  }
}
