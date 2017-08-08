import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NoteComponent } from './note/note.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const defaultRoute = '/home';
const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: defaultRoute },
    { path: 'home', component: HomeComponent },
    { path: 'note', component: NoteComponent, children: [
        { path: '', pathMatch: 'full', redirectTo: defaultRoute },
        { path: ':id', component: NoteDetailsComponent }
    ] },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }

export const routableComponents = [
    HomeComponent,
    NoteComponent,
    NoteDetailsComponent,
    PageNotFoundComponent
];