import { ScotchyPage } from './app.po';

describe('scotchy App', function() {
  let page: ScotchyPage;

  beforeEach(() => {
    page = new ScotchyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
