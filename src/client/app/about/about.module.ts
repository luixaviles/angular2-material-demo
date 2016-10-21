import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about.component';


@NgModule({
    imports: [CommonModule, SharedModule],
    declarations: [AboutComponent],
    exports: [AboutComponent]
})
export class AboutModule { }
