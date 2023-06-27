import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventDetailsComponent } from './event-details.component';

@NgModule({
    declarations: [
        AppComponent,
        EventDetailsComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        EventDetailsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
