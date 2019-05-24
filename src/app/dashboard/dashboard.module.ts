import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard.component';

import {ComponentsModule} from '../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        ComponentsModule
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    providers: []
})
export class DashboardModule {
}
