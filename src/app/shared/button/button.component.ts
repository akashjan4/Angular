import { ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  exportAs: 'appButton',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  inputs: ['disabled', 'color'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // encapsulation: ViewEncapsulation.None
  encapsulation: ViewEncapsulation.Emulated  //default
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent implements OnInit {
  @Input() color: string;
  defaultColor:string = 'blue';
  userStyle: { 'background-color': string } = {
    'background-color': this.defaultColor
  }
  constructor(elementRef: ElementRef,) {
  }

  ngOnInit(): void {
    console.log(this.color)
    this.userStyle['background-color'] = this.color || this.defaultColor;
  }


}


/**TODO
 * Allow user to pass class direct to button element
 * use inputs of @component decorator
 * clean up - Create better example to demonstrate view encapsulation
 */