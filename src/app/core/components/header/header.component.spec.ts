import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from '../navbar/navbar.component';

describe('Testing Header Component', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let h1: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, NavbarComponent],
      imports: [FontAwesomeModule],
    })
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    h1 = fixture.debugElement.nativeElement.querySelector('h1');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display logo as string', () => {
    expect(h1.textContent).toContain('motortrade');
  });
});
