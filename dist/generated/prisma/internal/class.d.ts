import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
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
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
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
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.user`: Exposes CRUD operations for the **User** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Users
  * const users = await prisma.user.findMany()
  * ```
  */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.roles`: Exposes CRUD operations for the **Roles** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Roles
      * const roles = await prisma.roles.findMany()
      * ```
      */
    get roles(): Prisma.RolesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.userRoleBridge`: Exposes CRUD operations for the **UserRoleBridge** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more UserRoleBridges
      * const userRoleBridges = await prisma.userRoleBridge.findMany()
      * ```
      */
    get userRoleBridge(): Prisma.UserRoleBridgeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pegawai`: Exposes CRUD operations for the **Pegawai** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Pegawais
      * const pegawais = await prisma.pegawai.findMany()
      * ```
      */
    get pegawai(): Prisma.PegawaiDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.statusPegawai`: Exposes CRUD operations for the **StatusPegawai** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more StatusPegawais
      * const statusPegawais = await prisma.statusPegawai.findMany()
      * ```
      */
    get statusPegawai(): Prisma.StatusPegawaiDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.satker`: Exposes CRUD operations for the **Satker** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Satkers
      * const satkers = await prisma.satker.findMany()
      * ```
      */
    get satker(): Prisma.SatkerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.satkerType`: Exposes CRUD operations for the **SatkerType** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SatkerTypes
      * const satkerTypes = await prisma.satkerType.findMany()
      * ```
      */
    get satkerType(): Prisma.SatkerTypeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.dukunganRB`: Exposes CRUD operations for the **DukunganRB** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more DukunganRBS
      * const dukunganRBS = await prisma.dukunganRB.findMany()
      * ```
      */
    get dukunganRB(): Prisma.DukunganRBDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.rencanaAksi`: Exposes CRUD operations for the **RencanaAksi** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more RencanaAksis
      * const rencanaAksis = await prisma.rencanaAksi.findMany()
      * ```
      */
    get rencanaAksi(): Prisma.RencanaAksiDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.rencanaAksiStatus`: Exposes CRUD operations for the **RencanaAksiStatus** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more RencanaAksiStatuses
      * const rencanaAksiStatuses = await prisma.rencanaAksiStatus.findMany()
      * ```
      */
    get rencanaAksiStatus(): Prisma.RencanaAksiStatusDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.progressRencanaAksi`: Exposes CRUD operations for the **ProgressRencanaAksi** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProgressRencanaAksis
      * const progressRencanaAksis = await prisma.progressRencanaAksi.findMany()
      * ```
      */
    get progressRencanaAksi(): Prisma.ProgressRencanaAksiDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.progressStatus`: Exposes CRUD operations for the **ProgressStatus** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProgressStatuses
      * const progressStatuses = await prisma.progressStatus.findMany()
      * ```
      */
    get progressStatus(): Prisma.ProgressStatusDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.masterIntervensiNasional`: Exposes CRUD operations for the **MasterIntervensiNasional** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MasterIntervensiNasionals
      * const masterIntervensiNasionals = await prisma.masterIntervensiNasional.findMany()
      * ```
      */
    get masterIntervensiNasional(): Prisma.MasterIntervensiNasionalDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.programIntervensi`: Exposes CRUD operations for the **ProgramIntervensi** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProgramIntervensis
      * const programIntervensis = await prisma.programIntervensi.findMany()
      * ```
      */
    get programIntervensi(): Prisma.ProgramIntervensiDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.progressRaIntervensi`: Exposes CRUD operations for the **ProgressRaIntervensi** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProgressRaIntervensis
      * const progressRaIntervensis = await prisma.progressRaIntervensi.findMany()
      * ```
      */
    get progressRaIntervensi(): Prisma.ProgressRaIntervensiDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.fileUpload`: Exposes CRUD operations for the **FileUpload** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more FileUploads
      * const fileUploads = await prisma.fileUpload.findMany()
      * ```
      */
    get fileUpload(): Prisma.FileUploadDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.laporanCa`: Exposes CRUD operations for the **LaporanCa** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more LaporanCas
      * const laporanCas = await prisma.laporanCa.findMany()
      * ```
      */
    get laporanCa(): Prisma.LaporanCaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.ipDetector`: Exposes CRUD operations for the **IpDetector** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more IpDetectors
      * const ipDetectors = await prisma.ipDetector.findMany()
      * ```
      */
    get ipDetector(): Prisma.IpDetectorDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map