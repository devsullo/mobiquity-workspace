import {
  getGreeting,
  firstElementInRow,
  highlightedRow,
} from '../support/app.po';

describe('f1-champions', () => {
  beforeEach(() => cy.visit('/'));

  it('should display title', () => {
    getGreeting().contains('Champions').and('be.visible');
  });

  it('should have 2005 year winner on top of list', () => {
    firstElementInRow().children().should('contain', '2005').and('be.visible');
  });

  it('should navigate to correct path', () => {
    firstElementInRow().click();
    cy.url().should('contain', 'winners-of-year/2005');
  });

  it('should display a right title', () => {
    firstElementInRow().click();
    getGreeting().contains('Race Winners 2005').and('be.visible');
  });

  it('should highlight world champion correctly', () => {
    firstElementInRow().click();
    highlightedRow().should('contain', 'Fernando Alonso');
    highlightedRow().should('have.length', 7);
  });
});
