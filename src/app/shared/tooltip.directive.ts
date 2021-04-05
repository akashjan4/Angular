import { Renderer2 } from '@angular/core';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input() text: string;
  private tooltipEle: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterContentInit() {
  }

  @HostListener("mouseover")
  showTooltip() {
    this._createTooltip();
    this._renderPosition();
    // this.renderer.addClass(this.tooltipEle, 'tooltip-show');
  }

  @HostListener("mouseout")
  removeTooltip() {
    // this.renderer.removeClass(this.tooltipEle, 'tooltip-show');
    this.renderer.removeChild(this.el.nativeElement, this.tooltipEle);
  }

  private _createTooltip() {
    this.tooltipEle = this.renderer.createElement('span');
    this.renderer.setStyle(this.tooltipEle, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipEle, 'borderRadius', '4px');
    this.renderer.setStyle(this.tooltipEle, 'background', '#000');
    this.renderer.setStyle(this.tooltipEle, 'color', '#fff');
    this.renderer.setStyle(this.tooltipEle, 'padding', '12px');
    //OR
    this.renderer.addClass(this.tooltipEle, 'tooltip');
 

    this.renderer.appendChild(
      this.tooltipEle,
      this.renderer.createText(this.text)
    );

    this.renderer.appendChild(this.el.nativeElement, this.tooltipEle);
  }

  private _renderPosition() {
    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltipEle.getBoundingClientRect();
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const top = hostPos.top - tooltipPos.height + 45;
    const left = hostPos.left + (hostPos.width - tooltipPos.width) / 2 + 20;
    this.renderer.setStyle(this.tooltipEle, 'top', `${top + scrollPos}px`);
    this.renderer.setStyle(this.tooltipEle, 'left', `${left}px`);
  }
}


