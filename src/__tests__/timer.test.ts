import React from "react";
import timerGame from "../timerGame";

test("waits 1 second before ending the game", () => {
  jest.useFakeTimers();
  jest.spyOn(global, "setTimeout");

  const callback = jest.fn();
  timerGame(callback);

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

  expect(callback).not.toBeCalled();

  jest.runAllTimers();

  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);
});
