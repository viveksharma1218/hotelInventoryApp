import { Directive,OnInit,ElementRef,Renderer2, HostListener,  Input } from '@angular/core';


@Directive({
  selector: '[hinvHover]'
})
export class Hover implements OnInit{

  @Input() color:string = 'yellow';
  // now this directive can accept value for this property which we can use below
  // we can use selector name also like this
  @Input() hinvHover:string = 'yellow';
  constructor( private element:ElementRef, private renderer:Renderer2 ) { 
    // console.log(this.element.nativeElement);
    // console.log(this.color,this.hinvHover);
  }

  ngOnInit(){
    //this.element.nativeElement.style.backgroundColor = 'lightyellow';
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'lightyellow'
    )
    // console.log(this.color,this.hinvHover);
    // this is showing updated color and hinvHover
  }
  @HostListener('mouseenter') onMouseEnter (){
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'lightblue'
    )
  };

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'white')
  }

}
