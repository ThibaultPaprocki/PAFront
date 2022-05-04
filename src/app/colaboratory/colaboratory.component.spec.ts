import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboratoryComponent } from './colaboratory.component';

describe('ColaboratoryComponent', () => {
  let component: ColaboratoryComponent;
  let fixture: ComponentFixture<ColaboratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColaboratoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
