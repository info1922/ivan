import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Componentes
import { AppComponent } from './app.component';
import { HolaComponent } from './components/hola/hola.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ToolsComponent } from './components/tools/tools.component';
import { InterestsComponent } from './components/interests/interests.component';



const ROUTES: Routes = [
    { path: '', component: HolaComponent },
    { path: 'hola', component: HolaComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'tools', component: ToolsComponent},
    { path: 'int', component: InterestsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'hola' },
];


export const APPROUTING = RouterModule.forRoot(ROUTES);
