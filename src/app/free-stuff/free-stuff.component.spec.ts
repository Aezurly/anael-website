import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeStuffComponent } from './free-stuff.component';

describe('FreeStuffComponent', () => {
  let component: FreeStuffComponent;
  let fixture: ComponentFixture<FreeStuffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreeStuffComponent]
    });
    fixture = TestBed.createComponent(FreeStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
