import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectSaasComponent } from './connect-saas.component';

describe('ConnectSaasComponent', () => {
  let component: ConnectSaasComponent;
  let fixture: ComponentFixture<ConnectSaasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectSaasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectSaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
