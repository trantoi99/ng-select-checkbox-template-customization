import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormsMultiSelectExampleComponent } from './src/forms-multi-select-example.component'

@Component({
    selector: 'app-component',
    template: '<forms-multi-select-example></forms-multi-select-example>'
})
export class AppComponent {}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgSelectModule,
        NgOptionHighlightModule,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        FormsMultiSelectExampleComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}



