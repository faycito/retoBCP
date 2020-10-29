import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyRowComponent } from './agency-row.component';

describe('AgencyRowComponent', () => {
  let component: AgencyRowComponent;
  let fixture: ComponentFixture<AgencyRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
