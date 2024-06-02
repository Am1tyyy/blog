import {
  getDateFrom,
  getDateHoursMinute,
  formatMessageDate,
  formatVideoLength,
} from '../utils/getDate';

describe('getDateFrom', () => {
  it('returns "x second ago" when the time difference is less than 1 minute', () => {
    const date = new Date();
    date.setSeconds(date.getSeconds() - 30);

    const result = getDateFrom(date);

    expect(result).toBe('30 second ago');
  });
});

describe('getDateHoursMinute', () => {
  it('returns the correct time format in HH:MM AM/PM', () => {
    const date = '2024-06-02T15:30:00';

    const result = getDateHoursMinute(date);

    expect(result).toBe('3:30 pm');
  });
});

describe('formatMessageDate', () => {
  it('returns "today" for today\'s date', () => {
    const result = formatMessageDate(new Date().toISOString());

    expect(result).toBe('today');
  });
});

describe('formatVideoLength', () => {
  it('returns the correct format for duration less than 1 hour', () => {
    const duration = 1800;

    const result = formatVideoLength(duration);

    expect(result).toBe('30:00');
  });
});
