describe('나만의 유튜브 강의실 메인 페이지 테스트', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('페이지 접속시 기본 메인화면이 "볼 영상"인지 테스트한다. ', () => {
    cy.get('.bg-cyan-100').should('have.text', '👁️ 볼 영상');
  });

  it('저장한 동영상이 없을 경우 "동영상 없음"을 표시하는 상태를 보여주는지 테스트한다.', () => {
    cy.clearLocalStorage('savedClips');
    cy.get('[data-js="saved-page__not-found"]').should('be.visible');
  });
});
