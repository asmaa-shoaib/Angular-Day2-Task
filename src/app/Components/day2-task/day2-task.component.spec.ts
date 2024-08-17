import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2TaskComponent } from './day2-task.component';

describe('Day2TaskComponent', () => {
  let component: Day2TaskComponent;
  let fixture: ComponentFixture<Day2TaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Day2TaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Day2TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
