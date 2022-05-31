import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatTooltipModule } from '@angular/material/tooltip';


const material_modules = [
  MatTableModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatDividerModule,
  MatButtonModule,
  MatSelectModule,MatFormFieldModule,
  MatTooltipModule
]

@NgModule({
  imports: [material_modules],
  exports: [material_modules]
})

export class MaterialModule { }
