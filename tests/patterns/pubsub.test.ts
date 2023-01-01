import { PubSub } from "../../src";

describe("pubsub", () => {
  test("should return a subscription", () => {
    let subscriberNotification = "";
    const response = (msg) => {
      subscriberNotification = msg;
    };
    const pubSub = PubSub<string>();
    const unSubscribe = pubSub.subscribe(response);
    pubSub.publish("hello");
    expect(subscriberNotification).toEqual("hello");
    unSubscribe();
    pubSub.publish("you should not see this");
    expect(subscriberNotification).toEqual("hello");
  });
});
