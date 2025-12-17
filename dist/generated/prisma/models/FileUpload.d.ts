import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model FileUpload
 *
 */
export type FileUploadModel = runtime.Types.Result.DefaultSelection<Prisma.$FileUploadPayload>;
export type AggregateFileUpload = {
    _count: FileUploadCountAggregateOutputType | null;
    _avg: FileUploadAvgAggregateOutputType | null;
    _sum: FileUploadSumAggregateOutputType | null;
    _min: FileUploadMinAggregateOutputType | null;
    _max: FileUploadMaxAggregateOutputType | null;
};
export type FileUploadAvgAggregateOutputType = {
    size: number | null;
};
export type FileUploadSumAggregateOutputType = {
    size: number | null;
};
export type FileUploadMinAggregateOutputType = {
    uuid: string | null;
    filename: string | null;
    extension: string | null;
    size: number | null;
    is_public: boolean | null;
    path: string | null;
    created_by: string | null;
    created_at: Date | null;
    last_updated: Date | null;
};
export type FileUploadMaxAggregateOutputType = {
    uuid: string | null;
    filename: string | null;
    extension: string | null;
    size: number | null;
    is_public: boolean | null;
    path: string | null;
    created_by: string | null;
    created_at: Date | null;
    last_updated: Date | null;
};
export type FileUploadCountAggregateOutputType = {
    uuid: number;
    filename: number;
    extension: number;
    size: number;
    is_public: number;
    path: number;
    created_by: number;
    created_at: number;
    last_updated: number;
    _all: number;
};
export type FileUploadAvgAggregateInputType = {
    size?: true;
};
export type FileUploadSumAggregateInputType = {
    size?: true;
};
export type FileUploadMinAggregateInputType = {
    uuid?: true;
    filename?: true;
    extension?: true;
    size?: true;
    is_public?: true;
    path?: true;
    created_by?: true;
    created_at?: true;
    last_updated?: true;
};
export type FileUploadMaxAggregateInputType = {
    uuid?: true;
    filename?: true;
    extension?: true;
    size?: true;
    is_public?: true;
    path?: true;
    created_by?: true;
    created_at?: true;
    last_updated?: true;
};
export type FileUploadCountAggregateInputType = {
    uuid?: true;
    filename?: true;
    extension?: true;
    size?: true;
    is_public?: true;
    path?: true;
    created_by?: true;
    created_at?: true;
    last_updated?: true;
    _all?: true;
};
export type FileUploadAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FileUpload to aggregate.
     */
    where?: Prisma.FileUploadWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: Prisma.FileUploadOrderByWithRelationInput | Prisma.FileUploadOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.FileUploadWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FileUploads.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned FileUploads
    **/
    _count?: true | FileUploadCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: FileUploadAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: FileUploadSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FileUploadMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FileUploadMaxAggregateInputType;
};
export type GetFileUploadAggregateType<T extends FileUploadAggregateArgs> = {
    [P in keyof T & keyof AggregateFileUpload]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFileUpload[P]> : Prisma.GetScalarType<T[P], AggregateFileUpload[P]>;
};
export type FileUploadGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FileUploadWhereInput;
    orderBy?: Prisma.FileUploadOrderByWithAggregationInput | Prisma.FileUploadOrderByWithAggregationInput[];
    by: Prisma.FileUploadScalarFieldEnum[] | Prisma.FileUploadScalarFieldEnum;
    having?: Prisma.FileUploadScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FileUploadCountAggregateInputType | true;
    _avg?: FileUploadAvgAggregateInputType;
    _sum?: FileUploadSumAggregateInputType;
    _min?: FileUploadMinAggregateInputType;
    _max?: FileUploadMaxAggregateInputType;
};
export type FileUploadGroupByOutputType = {
    uuid: string;
    filename: string;
    extension: string;
    size: number;
    is_public: boolean;
    path: string;
    created_by: string;
    created_at: Date;
    last_updated: Date;
    _count: FileUploadCountAggregateOutputType | null;
    _avg: FileUploadAvgAggregateOutputType | null;
    _sum: FileUploadSumAggregateOutputType | null;
    _min: FileUploadMinAggregateOutputType | null;
    _max: FileUploadMaxAggregateOutputType | null;
};
type GetFileUploadGroupByPayload<T extends FileUploadGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FileUploadGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FileUploadGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FileUploadGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FileUploadGroupByOutputType[P]>;
}>>;
export type FileUploadWhereInput = {
    AND?: Prisma.FileUploadWhereInput | Prisma.FileUploadWhereInput[];
    OR?: Prisma.FileUploadWhereInput[];
    NOT?: Prisma.FileUploadWhereInput | Prisma.FileUploadWhereInput[];
    uuid?: Prisma.StringFilter<"FileUpload"> | string;
    filename?: Prisma.StringFilter<"FileUpload"> | string;
    extension?: Prisma.StringFilter<"FileUpload"> | string;
    size?: Prisma.IntFilter<"FileUpload"> | number;
    is_public?: Prisma.BoolFilter<"FileUpload"> | boolean;
    path?: Prisma.StringFilter<"FileUpload"> | string;
    created_by?: Prisma.StringFilter<"FileUpload"> | string;
    created_at?: Prisma.DateTimeFilter<"FileUpload"> | Date | string;
    last_updated?: Prisma.DateTimeFilter<"FileUpload"> | Date | string;
    creatorObj?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    laporanObj?: Prisma.LaporanCaListRelationFilter;
};
export type FileUploadOrderByWithRelationInput = {
    uuid?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    extension?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    is_public?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    creatorObj?: Prisma.UserOrderByWithRelationInput;
    laporanObj?: Prisma.LaporanCaOrderByRelationAggregateInput;
};
export type FileUploadWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string;
    AND?: Prisma.FileUploadWhereInput | Prisma.FileUploadWhereInput[];
    OR?: Prisma.FileUploadWhereInput[];
    NOT?: Prisma.FileUploadWhereInput | Prisma.FileUploadWhereInput[];
    filename?: Prisma.StringFilter<"FileUpload"> | string;
    extension?: Prisma.StringFilter<"FileUpload"> | string;
    size?: Prisma.IntFilter<"FileUpload"> | number;
    is_public?: Prisma.BoolFilter<"FileUpload"> | boolean;
    path?: Prisma.StringFilter<"FileUpload"> | string;
    created_by?: Prisma.StringFilter<"FileUpload"> | string;
    created_at?: Prisma.DateTimeFilter<"FileUpload"> | Date | string;
    last_updated?: Prisma.DateTimeFilter<"FileUpload"> | Date | string;
    creatorObj?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    laporanObj?: Prisma.LaporanCaListRelationFilter;
}, "uuid">;
export type FileUploadOrderByWithAggregationInput = {
    uuid?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    extension?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    is_public?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    _count?: Prisma.FileUploadCountOrderByAggregateInput;
    _avg?: Prisma.FileUploadAvgOrderByAggregateInput;
    _max?: Prisma.FileUploadMaxOrderByAggregateInput;
    _min?: Prisma.FileUploadMinOrderByAggregateInput;
    _sum?: Prisma.FileUploadSumOrderByAggregateInput;
};
export type FileUploadScalarWhereWithAggregatesInput = {
    AND?: Prisma.FileUploadScalarWhereWithAggregatesInput | Prisma.FileUploadScalarWhereWithAggregatesInput[];
    OR?: Prisma.FileUploadScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FileUploadScalarWhereWithAggregatesInput | Prisma.FileUploadScalarWhereWithAggregatesInput[];
    uuid?: Prisma.StringWithAggregatesFilter<"FileUpload"> | string;
    filename?: Prisma.StringWithAggregatesFilter<"FileUpload"> | string;
    extension?: Prisma.StringWithAggregatesFilter<"FileUpload"> | string;
    size?: Prisma.IntWithAggregatesFilter<"FileUpload"> | number;
    is_public?: Prisma.BoolWithAggregatesFilter<"FileUpload"> | boolean;
    path?: Prisma.StringWithAggregatesFilter<"FileUpload"> | string;
    created_by?: Prisma.StringWithAggregatesFilter<"FileUpload"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"FileUpload"> | Date | string;
    last_updated?: Prisma.DateTimeWithAggregatesFilter<"FileUpload"> | Date | string;
};
export type FileUploadCreateInput = {
    uuid?: string;
    filename: string;
    extension: string;
    size: number;
    is_public?: boolean;
    path: string;
    created_at?: Date | string;
    last_updated?: Date | string;
    creatorObj: Prisma.UserCreateNestedOneWithoutListFileInput;
    laporanObj?: Prisma.LaporanCaCreateNestedManyWithoutBuktiObjInput;
};
export type FileUploadUncheckedCreateInput = {
    uuid?: string;
    filename: string;
    extension: string;
    size: number;
    is_public?: boolean;
    path: string;
    created_by: string;
    created_at?: Date | string;
    last_updated?: Date | string;
    laporanObj?: Prisma.LaporanCaUncheckedCreateNestedManyWithoutBuktiObjInput;
};
export type FileUploadUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    extension?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    is_public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creatorObj?: Prisma.UserUpdateOneRequiredWithoutListFileNestedInput;
    laporanObj?: Prisma.LaporanCaUpdateManyWithoutBuktiObjNestedInput;
};
export type FileUploadUncheckedUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    extension?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    is_public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    laporanObj?: Prisma.LaporanCaUncheckedUpdateManyWithoutBuktiObjNestedInput;
};
export type FileUploadCreateManyInput = {
    uuid?: string;
    filename: string;
    extension: string;
    size: number;
    is_public?: boolean;
    path: string;
    created_by: string;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type FileUploadUpdateManyMutationInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    extension?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    is_public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FileUploadUncheckedUpdateManyInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    extension?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    is_public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FileUploadListRelationFilter = {
    every?: Prisma.FileUploadWhereInput;
    some?: Prisma.FileUploadWhereInput;
    none?: Prisma.FileUploadWhereInput;
};
export type FileUploadOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FileUploadCountOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    extension?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    is_public?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type FileUploadAvgOrderByAggregateInput = {
    size?: Prisma.SortOrder;
};
export type FileUploadMaxOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    extension?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    is_public?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type FileUploadMinOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    extension?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    is_public?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type FileUploadSumOrderByAggregateInput = {
    size?: Prisma.SortOrder;
};
export type FileUploadScalarRelationFilter = {
    is?: Prisma.FileUploadWhereInput;
    isNot?: Prisma.FileUploadWhereInput;
};
export type FileUploadCreateNestedManyWithoutCreatorObjInput = {
    create?: Prisma.XOR<Prisma.FileUploadCreateWithoutCreatorObjInput, Prisma.FileUploadUncheckedCreateWithoutCreatorObjInput> | Prisma.FileUploadCreateWithoutCreatorObjInput[] | Prisma.FileUploadUncheckedCreateWithoutCreatorObjInput[];
    connectOrCreate?: Prisma.FileUploadCreateOrConnectWithoutCreatorObjInput | Prisma.FileUploadCreateOrConnectWithoutCreatorObjInput[];
    createMany?: Prisma.FileUploadCreateManyCreatorObjInputEnvelope;
    connect?: Prisma.FileUploadWhereUniqueInput | Prisma.FileUploadWhereUniqueInput[];
};
export type FileUploadUncheckedCreateNestedManyWithoutCreatorObjInput = {
    create?: Prisma.XOR<Prisma.FileUploadCreateWithoutCreatorObjInput, Prisma.FileUploadUncheckedCreateWithoutCreatorObjInput> | Prisma.FileUploadCreateWithoutCreatorObjInput[] | Prisma.FileUploadUncheckedCreateWithoutCreatorObjInput[];
    connectOrCreate?: Prisma.FileUploadCreateOrConnectWithoutCreatorObjInput | Prisma.FileUploadCreateOrConnectWithoutCreatorObjInput[];
    createMany?: Prisma.FileUploadCreateManyCreatorObjInputEnvelope;
    connect?: Prisma.FileUploadWhereUniqueInput | Prisma.FileUploadWhereUniqueInput[];
};
export type FileUploadUpdateManyWithoutCreatorObjNestedInput = {
    create?: Prisma.XOR<Prisma.FileUploadCreateWithoutCreatorObjInput, Prisma.FileUploadUncheckedCreateWithoutCreatorObjInput> | Prisma.FileUploadCreateWithoutCreatorObjInput[] | Prisma.FileUploadUncheckedCreateWithoutCreatorObjInput[];
    connectOrCreate?: Prisma.FileUploadCreateOrConnectWithoutCreatorObjInput | Prisma.FileUploadCreateOrConnectWithoutCreatorObjInput[];
    upsert?: Prisma.FileUploadUpsertWithWhereUniqueWithoutCreatorObjInput | Prisma.FileUploadUpsertWithWhereUniqueWithoutCreatorObjInput[];
    createMany?: Prisma.FileUploadCreateManyCreatorObjInputEnvelope;
    set?: Prisma.FileUploadWhereUniqueInput | Prisma.FileUploadWhereUniqueInput[];
    disconnect?: Prisma.FileUploadWhereUniqueInput | Prisma.FileUploadWhereUniqueInput[];
    delete?: Prisma.FileUploadWhereUniqueInput | Prisma.FileUploadWhereUniqueInput[];
    connect?: Prisma.FileUploadWhereUniqueInput | Prisma.FileUploadWhereUniqueInput[];
    update?: Prisma.FileUploadUpdateWithWhereUniqueWithoutCreatorObjInput | Prisma.FileUploadUpdateWithWhereUniqueWithoutCreatorObjInput[];
    updateMany?: Prisma.FileUploadUpdateManyWithWhereWithoutCreatorObjInput | Prisma.FileUploadUpdateManyWithWhereWithoutCreatorObjInput[];
    deleteMany?: Prisma.FileUploadScalarWhereInput | Prisma.FileUploadScalarWhereInput[];
};
export type FileUploadUncheckedUpdateManyWithoutCreatorObjNestedInput = {
    create?: Prisma.XOR<Prisma.FileUploadCreateWithoutCreatorObjInput, Prisma.FileUploadUncheckedCreateWithoutCreatorObjInput> | Prisma.FileUploadCreateWithoutCreatorObjInput[] | Prisma.FileUploadUncheckedCreateWithoutCreatorObjInput[];
    connectOrCreate?: Prisma.FileUploadCreateOrConnectWithoutCreatorObjInput | Prisma.FileUploadCreateOrConnectWithoutCreatorObjInput[];
    upsert?: Prisma.FileUploadUpsertWithWhereUniqueWithoutCreatorObjInput | Prisma.FileUploadUpsertWithWhereUniqueWithoutCreatorObjInput[];
    createMany?: Prisma.FileUploadCreateManyCreatorObjInputEnvelope;
    set?: Prisma.FileUploadWhereUniqueInput | Prisma.FileUploadWhereUniqueInput[];
    disconnect?: Prisma.FileUploadWhereUniqueInput | Prisma.FileUploadWhereUniqueInput[];
    delete?: Prisma.FileUploadWhereUniqueInput | Prisma.FileUploadWhereUniqueInput[];
    connect?: Prisma.FileUploadWhereUniqueInput | Prisma.FileUploadWhereUniqueInput[];
    update?: Prisma.FileUploadUpdateWithWhereUniqueWithoutCreatorObjInput | Prisma.FileUploadUpdateWithWhereUniqueWithoutCreatorObjInput[];
    updateMany?: Prisma.FileUploadUpdateManyWithWhereWithoutCreatorObjInput | Prisma.FileUploadUpdateManyWithWhereWithoutCreatorObjInput[];
    deleteMany?: Prisma.FileUploadScalarWhereInput | Prisma.FileUploadScalarWhereInput[];
};
export type FileUploadCreateNestedOneWithoutLaporanObjInput = {
    create?: Prisma.XOR<Prisma.FileUploadCreateWithoutLaporanObjInput, Prisma.FileUploadUncheckedCreateWithoutLaporanObjInput>;
    connectOrCreate?: Prisma.FileUploadCreateOrConnectWithoutLaporanObjInput;
    connect?: Prisma.FileUploadWhereUniqueInput;
};
export type FileUploadUpdateOneRequiredWithoutLaporanObjNestedInput = {
    create?: Prisma.XOR<Prisma.FileUploadCreateWithoutLaporanObjInput, Prisma.FileUploadUncheckedCreateWithoutLaporanObjInput>;
    connectOrCreate?: Prisma.FileUploadCreateOrConnectWithoutLaporanObjInput;
    upsert?: Prisma.FileUploadUpsertWithoutLaporanObjInput;
    connect?: Prisma.FileUploadWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FileUploadUpdateToOneWithWhereWithoutLaporanObjInput, Prisma.FileUploadUpdateWithoutLaporanObjInput>, Prisma.FileUploadUncheckedUpdateWithoutLaporanObjInput>;
};
export type FileUploadCreateWithoutCreatorObjInput = {
    uuid?: string;
    filename: string;
    extension: string;
    size: number;
    is_public?: boolean;
    path: string;
    created_at?: Date | string;
    last_updated?: Date | string;
    laporanObj?: Prisma.LaporanCaCreateNestedManyWithoutBuktiObjInput;
};
export type FileUploadUncheckedCreateWithoutCreatorObjInput = {
    uuid?: string;
    filename: string;
    extension: string;
    size: number;
    is_public?: boolean;
    path: string;
    created_at?: Date | string;
    last_updated?: Date | string;
    laporanObj?: Prisma.LaporanCaUncheckedCreateNestedManyWithoutBuktiObjInput;
};
export type FileUploadCreateOrConnectWithoutCreatorObjInput = {
    where: Prisma.FileUploadWhereUniqueInput;
    create: Prisma.XOR<Prisma.FileUploadCreateWithoutCreatorObjInput, Prisma.FileUploadUncheckedCreateWithoutCreatorObjInput>;
};
export type FileUploadCreateManyCreatorObjInputEnvelope = {
    data: Prisma.FileUploadCreateManyCreatorObjInput | Prisma.FileUploadCreateManyCreatorObjInput[];
    skipDuplicates?: boolean;
};
export type FileUploadUpsertWithWhereUniqueWithoutCreatorObjInput = {
    where: Prisma.FileUploadWhereUniqueInput;
    update: Prisma.XOR<Prisma.FileUploadUpdateWithoutCreatorObjInput, Prisma.FileUploadUncheckedUpdateWithoutCreatorObjInput>;
    create: Prisma.XOR<Prisma.FileUploadCreateWithoutCreatorObjInput, Prisma.FileUploadUncheckedCreateWithoutCreatorObjInput>;
};
export type FileUploadUpdateWithWhereUniqueWithoutCreatorObjInput = {
    where: Prisma.FileUploadWhereUniqueInput;
    data: Prisma.XOR<Prisma.FileUploadUpdateWithoutCreatorObjInput, Prisma.FileUploadUncheckedUpdateWithoutCreatorObjInput>;
};
export type FileUploadUpdateManyWithWhereWithoutCreatorObjInput = {
    where: Prisma.FileUploadScalarWhereInput;
    data: Prisma.XOR<Prisma.FileUploadUpdateManyMutationInput, Prisma.FileUploadUncheckedUpdateManyWithoutCreatorObjInput>;
};
export type FileUploadScalarWhereInput = {
    AND?: Prisma.FileUploadScalarWhereInput | Prisma.FileUploadScalarWhereInput[];
    OR?: Prisma.FileUploadScalarWhereInput[];
    NOT?: Prisma.FileUploadScalarWhereInput | Prisma.FileUploadScalarWhereInput[];
    uuid?: Prisma.StringFilter<"FileUpload"> | string;
    filename?: Prisma.StringFilter<"FileUpload"> | string;
    extension?: Prisma.StringFilter<"FileUpload"> | string;
    size?: Prisma.IntFilter<"FileUpload"> | number;
    is_public?: Prisma.BoolFilter<"FileUpload"> | boolean;
    path?: Prisma.StringFilter<"FileUpload"> | string;
    created_by?: Prisma.StringFilter<"FileUpload"> | string;
    created_at?: Prisma.DateTimeFilter<"FileUpload"> | Date | string;
    last_updated?: Prisma.DateTimeFilter<"FileUpload"> | Date | string;
};
export type FileUploadCreateWithoutLaporanObjInput = {
    uuid?: string;
    filename: string;
    extension: string;
    size: number;
    is_public?: boolean;
    path: string;
    created_at?: Date | string;
    last_updated?: Date | string;
    creatorObj: Prisma.UserCreateNestedOneWithoutListFileInput;
};
export type FileUploadUncheckedCreateWithoutLaporanObjInput = {
    uuid?: string;
    filename: string;
    extension: string;
    size: number;
    is_public?: boolean;
    path: string;
    created_by: string;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type FileUploadCreateOrConnectWithoutLaporanObjInput = {
    where: Prisma.FileUploadWhereUniqueInput;
    create: Prisma.XOR<Prisma.FileUploadCreateWithoutLaporanObjInput, Prisma.FileUploadUncheckedCreateWithoutLaporanObjInput>;
};
export type FileUploadUpsertWithoutLaporanObjInput = {
    update: Prisma.XOR<Prisma.FileUploadUpdateWithoutLaporanObjInput, Prisma.FileUploadUncheckedUpdateWithoutLaporanObjInput>;
    create: Prisma.XOR<Prisma.FileUploadCreateWithoutLaporanObjInput, Prisma.FileUploadUncheckedCreateWithoutLaporanObjInput>;
    where?: Prisma.FileUploadWhereInput;
};
export type FileUploadUpdateToOneWithWhereWithoutLaporanObjInput = {
    where?: Prisma.FileUploadWhereInput;
    data: Prisma.XOR<Prisma.FileUploadUpdateWithoutLaporanObjInput, Prisma.FileUploadUncheckedUpdateWithoutLaporanObjInput>;
};
export type FileUploadUpdateWithoutLaporanObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    extension?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    is_public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creatorObj?: Prisma.UserUpdateOneRequiredWithoutListFileNestedInput;
};
export type FileUploadUncheckedUpdateWithoutLaporanObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    extension?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    is_public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FileUploadCreateManyCreatorObjInput = {
    uuid?: string;
    filename: string;
    extension: string;
    size: number;
    is_public?: boolean;
    path: string;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type FileUploadUpdateWithoutCreatorObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    extension?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    is_public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    laporanObj?: Prisma.LaporanCaUpdateManyWithoutBuktiObjNestedInput;
};
export type FileUploadUncheckedUpdateWithoutCreatorObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    extension?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    is_public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    laporanObj?: Prisma.LaporanCaUncheckedUpdateManyWithoutBuktiObjNestedInput;
};
export type FileUploadUncheckedUpdateManyWithoutCreatorObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    extension?: Prisma.StringFieldUpdateOperationsInput | string;
    size?: Prisma.IntFieldUpdateOperationsInput | number;
    is_public?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type FileUploadCountOutputType
 */
