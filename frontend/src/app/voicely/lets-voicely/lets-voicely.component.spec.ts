import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsVoicelyComponent } from './lets-voicely.component';

describe('LetsVoicelyComponent', () => {
  let component: LetsVoicelyComponent;
  let fixture: ComponentFixture<LetsVoicelyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetsVoicelyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetsVoicelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
