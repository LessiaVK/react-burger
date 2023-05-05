import '@4tw/cypress-drag-drop';
const url = 'http://localhost:3000/';
const watingTime = 16000;

describe('service is available', function() {
    beforeEach(() => {
        cy.visit(url);
    });

    it('should be available on localhost:3000', function() {
          cy.visit(url);
        });
      
    it('Should constructor container not exist', () => {
        cy.get('[test-id="emptyBurger"]').should('exist');
    });

    it('Should show modal with ingredient', () => {   
        cy.get('[test-id="ingredient"]').first().click();
        cy.get('[test-id="modals"]').as('modal');
        cy.get('@modal').contains('Детали ингредиента');
        cy.get('@modal').find('[test-id="modalClose"]').click();
    });

    it('Should add new ingredient to constructor burger by drag&drop', () => {
        cy.get('[test-id="ingredient"]').as('ingredient');
        cy.get('[test-id="buter"]').as('buter');
        /* eslint-disable */
        const dataTransfer = new DataTransfer;

        cy.get('@ingredient').eq(0)
            .trigger('dragstart', { dataTransfer });
        cy.get('@buter')
            .trigger('drop', { dataTransfer });
        cy.get('@ingredient').eq(0)
            .trigger('@buter');
        
        cy.get('@ingredient').eq(5)
            .trigger('dragstart', { dataTransfer });
        cy.get('@buter')
            .trigger('drop', { dataTransfer });
        cy.get('@ingredient').eq(5)
            .trigger('@buter');
    });

    it('Should do order', () => {
        cy.visit(url);
        
        cy.get('[test-id="ingredient"]').as('ingredient');
        cy.get('[test-id="buter"]').as('buter');
        /* eslint-disable */
        const dataTransfer = new DataTransfer;

        cy.get('@ingredient').eq(0)
            .trigger('dragstart', { dataTransfer });
        cy.get('@buter')
            .trigger('drop', { dataTransfer });
        cy.get('@ingredient').eq(0)
            .trigger('@buter');

        cy.get('@ingredient').eq(5)
            .trigger('dragstart', { dataTransfer });
        cy.get('@buter')
            .trigger('drop', { dataTransfer });
        cy.get('@ingredient').eq(5)
            .trigger('@buter');

        cy.get('[test-id="buter"]').as('buter');
        cy.get('@buter').find('button').contains('Оформить заказ').click();
        
        cy.get('[test-id="email"]').type('lvk01@yandex.ru');
        cy.get('[test-id="password"]').type('123456');
        cy.get('button').contains('Войти').click();
        cy.wait(4000);
        cy.go('back');
        cy.wait(2000);
        
        cy.get('@ingredient').eq(0)
            .trigger('dragstart', { dataTransfer });
        cy.get('@buter')
            .trigger('drop', { dataTransfer });
        cy.get('@ingredient').eq(0)
            .trigger('@buter');
        
        cy.get('@ingredient').eq(5)
            .trigger('dragstart', { dataTransfer });
        cy.get('@buter')
            .trigger('drop', { dataTransfer });
        cy.get('@ingredient').eq(5)
            .trigger('@buter');

        cy.get('[test-id="buter"]').as('buter');
        cy.get('@buter').find('button').contains('Оформить заказ').click();
        cy.wait(watingTime);
        cy.get('[test-id="modals"]').as('modal');
        cy.get('@modal').contains('Ваш заказ начали готовить');
        cy.get('@modal').find('[test-id="modalClose"]').click();
    });

});