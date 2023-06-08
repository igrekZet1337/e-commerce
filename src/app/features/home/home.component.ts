import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Gallery, GalleryComponent, GalleryRef, GalleryState, ImageItem } from 'ng-gallery';



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
  
  constructor(private gallery: Gallery, private cdr: ChangeDetectorRef) { }
  

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
    this.cdr.detectChanges();
  }

  public indexObserver($EVENT: GalleryState | undefined) {
    this.currIndex = $EVENT?.currIndex || 0;
    this.getTemplateClass(this.currIndex)
  }

  public getTemplateClass(index: number): void {
    const galleryTree: HTMLElement | undefined = this.galleryHtmlTree?.nativeElement;
    const imgGalleryTree: (NodeListOf<HTMLImageElement>) | undefined = galleryTree?.querySelectorAll('img')
    imgGalleryTree?.[index].classList.add('fetched')
    this.cdr.detectChanges();
    console.log(imgGalleryTree?.[index])
    console.log()

  }
}
