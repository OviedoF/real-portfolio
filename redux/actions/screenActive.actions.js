import { CHANGE_SCREEN, QUIT_SCREEN } from "../types";

export const activeScreen = (screen) => ({
    type: CHANGE_SCREEN,
    payload: screen
});

export const quitScreen = (screen) => ({
    type: QUIT_SCREEN,
    payload: screen
});