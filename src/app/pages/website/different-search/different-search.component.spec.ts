import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentSearchComponent } from './different-search.component';

describe('DifferentSearchComponent', () => {
  let component: DifferentSearchComponent;
  let fixture: ComponentFixture<DifferentSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DifferentSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifferentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
