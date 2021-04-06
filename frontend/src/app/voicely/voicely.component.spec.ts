import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicelyComponent } from './voicely.component';

describe('VoicelyComponent', () => {
  let component: VoicelyComponent;
  let fixture: ComponentFixture<VoicelyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoicelyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoicelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
