/**
 * @jest-environment jsdom
 */

"use strict";

import { checkForName } from "../src/client/js/nameChecker";

test("Test for alert when name is stored.", () => {
  const input = [
    "Picard",
    "Janeway",
    "Kirk",
    "Archer",
    "Georgiou"
  ];

  window.alert = jest.fn();  // create dummy DOM alert func

  for (let name of input) {
    checkForName(name);
    expect(window.alert).toBeCalled();
  };
});

test("Test for NO alerts when name absent from array.", () => {
  const input = [
    "bob",
    "James",
    "berverly"
  ];

  window.alert = jest.fn();  // create dummy DOM alert func

  for (let name of input) {
    checkForName(name);
    expect(window.alert).not.toBeCalled();
  };
});
