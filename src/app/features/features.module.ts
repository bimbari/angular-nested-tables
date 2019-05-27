import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StylesModule } from '../styles/styles.module';
import { MainComponent } from './main/main.component';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StylesModule
  ],
  providers: [],
  exports: [
    MainComponent
  ],
  declarations: [MainComponent]
})
export class FeaturesModule { }
