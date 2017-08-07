import { TellCathyPage } from './app.po';

describe('tell-cathy App', () => {
  let page: TellCathyPage;

  beforeEach(() => {
    page = new TellCathyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
