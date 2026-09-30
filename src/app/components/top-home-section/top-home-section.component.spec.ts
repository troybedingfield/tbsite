import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHomeSectionComponent } from './top-home-section.component';

describe('TopHomeSectionComponent', () => {
  let component: TopHomeSectionComponent;
  let fixture: ComponentFixture<TopHomeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopHomeSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopHomeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
