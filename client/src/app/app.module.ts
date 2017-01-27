import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StormpathConfiguration, StormpathModule } from 'angular-stormpath';

import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StormpathModule
  ],
  providers: [{
    provide: StormpathConfiguration, useFactory: stormpathConfig
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }

export function stormpathConfig(): StormpathConfiguration {
  let spConfig: StormpathConfiguration = new StormpathConfiguration();
  spConfig.endpointPrefix = 'http://localhost:8080';
  spConfig.autoAuthorizedUris.push(new RegExp('http://localhost:8080/good-beers'));
  return spConfig;
}
