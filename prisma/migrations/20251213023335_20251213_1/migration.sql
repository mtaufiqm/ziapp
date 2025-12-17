-- CreateTable
CREATE TABLE "user" (
    "username" TEXT NOT NULL,
    "pwd" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "roles" (
    "description" TEXT NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("description")
);

-- CreateTable
CREATE TABLE "user_role_bridge" (
    "description" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "user_role_bridge_pkey" PRIMARY KEY ("description","username")
);

-- CreateTable
CREATE TABLE "pegawai" (
    "uuid" TEXT NOT NULL,
    "fullname" TEXT,
    "fullname_with_title" TEXT,
    "nickname" TEXT,
    "date_of_birth" TEXT,
    "city_of_birth" TEXT,
    "nip" TEXT,
    "old_nip" TEXT,
    "age" INTEGER NOT NULL,
    "username" TEXT,
    "status_pegawai" TEXT,
    "phone_number" TEXT,
    "satker" TEXT,

    CONSTRAINT "pegawai_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "status_pegawai" (
    "description" TEXT NOT NULL,

    CONSTRAINT "status_pegawai_pkey" PRIMARY KEY ("description")
);

-- CreateTable
CREATE TABLE "satker" (
    "code" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "type" INTEGER NOT NULL,

    CONSTRAINT "satker_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "satker_type" (
    "id" INTEGER NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "satker_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dukungan_rb" (
    "id" INTEGER NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "dukungan_rb_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rencana_aksi" (
    "uuid" TEXT NOT NULL,
    "nama_program" TEXT,
    "uraian_kegiatan" TEXT,
    "isu_strategis" TEXT,
    "dukungan_rb" INTEGER NOT NULL,
    "output" TEXT,
    "timeline" TEXT,
    "ukuran_keberhasilan" TEXT,
    "outcome" TEXT,
    "keterangan" TEXT,
    "status" INTEGER NOT NULL,
    "tahun" INTEGER NOT NULL,
    "satker" TEXT NOT NULL,
    "last_updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "rencana_aksi_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "ra_status" (
    "id" INTEGER NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "ra_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "progress_ra" (
    "uuid" TEXT NOT NULL,
    "ra" TEXT NOT NULL,
    "desc" TEXT,
    "date" TEXT,
    "pelaksanaan_pg" DOUBLE PRECISION NOT NULL,
    "capaian_pg" DOUBLE PRECISION NOT NULL,
    "bukti" TEXT,
    "notes" TEXT,
    "status" INTEGER NOT NULL,
    "created_by" TEXT NOT NULL,
    "last_updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "progress_ra_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "progress_status" (
    "id" INTEGER NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "progress_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "master_intervensi_nasional" (
    "uuid" TEXT NOT NULL,
    "nama_program" TEXT,
    "uraian_kegiatan" TEXT,
    "isu_strategis" TEXT,
    "output" TEXT,
    "timeline" TEXT,
    "ukuran_keberhasilan" TEXT,
    "outcome" TEXT,
    "keterangan" TEXT NOT NULL,
    "tahun" INTEGER NOT NULL,
    "last_updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "master_intervensi_nasional_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "program_intervensi" (
    "uuid" TEXT NOT NULL,
    "intervensi" TEXT NOT NULL,
    "ukuran_keberhasilan" TEXT,
    "timeline" TEXT,
    "status" INTEGER NOT NULL,
    "satker" TEXT NOT NULL,
    "tahun" INTEGER NOT NULL,
    "last_updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "program_intervensi_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "progress_ra_intervensi" (
    "uuid" TEXT NOT NULL,
    "ra" TEXT NOT NULL,
    "desc" TEXT,
    "date" TEXT,
    "pelaksanaan_pg" DOUBLE PRECISION NOT NULL,
    "capaian_pg" DOUBLE PRECISION NOT NULL,
    "bukti" TEXT,
    "notes" TEXT,
    "status" INTEGER NOT NULL,
    "created_by" TEXT NOT NULL,
    "last_updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "progress_ra_intervensi_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "pegawai_username_key" ON "pegawai"("username");

-- CreateIndex
CREATE UNIQUE INDEX "program_intervensi_intervensi_satker_tahun_key" ON "program_intervensi"("intervensi", "satker", "tahun");

-- AddForeignKey
ALTER TABLE "user_role_bridge" ADD CONSTRAINT "user_role_bridge_description_fkey" FOREIGN KEY ("description") REFERENCES "roles"("description") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_role_bridge" ADD CONSTRAINT "user_role_bridge_username_fkey" FOREIGN KEY ("username") REFERENCES "user"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pegawai" ADD CONSTRAINT "pegawai_username_fkey" FOREIGN KEY ("username") REFERENCES "user"("username") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pegawai" ADD CONSTRAINT "pegawai_status_pegawai_fkey" FOREIGN KEY ("status_pegawai") REFERENCES "status_pegawai"("description") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pegawai" ADD CONSTRAINT "pegawai_satker_fkey" FOREIGN KEY ("satker") REFERENCES "satker"("code") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "satker" ADD CONSTRAINT "satker_type_fkey" FOREIGN KEY ("type") REFERENCES "satker_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rencana_aksi" ADD CONSTRAINT "rencana_aksi_dukungan_rb_fkey" FOREIGN KEY ("dukungan_rb") REFERENCES "dukungan_rb"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rencana_aksi" ADD CONSTRAINT "rencana_aksi_status_fkey" FOREIGN KEY ("status") REFERENCES "ra_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rencana_aksi" ADD CONSTRAINT "rencana_aksi_satker_fkey" FOREIGN KEY ("satker") REFERENCES "satker"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rencana_aksi" ADD CONSTRAINT "rencana_aksi_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "progress_ra" ADD CONSTRAINT "progress_ra_ra_fkey" FOREIGN KEY ("ra") REFERENCES "rencana_aksi"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "progress_ra" ADD CONSTRAINT "progress_ra_status_fkey" FOREIGN KEY ("status") REFERENCES "progress_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "progress_ra" ADD CONSTRAINT "progress_ra_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "program_intervensi" ADD CONSTRAINT "program_intervensi_intervensi_fkey" FOREIGN KEY ("intervensi") REFERENCES "master_intervensi_nasional"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "program_intervensi" ADD CONSTRAINT "program_intervensi_status_fkey" FOREIGN KEY ("status") REFERENCES "progress_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "progress_ra_intervensi" ADD CONSTRAINT "progress_ra_intervensi_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
