import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BodyComponent } from '../layout/body/body.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { HeaderComponent } from '../layout/header/header.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        BodyComponent,
        LoadingSpinnerComponent
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        BodyComponent,
        LoadingSpinnerComponent
    ],
})
export class LayoutModule { }