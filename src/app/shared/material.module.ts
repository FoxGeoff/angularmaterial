import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatIconModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatIconModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatIconModule,
  ]
})
export class MaterialModule { }
