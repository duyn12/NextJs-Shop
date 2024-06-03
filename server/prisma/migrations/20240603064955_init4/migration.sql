/*
  Warnings:

  - You are about to drop the column `img` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "img";

-- CreateTable
CREATE TABLE "ImageList" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "ImageList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ImageList" ADD CONSTRAINT "ImageList_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
