import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

interface BookContext{
  $implicit: string
}

@Directive({
  selector: '[bookShow]',
})
export class Show implements OnInit{

  @Input() bookShow!: boolean;
  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<BookContext>) {
    
  }
  ngOnInit(): void {
    this.render();
  }

  render(){
    if(this.bookShow){
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    }else{
      this.viewContainerRef.clear();
    }
  }
}
