import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatIconRegistry
} from "@angular/material";
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  exports: [  
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  declarations: []
})
export class NgMaterialModule { 

  constructor(
    _matIconRegistry: MatIconRegistry, _domSanitizer: DomSanitizer
  ) {
    _matIconRegistry.addSvgIconSet(_domSanitizer.bypassSecurityTrustResourceUrl('/assets/mdi.svg'));
  }

}
