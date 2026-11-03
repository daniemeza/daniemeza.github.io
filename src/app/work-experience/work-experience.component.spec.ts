import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkExperienceComponent } from './work-experience.component';
import { WorkExperienceService } from '../services/work-experience-service/work-experience.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';


describe('WorkExperienceComponent', () => {
  let component: WorkExperienceComponent;
  let fixture: ComponentFixture<WorkExperienceComponent>;
  let service: WorkExperienceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkExperienceComponent],
      imports: [
        AngularFireModule.initializeApp(environment),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(WorkExperienceService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get work-experience documents from Firestore', () =>{
    expect(service.getWorkExperience()).not.toBeNull();
  });
});
