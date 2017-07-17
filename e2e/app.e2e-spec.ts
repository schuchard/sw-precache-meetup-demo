import { SvcWorkerDemoPage } from './app.po';

describe('svc-worker-demo App', () => {
  let page: SvcWorkerDemoPage;

  beforeEach(() => {
    page = new SvcWorkerDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
