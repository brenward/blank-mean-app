import { BlankMeanAppPage } from './app.po';

describe('blank-mean-app App', () => {
  let page: BlankMeanAppPage;

  beforeEach(() => {
    page = new BlankMeanAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
