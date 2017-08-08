import { NoteService } from './note.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule, routableComponents } from './app-routing.module';
import './rxjs-extensions';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoteDetailsComponent } from './note-details/note-details.component';


@NgModule({
  declarations: [
    AppComponent,
    routableComponents
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
