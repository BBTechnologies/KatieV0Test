// Save the original window.location to restore it later
const originalLocation = window.location;

beforeAll(() => {
  // Mock the whole location object if needed
  jest.spyOn(window, 'location', 'get').mockReturnValue({
    ...originalLocation,
    assign: jest.fn()
  });
});

afterAll(() => jest.restoreAllMocks());
