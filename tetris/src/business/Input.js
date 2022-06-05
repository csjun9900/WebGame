export const Action = {
  Left: "Left",
  Right: "Right",
  Pause: "Pause",
  Quit: "Quit",
  Rotate: "Rotate",
  FastDrop: "FastDrop",
  SlowDrop: "SlowDrop",
};

export const Key = {
  ArrowUp: Action.Rotate,
  ArrowDown: Action.SlowDrop,
  ArrowLeft: Action.Left,
  ArrowRight: Action.Right,
  KeyQ: Action.Quit,
  KeyP: Action.Pause,
  Space: Action.FastDrop,
};

export const actionForKey = (keyCode) => Key[keyCode];
export const actionIsDrop = (action) =>
  [Action.SlowDrop, Action.FastDrop].includes(action);
