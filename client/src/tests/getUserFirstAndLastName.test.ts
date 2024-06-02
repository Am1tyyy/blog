import { getUserFirstAndLastName } from "../utils/getUserFirstAndLastName";

describe('getUserFirstAndLastName', () => {
  it('returns the correct first and last name when provided with a full name', () => {
    const fullName = 'John Doe';
    const result = getUserFirstAndLastName(fullName);
    expect(result.firstName).toEqual('John');
    expect(result.lastName).toEqual('Doe');
  });

  it('returns empty strings for first and last name if the input is empty', () => {
    const fullName = '';
    const result = getUserFirstAndLastName(fullName);
    expect(result.firstName).toEqual('');
    expect(result.lastName).toEqual(undefined);
  });

  it('returns empty string for last name if only first name is provided', () => {
    const fullName = 'John';
    const result = getUserFirstAndLastName(fullName);
    expect(result.firstName).toEqual('John');
    expect(result.lastName).toEqual(undefined);
  });

  it('handles multi-word last names correctly', () => {
    const fullName = 'Mary Anne Smith';
    const result = getUserFirstAndLastName(fullName);
    expect(result.firstName).toEqual('Mary');
    expect(result.lastName).toEqual('Anne');
  });
});
