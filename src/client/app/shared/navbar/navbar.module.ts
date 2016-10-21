import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { NavbarComponent } from './navbar.component';

@NgModule({
    imports: [MaterialModule, RouterModule],
    declarations: [NavbarComponent],
    exports: [NavbarComponent],
})

export class NavbarModule { }
