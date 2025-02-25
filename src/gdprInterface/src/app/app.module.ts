import { BrowserModule} from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent} from './app.component';
import { HttpClientModule} from '@angular/common/http';


import { PrincipleModule} from './principles/principle.module';
import { HomeComponent} from './home/home.component';
import { HistoryModule } from './history/history.module';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        PrincipleModule,
        HistoryModule,
		ToastrModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas : [CUSTOM_ELEMENTS_SCHEMA],
    entryComponents: [
    ]
})
export class AppModule { }
