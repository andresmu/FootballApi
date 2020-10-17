import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarListComponent } from './buscar-list.component';

describe('BuscarListComponent', () => {
  let component: BuscarListComponent;
  let fixture: ComponentFixture<BuscarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