export type FileUploadCountOutputType = {
    laporanObj: number;
};
export type FileUploadCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    laporanObj?: boolean | FileUploadCountOutputTypeCountLaporanObjArgs;
};
/**
 * FileUploadCountOutputType without action
 */
export type FileUploadCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUploadCountOutputType
     */
    select?: Prisma.FileUploadCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * FileUploadCountOutputType without action
 */
export type FileUploadCountOutputTypeCountLaporanObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LaporanCaWhereInput;
};
export type FileUploadSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    filename?: boolean;
    extension?: boolean;
    size?: boolean;
    is_public?: boolean;
    path?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
    creatorObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    laporanObj?: boolean | Prisma.FileUpload$laporanObjArgs<ExtArgs>;
    _count?: boolean | Prisma.FileUploadCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["fileUpload"]>;
export type FileUploadSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    filename?: boolean;
    extension?: boolean;
    size?: boolean;
    is_public?: boolean;
    path?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
    creatorObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["fileUpload"]>;
export type FileUploadSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    filename?: boolean;
    extension?: boolean;
    size?: boolean;
    is_public?: boolean;
    path?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
    creatorObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["fileUpload"]>;
export type FileUploadSelectScalar = {
    uuid?: boolean;
    filename?: boolean;
    extension?: boolean;
    size?: boolean;
    is_public?: boolean;
    path?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
};
export type FileUploadOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"uuid" | "filename" | "extension" | "size" | "is_public" | "path" | "created_by" | "created_at" | "last_updated", ExtArgs["result"]["fileUpload"]>;
export type FileUploadInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creatorObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    laporanObj?: boolean | Prisma.FileUpload$laporanObjArgs<ExtArgs>;
    _count?: boolean | Prisma.FileUploadCountOutputTypeDefaultArgs<ExtArgs>;
};
export type FileUploadIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creatorObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FileUploadIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creatorObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $FileUploadPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FileUpload";
    objects: {
        creatorObj: Prisma.$UserPayload<ExtArgs>;
        laporanObj: Prisma.$LaporanCaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        uuid: string;
        filename: string;
        extension: string;
        size: number;
        is_public: boolean;
        path: string;
        created_by: string;
        created_at: Date;
        last_updated: Date;
    }, ExtArgs["result"]["fileUpload"]>;
    composites: {};
};
export type FileUploadGetPayload<S extends boolean | null | undefined | FileUploadDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FileUploadPayload, S>;
export type FileUploadCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FileUploadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FileUploadCountAggregateInputType | true;
};
export interface FileUploadDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FileUpload'];
        meta: {
            name: 'FileUpload';
        };
    };
    /**
     * Find zero or one FileUpload that matches the filter.
     * @param {FileUploadFindUniqueArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileUploadFindUniqueArgs>(args: Prisma.SelectSubset<T, FileUploadFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FileUploadClient<runtime.Types.Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one FileUpload that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileUploadFindUniqueOrThrowArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileUploadFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FileUploadFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FileUploadClient<runtime.Types.Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FileUpload that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadFindFirstArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileUploadFindFirstArgs>(args?: Prisma.SelectSubset<T, FileUploadFindFirstArgs<ExtArgs>>): Prisma.Prisma__FileUploadClient<runtime.Types.Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FileUpload that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadFindFirstOrThrowArgs} args - Arguments to find a FileUpload
     * @example
     * // Get one FileUpload
     * const fileUpload = await prisma.fileUpload.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileUploadFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FileUploadFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FileUploadClient<runtime.Types.Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more FileUploads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileUploads
     * const fileUploads = await prisma.fileUpload.findMany()
     *
     * // Get first 10 FileUploads
     * const fileUploads = await prisma.fileUpload.findMany({ take: 10 })
     *
     * // Only select the `uuid`
     * const fileUploadWithUuidOnly = await prisma.fileUpload.findMany({ select: { uuid: true } })
     *
     */
    findMany<T extends FileUploadFindManyArgs>(args?: Prisma.SelectSubset<T, FileUploadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a FileUpload.
     * @param {FileUploadCreateArgs} args - Arguments to create a FileUpload.
     * @example
     * // Create one FileUpload
     * const FileUpload = await prisma.fileUpload.create({
     *   data: {
     *     // ... data to create a FileUpload
     *   }
     * })
     *
     */
    create<T extends FileUploadCreateArgs>(args: Prisma.SelectSubset<T, FileUploadCreateArgs<ExtArgs>>): Prisma.Prisma__FileUploadClient<runtime.Types.Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many FileUploads.
     * @param {FileUploadCreateManyArgs} args - Arguments to create many FileUploads.
     * @example
     * // Create many FileUploads
     * const fileUpload = await prisma.fileUpload.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FileUploadCreateManyArgs>(args?: Prisma.SelectSubset<T, FileUploadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many FileUploads and returns the data saved in the database.
     * @param {FileUploadCreateManyAndReturnArgs} args - Arguments to create many FileUploads.
     * @example
     * // Create many FileUploads
     * const fileUpload = await prisma.fileUpload.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many FileUploads and only return the `uuid`
     * const fileUploadWithUuidOnly = await prisma.fileUpload.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FileUploadCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FileUploadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a FileUpload.
     * @param {FileUploadDeleteArgs} args - Arguments to delete one FileUpload.
     * @example
     * // Delete one FileUpload
     * const FileUpload = await prisma.fileUpload.delete({
     *   where: {
     *     // ... filter to delete one FileUpload
     *   }
     * })
     *
     */
    delete<T extends FileUploadDeleteArgs>(args: Prisma.SelectSubset<T, FileUploadDeleteArgs<ExtArgs>>): Prisma.Prisma__FileUploadClient<runtime.Types.Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one FileUpload.
     * @param {FileUploadUpdateArgs} args - Arguments to update one FileUpload.
     * @example
     * // Update one FileUpload
     * const fileUpload = await prisma.fileUpload.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FileUploadUpdateArgs>(args: Prisma.SelectSubset<T, FileUploadUpdateArgs<ExtArgs>>): Prisma.Prisma__FileUploadClient<runtime.Types.Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more FileUploads.
     * @param {FileUploadDeleteManyArgs} args - Arguments to filter FileUploads to delete.
     * @example
     * // Delete a few FileUploads
     * const { count } = await prisma.fileUpload.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FileUploadDeleteManyArgs>(args?: Prisma.SelectSubset<T, FileUploadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FileUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileUploads
     * const fileUpload = await prisma.fileUpload.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FileUploadUpdateManyArgs>(args: Prisma.SelectSubset<T, FileUploadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FileUploads and returns the data updated in the database.
     * @param {FileUploadUpdateManyAndReturnArgs} args - Arguments to update many FileUploads.
     * @example
     * // Update many FileUploads
     * const fileUpload = await prisma.fileUpload.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more FileUploads and only return the `uuid`
     * const fileUploadWithUuidOnly = await prisma.fileUpload.updateManyAndReturn({
     *   select: { uuid: true },
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
    updateManyAndReturn<T extends FileUploadUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FileUploadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one FileUpload.
     * @param {FileUploadUpsertArgs} args - Arguments to update or create a FileUpload.
     * @example
     * // Update or create a FileUpload
     * const fileUpload = await prisma.fileUpload.upsert({
     *   create: {
     *     // ... data to create a FileUpload
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileUpload we want to update
     *   }
     * })
     */
    upsert<T extends FileUploadUpsertArgs>(args: Prisma.SelectSubset<T, FileUploadUpsertArgs<ExtArgs>>): Prisma.Prisma__FileUploadClient<runtime.Types.Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of FileUploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadCountArgs} args - Arguments to filter FileUploads to count.
     * @example
     * // Count the number of FileUploads
     * const count = await prisma.fileUpload.count({
     *   where: {
     *     // ... the filter for the FileUploads we want to count
     *   }
     * })
    **/
    count<T extends FileUploadCountArgs>(args?: Prisma.Subset<T, FileUploadCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FileUploadCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a FileUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileUploadAggregateArgs>(args: Prisma.Subset<T, FileUploadAggregateArgs>): Prisma.PrismaPromise<GetFileUploadAggregateType<T>>;
    /**
     * Group by FileUpload.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUploadGroupByArgs} args - Group by arguments.
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
    groupBy<T extends FileUploadGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FileUploadGroupByArgs['orderBy'];
    } : {
        orderBy?: FileUploadGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FileUploadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileUploadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the FileUpload model
     */
    readonly fields: FileUploadFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for FileUpload.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__FileUploadClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    creatorObj<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    laporanObj<T extends Prisma.FileUpload$laporanObjArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FileUpload$laporanObjArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LaporanCaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the FileUpload model
 */
export interface FileUploadFieldRefs {
    readonly uuid: Prisma.FieldRef<"FileUpload", 'String'>;
    readonly filename: Prisma.FieldRef<"FileUpload", 'String'>;
    readonly extension: Prisma.FieldRef<"FileUpload", 'String'>;
    readonly size: Prisma.FieldRef<"FileUpload", 'Int'>;
    readonly is_public: Prisma.FieldRef<"FileUpload", 'Boolean'>;
    readonly path: Prisma.FieldRef<"FileUpload", 'String'>;
    readonly created_by: Prisma.FieldRef<"FileUpload", 'String'>;
    readonly created_at: Prisma.FieldRef<"FileUpload", 'DateTime'>;
    readonly last_updated: Prisma.FieldRef<"FileUpload", 'DateTime'>;
}
/**
 * FileUpload findUnique
 */
export type FileUploadFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which FileUpload to fetch.
     */
    where: Prisma.FileUploadWhereUniqueInput;
};
/**
 * FileUpload findUniqueOrThrow
 */
export type FileUploadFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which FileUpload to fetch.
     */
    where: Prisma.FileUploadWhereUniqueInput;
};
/**
 * FileUpload findFirst
 */
export type FileUploadFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which FileUpload to fetch.
     */
    where?: Prisma.FileUploadWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: Prisma.FileUploadOrderByWithRelationInput | Prisma.FileUploadOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FileUploads.
     */
    cursor?: Prisma.FileUploadWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FileUploads.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FileUploads.
     */
    distinct?: Prisma.FileUploadScalarFieldEnum | Prisma.FileUploadScalarFieldEnum[];
};
/**
 * FileUpload findFirstOrThrow
 */
export type FileUploadFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which FileUpload to fetch.
     */
    where?: Prisma.FileUploadWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: Prisma.FileUploadOrderByWithRelationInput | Prisma.FileUploadOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FileUploads.
     */
    cursor?: Prisma.FileUploadWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FileUploads.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FileUploads.
     */
    distinct?: Prisma.FileUploadScalarFieldEnum | Prisma.FileUploadScalarFieldEnum[];
};
/**
 * FileUpload findMany
 */
export type FileUploadFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which FileUploads to fetch.
     */
    where?: Prisma.FileUploadWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FileUploads to fetch.
     */
    orderBy?: Prisma.FileUploadOrderByWithRelationInput | Prisma.FileUploadOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing FileUploads.
     */
    cursor?: Prisma.FileUploadWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FileUploads from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FileUploads.
     */
    skip?: number;
    distinct?: Prisma.FileUploadScalarFieldEnum | Prisma.FileUploadScalarFieldEnum[];
};
/**
 * FileUpload create
 */
export type FileUploadCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a FileUpload.
     */
    data: Prisma.XOR<Prisma.FileUploadCreateInput, Prisma.FileUploadUncheckedCreateInput>;
};
/**
 * FileUpload createMany
 */
