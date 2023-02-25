import { Category } from './../../models/category';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {

  categories: Category[] = [];
  displayedColumns: string[] = [ 'name', 'action'];
  dataSource!: MatTableDataSource<Category>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private service: CategoryService) {}

  ngOnInit(): void {
  this.categoryList();
  }

  categoryList(){
    this.service.getCategories().subscribe(a => {
      this.categories = a;
      this.dataSource = new MatTableDataSource<Category>(a);
      this.dataSource.paginator = this.paginator;
    });
  }

  delete(categoryId:string) {
    this.service.deleteCategory(categoryId).subscribe(rslt => {

      let category=this.categories.filter(x=>x._id==categoryId)[0];
      let index = this.categories.indexOf(category);
      this.categories.splice(index,1);

      this.categoryList();

    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
