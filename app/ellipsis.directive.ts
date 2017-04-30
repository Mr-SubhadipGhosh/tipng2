import { Directive, ElementRef, Input , OnInit, HostListener} from '@angular/core';
@Directive({ selector: '[ellipsis]' })
export class EllipsisDirective implements OnInit{
    constructor(private el: ElementRef)  {
    }
     ngOnInit() {
      console.log(this);
        let str = this.el.nativeElement.innerHTML;
       this.el.nativeElement.innerHTML=(str.substring(0,this.letterCount)+ (this.replaceString || '...'));
  }
    @Input('ellipsis') letterCount: number;
    @Input() replaceString: string;
    @HostListener('mouseenter') onMouseEnter() {
        console.log('enter mouse');
  }
}