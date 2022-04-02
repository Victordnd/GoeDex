import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes
import { GoeHeaderComponent } from './goe-header/goe-header.component';
import { GoeSearchComponent } from './goe-search/goe-search.component';
import { GoeListComponent } from './goe-list/goe-list.component';



@NgModule({
  declarations: [
    GoeHeaderComponent,
    GoeSearchComponent,
    GoeListComponent
  ],
  exports: [

    GoeHeaderComponent,
    GoeSearchComponent,
    GoeListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
