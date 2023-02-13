import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TaskDetailModule } from './app-pages/task-detail/task-detail.module';
import { TasksModule } from './app-pages/tasks/tasks.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TasksModule,
    TaskDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
