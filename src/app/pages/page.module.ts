import { AppRoutingModule } from '../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from 'src/app/layouts/main-layout/main-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { HeaderComponent } from 'src/app/nav/header/header.component';
import { AdminLayoutComponent } from 'src/app/layouts/admin-layout/admin-layout.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import{HttpClientModule} from "@angular/common/http"
import { AdminCategoryNeweditComponent } from './admin-category-newedit/admin-category-newedit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminCategoryListComponent } from './admin-category-list/admin-category-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AdminBookNeweditComponent } from './admin-book-newedit/admin-book-newedit.component';
import { AdminBookListComponent } from './admin-book-list/admin-book-list.component';
import { BookComponent } from './book/book.component';
import { CategoryMenuComponent } from '../components/category-menu/category-menu.component';




@NgModule({
  declarations: [
    HomeComponent,
    MainLayoutComponent,
    HeaderComponent,
    AdminLayoutComponent,AdminHomeComponent,AdminCategoryNeweditComponent, AdminCategoryListComponent, AdminBookNeweditComponent, AdminBookListComponent, BookComponent,CategoryMenuComponent
  ],
  imports: [
    CommonModule,BrowserAnimationsModule,BrowserModule,AppRoutingModule,MaterialModule,HttpClientModule,FormsModule,ReactiveFormsModule,MatTableModule,MatPaginatorModule
  ],
  exports:[HomeComponent,MainLayoutComponent, HeaderComponent, AdminLayoutComponent,AdminHomeComponent,MatTableModule,MatPaginatorModule,AdminBookNeweditComponent ,CategoryMenuComponent]
})
export class PageModule { }
