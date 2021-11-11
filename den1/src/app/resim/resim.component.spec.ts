import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResimComponent } from './resim.component';

describe('ResimComponent', () => {
  let component: ResimComponent;
  let fixture: ComponentFixture<ResimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
