import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchClientPage} from './search-client.page';

describe('SearchClientPage', () => {
  let component: SearchClientPage;
  let fixture: ComponentFixture<SearchClientPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
