import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableDarkComponent } from './components/table-dark/table-dark.component';
import { Router, RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [TableLightComponent, BtnComponent, TotalPipe, StateDirective, TableDarkComponent],
  imports: [
    CommonModule,
    RouterModule,
    TemplatesModule,
    TextModule,
    IconsModule
  ],
  exports: [TableLightComponent, BtnComponent, TotalPipe, StateDirective,
     TableDarkComponent, TemplatesModule, TextModule, IconsModule]
})
export class SharedModule { }
