import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[authorHighlight]',
  exportAs: 'authorHighlight',
})
export class AuthorHighlight implements OnInit {
  @Input() authorName: string = '';

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.applyColor();
  }

  applyColor() {
    const length = this.authorName.length;
    let color = 'black';

    if (length > 15) {
      color = 'blue';
    } else if (length > 8) {
      color = 'orange';
    }

    this.elementRef.nativeElement.style.color = color;
  }

  logAuthor() {
    console.log(`Author: ${this.authorName}`);
  }
}
