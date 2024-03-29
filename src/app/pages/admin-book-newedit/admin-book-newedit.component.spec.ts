import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookNeweditComponent } from './admin-book-newedit.component';

describe('AdminBookNeweditComponent', () => {
  let component: AdminBookNeweditComponent;
  let fixture: ComponentFixture<AdminBookNeweditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBookNeweditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBookNeweditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
