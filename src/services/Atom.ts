import { atom } from "recoil"

export const clickAtom = atom({
    key: "clicked",
    default : false
});

export const timerAtom = atom({
    key: "timer",
    default : 1500
})