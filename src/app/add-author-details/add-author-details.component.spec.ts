import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAuthorDetailsComponent } from './add-author-details.component';

describe('AddAuthorDetailsComponent', () => {
  let component: AddAuthorDetailsComponent;
  let fixture: ComponentFixture<AddAuthorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAuthorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAuthorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
