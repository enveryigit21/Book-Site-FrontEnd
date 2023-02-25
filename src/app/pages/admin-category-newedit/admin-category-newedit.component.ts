import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-category-newedit',
  templateUrl: './admin-category-newedit.component.html',
  styleUrls: ['./admin-category-newedit.component.css']
})
export class AdminCategoryNeweditComponent implements OnInit {

  categoryId:any ;
category!:Category ;
categoryForm!:FormGroup;
title!:string ; //ekleme mi güncelleme mi ?
btnText!:string; //     ""
type!:string;


  constructor(private router:Router, private route : ActivatedRoute  ,private service:CategoryService,private formBuilder:FormBuilder){}
  ngOnInit(): void {


    this.categoryId = this.route.snapshot.paramMap.get("id");

    if(this.categoryId==null) {
        this.title="Category add"
        this.btnText = "Add";
        this.type="add"
    }
    else {
      this.title="category update"
      this.btnText = "Update";
      this.type="Update"
      this.service.getCategoryById(this.categoryId).subscribe(t=> {
        this.category=t;
      this.categoryForm.controls['name'].setValue(this.category.name) //bu satırda set işlemi yapıp içini doldurdum

      })

    }


   this.categoryForm=this.formBuilder.group({
    name:["",Validators.required]
   })


  }



  onSubmit() {
    if(this.categoryForm.valid)
    {
      if(this.type=="add") {
        this.service.addCategory(this.categoryForm.value).subscribe(result=> {
          this.router.navigateByUrl("/admin")
        })
      }
      //update işlemi
      else {
        this.service.updateCategory(this.categoryId,this.categoryForm.value).subscribe(res=> {
          this.router.navigateByUrl("/admin")
        })

      }
    }
  }

}
