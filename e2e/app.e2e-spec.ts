import { HardwareSwap.UIPage } from './app.po';

describe('hardware-swap.ui App', () => {
  let page: HardwareSwap.UIPage;

  beforeEach(() => {
    page = new HardwareSwap.UIPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
