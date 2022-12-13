import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablepageComponent } from './tablepage.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

describe('TablepageComponent', () => {
  let component: TablepageComponent;
  let fixture: ComponentFixture<TablepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
