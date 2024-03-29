import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoryNeweditComponent } from './admin-category-newedit.component';

describe('AdminCategoryNeweditComponent', () => {
  let component: AdminCategoryNeweditComponent;
  let fixture: ComponentFixture<AdminCategoryNeweditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoryNeweditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCategoryNeweditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
