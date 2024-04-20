import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationFormComponent } from './pagination-form.component';

describe('PaginationFormComponent', () => {
  let component: PaginationFormComponent;
  let fixture: ComponentFixture<PaginationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
