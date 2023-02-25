import { filter } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { Category } from './../../models/category';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild,  } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-admin-book-list',
  templateUrl: './admin-book-list.component.html',
  styleUrls: ['./admin-book-list.component.css']
})
export class AdminBookListComponent implements OnInit {

  books:Book[]=[];
  displayedColumns:String[]= [ "picture" , "title" , "author" , "price","categoryName","stock","action"]
  dataSource!:MatTableDataSource<Book>;


   @ViewChild(MatPaginator, {static: true} ) paginator!:MatPaginator

  constructor(private bookService:BookService){}
  ngOnInit(): void {
    this.booksAdd()

  }


  booksAdd() {
    this.bookService.getBooks().subscribe(z => {
      this.books=z;
      this.dataSource = new MatTableDataSource<Book>(z);
      this.dataSource.paginator= this.paginator;
    })
  }





  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  delete(bookId: string) {
    this.bookService.deleteBook(bookId).subscribe((result) => {
      if ((result.status = "success")) {
        let book = this.books.filter((x) => x._id == bookId)[0];

        let index = this.books.indexOf(book);

        this.books.splice(index, 1);
        this.dataSource = new MatTableDataSource<Book>(this.books);
      } else {
        alert("silme işlemi sirasinda bir hata meydana geldi.");
      }
    });

  }
}
