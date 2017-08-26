import { NoteDoctorComponent } from './note-doctor/note-doctor.component';
import { NoteMedicineComponent } from './note-medicine/note-medicine.component';
import { NoteTemperatureComponent } from './note-temperature/note-temperature.component';
import { NgModule } from '@angular/core';
import { NoteComponent } from './note/note.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from "app/home/home.component";
import { AboutComponent } from "app/about/about.component";

const defaultRoute = '/home';
const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'note', component: NoteComponent, children: [
            { path: 'temperature', component: NoteTemperatureComponent },
            { path: ':noteId', component: NoteDetailsComponent },            
            { path: ':noteId/medicine', component: NoteMedicineComponent },
            { path: ':noteId/doctor', component: NoteDoctorComponent }
        ]
    },
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
    AboutComponent,
    NoteComponent,    
    NoteDetailsComponent,
    NoteTemperatureComponent,
    NoteMedicineComponent,
    NoteDoctorComponent,
    PageNotFoundComponent
];