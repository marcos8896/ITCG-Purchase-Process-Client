import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ConceptComponent } from './concept.component';
import { ConceptRoutingModule } from './concept.routing';
import { ConceptCreateComponent } from './components/concept-create/concept-create.component';
import { ConceptEditComponent } from './components/concept-edit/concept-edit.component';
import { ConceptShowComponent } from './components/concept-show/concept-show.component';
import { ConceptsComponent } from './components/concepts/concepts.component';

@NgModule({
  imports: [
    ConceptRoutingModule,
    ChartsModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    ConceptComponent, 
    ConceptCreateComponent, 
    ConceptEditComponent, 
    ConceptShowComponent, 
    ConceptsComponent 
  ]
})
export class ConceptModule { }
