import { authorizedRequest, unauthorizedRequest } from './../utils/queries';

describe('authorizedRequest', () => {
  it('throws an error if token is empty', async () => {
    const url = 'https://example.com/api';
    const method = 'POST';
    const token = '';
    const body = { data: 'test' };
    const fetchMock = jest
      .fn()
      .mockResolvedValue({ status: 200, json: jest.fn().mockResolvedValue({}) });
    global.fetch = fetchMock;

    await expect(authorizedRequest(url, method, 'token', body)).rejects.toThrowError();
  });

  it('throws an error if response status is not 200 or 201', async () => {
    const url = 'https://example.com/api';
    const method = 'POST';
    const token = 'fakeToken';
    const body = { data: 'test' };
    const fetchMock = jest
      .fn()
      .mockResolvedValue({ status: 400, json: jest.fn().mockResolvedValue({}) });
    global.fetch = fetchMock;

    await expect(authorizedRequest(url, method, 'token', body)).rejects.toThrowError();
  });
});

describe('unauthorizedRequest', () => {
  it('makes a fetch request without authorization header when token is not present', async () => {
    const url = 'https://example.com/api';
    const method = 'GET';
    const body = { data: 'test' };
    const fetchMock = jest
      .fn()
      .mockResolvedValue({ status: 200, json: jest.fn().mockResolvedValue({}) });
    global.fetch = fetchMock;

    await unauthorizedRequest(url, method, body);

    expect(fetchMock).toHaveBeenCalledWith(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  });

  it('throws an error if response status is not 200 or 201', async () => {
    const url = 'https://example.com/api';
    const method = 'GET';
    const body = { data: 'test' };
    const fetchMock = jest
      .fn()
      .mockResolvedValue({ status: 400, json: jest.fn().mockResolvedValue({}) });
    global.fetch = fetchMock;

    await expect(unauthorizedRequest(url, method, body)).rejects.toThrowError();
  });
});
