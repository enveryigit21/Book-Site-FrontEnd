import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatToolbarModule,MatTabsModule,MatFormFieldModule,MatInputModule,MatIconModule,MatAutocompleteModule,MatCardModule,MatListModule
  ],
  exports:[MatToolbarModule,MatButtonModule,MatTabsModule,MatFormFieldModule,MatInputModule,MatIconModule,MatAutocompleteModule,MatCardModule,MatListModule]
})
export class MaterialModule { }
