import React from "react";
import { render, screen } from "@testing-library/react";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import App from "./App";
import exp from "constants";

function sum(a: number, b: number): number {
  return a + b;
}

function fetchData(val: boolean) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (val) {
        resolve("peanut butter");
      } else {
        reject("error");
      }
    }, 1000);
  });
}

const mocks = [] as MockedResponse<Record<string, any>>[];

test("renders App", () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );
});

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("the data is peanut butter", async () => {
  //return fetchData(true).then((data) => {
  //  expect(data).toBe("peanut butter");
  //});
  const data = await fetchData(true);
  expect(data).toBe("peanut butter");
});

test("the fetch fails with error", async () => {
  expect.assertions(1);
  //return fetchData(false).catch((e) => expect(e).toMatch("error"));
  //return expect(fetchData(false)).rejects.toMatch("error");
  try {
    await fetchData(false);
  } catch (e) {
    // eslint-disable-next-line jest/no-conditional-expect
    expect(e).toMatch("error");
  }
});

function forEach(items: number[], callback: (item: number) => number) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

test("the mock function returns correct results", () => {
  const mockCallback = jest.fn((x) => 42 + x);
  forEach([0, 1], mockCallback);

  expect(mockCallback.mock.calls.length).toBe(2);
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  expect(mockCallback.mock.results[0].value).toBe(42);
  expect(mockCallback.mock.results[1].value).toBe(43);
});
