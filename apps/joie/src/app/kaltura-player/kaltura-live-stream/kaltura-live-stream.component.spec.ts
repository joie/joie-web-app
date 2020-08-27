import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { KalturaLiveStreamPlayerComponent } from './kaltura-live-stream.component';


describe('KalturaLiveStreamPlayerComponent', () => {
  let component: KalturaLiveStreamPlayerComponent;
  let fixture: ComponentFixture<KalturaLiveStreamPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalturaLiveStreamPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KalturaLiveStreamPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
