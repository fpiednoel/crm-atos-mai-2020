import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailOrderComponent } from './page-detail-order.component';

describe('PageDetailOrderComponent', () => {
  let component: PageDetailOrderComponent;
  let fixture: ComponentFixture<PageDetailOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDetailOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDetailOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
