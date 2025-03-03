import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], // Ensure AppComponent is declared
  imports: [BrowserModule, FormsModule], // Add FormsModule here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
