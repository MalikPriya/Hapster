import { Customer } from './customer.model';

describe('Post', () => {
  it('should create an instance', () => {
    expect(new Customer()).toBeTruthy();
  });
});
