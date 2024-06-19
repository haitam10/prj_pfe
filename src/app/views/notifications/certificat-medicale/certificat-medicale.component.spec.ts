import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CertificatMedicaleComponent } from './certificat-medicale.component';
import { FormsModule } from '@angular/forms';

describe('CertificatMedicaleComponent', () => {
  let component: CertificatMedicaleComponent;
  let fixture: ComponentFixture<CertificatMedicaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule], // Importer FormsModule
      declarations: [CertificatMedicaleComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatMedicaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
