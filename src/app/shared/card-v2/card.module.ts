import { NgModule } from '@angular/core';
import {
    CardActions,
    CardFooter,
    CardHeader,
    CardV2Component,
    CardImage,
    CardContent,
    HeaderAvatar,
    HeaderTitle,
    HeaderSubTitle
} from './card.component';
@NgModule({
    imports: [],
    exports: [
        CardV2Component,
        CardHeader,
        CardFooter,
        HeaderAvatar,
        HeaderTitle,
        HeaderSubTitle,
        CardImage,
        CardContent,
        CardActions
    ],
    declarations: [
        CardV2Component,
        CardHeader,
        CardFooter,
        HeaderAvatar,
        HeaderTitle,
        HeaderSubTitle,
        CardImage,
        CardContent,
        CardActions
    ],
})
export class CardV2Module { }