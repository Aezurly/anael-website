import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFullScreenComponent } from './gallery-full-screen.component';

describe('GalleryFullScreenComponent', () => {
  let component: GalleryFullScreenComponent;
  let fixture: ComponentFixture<GalleryFullScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryFullScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleryFullScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
