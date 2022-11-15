import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3Component } from './page3.component';
import {MockDataService} from "../mocks/MockDataService";

describe('Page3Component', () => {
  let component: Page3Component;
  let fixture: ComponentFixture<Page3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page3Component ],
      providers: [{
        provide: 'IDataService',
        useClass: MockDataService
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
