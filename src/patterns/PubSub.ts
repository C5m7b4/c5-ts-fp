export const PubSub = <SubscribableMessage>(msg?: SubscribableMessage) => {
  const subscribers: Set<(msg: SubscribableMessage) => void> = new Set();

  return {
    subscribe(cb: (msg?: SubscribableMessage) => void) {
      subscribers.add(cb);
      return () => {
        subscribers.delete(cb);
      };
    },

    publish(msg: SubscribableMessage): void {
      subscribers.forEach((cb) => cb(msg));
    },
  };
};
