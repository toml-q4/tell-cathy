import { NoteDoctorComponent } from './note-doctor/note-doctor.component';
import { NoteMedicineComponent } from './note-medicine/note-medicine.component';
import { NoteTemperatureComponent } from './note-temperature/note-temperature.component';
import { NgModule } from '@angular/core';
import { NoteComponent } from './note/note.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from 'app/home/home.component';
import { AboutComponent } from 'app/about/about.component';
import { OneGateGuard } from 'app/one-gate.guard';
import { NoteSymptomComponent } from 'app/note-symptom/note-symptom.component';
import { NoteNewMedicineComponent } from 'app/note-new-medicine/note-new-medicine.component';
import { NoteMakePrivateComponent } from 'app/note-make-private/note-make-private.component';

const defaultRoute = '/home';
const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'note', component: NoteComponent, children: [
            { path: 'makePrivate', canActivate: [OneGateGuard], component: NoteMakePrivateComponent },
            { path: 'temperature', canActivate: [OneGateGuard], component: NoteTemperatureComponent },
            { path: 'symptom', canActivate: [OneGateGuard], component: NoteSymptomComponent },
            { path: 'medicine', canActivate: [OneGateGuard], component: NoteMedicineComponent },
            { path: 'newmedicine', canActivate: [OneGateGuard], component: NoteNewMedicineComponent },
            { path: ':noteId', component: NoteDetailsComponent }
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
    NoteMakePrivateComponent,
    NoteTemperatureComponent,
    NoteSymptomComponent,
    NoteMedicineComponent,
    NoteNewMedicineComponent,
    NoteDoctorComponent,
    PageNotFoundComponent
];