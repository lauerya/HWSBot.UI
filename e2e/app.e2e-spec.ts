import { HardwareSwapUIPage } from './app.po';

describe('hardware-swap.ui App', () => {
  let page: HardwareSwapUIPage;
  //let url: 'http://google.com';

  beforeEach(() => {
    page = new HardwareSwapUIPage();
    //page.navigateTo(url);
  });

  it('should display welcome message', done => {
    this.http.get(`google.com`).map(res => console.log(res.json().data));
    //page.navigateTo();
    //page.getParagraphText()
      //.then(msg => expect(msg).toEqual('Search /r/HardwareSwap Database'))
      //.then(done, done.fail);
  });
});
