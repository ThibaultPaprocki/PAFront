import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightProfilComponent } from './light-profil.component';

describe('LightProfilComponent', () => {
  let component: LightProfilComponent;
  let fixture: ComponentFixture<LightProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
