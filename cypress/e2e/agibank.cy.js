import AgibankPage from "../../page_objects/AgibankPage"

describe('Validar a função pesquisar pela lupa', () => {
  beforeEach(()=>{
    cy.visit('/')
  })

  it('Realiza a pesquisa de um card por seu titulo completo e clicar no card do mesmo', () => {
    let textToSearch = "Aposentados e Pensionistas: qual a diferença entre as modalidades?";
    AgibankPage.searchFirstContent(textToSearch)
    AgibankPage.getSelectedArcticleTitle().should('have.text', textToSearch);
  })

  it('Realiza a pesquisa de um card por seu titulo parcial e clicar na primeira opção', () => {
    let textToSearch = "Portabilidade";
    AgibankPage.searchFirstContent(textToSearch)
    AgibankPage.getSelectedArcticleTitle().should('contain.text', textToSearch);
  })
})