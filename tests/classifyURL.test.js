import { validURL } from "../src/client/js/classifyURL"

describe("Test classifyURL.js functions", () => {
  test("validURL(url) should return FALSE when an invalid url string is passed.", () => {
    const input = [
      "",
      ".",
      "http://",
      "https://",
      "www",
      "www.",
      "abc",
      "a",
      "1"
    ];
    const output = false;
    for (let i of input) {
      expect(validURL(i)).toBe(output);
    };
  });

  test("validURL(url) should return TRUE when a valid url string is passed.", () => {
    const input = [
      "http://google.com/",
      "http://foo.co.uk",
      "https://boogle.me",
      "www.whythehate.com/",
    ];
    const output = true;
    for (let i of input) {
      expect(validURL(i)).toBe(output);
    };
  });

});
