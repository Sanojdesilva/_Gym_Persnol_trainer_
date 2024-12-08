import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditClientPage } from './edit-client.page';

describe('EditClientPage', () => {
  let component: EditClientPage;
  let fixture: ComponentFixture<EditClientPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
