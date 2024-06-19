import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ButtonModule, CardModule, FormModule, GridModule, ListGroupModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../icons/icon-subset';
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormModule, ButtonModule, ListGroupModule, FormsModule, GridModule, CardModule, RouterTestingModule, ProfileComponent],
      providers: [IconSetService]
    }).compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle password visibility', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const passwordInput = compiled.querySelector('#password') as HTMLInputElement;
    const toggleIcon = compiled.querySelector('.input-group-text i') as HTMLElement;

    expect(passwordInput.type).toBe('password');
    expect(toggleIcon.classList).toContain('fa-eye');

    toggleIcon.click();
    fixture.detectChanges();

    expect(passwordInput.type).toBe('text');
    expect(toggleIcon.classList).toContain('fa-eye-slash');

    toggleIcon.click();
    fixture.detectChanges();

    expect(passwordInput.type).toBe('password');
    expect(toggleIcon.classList).toContain('fa-eye');
  });
});
