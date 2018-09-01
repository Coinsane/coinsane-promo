// @flow
export const UI_WINDOW_RESIZE = 'UI_WINDOW_RESIZE';

export const WINDOW_RESIZE = (innerWidth: number) => ({
  type: UI_WINDOW_RESIZE,
  payload: {
    innerWidth,
  },
});
