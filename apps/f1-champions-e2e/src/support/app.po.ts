export const getGreeting = () => cy.get('h1');
export const firstElementInRow = () => cy.get('p-table tr').first();
export const highlightedRow = () => cy.get('p-table').find('.h-row');
