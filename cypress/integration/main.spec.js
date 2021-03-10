describe('나만의 유튜브 강의실 메인 페이지 테스트', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('페이지 접속시 기본 메인화면이 "볼 영상"인지 테스트한다. ', () => {
    cy.get('.bg-cyan-100').should('have.text', '👁️ 볼 영상');
  });
