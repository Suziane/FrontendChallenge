import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersRegistrationComponent } from './players-registration.component';

describe('PlayersRegistrationComponent', () => {
  let component: PlayersRegistrationComponent;
  let fixture: ComponentFixture<PlayersRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
