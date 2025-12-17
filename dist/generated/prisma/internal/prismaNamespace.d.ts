import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.1.0
 * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly Roles: "Roles";
    readonly UserRoleBridge: "UserRoleBridge";
    readonly Pegawai: "Pegawai";
    readonly StatusPegawai: "StatusPegawai";
    readonly Satker: "Satker";
    readonly SatkerType: "SatkerType";
    readonly DukunganRB: "DukunganRB";
    readonly RencanaAksi: "RencanaAksi";
    readonly RencanaAksiStatus: "RencanaAksiStatus";
    readonly ProgressRencanaAksi: "ProgressRencanaAksi";
    readonly ProgressStatus: "ProgressStatus";
    readonly MasterIntervensiNasional: "MasterIntervensiNasional";
    readonly ProgramIntervensi: "ProgramIntervensi";
    readonly ProgressRaIntervensi: "ProgressRaIntervensi";
    readonly FileUpload: "FileUpload";
    readonly LaporanCa: "LaporanCa";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "roles" | "userRoleBridge" | "pegawai" | "statusPegawai" | "satker" | "satkerType" | "dukunganRB" | "rencanaAksi" | "rencanaAksiStatus" | "progressRencanaAksi" | "progressStatus" | "masterIntervensiNasional" | "programIntervensi" | "progressRaIntervensi" | "fileUpload" | "laporanCa";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Roles: {
            payload: Prisma.$RolesPayload<ExtArgs>;
            fields: Prisma.RolesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RolesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RolesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>;
                };
                findFirst: {
                    args: Prisma.RolesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RolesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>;
                };
                findMany: {
                    args: Prisma.RolesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>[];
                };
                create: {
                    args: Prisma.RolesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>;
                };
                createMany: {
                    args: Prisma.RolesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RolesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>[];
                };
                delete: {
                    args: Prisma.RolesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>;
                };
                update: {
                    args: Prisma.RolesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>;
                };
                deleteMany: {
                    args: Prisma.RolesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RolesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RolesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>[];
                };
                upsert: {
                    args: Prisma.RolesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolesPayload>;
                };
                aggregate: {
                    args: Prisma.RolesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRoles>;
                };
                groupBy: {
                    args: Prisma.RolesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RolesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolesCountAggregateOutputType> | number;
                };
            };
        };
        UserRoleBridge: {
            payload: Prisma.$UserRoleBridgePayload<ExtArgs>;
            fields: Prisma.UserRoleBridgeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserRoleBridgeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserRoleBridgeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>;
                };
                findFirst: {
                    args: Prisma.UserRoleBridgeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserRoleBridgeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>;
                };
                findMany: {
                    args: Prisma.UserRoleBridgeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>[];
                };
                create: {
                    args: Prisma.UserRoleBridgeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>;
                };
                createMany: {
                    args: Prisma.UserRoleBridgeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserRoleBridgeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>[];
                };
                delete: {
                    args: Prisma.UserRoleBridgeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>;
                };
                update: {
                    args: Prisma.UserRoleBridgeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>;
                };
                deleteMany: {
                    args: Prisma.UserRoleBridgeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserRoleBridgeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserRoleBridgeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>[];
                };
                upsert: {
                    args: Prisma.UserRoleBridgeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserRoleBridgePayload>;
                };
                aggregate: {
                    args: Prisma.UserRoleBridgeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserRoleBridge>;
                };
                groupBy: {
                    args: Prisma.UserRoleBridgeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserRoleBridgeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserRoleBridgeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserRoleBridgeCountAggregateOutputType> | number;
                };
            };
        };
        Pegawai: {
            payload: Prisma.$PegawaiPayload<ExtArgs>;
            fields: Prisma.PegawaiFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PegawaiFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PegawaiFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>;
                };
                findFirst: {
                    args: Prisma.PegawaiFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PegawaiFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>;
                };
                findMany: {
                    args: Prisma.PegawaiFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>[];
                };
                create: {
                    args: Prisma.PegawaiCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>;
                };
                createMany: {
                    args: Prisma.PegawaiCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PegawaiCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>[];
                };
                delete: {
                    args: Prisma.PegawaiDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>;
                };
                update: {
                    args: Prisma.PegawaiUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>;
                };
                deleteMany: {
                    args: Prisma.PegawaiDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PegawaiUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PegawaiUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>[];
                };
                upsert: {
                    args: Prisma.PegawaiUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PegawaiPayload>;
                };
                aggregate: {
                    args: Prisma.PegawaiAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePegawai>;
                };
                groupBy: {
                    args: Prisma.PegawaiGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PegawaiGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PegawaiCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PegawaiCountAggregateOutputType> | number;
                };
            };
        };
        StatusPegawai: {
            payload: Prisma.$StatusPegawaiPayload<ExtArgs>;
            fields: Prisma.StatusPegawaiFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StatusPegawaiFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StatusPegawaiFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>;
                };
                findFirst: {
                    args: Prisma.StatusPegawaiFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StatusPegawaiFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>;
                };
                findMany: {
                    args: Prisma.StatusPegawaiFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>[];
                };
                create: {
                    args: Prisma.StatusPegawaiCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>;
                };
                createMany: {
                    args: Prisma.StatusPegawaiCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StatusPegawaiCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>[];
                };
                delete: {
                    args: Prisma.StatusPegawaiDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>;
                };
                update: {
                    args: Prisma.StatusPegawaiUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>;
                };
                deleteMany: {
                    args: Prisma.StatusPegawaiDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StatusPegawaiUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StatusPegawaiUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>[];
                };
                upsert: {
                    args: Prisma.StatusPegawaiUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatusPegawaiPayload>;
                };
                aggregate: {
                    args: Prisma.StatusPegawaiAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStatusPegawai>;
                };
                groupBy: {
                    args: Prisma.StatusPegawaiGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StatusPegawaiGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StatusPegawaiCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StatusPegawaiCountAggregateOutputType> | number;
                };
            };
        };
        Satker: {
            payload: Prisma.$SatkerPayload<ExtArgs>;
            fields: Prisma.SatkerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SatkerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SatkerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SatkerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SatkerPayload>;
                };
                findFirst: {
                    args: Prisma.SatkerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SatkerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SatkerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SatkerPayload>;
                };
                findMany: {
                    args: Prisma.SatkerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SatkerPayload>[];
                };
                create: {
                    args: Prisma.SatkerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SatkerPayload>;
                };
                createMany: {
                    args: Prisma.SatkerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SatkerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SatkerPayload>[];
                };
                delete: {
                    args: Prisma.SatkerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SatkerPayload>;
                };
                update: {
                    args: Prisma.SatkerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SatkerPayload>;
                };
                deleteMany: {
                    args: Prisma.SatkerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SatkerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SatkerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SatkerPayload>[];
                };
                upsert: {
                    args: Prisma.SatkerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SatkerPayload>;
                };
                aggregate: {
                    args: Prisma.SatkerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSatker>;
                };
                groupBy: {
                    args: Prisma.SatkerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SatkerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SatkerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SatkerCountAggregateOutputType> | number;
                };
            };
        };
        SatkerType: {
            payload: Prisma.$SatkerTypePayload<ExtArgs>;
            fields: Prisma.SatkerTypeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SatkerTypeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SatkerTypePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SatkerTypeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SatkerTypePayload>;
                };
                findFirst: {
                    args: Prisma.SatkerTypeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SatkerTypePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SatkerTypeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SatkerTypePayload>;
                };
                findMany: {
                    args: Prisma.SatkerTypeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SatkerTypePayload>[];
                };
                create: {
                    args: Prisma.SatkerTypeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SatkerTypePayload>;
                };
                createMany: {
                    args: Prisma.SatkerTypeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SatkerTypeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SatkerTypePayload>[];
                };
                delete: {
                    args: Prisma.SatkerTypeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SatkerTypePayload>;
                };
                update: {
                    args: Prisma.SatkerTypeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SatkerTypePayload>;
                };
                deleteMany: {
                    args: Prisma.SatkerTypeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SatkerTypeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SatkerTypeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SatkerTypePayload>[];
                };
                upsert: {
                    args: Prisma.SatkerTypeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SatkerTypePayload>;
                };
                aggregate: {
                    args: Prisma.SatkerTypeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSatkerType>;
                };
                groupBy: {
                    args: Prisma.SatkerTypeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SatkerTypeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SatkerTypeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SatkerTypeCountAggregateOutputType> | number;
                };
            };
        };
        DukunganRB: {
            payload: Prisma.$DukunganRBPayload<ExtArgs>;
            fields: Prisma.DukunganRBFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DukunganRBFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DukunganRBPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DukunganRBFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DukunganRBPayload>;
                };
                findFirst: {
                    args: Prisma.DukunganRBFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DukunganRBPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DukunganRBFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DukunganRBPayload>;
                };
                findMany: {
                    args: Prisma.DukunganRBFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DukunganRBPayload>[];
                };
                create: {
                    args: Prisma.DukunganRBCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DukunganRBPayload>;
                };
                createMany: {
                    args: Prisma.DukunganRBCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DukunganRBCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DukunganRBPayload>[];
                };
                delete: {
                    args: Prisma.DukunganRBDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DukunganRBPayload>;
                };
                update: {
                    args: Prisma.DukunganRBUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DukunganRBPayload>;
                };
                deleteMany: {
                    args: Prisma.DukunganRBDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DukunganRBUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DukunganRBUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DukunganRBPayload>[];
                };
                upsert: {
                    args: Prisma.DukunganRBUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DukunganRBPayload>;
                };
                aggregate: {
                    args: Prisma.DukunganRBAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDukunganRB>;
                };
                groupBy: {
                    args: Prisma.DukunganRBGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DukunganRBGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DukunganRBCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DukunganRBCountAggregateOutputType> | number;
                };
            };
        };
        RencanaAksi: {
            payload: Prisma.$RencanaAksiPayload<ExtArgs>;
            fields: Prisma.RencanaAksiFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RencanaAksiFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RencanaAksiPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RencanaAksiFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RencanaAksiPayload>;
                };
                findFirst: {
                    args: Prisma.RencanaAksiFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RencanaAksiPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RencanaAksiFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RencanaAksiPayload>;
                };
                findMany: {
                    args: Prisma.RencanaAksiFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RencanaAksiPayload>[];
                };
                create: {
                    args: Prisma.RencanaAksiCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RencanaAksiPayload>;
                };
                createMany: {
                    args: Prisma.RencanaAksiCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RencanaAksiCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RencanaAksiPayload>[];
                };
                delete: {
                    args: Prisma.RencanaAksiDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RencanaAksiPayload>;
                };
                update: {
                    args: Prisma.RencanaAksiUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RencanaAksiPayload>;
                };
                deleteMany: {
                    args: Prisma.RencanaAksiDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RencanaAksiUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RencanaAksiUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RencanaAksiPayload>[];
                };
                upsert: {
                    args: Prisma.RencanaAksiUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RencanaAksiPayload>;
                };
                aggregate: {
                    args: Prisma.RencanaAksiAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRencanaAksi>;
                };
                groupBy: {
                    args: Prisma.RencanaAksiGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RencanaAksiGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RencanaAksiCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RencanaAksiCountAggregateOutputType> | number;
                };
            };
        };
        RencanaAksiStatus: {
            payload: Prisma.$RencanaAksiStatusPayload<ExtArgs>;
            fields: Prisma.RencanaAksiStatusFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RencanaAksiStatusFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RencanaAksiStatusPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RencanaAksiStatusFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RencanaAksiStatusPayload>;
                };
                findFirst: {
                    args: Prisma.RencanaAksiStatusFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RencanaAksiStatusPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RencanaAksiStatusFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RencanaAksiStatusPayload>;
                };
                findMany: {
                    args: Prisma.RencanaAksiStatusFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RencanaAksiStatusPayload>[];
                };
                create: {
                    args: Prisma.RencanaAksiStatusCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RencanaAksiStatusPayload>;
                };
                createMany: {
                    args: Prisma.RencanaAksiStatusCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RencanaAksiStatusCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RencanaAksiStatusPayload>[];
                };
                delete: {
                    args: Prisma.RencanaAksiStatusDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RencanaAksiStatusPayload>;
                };
                update: {
                    args: Prisma.RencanaAksiStatusUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RencanaAksiStatusPayload>;
                };
                deleteMany: {
                    args: Prisma.RencanaAksiStatusDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RencanaAksiStatusUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RencanaAksiStatusUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RencanaAksiStatusPayload>[];
                };
                upsert: {
                    args: Prisma.RencanaAksiStatusUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RencanaAksiStatusPayload>;
                };
                aggregate: {
                    args: Prisma.RencanaAksiStatusAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRencanaAksiStatus>;
                };
                groupBy: {
                    args: Prisma.RencanaAksiStatusGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RencanaAksiStatusGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RencanaAksiStatusCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RencanaAksiStatusCountAggregateOutputType> | number;
                };
            };
        };
        ProgressRencanaAksi: {
            payload: Prisma.$ProgressRencanaAksiPayload<ExtArgs>;
            fields: Prisma.ProgressRencanaAksiFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProgressRencanaAksiFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressRencanaAksiPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProgressRencanaAksiFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressRencanaAksiPayload>;
                };
                findFirst: {
                    args: Prisma.ProgressRencanaAksiFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressRencanaAksiPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProgressRencanaAksiFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressRencanaAksiPayload>;
                };
                findMany: {
                    args: Prisma.ProgressRencanaAksiFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressRencanaAksiPayload>[];
                };
                create: {
                    args: Prisma.ProgressRencanaAksiCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressRencanaAksiPayload>;
                };
                createMany: {
                    args: Prisma.ProgressRencanaAksiCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProgressRencanaAksiCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressRencanaAksiPayload>[];
                };
                delete: {
                    args: Prisma.ProgressRencanaAksiDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressRencanaAksiPayload>;
                };
                update: {
                    args: Prisma.ProgressRencanaAksiUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressRencanaAksiPayload>;
                };
                deleteMany: {
                    args: Prisma.ProgressRencanaAksiDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProgressRencanaAksiUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProgressRencanaAksiUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressRencanaAksiPayload>[];
                };
                upsert: {
                    args: Prisma.ProgressRencanaAksiUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressRencanaAksiPayload>;
                };
                aggregate: {
                    args: Prisma.ProgressRencanaAksiAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProgressRencanaAksi>;
                };
                groupBy: {
                    args: Prisma.ProgressRencanaAksiGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProgressRencanaAksiGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProgressRencanaAksiCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProgressRencanaAksiCountAggregateOutputType> | number;
                };
            };
        };
        ProgressStatus: {
            payload: Prisma.$ProgressStatusPayload<ExtArgs>;
            fields: Prisma.ProgressStatusFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProgressStatusFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressStatusPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProgressStatusFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressStatusPayload>;
                };
                findFirst: {
                    args: Prisma.ProgressStatusFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressStatusPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProgressStatusFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressStatusPayload>;
                };
                findMany: {
                    args: Prisma.ProgressStatusFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressStatusPayload>[];
                };
                create: {
                    args: Prisma.ProgressStatusCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressStatusPayload>;
                };
                createMany: {
                    args: Prisma.ProgressStatusCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProgressStatusCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressStatusPayload>[];
                };
                delete: {
                    args: Prisma.ProgressStatusDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressStatusPayload>;
                };
                update: {
                    args: Prisma.ProgressStatusUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressStatusPayload>;
                };
                deleteMany: {
                    args: Prisma.ProgressStatusDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProgressStatusUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProgressStatusUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressStatusPayload>[];
                };
                upsert: {
                    args: Prisma.ProgressStatusUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressStatusPayload>;
                };
                aggregate: {
                    args: Prisma.ProgressStatusAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProgressStatus>;
                };
                groupBy: {
                    args: Prisma.ProgressStatusGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProgressStatusGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProgressStatusCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProgressStatusCountAggregateOutputType> | number;
                };
            };
        };
        MasterIntervensiNasional: {
            payload: Prisma.$MasterIntervensiNasionalPayload<ExtArgs>;
            fields: Prisma.MasterIntervensiNasionalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MasterIntervensiNasionalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MasterIntervensiNasionalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MasterIntervensiNasionalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MasterIntervensiNasionalPayload>;
                };
                findFirst: {
                    args: Prisma.MasterIntervensiNasionalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MasterIntervensiNasionalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MasterIntervensiNasionalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MasterIntervensiNasionalPayload>;
                };
                findMany: {
                    args: Prisma.MasterIntervensiNasionalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MasterIntervensiNasionalPayload>[];
                };
                create: {
                    args: Prisma.MasterIntervensiNasionalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MasterIntervensiNasionalPayload>;
                };
                createMany: {
                    args: Prisma.MasterIntervensiNasionalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MasterIntervensiNasionalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MasterIntervensiNasionalPayload>[];
                };
                delete: {
                    args: Prisma.MasterIntervensiNasionalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MasterIntervensiNasionalPayload>;
                };
                update: {
                    args: Prisma.MasterIntervensiNasionalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MasterIntervensiNasionalPayload>;
                };
                deleteMany: {
                    args: Prisma.MasterIntervensiNasionalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MasterIntervensiNasionalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MasterIntervensiNasionalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MasterIntervensiNasionalPayload>[];
                };
                upsert: {
                    args: Prisma.MasterIntervensiNasionalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MasterIntervensiNasionalPayload>;
                };
                aggregate: {
                    args: Prisma.MasterIntervensiNasionalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMasterIntervensiNasional>;
                };
                groupBy: {
                    args: Prisma.MasterIntervensiNasionalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MasterIntervensiNasionalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MasterIntervensiNasionalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MasterIntervensiNasionalCountAggregateOutputType> | number;
                };
            };
        };
        ProgramIntervensi: {
            payload: Prisma.$ProgramIntervensiPayload<ExtArgs>;
            fields: Prisma.ProgramIntervensiFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProgramIntervensiFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramIntervensiPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProgramIntervensiFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramIntervensiPayload>;
                };
                findFirst: {
                    args: Prisma.ProgramIntervensiFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramIntervensiPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProgramIntervensiFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramIntervensiPayload>;
                };
                findMany: {
                    args: Prisma.ProgramIntervensiFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramIntervensiPayload>[];
                };
                create: {
                    args: Prisma.ProgramIntervensiCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramIntervensiPayload>;
                };
                createMany: {
                    args: Prisma.ProgramIntervensiCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProgramIntervensiCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramIntervensiPayload>[];
                };
                delete: {
                    args: Prisma.ProgramIntervensiDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramIntervensiPayload>;
                };
                update: {
                    args: Prisma.ProgramIntervensiUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramIntervensiPayload>;
                };
                deleteMany: {
                    args: Prisma.ProgramIntervensiDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProgramIntervensiUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProgramIntervensiUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramIntervensiPayload>[];
                };
                upsert: {
                    args: Prisma.ProgramIntervensiUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramIntervensiPayload>;
                };
                aggregate: {
                    args: Prisma.ProgramIntervensiAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProgramIntervensi>;
                };
                groupBy: {
                    args: Prisma.ProgramIntervensiGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProgramIntervensiGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProgramIntervensiCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProgramIntervensiCountAggregateOutputType> | number;
                };
            };
        };
        ProgressRaIntervensi: {
            payload: Prisma.$ProgressRaIntervensiPayload<ExtArgs>;
            fields: Prisma.ProgressRaIntervensiFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProgressRaIntervensiFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressRaIntervensiPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProgressRaIntervensiFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressRaIntervensiPayload>;
                };
                findFirst: {
                    args: Prisma.ProgressRaIntervensiFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressRaIntervensiPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProgressRaIntervensiFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressRaIntervensiPayload>;
                };
                findMany: {
                    args: Prisma.ProgressRaIntervensiFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressRaIntervensiPayload>[];
                };
                create: {
                    args: Prisma.ProgressRaIntervensiCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressRaIntervensiPayload>;
                };
                createMany: {
                    args: Prisma.ProgressRaIntervensiCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProgressRaIntervensiCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressRaIntervensiPayload>[];
                };
                delete: {
                    args: Prisma.ProgressRaIntervensiDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressRaIntervensiPayload>;
                };
                update: {
                    args: Prisma.ProgressRaIntervensiUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressRaIntervensiPayload>;
                };
                deleteMany: {
                    args: Prisma.ProgressRaIntervensiDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProgressRaIntervensiUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProgressRaIntervensiUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressRaIntervensiPayload>[];
                };
                upsert: {
                    args: Prisma.ProgressRaIntervensiUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgressRaIntervensiPayload>;
                };
                aggregate: {
                    args: Prisma.ProgressRaIntervensiAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProgressRaIntervensi>;
                };
                groupBy: {
                    args: Prisma.ProgressRaIntervensiGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProgressRaIntervensiGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProgressRaIntervensiCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProgressRaIntervensiCountAggregateOutputType> | number;
                };
            };
        };
        FileUpload: {
            payload: Prisma.$FileUploadPayload<ExtArgs>;
            fields: Prisma.FileUploadFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FileUploadFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FileUploadPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FileUploadFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FileUploadPayload>;
                };
                findFirst: {
                    args: Prisma.FileUploadFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FileUploadPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FileUploadFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FileUploadPayload>;
                };
                findMany: {
                    args: Prisma.FileUploadFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FileUploadPayload>[];
                };
                create: {
                    args: Prisma.FileUploadCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FileUploadPayload>;
                };
                createMany: {
                    args: Prisma.FileUploadCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FileUploadCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FileUploadPayload>[];
                };
                delete: {
                    args: Prisma.FileUploadDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FileUploadPayload>;
                };
                update: {
                    args: Prisma.FileUploadUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FileUploadPayload>;
                };
                deleteMany: {
                    args: Prisma.FileUploadDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FileUploadUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FileUploadUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FileUploadPayload>[];
                };
                upsert: {
                    args: Prisma.FileUploadUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FileUploadPayload>;
                };
                aggregate: {
                    args: Prisma.FileUploadAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFileUpload>;
                };
                groupBy: {
                    args: Prisma.FileUploadGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FileUploadGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FileUploadCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FileUploadCountAggregateOutputType> | number;
                };
            };
        };
        LaporanCa: {
            payload: Prisma.$LaporanCaPayload<ExtArgs>;
            fields: Prisma.LaporanCaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LaporanCaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LaporanCaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LaporanCaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LaporanCaPayload>;
                };
                findFirst: {
                    args: Prisma.LaporanCaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LaporanCaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LaporanCaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LaporanCaPayload>;
                };
                findMany: {
                    args: Prisma.LaporanCaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LaporanCaPayload>[];
                };
                create: {
                    args: Prisma.LaporanCaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LaporanCaPayload>;
                };
                createMany: {
                    args: Prisma.LaporanCaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LaporanCaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LaporanCaPayload>[];
                };
                delete: {
                    args: Prisma.LaporanCaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LaporanCaPayload>;
                };
                update: {
                    args: Prisma.LaporanCaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LaporanCaPayload>;
                };
                deleteMany: {
                    args: Prisma.LaporanCaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LaporanCaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LaporanCaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LaporanCaPayload>[];
                };
                upsert: {
                    args: Prisma.LaporanCaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LaporanCaPayload>;
                };
                aggregate: {
                    args: Prisma.LaporanCaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLaporanCa>;
                };
                groupBy: {
                    args: Prisma.LaporanCaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LaporanCaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LaporanCaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LaporanCaCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly username: "username";
    readonly pwd: "pwd";
    readonly is_active: "is_active";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RolesScalarFieldEnum: {
    readonly description: "description";
};
export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum];
export declare const UserRoleBridgeScalarFieldEnum: {
    readonly description: "description";
    readonly username: "username";
};
export type UserRoleBridgeScalarFieldEnum = (typeof UserRoleBridgeScalarFieldEnum)[keyof typeof UserRoleBridgeScalarFieldEnum];
export declare const PegawaiScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly fullname: "fullname";
    readonly fullname_with_title: "fullname_with_title";
    readonly nickname: "nickname";
    readonly date_of_birth: "date_of_birth";
    readonly city_of_birth: "city_of_birth";
    readonly nip: "nip";
    readonly old_nip: "old_nip";
    readonly age: "age";
    readonly username: "username";
    readonly status_pegawai: "status_pegawai";
    readonly phone_number: "phone_number";
    readonly satker: "satker";
};
export type PegawaiScalarFieldEnum = (typeof PegawaiScalarFieldEnum)[keyof typeof PegawaiScalarFieldEnum];
export declare const StatusPegawaiScalarFieldEnum: {
    readonly description: "description";
};
export type StatusPegawaiScalarFieldEnum = (typeof StatusPegawaiScalarFieldEnum)[keyof typeof StatusPegawaiScalarFieldEnum];
export declare const SatkerScalarFieldEnum: {
    readonly code: "code";
    readonly desc: "desc";
    readonly type: "type";
};
export type SatkerScalarFieldEnum = (typeof SatkerScalarFieldEnum)[keyof typeof SatkerScalarFieldEnum];
export declare const SatkerTypeScalarFieldEnum: {
    readonly id: "id";
    readonly desc: "desc";
};
export type SatkerTypeScalarFieldEnum = (typeof SatkerTypeScalarFieldEnum)[keyof typeof SatkerTypeScalarFieldEnum];
export declare const DukunganRBScalarFieldEnum: {
    readonly id: "id";
    readonly desc: "desc";
};
export type DukunganRBScalarFieldEnum = (typeof DukunganRBScalarFieldEnum)[keyof typeof DukunganRBScalarFieldEnum];
export declare const RencanaAksiScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly nama_program: "nama_program";
    readonly uraian_kegiatan: "uraian_kegiatan";
    readonly isu_strategis: "isu_strategis";
    readonly dukungan_rb: "dukungan_rb";
    readonly output: "output";
    readonly timeline: "timeline";
    readonly ukuran_keberhasilan: "ukuran_keberhasilan";
    readonly outcome: "outcome";
    readonly keterangan: "keterangan";
    readonly status: "status";
    readonly tahun: "tahun";
    readonly satker: "satker";
    readonly last_updated: "last_updated";
    readonly created_by: "created_by";
};
export type RencanaAksiScalarFieldEnum = (typeof RencanaAksiScalarFieldEnum)[keyof typeof RencanaAksiScalarFieldEnum];
export declare const RencanaAksiStatusScalarFieldEnum: {
    readonly id: "id";
    readonly desc: "desc";
};
export type RencanaAksiStatusScalarFieldEnum = (typeof RencanaAksiStatusScalarFieldEnum)[keyof typeof RencanaAksiStatusScalarFieldEnum];
export declare const ProgressRencanaAksiScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly ra: "ra";
    readonly desc: "desc";
    readonly date: "date";
    readonly pelaksanaan_pg: "pelaksanaan_pg";
    readonly capaian_pg: "capaian_pg";
    readonly bukti: "bukti";
    readonly notes: "notes";
    readonly status: "status";
    readonly created_by: "created_by";
    readonly last_updated: "last_updated";
};
export type ProgressRencanaAksiScalarFieldEnum = (typeof ProgressRencanaAksiScalarFieldEnum)[keyof typeof ProgressRencanaAksiScalarFieldEnum];
export declare const ProgressStatusScalarFieldEnum: {
    readonly id: "id";
    readonly desc: "desc";
};
export type ProgressStatusScalarFieldEnum = (typeof ProgressStatusScalarFieldEnum)[keyof typeof ProgressStatusScalarFieldEnum];
export declare const MasterIntervensiNasionalScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly nama_program: "nama_program";
    readonly uraian_kegiatan: "uraian_kegiatan";
    readonly isu_strategis: "isu_strategis";
    readonly output: "output";
    readonly timeline: "timeline";
    readonly ukuran_keberhasilan: "ukuran_keberhasilan";
    readonly outcome: "outcome";
    readonly keterangan: "keterangan";
    readonly tahun: "tahun";
    readonly last_updated: "last_updated";
    readonly created_by: "created_by";
};
export type MasterIntervensiNasionalScalarFieldEnum = (typeof MasterIntervensiNasionalScalarFieldEnum)[keyof typeof MasterIntervensiNasionalScalarFieldEnum];
export declare const ProgramIntervensiScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly intervensi: "intervensi";
    readonly ukuran_keberhasilan: "ukuran_keberhasilan";
    readonly timeline: "timeline";
    readonly status: "status";
    readonly satker: "satker";
    readonly tahun: "tahun";
    readonly last_updated: "last_updated";
    readonly created_by: "created_by";
};
export type ProgramIntervensiScalarFieldEnum = (typeof ProgramIntervensiScalarFieldEnum)[keyof typeof ProgramIntervensiScalarFieldEnum];
export declare const ProgressRaIntervensiScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly ra: "ra";
    readonly desc: "desc";
    readonly date: "date";
    readonly pelaksanaan_pg: "pelaksanaan_pg";
    readonly capaian_pg: "capaian_pg";
    readonly bukti: "bukti";
    readonly notes: "notes";
    readonly status: "status";
    readonly created_by: "created_by";
    readonly last_updated: "last_updated";
};
export type ProgressRaIntervensiScalarFieldEnum = (typeof ProgressRaIntervensiScalarFieldEnum)[keyof typeof ProgressRaIntervensiScalarFieldEnum];
export declare const FileUploadScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly filename: "filename";
    readonly extension: "extension";
    readonly size: "size";
    readonly is_public: "is_public";
    readonly path: "path";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
    readonly last_updated: "last_updated";
};
export type FileUploadScalarFieldEnum = (typeof FileUploadScalarFieldEnum)[keyof typeof FileUploadScalarFieldEnum];
export declare const LaporanCaScalarFieldEnum: {
    readonly uuid: "uuid";
    readonly triwulan: "triwulan";
    readonly tahun: "tahun";
    readonly satker: "satker";
    readonly bukti: "bukti";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
    readonly last_updated: "last_updated";
};
export type LaporanCaScalarFieldEnum = (typeof LaporanCaScalarFieldEnum)[keyof typeof LaporanCaScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    roles?: Prisma.RolesOmit;
    userRoleBridge?: Prisma.UserRoleBridgeOmit;
    pegawai?: Prisma.PegawaiOmit;
    statusPegawai?: Prisma.StatusPegawaiOmit;
    satker?: Prisma.SatkerOmit;
    satkerType?: Prisma.SatkerTypeOmit;
    dukunganRB?: Prisma.DukunganRBOmit;
    rencanaAksi?: Prisma.RencanaAksiOmit;
    rencanaAksiStatus?: Prisma.RencanaAksiStatusOmit;
    progressRencanaAksi?: Prisma.ProgressRencanaAksiOmit;
    progressStatus?: Prisma.ProgressStatusOmit;
    masterIntervensiNasional?: Prisma.MasterIntervensiNasionalOmit;
    programIntervensi?: Prisma.ProgramIntervensiOmit;
    progressRaIntervensi?: Prisma.ProgressRaIntervensiOmit;
    fileUpload?: Prisma.FileUploadOmit;
    laporanCa?: Prisma.LaporanCaOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map