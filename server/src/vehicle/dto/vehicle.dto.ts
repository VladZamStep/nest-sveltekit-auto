import { BodyColor } from "./vehicle-bodyColor.dto"
import { Interior } from "./vehicle-interior.dto"
import { CarType } from "./vehicle-type.dto"

export interface VehicleDto {
    brand: string,
    model: string,
    code: string,
    bodyColor: BodyColor,
    interior: Interior,
    carType: CarType
    available: boolean
}