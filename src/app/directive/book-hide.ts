import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[bookHide]',
})
export class BookHide implements OnInit {
  @Input() bookHide!: boolean;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<unknown>
  ) {}

  ngOnInit(): void {
    this.render();
  }

  render() {
    if (this.bookHide) {
      this.viewContainerRef.clear();
    } else {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
