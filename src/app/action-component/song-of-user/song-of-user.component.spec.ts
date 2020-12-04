import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongOfUserComponent } from './song-of-user.component';

describe('SongOfUserComponent', () => {
  let component: SongOfUserComponent;
  let fixture: ComponentFixture<SongOfUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongOfUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongOfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
