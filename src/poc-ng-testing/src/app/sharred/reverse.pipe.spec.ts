import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    let reversePipe = new ReversePipe();
    // expect(pipe).toBeTruthy();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });
});
