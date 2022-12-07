import { Maybe, prop, append } from "../src";

describe("maybe", () => {
  test("should run a successful maybe", () => {
    const maybeNumberOne = Maybe.just(5);
    const maybeNumberTwo = Maybe.nothing();

    expect(maybeNumberOne.isNothing()).toBeFalsy();
    expect(maybeNumberTwo.isNothing()).toBeTruthy();
  });
  test("should be able to extract out of maybe", () => {
    const maybeOne = Maybe.just(5);
    const mappedJust = maybeOne.map((x) => x + 1);
    expect(mappedJust.extract()).toEqual(6);
  });
  test("should chain a maybe", () => {
    const appendC = Maybe.chain(prop("b"), prop("c"), append(" is great"));

    const goodInput = Maybe.just({
      b: {
        c: "fp",
      },
    });

    const badInput = Maybe.just({});

    expect(appendC(goodInput).extract()).toEqual("fp is great");
    expect(appendC(badInput).extract()).toBeNull();
  });
});
