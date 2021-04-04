import { ChangeDetectionStrategy, Component, Directive, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card-v2',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'class':'card'}
})
export class CardV2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


@Component({
  selector: 'app-card-header',
  templateUrl: 'card-header.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'class': 'card-header'}
})
export class CardHeader {}

@Directive({
  selector: '[avatar]',
  host: {'class': 'card-avatar'}
})
export class HeaderAvatar {}

@Directive({
  selector: 'header-title, [header-title]',
  host: {'class': 'header-title'}
})
export class HeaderTitle {}

@Directive({
  selector: 'header-sub-title, [header-sub-title]',
  host: {'class': 'header-sub-title'}
})
export class HeaderSubTitle {}

@Directive({
  selector: '[card-image]',
  host: {'class': 'card-image'}
})
export class CardImage {}

@Directive({
  selector: 'card-content, [card-content], [CardContent]',
  host: {'class': 'card-content'}
})
export class CardContent {}

@Directive({
  selector: 'card-footer',
  host: {'class': 'card-footer'}
})
export class CardFooter {}

@Directive({
  selector: 'card-actions, [card-actions], [CardActions]',
  host: {'class': 'card-actions'}
})
export class CardActions {}