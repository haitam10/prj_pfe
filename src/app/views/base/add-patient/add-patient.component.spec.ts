import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPatientComponent } from './add-patient.component';
import { By } from '@angular/platform-browser';

describe('AddPatientComponent', () => {
  let component: AddPatientComponent;
  let fixture: ComponentFixture<AddPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPatientComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.addPatientForm.valid).toBeFalsy();
  });

  it('cin field validity', () => {
    let errors = {};
    let cin = component.addPatientForm.controls['cin'];
    expect(cin.valid).toBeFalsy();

    
  });

  it('submitting a form emits a user', () => {
    expect(component.addPatientForm.valid).toBeFalsy();
    component.addPatientForm.controls['cin'].setValue("12345678");
    component.addPatientForm.controls['lastName'].setValue("Doe");
    component.addPatientForm.controls['firstName'].setValue("John");
    component.addPatientForm.controls['dateNaissance'].setValue("1980-01-01");
    component.addPatientForm.controls['sex'].setValue("homme");
    component.addPatientForm.controls['telephone'].setValue("+1234567890");
    expect(component.addPatientForm.valid).toBeTruthy();

    let user;
    component.onSubmit();

    // Check if form submitted and values are correct
    expect(component.addPatientForm.value).toEqual({
      cin: "12345678",
      lastName: "Doe",
      firstName: "John",
      dateNaissance: "1980-01-01",
      sex: "homme",
      telephone: "+1234567890"
    });
  });

  it('should reset the form on reset', () => {
    component.addPatientForm.controls['cin'].setValue("12345678");
    component.addPatientForm.controls['lastName'].setValue("Doe");
    component.addPatientForm.controls['firstName'].setValue("John");
    component.addPatientForm.controls['dateNaissance'].setValue("1980-01-01");
    component.addPatientForm.controls['sex'].setValue("homme");
    component.addPatientForm.controls['telephone'].setValue("+1234567890");

    component.onReset();

    expect(component.addPatientForm.value).toEqual({
      cin: null,
      lastName: null,
      firstName: null,
      dateNaissance: null,
      sex: null,
      telephone: null
    });
  });
});
