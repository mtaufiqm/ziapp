import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    username: string | null;
    pwd: string | null;
    is_active: boolean | null;
};
export type UserMaxAggregateOutputType = {
    username: string | null;
    pwd: string | null;
    is_active: boolean | null;
};
export type UserCountAggregateOutputType = {
    username: number;
    pwd: number;
    is_active: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    username?: true;
    pwd?: true;
    is_active?: true;
};
export type UserMaxAggregateInputType = {
    username?: true;
    pwd?: true;
    is_active?: true;
};
export type UserCountAggregateInputType = {
    username?: true;
    pwd?: true;
    is_active?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    username: string;
    pwd: string;
    is_active: boolean;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    username?: Prisma.StringFilter<"User"> | string;
    pwd?: Prisma.StringFilter<"User"> | string;
    is_active?: Prisma.BoolFilter<"User"> | boolean;
    roles?: Prisma.UserRoleBridgeListRelationFilter;
    pegawai?: Prisma.XOR<Prisma.PegawaiNullableScalarRelationFilter, Prisma.PegawaiWhereInput> | null;
    rencanaAksi?: Prisma.RencanaAksiListRelationFilter;
    progressRA?: Prisma.ProgressRencanaAksiListRelationFilter;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiListRelationFilter;
    listLaporan?: Prisma.LaporanCaListRelationFilter;
    listFile?: Prisma.FileUploadListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    username?: Prisma.SortOrder;
    pwd?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    roles?: Prisma.UserRoleBridgeOrderByRelationAggregateInput;
    pegawai?: Prisma.PegawaiOrderByWithRelationInput;
    rencanaAksi?: Prisma.RencanaAksiOrderByRelationAggregateInput;
    progressRA?: Prisma.ProgressRencanaAksiOrderByRelationAggregateInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiOrderByRelationAggregateInput;
    listLaporan?: Prisma.LaporanCaOrderByRelationAggregateInput;
    listFile?: Prisma.FileUploadOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    username?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    pwd?: Prisma.StringFilter<"User"> | string;
    is_active?: Prisma.BoolFilter<"User"> | boolean;
    roles?: Prisma.UserRoleBridgeListRelationFilter;
    pegawai?: Prisma.XOR<Prisma.PegawaiNullableScalarRelationFilter, Prisma.PegawaiWhereInput> | null;
    rencanaAksi?: Prisma.RencanaAksiListRelationFilter;
    progressRA?: Prisma.ProgressRencanaAksiListRelationFilter;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiListRelationFilter;
    listLaporan?: Prisma.LaporanCaListRelationFilter;
    listFile?: Prisma.FileUploadListRelationFilter;
}, "username">;
export type UserOrderByWithAggregationInput = {
    username?: Prisma.SortOrder;
    pwd?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    username?: Prisma.StringWithAggregatesFilter<"User"> | string;
    pwd?: Prisma.StringWithAggregatesFilter<"User"> | string;
    is_active?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
};
export type UserCreateInput = {
    username: string;
    pwd: string;
    is_active: boolean;
    roles?: Prisma.UserRoleBridgeCreateNestedManyWithoutUserInput;
    pegawai?: Prisma.PegawaiCreateNestedOneWithoutUserObjInput;
    rencanaAksi?: Prisma.RencanaAksiCreateNestedManyWithoutCreatorObjInput;
    progressRA?: Prisma.ProgressRencanaAksiCreateNestedManyWithoutCreatorObjInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiCreateNestedManyWithoutCreatorInput;
    listLaporan?: Prisma.LaporanCaCreateNestedManyWithoutCreatorObjInput;
    listFile?: Prisma.FileUploadCreateNestedManyWithoutCreatorObjInput;
};
export type UserUncheckedCreateInput = {
    username: string;
    pwd: string;
    is_active: boolean;
    roles?: Prisma.UserRoleBridgeUncheckedCreateNestedManyWithoutUserInput;
    pegawai?: Prisma.PegawaiUncheckedCreateNestedOneWithoutUserObjInput;
    rencanaAksi?: Prisma.RencanaAksiUncheckedCreateNestedManyWithoutCreatorObjInput;
    progressRA?: Prisma.ProgressRencanaAksiUncheckedCreateNestedManyWithoutCreatorObjInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiUncheckedCreateNestedManyWithoutCreatorInput;
    listLaporan?: Prisma.LaporanCaUncheckedCreateNestedManyWithoutCreatorObjInput;
    listFile?: Prisma.FileUploadUncheckedCreateNestedManyWithoutCreatorObjInput;
};
export type UserUpdateInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.UserRoleBridgeUpdateManyWithoutUserNestedInput;
    pegawai?: Prisma.PegawaiUpdateOneWithoutUserObjNestedInput;
    rencanaAksi?: Prisma.RencanaAksiUpdateManyWithoutCreatorObjNestedInput;
    progressRA?: Prisma.ProgressRencanaAksiUpdateManyWithoutCreatorObjNestedInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiUpdateManyWithoutCreatorNestedInput;
    listLaporan?: Prisma.LaporanCaUpdateManyWithoutCreatorObjNestedInput;
    listFile?: Prisma.FileUploadUpdateManyWithoutCreatorObjNestedInput;
};
export type UserUncheckedUpdateInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.UserRoleBridgeUncheckedUpdateManyWithoutUserNestedInput;
    pegawai?: Prisma.PegawaiUncheckedUpdateOneWithoutUserObjNestedInput;
    rencanaAksi?: Prisma.RencanaAksiUncheckedUpdateManyWithoutCreatorObjNestedInput;
    progressRA?: Prisma.ProgressRencanaAksiUncheckedUpdateManyWithoutCreatorObjNestedInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiUncheckedUpdateManyWithoutCreatorNestedInput;
    listLaporan?: Prisma.LaporanCaUncheckedUpdateManyWithoutCreatorObjNestedInput;
    listFile?: Prisma.FileUploadUncheckedUpdateManyWithoutCreatorObjNestedInput;
};
export type UserCreateManyInput = {
    username: string;
    pwd: string;
    is_active: boolean;
};
export type UserUpdateManyMutationInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type UserUncheckedUpdateManyInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type UserCountOrderByAggregateInput = {
    username?: Prisma.SortOrder;
    pwd?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    username?: Prisma.SortOrder;
    pwd?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    username?: Prisma.SortOrder;
    pwd?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type UserCreateNestedOneWithoutRolesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRolesInput, Prisma.UserUncheckedCreateWithoutRolesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRolesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutRolesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRolesInput, Prisma.UserUncheckedCreateWithoutRolesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRolesInput;
    upsert?: Prisma.UserUpsertWithoutRolesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutRolesInput, Prisma.UserUpdateWithoutRolesInput>, Prisma.UserUncheckedUpdateWithoutRolesInput>;
};
export type UserCreateNestedOneWithoutPegawaiInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPegawaiInput, Prisma.UserUncheckedCreateWithoutPegawaiInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPegawaiInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutPegawaiNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutPegawaiInput, Prisma.UserUncheckedCreateWithoutPegawaiInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutPegawaiInput;
    upsert?: Prisma.UserUpsertWithoutPegawaiInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutPegawaiInput, Prisma.UserUpdateWithoutPegawaiInput>, Prisma.UserUncheckedUpdateWithoutPegawaiInput>;
};
export type UserCreateNestedOneWithoutRencanaAksiInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRencanaAksiInput, Prisma.UserUncheckedCreateWithoutRencanaAksiInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRencanaAksiInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutRencanaAksiNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRencanaAksiInput, Prisma.UserUncheckedCreateWithoutRencanaAksiInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRencanaAksiInput;
    upsert?: Prisma.UserUpsertWithoutRencanaAksiInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutRencanaAksiInput, Prisma.UserUpdateWithoutRencanaAksiInput>, Prisma.UserUncheckedUpdateWithoutRencanaAksiInput>;
};
export type UserCreateNestedOneWithoutProgressRAInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProgressRAInput, Prisma.UserUncheckedCreateWithoutProgressRAInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProgressRAInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutProgressRANestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProgressRAInput, Prisma.UserUncheckedCreateWithoutProgressRAInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProgressRAInput;
    upsert?: Prisma.UserUpsertWithoutProgressRAInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutProgressRAInput, Prisma.UserUpdateWithoutProgressRAInput>, Prisma.UserUncheckedUpdateWithoutProgressRAInput>;
};
export type UserCreateNestedOneWithoutProgressRAIntervensiInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProgressRAIntervensiInput, Prisma.UserUncheckedCreateWithoutProgressRAIntervensiInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProgressRAIntervensiInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutProgressRAIntervensiNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProgressRAIntervensiInput, Prisma.UserUncheckedCreateWithoutProgressRAIntervensiInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProgressRAIntervensiInput;
    upsert?: Prisma.UserUpsertWithoutProgressRAIntervensiInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutProgressRAIntervensiInput, Prisma.UserUpdateWithoutProgressRAIntervensiInput>, Prisma.UserUncheckedUpdateWithoutProgressRAIntervensiInput>;
};
export type UserCreateNestedOneWithoutListFileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutListFileInput, Prisma.UserUncheckedCreateWithoutListFileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutListFileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutListFileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutListFileInput, Prisma.UserUncheckedCreateWithoutListFileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutListFileInput;
    upsert?: Prisma.UserUpsertWithoutListFileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutListFileInput, Prisma.UserUpdateWithoutListFileInput>, Prisma.UserUncheckedUpdateWithoutListFileInput>;
};
export type UserCreateNestedOneWithoutListLaporanInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutListLaporanInput, Prisma.UserUncheckedCreateWithoutListLaporanInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutListLaporanInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutListLaporanNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutListLaporanInput, Prisma.UserUncheckedCreateWithoutListLaporanInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutListLaporanInput;
    upsert?: Prisma.UserUpsertWithoutListLaporanInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutListLaporanInput, Prisma.UserUpdateWithoutListLaporanInput>, Prisma.UserUncheckedUpdateWithoutListLaporanInput>;
};
export type UserCreateWithoutRolesInput = {
    username: string;
    pwd: string;
    is_active: boolean;
    pegawai?: Prisma.PegawaiCreateNestedOneWithoutUserObjInput;
    rencanaAksi?: Prisma.RencanaAksiCreateNestedManyWithoutCreatorObjInput;
    progressRA?: Prisma.ProgressRencanaAksiCreateNestedManyWithoutCreatorObjInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiCreateNestedManyWithoutCreatorInput;
    listLaporan?: Prisma.LaporanCaCreateNestedManyWithoutCreatorObjInput;
    listFile?: Prisma.FileUploadCreateNestedManyWithoutCreatorObjInput;
};
export type UserUncheckedCreateWithoutRolesInput = {
    username: string;
    pwd: string;
    is_active: boolean;
    pegawai?: Prisma.PegawaiUncheckedCreateNestedOneWithoutUserObjInput;
    rencanaAksi?: Prisma.RencanaAksiUncheckedCreateNestedManyWithoutCreatorObjInput;
    progressRA?: Prisma.ProgressRencanaAksiUncheckedCreateNestedManyWithoutCreatorObjInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiUncheckedCreateNestedManyWithoutCreatorInput;
    listLaporan?: Prisma.LaporanCaUncheckedCreateNestedManyWithoutCreatorObjInput;
    listFile?: Prisma.FileUploadUncheckedCreateNestedManyWithoutCreatorObjInput;
};
export type UserCreateOrConnectWithoutRolesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutRolesInput, Prisma.UserUncheckedCreateWithoutRolesInput>;
};
export type UserUpsertWithoutRolesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutRolesInput, Prisma.UserUncheckedUpdateWithoutRolesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutRolesInput, Prisma.UserUncheckedCreateWithoutRolesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutRolesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutRolesInput, Prisma.UserUncheckedUpdateWithoutRolesInput>;
};
export type UserUpdateWithoutRolesInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pegawai?: Prisma.PegawaiUpdateOneWithoutUserObjNestedInput;
    rencanaAksi?: Prisma.RencanaAksiUpdateManyWithoutCreatorObjNestedInput;
    progressRA?: Prisma.ProgressRencanaAksiUpdateManyWithoutCreatorObjNestedInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiUpdateManyWithoutCreatorNestedInput;
    listLaporan?: Prisma.LaporanCaUpdateManyWithoutCreatorObjNestedInput;
    listFile?: Prisma.FileUploadUpdateManyWithoutCreatorObjNestedInput;
};
export type UserUncheckedUpdateWithoutRolesInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pegawai?: Prisma.PegawaiUncheckedUpdateOneWithoutUserObjNestedInput;
    rencanaAksi?: Prisma.RencanaAksiUncheckedUpdateManyWithoutCreatorObjNestedInput;
    progressRA?: Prisma.ProgressRencanaAksiUncheckedUpdateManyWithoutCreatorObjNestedInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiUncheckedUpdateManyWithoutCreatorNestedInput;
    listLaporan?: Prisma.LaporanCaUncheckedUpdateManyWithoutCreatorObjNestedInput;
    listFile?: Prisma.FileUploadUncheckedUpdateManyWithoutCreatorObjNestedInput;
};
export type UserCreateWithoutPegawaiInput = {
    username: string;
    pwd: string;
    is_active: boolean;
    roles?: Prisma.UserRoleBridgeCreateNestedManyWithoutUserInput;
    rencanaAksi?: Prisma.RencanaAksiCreateNestedManyWithoutCreatorObjInput;
    progressRA?: Prisma.ProgressRencanaAksiCreateNestedManyWithoutCreatorObjInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiCreateNestedManyWithoutCreatorInput;
    listLaporan?: Prisma.LaporanCaCreateNestedManyWithoutCreatorObjInput;
    listFile?: Prisma.FileUploadCreateNestedManyWithoutCreatorObjInput;
};
export type UserUncheckedCreateWithoutPegawaiInput = {
    username: string;
    pwd: string;
    is_active: boolean;
    roles?: Prisma.UserRoleBridgeUncheckedCreateNestedManyWithoutUserInput;
    rencanaAksi?: Prisma.RencanaAksiUncheckedCreateNestedManyWithoutCreatorObjInput;
    progressRA?: Prisma.ProgressRencanaAksiUncheckedCreateNestedManyWithoutCreatorObjInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiUncheckedCreateNestedManyWithoutCreatorInput;
    listLaporan?: Prisma.LaporanCaUncheckedCreateNestedManyWithoutCreatorObjInput;
    listFile?: Prisma.FileUploadUncheckedCreateNestedManyWithoutCreatorObjInput;
};
export type UserCreateOrConnectWithoutPegawaiInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutPegawaiInput, Prisma.UserUncheckedCreateWithoutPegawaiInput>;
};
export type UserUpsertWithoutPegawaiInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutPegawaiInput, Prisma.UserUncheckedUpdateWithoutPegawaiInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutPegawaiInput, Prisma.UserUncheckedCreateWithoutPegawaiInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutPegawaiInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutPegawaiInput, Prisma.UserUncheckedUpdateWithoutPegawaiInput>;
};
export type UserUpdateWithoutPegawaiInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.UserRoleBridgeUpdateManyWithoutUserNestedInput;
    rencanaAksi?: Prisma.RencanaAksiUpdateManyWithoutCreatorObjNestedInput;
    progressRA?: Prisma.ProgressRencanaAksiUpdateManyWithoutCreatorObjNestedInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiUpdateManyWithoutCreatorNestedInput;
    listLaporan?: Prisma.LaporanCaUpdateManyWithoutCreatorObjNestedInput;
    listFile?: Prisma.FileUploadUpdateManyWithoutCreatorObjNestedInput;
};
export type UserUncheckedUpdateWithoutPegawaiInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.UserRoleBridgeUncheckedUpdateManyWithoutUserNestedInput;
    rencanaAksi?: Prisma.RencanaAksiUncheckedUpdateManyWithoutCreatorObjNestedInput;
    progressRA?: Prisma.ProgressRencanaAksiUncheckedUpdateManyWithoutCreatorObjNestedInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiUncheckedUpdateManyWithoutCreatorNestedInput;
    listLaporan?: Prisma.LaporanCaUncheckedUpdateManyWithoutCreatorObjNestedInput;
    listFile?: Prisma.FileUploadUncheckedUpdateManyWithoutCreatorObjNestedInput;
};
export type UserCreateWithoutRencanaAksiInput = {
    username: string;
    pwd: string;
    is_active: boolean;
    roles?: Prisma.UserRoleBridgeCreateNestedManyWithoutUserInput;
    pegawai?: Prisma.PegawaiCreateNestedOneWithoutUserObjInput;
    progressRA?: Prisma.ProgressRencanaAksiCreateNestedManyWithoutCreatorObjInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiCreateNestedManyWithoutCreatorInput;
    listLaporan?: Prisma.LaporanCaCreateNestedManyWithoutCreatorObjInput;
    listFile?: Prisma.FileUploadCreateNestedManyWithoutCreatorObjInput;
};
export type UserUncheckedCreateWithoutRencanaAksiInput = {
    username: string;
    pwd: string;
    is_active: boolean;
    roles?: Prisma.UserRoleBridgeUncheckedCreateNestedManyWithoutUserInput;
    pegawai?: Prisma.PegawaiUncheckedCreateNestedOneWithoutUserObjInput;
    progressRA?: Prisma.ProgressRencanaAksiUncheckedCreateNestedManyWithoutCreatorObjInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiUncheckedCreateNestedManyWithoutCreatorInput;
    listLaporan?: Prisma.LaporanCaUncheckedCreateNestedManyWithoutCreatorObjInput;
    listFile?: Prisma.FileUploadUncheckedCreateNestedManyWithoutCreatorObjInput;
};
export type UserCreateOrConnectWithoutRencanaAksiInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutRencanaAksiInput, Prisma.UserUncheckedCreateWithoutRencanaAksiInput>;
};
export type UserUpsertWithoutRencanaAksiInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutRencanaAksiInput, Prisma.UserUncheckedUpdateWithoutRencanaAksiInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutRencanaAksiInput, Prisma.UserUncheckedCreateWithoutRencanaAksiInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutRencanaAksiInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutRencanaAksiInput, Prisma.UserUncheckedUpdateWithoutRencanaAksiInput>;
};
export type UserUpdateWithoutRencanaAksiInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.UserRoleBridgeUpdateManyWithoutUserNestedInput;
    pegawai?: Prisma.PegawaiUpdateOneWithoutUserObjNestedInput;
    progressRA?: Prisma.ProgressRencanaAksiUpdateManyWithoutCreatorObjNestedInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiUpdateManyWithoutCreatorNestedInput;
    listLaporan?: Prisma.LaporanCaUpdateManyWithoutCreatorObjNestedInput;
    listFile?: Prisma.FileUploadUpdateManyWithoutCreatorObjNestedInput;
};
export type UserUncheckedUpdateWithoutRencanaAksiInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.UserRoleBridgeUncheckedUpdateManyWithoutUserNestedInput;
    pegawai?: Prisma.PegawaiUncheckedUpdateOneWithoutUserObjNestedInput;
    progressRA?: Prisma.ProgressRencanaAksiUncheckedUpdateManyWithoutCreatorObjNestedInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiUncheckedUpdateManyWithoutCreatorNestedInput;
    listLaporan?: Prisma.LaporanCaUncheckedUpdateManyWithoutCreatorObjNestedInput;
    listFile?: Prisma.FileUploadUncheckedUpdateManyWithoutCreatorObjNestedInput;
};
export type UserCreateWithoutProgressRAInput = {
    username: string;
    pwd: string;
    is_active: boolean;
    roles?: Prisma.UserRoleBridgeCreateNestedManyWithoutUserInput;
    pegawai?: Prisma.PegawaiCreateNestedOneWithoutUserObjInput;
    rencanaAksi?: Prisma.RencanaAksiCreateNestedManyWithoutCreatorObjInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiCreateNestedManyWithoutCreatorInput;
    listLaporan?: Prisma.LaporanCaCreateNestedManyWithoutCreatorObjInput;
    listFile?: Prisma.FileUploadCreateNestedManyWithoutCreatorObjInput;
};
export type UserUncheckedCreateWithoutProgressRAInput = {
    username: string;
    pwd: string;
    is_active: boolean;
    roles?: Prisma.UserRoleBridgeUncheckedCreateNestedManyWithoutUserInput;
    pegawai?: Prisma.PegawaiUncheckedCreateNestedOneWithoutUserObjInput;
    rencanaAksi?: Prisma.RencanaAksiUncheckedCreateNestedManyWithoutCreatorObjInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiUncheckedCreateNestedManyWithoutCreatorInput;
    listLaporan?: Prisma.LaporanCaUncheckedCreateNestedManyWithoutCreatorObjInput;
    listFile?: Prisma.FileUploadUncheckedCreateNestedManyWithoutCreatorObjInput;
};
export type UserCreateOrConnectWithoutProgressRAInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutProgressRAInput, Prisma.UserUncheckedCreateWithoutProgressRAInput>;
};
export type UserUpsertWithoutProgressRAInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutProgressRAInput, Prisma.UserUncheckedUpdateWithoutProgressRAInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutProgressRAInput, Prisma.UserUncheckedCreateWithoutProgressRAInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutProgressRAInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutProgressRAInput, Prisma.UserUncheckedUpdateWithoutProgressRAInput>;
};
export type UserUpdateWithoutProgressRAInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.UserRoleBridgeUpdateManyWithoutUserNestedInput;
    pegawai?: Prisma.PegawaiUpdateOneWithoutUserObjNestedInput;
    rencanaAksi?: Prisma.RencanaAksiUpdateManyWithoutCreatorObjNestedInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiUpdateManyWithoutCreatorNestedInput;
    listLaporan?: Prisma.LaporanCaUpdateManyWithoutCreatorObjNestedInput;
    listFile?: Prisma.FileUploadUpdateManyWithoutCreatorObjNestedInput;
};
export type UserUncheckedUpdateWithoutProgressRAInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.UserRoleBridgeUncheckedUpdateManyWithoutUserNestedInput;
    pegawai?: Prisma.PegawaiUncheckedUpdateOneWithoutUserObjNestedInput;
    rencanaAksi?: Prisma.RencanaAksiUncheckedUpdateManyWithoutCreatorObjNestedInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiUncheckedUpdateManyWithoutCreatorNestedInput;
    listLaporan?: Prisma.LaporanCaUncheckedUpdateManyWithoutCreatorObjNestedInput;
    listFile?: Prisma.FileUploadUncheckedUpdateManyWithoutCreatorObjNestedInput;
};
export type UserCreateWithoutProgressRAIntervensiInput = {
    username: string;
    pwd: string;
    is_active: boolean;
    roles?: Prisma.UserRoleBridgeCreateNestedManyWithoutUserInput;
    pegawai?: Prisma.PegawaiCreateNestedOneWithoutUserObjInput;
    rencanaAksi?: Prisma.RencanaAksiCreateNestedManyWithoutCreatorObjInput;
    progressRA?: Prisma.ProgressRencanaAksiCreateNestedManyWithoutCreatorObjInput;
    listLaporan?: Prisma.LaporanCaCreateNestedManyWithoutCreatorObjInput;
    listFile?: Prisma.FileUploadCreateNestedManyWithoutCreatorObjInput;
};
export type UserUncheckedCreateWithoutProgressRAIntervensiInput = {
    username: string;
    pwd: string;
    is_active: boolean;
    roles?: Prisma.UserRoleBridgeUncheckedCreateNestedManyWithoutUserInput;
    pegawai?: Prisma.PegawaiUncheckedCreateNestedOneWithoutUserObjInput;
    rencanaAksi?: Prisma.RencanaAksiUncheckedCreateNestedManyWithoutCreatorObjInput;
    progressRA?: Prisma.ProgressRencanaAksiUncheckedCreateNestedManyWithoutCreatorObjInput;
    listLaporan?: Prisma.LaporanCaUncheckedCreateNestedManyWithoutCreatorObjInput;
    listFile?: Prisma.FileUploadUncheckedCreateNestedManyWithoutCreatorObjInput;
};
export type UserCreateOrConnectWithoutProgressRAIntervensiInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutProgressRAIntervensiInput, Prisma.UserUncheckedCreateWithoutProgressRAIntervensiInput>;
};
export type UserUpsertWithoutProgressRAIntervensiInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutProgressRAIntervensiInput, Prisma.UserUncheckedUpdateWithoutProgressRAIntervensiInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutProgressRAIntervensiInput, Prisma.UserUncheckedCreateWithoutProgressRAIntervensiInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutProgressRAIntervensiInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutProgressRAIntervensiInput, Prisma.UserUncheckedUpdateWithoutProgressRAIntervensiInput>;
};
export type UserUpdateWithoutProgressRAIntervensiInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.UserRoleBridgeUpdateManyWithoutUserNestedInput;
    pegawai?: Prisma.PegawaiUpdateOneWithoutUserObjNestedInput;
    rencanaAksi?: Prisma.RencanaAksiUpdateManyWithoutCreatorObjNestedInput;
    progressRA?: Prisma.ProgressRencanaAksiUpdateManyWithoutCreatorObjNestedInput;
    listLaporan?: Prisma.LaporanCaUpdateManyWithoutCreatorObjNestedInput;
    listFile?: Prisma.FileUploadUpdateManyWithoutCreatorObjNestedInput;
};
export type UserUncheckedUpdateWithoutProgressRAIntervensiInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.UserRoleBridgeUncheckedUpdateManyWithoutUserNestedInput;
    pegawai?: Prisma.PegawaiUncheckedUpdateOneWithoutUserObjNestedInput;
    rencanaAksi?: Prisma.RencanaAksiUncheckedUpdateManyWithoutCreatorObjNestedInput;
    progressRA?: Prisma.ProgressRencanaAksiUncheckedUpdateManyWithoutCreatorObjNestedInput;
    listLaporan?: Prisma.LaporanCaUncheckedUpdateManyWithoutCreatorObjNestedInput;
    listFile?: Prisma.FileUploadUncheckedUpdateManyWithoutCreatorObjNestedInput;
};
export type UserCreateWithoutListFileInput = {
    username: string;
    pwd: string;
    is_active: boolean;
    roles?: Prisma.UserRoleBridgeCreateNestedManyWithoutUserInput;
    pegawai?: Prisma.PegawaiCreateNestedOneWithoutUserObjInput;
    rencanaAksi?: Prisma.RencanaAksiCreateNestedManyWithoutCreatorObjInput;
    progressRA?: Prisma.ProgressRencanaAksiCreateNestedManyWithoutCreatorObjInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiCreateNestedManyWithoutCreatorInput;
    listLaporan?: Prisma.LaporanCaCreateNestedManyWithoutCreatorObjInput;
};
export type UserUncheckedCreateWithoutListFileInput = {
    username: string;
    pwd: string;
    is_active: boolean;
    roles?: Prisma.UserRoleBridgeUncheckedCreateNestedManyWithoutUserInput;
    pegawai?: Prisma.PegawaiUncheckedCreateNestedOneWithoutUserObjInput;
    rencanaAksi?: Prisma.RencanaAksiUncheckedCreateNestedManyWithoutCreatorObjInput;
    progressRA?: Prisma.ProgressRencanaAksiUncheckedCreateNestedManyWithoutCreatorObjInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiUncheckedCreateNestedManyWithoutCreatorInput;
    listLaporan?: Prisma.LaporanCaUncheckedCreateNestedManyWithoutCreatorObjInput;
};
export type UserCreateOrConnectWithoutListFileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutListFileInput, Prisma.UserUncheckedCreateWithoutListFileInput>;
};
export type UserUpsertWithoutListFileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutListFileInput, Prisma.UserUncheckedUpdateWithoutListFileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutListFileInput, Prisma.UserUncheckedCreateWithoutListFileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutListFileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutListFileInput, Prisma.UserUncheckedUpdateWithoutListFileInput>;
};
export type UserUpdateWithoutListFileInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.UserRoleBridgeUpdateManyWithoutUserNestedInput;
    pegawai?: Prisma.PegawaiUpdateOneWithoutUserObjNestedInput;
    rencanaAksi?: Prisma.RencanaAksiUpdateManyWithoutCreatorObjNestedInput;
    progressRA?: Prisma.ProgressRencanaAksiUpdateManyWithoutCreatorObjNestedInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiUpdateManyWithoutCreatorNestedInput;
    listLaporan?: Prisma.LaporanCaUpdateManyWithoutCreatorObjNestedInput;
};
export type UserUncheckedUpdateWithoutListFileInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.UserRoleBridgeUncheckedUpdateManyWithoutUserNestedInput;
    pegawai?: Prisma.PegawaiUncheckedUpdateOneWithoutUserObjNestedInput;
    rencanaAksi?: Prisma.RencanaAksiUncheckedUpdateManyWithoutCreatorObjNestedInput;
    progressRA?: Prisma.ProgressRencanaAksiUncheckedUpdateManyWithoutCreatorObjNestedInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiUncheckedUpdateManyWithoutCreatorNestedInput;
    listLaporan?: Prisma.LaporanCaUncheckedUpdateManyWithoutCreatorObjNestedInput;
};
export type UserCreateWithoutListLaporanInput = {
    username: string;
    pwd: string;
    is_active: boolean;
    roles?: Prisma.UserRoleBridgeCreateNestedManyWithoutUserInput;
    pegawai?: Prisma.PegawaiCreateNestedOneWithoutUserObjInput;
    rencanaAksi?: Prisma.RencanaAksiCreateNestedManyWithoutCreatorObjInput;
    progressRA?: Prisma.ProgressRencanaAksiCreateNestedManyWithoutCreatorObjInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiCreateNestedManyWithoutCreatorInput;
    listFile?: Prisma.FileUploadCreateNestedManyWithoutCreatorObjInput;
};
export type UserUncheckedCreateWithoutListLaporanInput = {
    username: string;
    pwd: string;
    is_active: boolean;
    roles?: Prisma.UserRoleBridgeUncheckedCreateNestedManyWithoutUserInput;
    pegawai?: Prisma.PegawaiUncheckedCreateNestedOneWithoutUserObjInput;
    rencanaAksi?: Prisma.RencanaAksiUncheckedCreateNestedManyWithoutCreatorObjInput;
    progressRA?: Prisma.ProgressRencanaAksiUncheckedCreateNestedManyWithoutCreatorObjInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiUncheckedCreateNestedManyWithoutCreatorInput;
    listFile?: Prisma.FileUploadUncheckedCreateNestedManyWithoutCreatorObjInput;
};
export type UserCreateOrConnectWithoutListLaporanInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutListLaporanInput, Prisma.UserUncheckedCreateWithoutListLaporanInput>;
};
export type UserUpsertWithoutListLaporanInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutListLaporanInput, Prisma.UserUncheckedUpdateWithoutListLaporanInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutListLaporanInput, Prisma.UserUncheckedCreateWithoutListLaporanInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutListLaporanInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutListLaporanInput, Prisma.UserUncheckedUpdateWithoutListLaporanInput>;
};
export type UserUpdateWithoutListLaporanInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.UserRoleBridgeUpdateManyWithoutUserNestedInput;
    pegawai?: Prisma.PegawaiUpdateOneWithoutUserObjNestedInput;
    rencanaAksi?: Prisma.RencanaAksiUpdateManyWithoutCreatorObjNestedInput;
    progressRA?: Prisma.ProgressRencanaAksiUpdateManyWithoutCreatorObjNestedInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiUpdateManyWithoutCreatorNestedInput;
    listFile?: Prisma.FileUploadUpdateManyWithoutCreatorObjNestedInput;
};
export type UserUncheckedUpdateWithoutListLaporanInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    pwd?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    roles?: Prisma.UserRoleBridgeUncheckedUpdateManyWithoutUserNestedInput;
    pegawai?: Prisma.PegawaiUncheckedUpdateOneWithoutUserObjNestedInput;
    rencanaAksi?: Prisma.RencanaAksiUncheckedUpdateManyWithoutCreatorObjNestedInput;
    progressRA?: Prisma.ProgressRencanaAksiUncheckedUpdateManyWithoutCreatorObjNestedInput;
    progressRAIntervensi?: Prisma.ProgressRaIntervensiUncheckedUpdateManyWithoutCreatorNestedInput;
    listFile?: Prisma.FileUploadUncheckedUpdateManyWithoutCreatorObjNestedInput;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    roles: number;
    rencanaAksi: number;
    progressRA: number;
    progressRAIntervensi: number;
    listLaporan: number;
    listFile: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs;
    rencanaAksi?: boolean | UserCountOutputTypeCountRencanaAksiArgs;
    progressRA?: boolean | UserCountOutputTypeCountProgressRAArgs;
    progressRAIntervensi?: boolean | UserCountOutputTypeCountProgressRAIntervensiArgs;
    listLaporan?: boolean | UserCountOutputTypeCountListLaporanArgs;
    listFile?: boolean | UserCountOutputTypeCountListFileArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserRoleBridgeWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountRencanaAksiArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RencanaAksiWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountProgressRAArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgressRencanaAksiWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountProgressRAIntervensiArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgressRaIntervensiWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountListLaporanArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LaporanCaWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountListFileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FileUploadWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    username?: boolean;
    pwd?: boolean;
    is_active?: boolean;
    roles?: boolean | Prisma.User$rolesArgs<ExtArgs>;
    pegawai?: boolean | Prisma.User$pegawaiArgs<ExtArgs>;
    rencanaAksi?: boolean | Prisma.User$rencanaAksiArgs<ExtArgs>;
    progressRA?: boolean | Prisma.User$progressRAArgs<ExtArgs>;
    progressRAIntervensi?: boolean | Prisma.User$progressRAIntervensiArgs<ExtArgs>;
    listLaporan?: boolean | Prisma.User$listLaporanArgs<ExtArgs>;
    listFile?: boolean | Prisma.User$listFileArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    username?: boolean;
    pwd?: boolean;
    is_active?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    username?: boolean;
    pwd?: boolean;
    is_active?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    username?: boolean;
    pwd?: boolean;
    is_active?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"username" | "pwd" | "is_active", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    roles?: boolean | Prisma.User$rolesArgs<ExtArgs>;
    pegawai?: boolean | Prisma.User$pegawaiArgs<ExtArgs>;
    rencanaAksi?: boolean | Prisma.User$rencanaAksiArgs<ExtArgs>;
    progressRA?: boolean | Prisma.User$progressRAArgs<ExtArgs>;
    progressRAIntervensi?: boolean | Prisma.User$progressRAIntervensiArgs<ExtArgs>;
    listLaporan?: boolean | Prisma.User$listLaporanArgs<ExtArgs>;
    listFile?: boolean | Prisma.User$listFileArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        roles: Prisma.$UserRoleBridgePayload<ExtArgs>[];
        pegawai: Prisma.$PegawaiPayload<ExtArgs> | null;
        rencanaAksi: Prisma.$RencanaAksiPayload<ExtArgs>[];
        progressRA: Prisma.$ProgressRencanaAksiPayload<ExtArgs>[];
        progressRAIntervensi: Prisma.$ProgressRaIntervensiPayload<ExtArgs>[];
        listLaporan: Prisma.$LaporanCaPayload<ExtArgs>[];
        listFile: Prisma.$FileUploadPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        username: string;
        pwd: string;
        is_active: boolean;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `username`
     * const userWithUsernameOnly = await prisma.user.findMany({ select: { username: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `username`
     * const userWithUsernameOnly = await prisma.user.createManyAndReturn({
     *   select: { username: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `username`
     * const userWithUsernameOnly = await prisma.user.updateManyAndReturn({
     *   select: { username: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    roles<T extends Prisma.User$rolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserRoleBridgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    pegawai<T extends Prisma.User$pegawaiArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$pegawaiArgs<ExtArgs>>): Prisma.Prisma__PegawaiClient<runtime.Types.Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    rencanaAksi<T extends Prisma.User$rencanaAksiArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$rencanaAksiArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RencanaAksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    progressRA<T extends Prisma.User$progressRAArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$progressRAArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgressRencanaAksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    progressRAIntervensi<T extends Prisma.User$progressRAIntervensiArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$progressRAIntervensiArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgressRaIntervensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    listLaporan<T extends Prisma.User$listLaporanArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$listLaporanArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LaporanCaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    listFile<T extends Prisma.User$listFileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$listFileArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly username: Prisma.FieldRef<"User", 'String'>;
    readonly pwd: Prisma.FieldRef<"User", 'String'>;
    readonly is_active: Prisma.FieldRef<"User", 'Boolean'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.roles
 */
export type User$rolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleBridge
     */
    select?: Prisma.UserRoleBridgeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserRoleBridge
     */
    omit?: Prisma.UserRoleBridgeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserRoleBridgeInclude<ExtArgs> | null;
    where?: Prisma.UserRoleBridgeWhereInput;
    orderBy?: Prisma.UserRoleBridgeOrderByWithRelationInput | Prisma.UserRoleBridgeOrderByWithRelationInput[];
    cursor?: Prisma.UserRoleBridgeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserRoleBridgeScalarFieldEnum | Prisma.UserRoleBridgeScalarFieldEnum[];
};
/**
 * User.pegawai
 */
export type User$pegawaiArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: Prisma.PegawaiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: Prisma.PegawaiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PegawaiInclude<ExtArgs> | null;
    where?: Prisma.PegawaiWhereInput;
};
/**
 * User.rencanaAksi
 */
export type User$rencanaAksiArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RencanaAksi
     */
    select?: Prisma.RencanaAksiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RencanaAksi
     */
    omit?: Prisma.RencanaAksiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RencanaAksiInclude<ExtArgs> | null;
    where?: Prisma.RencanaAksiWhereInput;
    orderBy?: Prisma.RencanaAksiOrderByWithRelationInput | Prisma.RencanaAksiOrderByWithRelationInput[];
    cursor?: Prisma.RencanaAksiWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RencanaAksiScalarFieldEnum | Prisma.RencanaAksiScalarFieldEnum[];
};
/**
 * User.progressRA
 */
export type User$progressRAArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressRencanaAksi
     */
    select?: Prisma.ProgressRencanaAksiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgressRencanaAksi
     */
    omit?: Prisma.ProgressRencanaAksiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgressRencanaAksiInclude<ExtArgs> | null;
    where?: Prisma.ProgressRencanaAksiWhereInput;
    orderBy?: Prisma.ProgressRencanaAksiOrderByWithRelationInput | Prisma.ProgressRencanaAksiOrderByWithRelationInput[];
    cursor?: Prisma.ProgressRencanaAksiWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgressRencanaAksiScalarFieldEnum | Prisma.ProgressRencanaAksiScalarFieldEnum[];
};
/**
 * User.progressRAIntervensi
 */
export type User$progressRAIntervensiArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressRaIntervensi
     */
    select?: Prisma.ProgressRaIntervensiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgressRaIntervensi
     */
    omit?: Prisma.ProgressRaIntervensiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgressRaIntervensiInclude<ExtArgs> | null;
    where?: Prisma.ProgressRaIntervensiWhereInput;
    orderBy?: Prisma.ProgressRaIntervensiOrderByWithRelationInput | Prisma.ProgressRaIntervensiOrderByWithRelationInput[];
    cursor?: Prisma.ProgressRaIntervensiWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgressRaIntervensiScalarFieldEnum | Prisma.ProgressRaIntervensiScalarFieldEnum[];
};
/**
 * User.listLaporan
 */
export type User$listLaporanArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanCa
     */
    select?: Prisma.LaporanCaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the LaporanCa
     */
    omit?: Prisma.LaporanCaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LaporanCaInclude<ExtArgs> | null;
    where?: Prisma.LaporanCaWhereInput;
    orderBy?: Prisma.LaporanCaOrderByWithRelationInput | Prisma.LaporanCaOrderByWithRelationInput[];
    cursor?: Prisma.LaporanCaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LaporanCaScalarFieldEnum | Prisma.LaporanCaScalarFieldEnum[];
};
/**
 * User.listFile
 */
export type User$listFileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: Prisma.FileUploadSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: Prisma.FileUploadOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FileUploadInclude<ExtArgs> | null;
    where?: Prisma.FileUploadWhereInput;
    orderBy?: Prisma.FileUploadOrderByWithRelationInput | Prisma.FileUploadOrderByWithRelationInput[];
    cursor?: Prisma.FileUploadWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FileUploadScalarFieldEnum | Prisma.FileUploadScalarFieldEnum[];
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=User.d.ts.map