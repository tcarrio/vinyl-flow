import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulseAudioComponent } from './pulse-audio.component';

describe('PulseAudioComponent', () => {
  let component: PulseAudioComponent;
  let fixture: ComponentFixture<PulseAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulseAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulseAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
