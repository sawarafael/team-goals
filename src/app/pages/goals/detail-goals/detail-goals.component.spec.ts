import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGoalsComponent } from './detail-goals.component';

describe('DetailGoalsComponent', () => {
  let component: DetailGoalsComponent;
  let fixture: ComponentFixture<DetailGoalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailGoalsComponent]
    });
    fixture = TestBed.createComponent(DetailGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
