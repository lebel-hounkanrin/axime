import { CustomPaginationPipe } from './custom-pagination.pipe';

describe('CustomPaginationPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomPaginationPipe();
    expect(pipe).toBeTruthy();
  });
});
