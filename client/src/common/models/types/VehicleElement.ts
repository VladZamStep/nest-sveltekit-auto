import type { BodyColor } from "../enums/BodyColor";
import type { CarType } from "../enums/CarType";
import type { Interior } from "../enums/Interior";

export type VehicleElement = {
    id?: string,
    brand: string;
    model: string;
    code: string;
    bodyColor: BodyColor;
    interior: Interior;
    carType: CarType;
    available: boolean;
}