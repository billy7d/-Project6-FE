import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCreatorPlaylistComponent } from './show-creator-playlist.component';

describe('ShowCreatorPlaylistComponent', () => {
  let component: ShowCreatorPlaylistComponent;
  let fixture: ComponentFixture<ShowCreatorPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCreatorPlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCreatorPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
