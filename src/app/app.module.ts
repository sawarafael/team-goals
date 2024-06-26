import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { AddGoalComponent } from './pages/goals/add-goal/add-goal.component';
import { DetailGoalsComponent } from './pages/goals/detail-goals/detail-goals.component';
import { ViewGoalsComponent } from './pages/goals/view-goals/view-goals.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddGoalComponent,
    ViewGoalsComponent,
    DetailGoalsComponent,
    BigCardComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
