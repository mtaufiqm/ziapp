-- CreateTable
CREATE TABLE "ip_detector" (
    "uuid" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "ips" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ip_detector_pkey" PRIMARY KEY ("uuid")
);