export type FileUploadCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileUploads.
     */
    data: Prisma.FileUploadCreateManyInput | Prisma.FileUploadCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * FileUpload createManyAndReturn
 */
export type FileUploadCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: Prisma.FileUploadSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: Prisma.FileUploadOmit<ExtArgs> | null;
    /**
     * The data used to create many FileUploads.
     */
    data: Prisma.FileUploadCreateManyInput | Prisma.FileUploadCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FileUploadIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * FileUpload update
 */
export type FileUploadUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a FileUpload.
     */
    data: Prisma.XOR<Prisma.FileUploadUpdateInput, Prisma.FileUploadUncheckedUpdateInput>;
    /**
     * Choose, which FileUpload to update.
     */
    where: Prisma.FileUploadWhereUniqueInput;
};
/**
 * FileUpload updateMany
 */
export type FileUploadUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update FileUploads.
     */
    data: Prisma.XOR<Prisma.FileUploadUpdateManyMutationInput, Prisma.FileUploadUncheckedUpdateManyInput>;
    /**
     * Filter which FileUploads to update
     */
    where?: Prisma.FileUploadWhereInput;
    /**
     * Limit how many FileUploads to update.
     */
    limit?: number;
};
/**
 * FileUpload updateManyAndReturn
 */
export type FileUploadUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileUpload
     */
    select?: Prisma.FileUploadSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FileUpload
     */
    omit?: Prisma.FileUploadOmit<ExtArgs> | null;
    /**
     * The data used to update FileUploads.
     */
    data: Prisma.XOR<Prisma.FileUploadUpdateManyMutationInput, Prisma.FileUploadUncheckedUpdateManyInput>;
    /**
     * Filter which FileUploads to update
     */
    where?: Prisma.FileUploadWhereInput;
    /**
     * Limit how many FileUploads to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FileUploadIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * FileUpload upsert
 */
export type FileUploadUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the FileUpload to update in case it exists.
     */
    where: Prisma.FileUploadWhereUniqueInput;
    /**
     * In case the FileUpload found by the `where` argument doesn't exist, create a new FileUpload with this data.
     */
    create: Prisma.XOR<Prisma.FileUploadCreateInput, Prisma.FileUploadUncheckedCreateInput>;
    /**
     * In case the FileUpload was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.FileUploadUpdateInput, Prisma.FileUploadUncheckedUpdateInput>;
};
/**
 * FileUpload delete
 */
export type FileUploadDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which FileUpload to delete.
     */
    where: Prisma.FileUploadWhereUniqueInput;
};
/**
 * FileUpload deleteMany
 */
export type FileUploadDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FileUploads to delete
     */
    where?: Prisma.FileUploadWhereInput;
    /**
     * Limit how many FileUploads to delete.
     */
    limit?: number;
};
/**
 * FileUpload.laporanObj
 */
export type FileUpload$laporanObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * FileUpload without action
 */
export type FileUploadDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=FileUpload.d.ts.map