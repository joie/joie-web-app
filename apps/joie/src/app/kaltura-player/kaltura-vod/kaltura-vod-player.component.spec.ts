import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { KalturaVodPlayerComponent } from './kaltura-vod-player.component';


describe('KalturaVodPlayerComponent', () => {
  let component: KalturaVodPlayerComponent;
  let fixture: ComponentFixture<KalturaVodPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalturaVodPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KalturaVodPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
