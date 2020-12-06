import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectCompetitionComponent } from './redirect-competition.component';

describe('RedirectCompetitionComponent', () => {
  let component: RedirectCompetitionComponent;
  let fixture: ComponentFixture<RedirectCompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectCompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
