/*
  Warnings:

  - A unique constraint covering the columns `[ip]` on the table `ip_detector` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ip_detector_ip_key" ON "ip_detector"("ip");
