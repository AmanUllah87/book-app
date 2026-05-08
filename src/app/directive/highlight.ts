import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[bookHighlight]',
  exportAs: 'bookHighlight'
})
export class Highlight implements OnInit{
  @Input() rating = 0;
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = '#000'
    console.log("bookHighlight directive created",this.elementRef)
  }
  ngOnInit(): void {
    this.applyStyle();
  }

  externalUses(){
    console.log("External uses")
  }

  applyStyle(){
    if(this.rating >= 4){
      this.elementRef.nativeElement.style.backgroundColor = 'green'
    }else if(this.rating >= 3){
      this.elementRef.nativeElement.style.backgroundColor = 'gray'
    }
  }
}
