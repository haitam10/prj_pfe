import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  RowComponent,
  ColComponent,
  TextColorDirective,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  FormDirective,
  FormLabelDirective,
  FormControlDirective,
  FormFeedbackComponent,
  InputGroupComponent,
  InputGroupTextDirective,
  FormSelectDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  ButtonDirective
} from '@coreui/angular';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss'],
  standalone: true,
  imports: [
    CommonModule,  
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    ReactiveFormsModule,
    FormsModule,
    FormDirective,
    FormLabelDirective,
    FormControlDirective,
    FormFeedbackComponent,
    InputGroupComponent,
    InputGroupTextDirective,
    FormSelectDirective,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    ButtonDirective
  ]
})
export class AddPatientComponent implements OnInit {
  addPatientForm: FormGroup;
  formValidated = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.addPatientForm = this.fb.group({
      cin: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      sex: ['', Validators.required],
      telephone: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    this.formValidated = true;
    if (this.addPatientForm.valid) {
      const url = 'http://localhost:8081/api/v1/patients';
      const body = this.addPatientForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(url, body, { headers, withCredentials: true })
        .subscribe(
          (response) => {
            console.log('Patient added successfully:', response);
            this.addPatientForm.reset();
            this.formValidated = false;
          },
          (error) => {
            console.error('Error adding patient:', error);
          }
        );
    }
  }

  onReset() {
    this.formValidated = false;
    this.addPatientForm.reset();
  }
}