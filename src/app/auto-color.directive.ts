import { Directive , ElementRef, Renderer} from '@angular/core';

@Directive({
	selector : '[autoColor]',
	host : {
		'(focus)' : 'onFocus()',
		'(blur)' : 'onBlur()'
	}
})

export class AutoColorDirective {

	constructor(private el :ElementRef , private renderer : Renderer){

	}

	onFocus(){
		this.renderer.setElementStyle(this.el.nativeElement,'background-color','blue');
	}

	onBlur(){
		this.renderer.setElementStyle(this.el.nativeElement,'background-color','white');
	}
}