import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcosystemOverviewComponent } from './ecosystem-overview.component';

describe('EcosystemOverviewComponent', () => {
  let component: EcosystemOverviewComponent;
  let fixture: ComponentFixture<EcosystemOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcosystemOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcosystemOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
