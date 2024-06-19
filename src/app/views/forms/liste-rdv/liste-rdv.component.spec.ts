import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeRdvComponent } from './liste-rdv.component';
import { FormsModule } from '@angular/forms';

describe('ListeRdvComponent', () => {
  let component: ListeRdvComponent;
  let fixture: ComponentFixture<ListeRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule], // Importer FormsModule
      declarations: [ListeRdvComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
