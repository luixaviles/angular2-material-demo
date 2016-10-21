import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
    imports: [MaterialModule],
    declarations: [ToolbarComponent],
    exports: [ToolbarComponent],
})

export class ToolbarModule { }
