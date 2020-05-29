import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCommentOrderComponent } from './page-comment-order.component';

describe('PageCommentOrderComponent', () => {
  let component: PageCommentOrderComponent;
  let fixture: ComponentFixture<PageCommentOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCommentOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCommentOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
