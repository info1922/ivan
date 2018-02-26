import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import {APPROUTING } from './app.routing';

// Servicio
import { InfoService } from './services/info.service';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HolaComponent } from './components/hola/hola.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ToolsComponent } from './components/tools/tools.component';
import { InterestsComponent } from './components/interests/interests.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HolaComponent,
    SkillsComponent,
    ToolsComponent,
    InterestsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APPROUTING
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
