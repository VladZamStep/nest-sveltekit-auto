import type { ConfigElement } from "../models/types/VehicleElement";

export const sortFunc = (selected: keyof ConfigElement, order: boolean, array: ConfigElement[]) => {
    array = array.sort((obj1, obj2) => {
        if (obj1[selected] === null || obj1[selected] === '') {
            return 1;
        }
        if (obj2[selected] === null || obj2[selected] === '') {
            return -1;
        }
        if (order) {
            return obj1[selected]! < obj2[selected]! ? -1 : 1;
        }
        if (!order) {
            return obj1[selected]! < obj2[selected]! ? 1 : -1;
        } else return 0;
    });
};
