class AgibankPage {
    // Selectors
    getSearchIcon(){
        return cy.get('a[aria-label="Link do ícone de pesquisa"]');
    }

    getSearchField(){
        return cy.get('#search-field');
    }

    getArcticle(){
        return cy.get('main>div>article div.post-thumb-img-content');
    }

    getSelectedArcticleTitle(){
        return cy.get('h1.entry-title');
    }

    getSelectedArcticleContent(){
        return cy.get('main>article>div');
    }

    // Actions

    searchContent(content){
        this.getSearchIcon().click();
        this.getSearchField().type(`${content}`).screenshot('Campo de pesquisa');
        this.getSearchField().type(`{enter}`);
    }

    getFirstContentResult(){
        this.getArcticle().first().click();
    }

    getContentResultAtPosition(position){
        this.getArcticle().eq(position-1).click();
    }

    searchFirstContent(content){
        this.searchContent(content);
        this.getFirstContentResult();
        this.getSelectedArcticleTitle().find('span').its('length').should('eq',1);
        this.getSelectedArcticleContent().first().screenshot('conteúdo');
    }

    searchContentAtPosition(content,position){
        this.searchContent(content);
        this.getContentResultAtPosition(position);
        this.getSelectedArcticleTitle().find('span').its('length').should('eq',1);
    }
}

export default new AgibankPage();
