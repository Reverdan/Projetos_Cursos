import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MarcaTextoDirective } from './shared/directives/marca-texto.directive';
import { PeopleService } from './shared/services/people.service';
import { ListApiComponent } from './components/list-api/list-api.component';
// import { ListPeopleComponent } from './shared/components/list-people/list-people.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcaTextoDirective,
    ListApiComponent,
    // ListPeopleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
