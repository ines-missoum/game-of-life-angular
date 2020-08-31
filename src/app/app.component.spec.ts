import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  const fakeGeneration = [
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 0, 1, 1],
    [1, 1, 0, 1, 0],
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('isAliveCell', () => {
    it('should be true when cell is alive', () => {
      const component = new AppComponent();
      const result = component.isAliveCell(2, 1, fakeGeneration);
      expect(result).toBeTruthy();
    });
    it('should be false when cell is dead', () => {
      const component = new AppComponent();
      const result = component.isAliveCell(2, 0, fakeGeneration);
      expect(result).toBeFalsy();
    });
  });

  describe('getAliveNeighborsNumber', () => {
    it('should get the right number of alive neighbors for middle cell', () => {
      const component = new AppComponent();
      const result = component.getAliveNeighborsNumber(2, 1, fakeGeneration);
      expect(result).toEqual(2);
    });
    it('should get the right number of alive neighbors for corner cell', () => {
      const component = new AppComponent();
      const result = component.getAliveNeighborsNumber(0, 0, fakeGeneration);
      expect(result).toEqual(1);
    });
    it('should get the right number of alive neighbors for border cell', () => {
      const component = new AppComponent();
      const result = component.getAliveNeighborsNumber(2, 0, fakeGeneration);
      expect(result).toEqual(2);
    });
  });

  describe('willBeLivingCell', () => {
    it('should be false when alive cell and less than 2 neighbors', () => {
      const component = new AppComponent();
      const result = component.willBeLivingCell(0, 3, fakeGeneration);
      expect(result).toBeFalsy();
    });
    it('should be false when alive cell and more than 3 neighbors', () => {
      const component = new AppComponent();
      const result = component.willBeLivingCell(4, 0, fakeGeneration);
      expect(result).toBeFalsy();
    });
    it('should be true when alive cell and exactly 2 neighbors', () => {
      const component = new AppComponent();
      const result = component.willBeLivingCell(5, 3, fakeGeneration);
      expect(result).toBeTruthy();
    });
    it('should be true when alive cell and exactly 3 neighbors', () => {
      const component = new AppComponent();
      const result = component.willBeLivingCell(4, 4, fakeGeneration);
      expect(result).toBeTruthy();
    });
    it('should be true when dead cell and exactly 3 neighbors', () => {
      const component = new AppComponent();
      const result = component.willBeLivingCell(2, 4, fakeGeneration);
      expect(result).toBeTruthy();
    });
    it('should be false when dead cell and less than 3 neighbors', () => {
      const component = new AppComponent();
      const result = component.willBeLivingCell(0, 0, fakeGeneration);
      expect(result).toBeFalsy();
    });
    it('should be false when dead cell and more than 3 neighbors', () => {
      const component = new AppComponent();
      const result = component.willBeLivingCell(3, 0, fakeGeneration);
      expect(result).toBeFalsy();
    });
  });

});
