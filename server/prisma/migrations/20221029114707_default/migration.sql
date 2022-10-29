-- CreateEnum
CREATE TYPE "BodyColor" AS ENUM ('BLACK', 'WHITE', 'GRAY', 'GREEN', 'RED', 'ORANGE');

-- CreateEnum
CREATE TYPE "Interior" AS ENUM ('BASE', 'LEATHER', 'MULTI');

-- CreateEnum
CREATE TYPE "CarType" AS ENUM ('CEDAN', 'SUV', 'SUPERCAR', 'CABRIO', 'PICKUP', 'COUPE');

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "bodyColor" "BodyColor" NOT NULL,
    "interior" "Interior" NOT NULL,
    "carType" "CarType" NOT NULL,
    "available" BOOLEAN NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_code_key" ON "Vehicle"("code");
