import { EntryService } from './entry.service';
import { NoteService } from './note.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule, routableComponents } from './app-routing.module';
import './rxjs-extensions';
import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { NoteNavComponent } from './note-nav/note-nav.component';
import { OneGateGuard } from "app/one-gate.guard";

@NgModule({
  declarations: [
    AppComponent,
    routableComponents,
    AppNavComponent,
    NoteNavComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [NoteService, EntryService, OneGateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
