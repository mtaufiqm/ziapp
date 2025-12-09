import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from './enums';
export * from "./enums";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Roles
 *
 */
export type Roles = Prisma.RolesModel;
/**
 * Model UserRoleBridge
 *
 */
export type UserRoleBridge = Prisma.UserRoleBridgeModel;
/**
 * Model Pegawai
 *
 */
export type Pegawai = Prisma.PegawaiModel;
/**
 * Model StatusPegawai
 *
 */
export type StatusPegawai = Prisma.StatusPegawaiModel;
/**
 * Model Satker
 *
 */
export type Satker = Prisma.SatkerModel;
/**
 * Model SatkerType
 *
 */
export type SatkerType = Prisma.SatkerTypeModel;
/**
 * Model DukunganRB
 *
 */
export type DukunganRB = Prisma.DukunganRBModel;
/**
 * Model RencanaAksi
 *
 */
export type RencanaAksi = Prisma.RencanaAksiModel;
/**
 * Model RencanaAksiStatus
 *
 */
export type RencanaAksiStatus = Prisma.RencanaAksiStatusModel;
/**
 * Model ProgressRencanaAksi
 *
 */
export type ProgressRencanaAksi = Prisma.ProgressRencanaAksiModel;
/**
 * Model ProgressStatus
 *
 */
export type ProgressStatus = Prisma.ProgressStatusModel;
//# sourceMappingURL=client.d.ts.map