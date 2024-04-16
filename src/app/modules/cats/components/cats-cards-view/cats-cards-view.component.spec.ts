import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsCardsViewComponent } from './cats-cards-view.component';

describe('CatsCardsViewComponent', () => {
  let component: CatsCardsViewComponent;
  let fixture: ComponentFixture<CatsCardsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatsCardsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatsCardsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
