import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListePatientsComponent } from './liste-patients.component';
import { FormsModule } from '@angular/forms';

describe('ListePatientsComponent', () => {
  let component: ListePatientsComponent;
  let fixture: ComponentFixture<ListePatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule], // Importer FormsModule
      declarations: [ListePatientsComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
