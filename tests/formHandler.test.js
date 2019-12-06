/**
 * @jest-environment jsdom
 */

"use strict";

import { handleSubmit } from "../src/client/js/formHandler";

describe("formHandler tests.", () => {

  test("Check for preventDefault execution", () => {
    document.body.innerHTML = `
    <input type="text" id="name" value="fetch-response-text">
    <div id="results"></div>
  `;

    delete window.fetch;
    window.fetch = jest.fn(() => Promise.resolve());
    const event = { preventDefault: jest.fn() };
    handleSubmit(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });

});
