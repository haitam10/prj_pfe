import { Component, OnInit } from '@angular/core';
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
  ButtonDirective
} from '@coreui/angular';

interface Patient {
  cin: string;
}

@Component({
  selector: 'app-add-rdv',
  templateUrl: './add-rdv.component.html',
  styleUrls: ['./add-rdv.component.scss'],
  standalone: true,
  imports: [
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
    ButtonDirective
  ]
})
export class AddRdvComponent implements OnInit {
  formValidated = false;
  patients: Patient[] = [
    { cin: 'P12345' },
    { cin: 'P67890' },
    { cin: 'P54321' }
  ];

  constructor() { }

  ngOnInit(): void { }

  onSubmit() {
    this.formValidated = true;
    console.log('Form submitted');
  }

  onReset() {
    this.formValidated = false;
    console.log('Form reset');
  }
}
