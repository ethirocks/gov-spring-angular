import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovDataComponent } from './gov-data.component';

describe('GovDataComponent', () => {
  let component: GovDataComponent;
  let fixture: ComponentFixture<GovDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
