import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapdialogComponent } from './mapdialog.component';

describe('MapdialogComponent', () => {
  let component: MapdialogComponent;
  let fixture: ComponentFixture<MapdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
