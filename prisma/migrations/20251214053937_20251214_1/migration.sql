-- CreateTable
CREATE TABLE "file_upload" (
    "uuid" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "extension" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "is_public" BOOLEAN NOT NULL DEFAULT false,
    "created_by" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "file_upload_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "laporan_ca" (
    "uuid" TEXT NOT NULL,
    "triwulan" INTEGER NOT NULL,
    "tahun" INTEGER NOT NULL,
    "satker" TEXT NOT NULL,
    "bukti" TEXT NOT NULL,
    "created_by" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "laporan_ca_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "laporan_ca_triwulan_tahun_satker_key" ON "laporan_ca"("triwulan", "tahun", "satker");

-- AddForeignKey
ALTER TABLE "progress_ra_intervensi" ADD CONSTRAINT "progress_ra_intervensi_ra_fkey" FOREIGN KEY ("ra") REFERENCES "program_intervensi"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "file_upload" ADD CONSTRAINT "file_upload_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "laporan_ca" ADD CONSTRAINT "laporan_ca_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "laporan_ca" ADD CONSTRAINT "laporan_ca_bukti_fkey" FOREIGN KEY ("bukti") REFERENCES "file_upload"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
