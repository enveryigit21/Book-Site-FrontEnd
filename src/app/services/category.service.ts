import { Category } from './../models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl:string= "http://localhost:9090/api";
  x=`${this.apiUrl}/category`
  constructor(private httpclient:HttpClient) { }

  addCategory(category:Category) {
    return this.httpclient.post<Category>(this.x,category)
  }

  getCategories(): Observable<Category[]> {
    return this.httpclient.get<any>(this.x).pipe(map(result=>result.data))
  }

  updateCategory(categoryId:string,category:Category) {
    return this.httpclient.put<Category>(`${this.x}/${categoryId}`,category)
  }

  deleteCategory(categoryId:string) {
    return this.httpclient.delete<Category[]>(`${this.x}/${categoryId}`)
  }

  getCategoryById(id:string) {
   return  this.httpclient.get<any>(`${this.x}/${id}`).pipe(map(a=>a.data))
  }
}
