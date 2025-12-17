import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model LaporanCa
 *
 */
export type LaporanCaModel = runtime.Types.Result.DefaultSelection<Prisma.$LaporanCaPayload>;
export type AggregateLaporanCa = {
    _count: LaporanCaCountAggregateOutputType | null;
    _avg: LaporanCaAvgAggregateOutputType | null;
    _sum: LaporanCaSumAggregateOutputType | null;
    _min: LaporanCaMinAggregateOutputType | null;
    _max: LaporanCaMaxAggregateOutputType | null;
};
export type LaporanCaAvgAggregateOutputType = {
    triwulan: number | null;
    tahun: number | null;
};
export type LaporanCaSumAggregateOutputType = {
    triwulan: number | null;
    tahun: number | null;
};
export type LaporanCaMinAggregateOutputType = {
    uuid: string | null;
    triwulan: number | null;
    tahun: number | null;
    satker: string | null;
    bukti: string | null;
    created_by: string | null;
    created_at: Date | null;
    last_updated: Date | null;
};
export type LaporanCaMaxAggregateOutputType = {
    uuid: string | null;
    triwulan: number | null;
    tahun: number | null;
    satker: string | null;
    bukti: string | null;
    created_by: string | null;
    created_at: Date | null;
    last_updated: Date | null;
};
export type LaporanCaCountAggregateOutputType = {
    uuid: number;
    triwulan: number;
    tahun: number;
    satker: number;
    bukti: number;
    created_by: number;
    created_at: number;
    last_updated: number;
    _all: number;
};
export type LaporanCaAvgAggregateInputType = {
    triwulan?: true;
    tahun?: true;
};
export type LaporanCaSumAggregateInputType = {
    triwulan?: true;
    tahun?: true;
};
export type LaporanCaMinAggregateInputType = {
    uuid?: true;
    triwulan?: true;
    tahun?: true;
    satker?: true;
    bukti?: true;
    created_by?: true;
    created_at?: true;
    last_updated?: true;
};
export type LaporanCaMaxAggregateInputType = {
    uuid?: true;
    triwulan?: true;
    tahun?: true;
    satker?: true;
    bukti?: true;
    created_by?: true;
    created_at?: true;
    last_updated?: true;
};
export type LaporanCaCountAggregateInputType = {
    uuid?: true;
    triwulan?: true;
    tahun?: true;
    satker?: true;
    bukti?: true;
    created_by?: true;
    created_at?: true;
    last_updated?: true;
    _all?: true;
};
export type LaporanCaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LaporanCa to aggregate.
     */
    where?: Prisma.LaporanCaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LaporanCas to fetch.
     */
    orderBy?: Prisma.LaporanCaOrderByWithRelationInput | Prisma.LaporanCaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LaporanCaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LaporanCas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LaporanCas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned LaporanCas
    **/
    _count?: true | LaporanCaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LaporanCaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LaporanCaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LaporanCaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LaporanCaMaxAggregateInputType;
};
export type GetLaporanCaAggregateType<T extends LaporanCaAggregateArgs> = {
    [P in keyof T & keyof AggregateLaporanCa]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLaporanCa[P]> : Prisma.GetScalarType<T[P], AggregateLaporanCa[P]>;
};
export type LaporanCaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LaporanCaWhereInput;
    orderBy?: Prisma.LaporanCaOrderByWithAggregationInput | Prisma.LaporanCaOrderByWithAggregationInput[];
    by: Prisma.LaporanCaScalarFieldEnum[] | Prisma.LaporanCaScalarFieldEnum;
    having?: Prisma.LaporanCaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LaporanCaCountAggregateInputType | true;
    _avg?: LaporanCaAvgAggregateInputType;
    _sum?: LaporanCaSumAggregateInputType;
    _min?: LaporanCaMinAggregateInputType;
    _max?: LaporanCaMaxAggregateInputType;
};
export type LaporanCaGroupByOutputType = {
    uuid: string;
    triwulan: number;
    tahun: number;
    satker: string;
    bukti: string;
    created_by: string;
    created_at: Date;
    last_updated: Date;
    _count: LaporanCaCountAggregateOutputType | null;
    _avg: LaporanCaAvgAggregateOutputType | null;
    _sum: LaporanCaSumAggregateOutputType | null;
    _min: LaporanCaMinAggregateOutputType | null;
    _max: LaporanCaMaxAggregateOutputType | null;
};
type GetLaporanCaGroupByPayload<T extends LaporanCaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LaporanCaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LaporanCaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LaporanCaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LaporanCaGroupByOutputType[P]>;
}>>;
export type LaporanCaWhereInput = {
    AND?: Prisma.LaporanCaWhereInput | Prisma.LaporanCaWhereInput[];
    OR?: Prisma.LaporanCaWhereInput[];
    NOT?: Prisma.LaporanCaWhereInput | Prisma.LaporanCaWhereInput[];
    uuid?: Prisma.StringFilter<"LaporanCa"> | string;
    triwulan?: Prisma.IntFilter<"LaporanCa"> | number;
    tahun?: Prisma.IntFilter<"LaporanCa"> | number;
    satker?: Prisma.StringFilter<"LaporanCa"> | string;
    bukti?: Prisma.StringFilter<"LaporanCa"> | string;
    created_by?: Prisma.StringFilter<"LaporanCa"> | string;
    created_at?: Prisma.DateTimeFilter<"LaporanCa"> | Date | string;
    last_updated?: Prisma.DateTimeFilter<"LaporanCa"> | Date | string;
    creatorObj?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    buktiObj?: Prisma.XOR<Prisma.FileUploadScalarRelationFilter, Prisma.FileUploadWhereInput>;
};
export type LaporanCaOrderByWithRelationInput = {
    uuid?: Prisma.SortOrder;
    triwulan?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    satker?: Prisma.SortOrder;
    bukti?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    creatorObj?: Prisma.UserOrderByWithRelationInput;
    buktiObj?: Prisma.FileUploadOrderByWithRelationInput;
};
export type LaporanCaWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string;
    triwulan_tahun_satker?: Prisma.LaporanCaTriwulanTahunSatkerCompoundUniqueInput;
    AND?: Prisma.LaporanCaWhereInput | Prisma.LaporanCaWhereInput[];
    OR?: Prisma.LaporanCaWhereInput[];
    NOT?: Prisma.LaporanCaWhereInput | Prisma.LaporanCaWhereInput[];
    triwulan?: Prisma.IntFilter<"LaporanCa"> | number;
    tahun?: Prisma.IntFilter<"LaporanCa"> | number;
    satker?: Prisma.StringFilter<"LaporanCa"> | string;
    bukti?: Prisma.StringFilter<"LaporanCa"> | string;
    created_by?: Prisma.StringFilter<"LaporanCa"> | string;
    created_at?: Prisma.DateTimeFilter<"LaporanCa"> | Date | string;
    last_updated?: Prisma.DateTimeFilter<"LaporanCa"> | Date | string;
    creatorObj?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    buktiObj?: Prisma.XOR<Prisma.FileUploadScalarRelationFilter, Prisma.FileUploadWhereInput>;
}, "uuid" | "triwulan_tahun_satker">;
export type LaporanCaOrderByWithAggregationInput = {
    uuid?: Prisma.SortOrder;
    triwulan?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    satker?: Prisma.SortOrder;
    bukti?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    _count?: Prisma.LaporanCaCountOrderByAggregateInput;
    _avg?: Prisma.LaporanCaAvgOrderByAggregateInput;
    _max?: Prisma.LaporanCaMaxOrderByAggregateInput;
    _min?: Prisma.LaporanCaMinOrderByAggregateInput;
    _sum?: Prisma.LaporanCaSumOrderByAggregateInput;
};
export type LaporanCaScalarWhereWithAggregatesInput = {
    AND?: Prisma.LaporanCaScalarWhereWithAggregatesInput | Prisma.LaporanCaScalarWhereWithAggregatesInput[];
    OR?: Prisma.LaporanCaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LaporanCaScalarWhereWithAggregatesInput | Prisma.LaporanCaScalarWhereWithAggregatesInput[];
    uuid?: Prisma.StringWithAggregatesFilter<"LaporanCa"> | string;
    triwulan?: Prisma.IntWithAggregatesFilter<"LaporanCa"> | number;
    tahun?: Prisma.IntWithAggregatesFilter<"LaporanCa"> | number;
    satker?: Prisma.StringWithAggregatesFilter<"LaporanCa"> | string;
    bukti?: Prisma.StringWithAggregatesFilter<"LaporanCa"> | string;
    created_by?: Prisma.StringWithAggregatesFilter<"LaporanCa"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"LaporanCa"> | Date | string;
    last_updated?: Prisma.DateTimeWithAggregatesFilter<"LaporanCa"> | Date | string;
};
export type LaporanCaCreateInput = {
    uuid?: string;
    triwulan: number;
    tahun: number;
    satker: string;
    created_at?: Date | string;
    last_updated?: Date | string;
    creatorObj: Prisma.UserCreateNestedOneWithoutListLaporanInput;
    buktiObj: Prisma.FileUploadCreateNestedOneWithoutLaporanObjInput;
};
export type LaporanCaUncheckedCreateInput = {
    uuid?: string;
    triwulan: number;
    tahun: number;
    satker: string;
    bukti: string;
    created_by: string;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type LaporanCaUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    triwulan?: Prisma.IntFieldUpdateOperationsInput | number;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creatorObj?: Prisma.UserUpdateOneRequiredWithoutListLaporanNestedInput;
    buktiObj?: Prisma.FileUploadUpdateOneRequiredWithoutLaporanObjNestedInput;
};
export type LaporanCaUncheckedUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    triwulan?: Prisma.IntFieldUpdateOperationsInput | number;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    bukti?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LaporanCaCreateManyInput = {
    uuid?: string;
    triwulan: number;
    tahun: number;
    satker: string;
    bukti: string;
    created_by: string;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type LaporanCaUpdateManyMutationInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    triwulan?: Prisma.IntFieldUpdateOperationsInput | number;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LaporanCaUncheckedUpdateManyInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    triwulan?: Prisma.IntFieldUpdateOperationsInput | number;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    bukti?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LaporanCaListRelationFilter = {
    every?: Prisma.LaporanCaWhereInput;
    some?: Prisma.LaporanCaWhereInput;
    none?: Prisma.LaporanCaWhereInput;
};
export type LaporanCaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LaporanCaTriwulanTahunSatkerCompoundUniqueInput = {
    triwulan: number;
    tahun: number;
    satker: string;
};
export type LaporanCaCountOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    triwulan?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    satker?: Prisma.SortOrder;
    bukti?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type LaporanCaAvgOrderByAggregateInput = {
    triwulan?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
};
export type LaporanCaMaxOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    triwulan?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    satker?: Prisma.SortOrder;
    bukti?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type LaporanCaMinOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    triwulan?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    satker?: Prisma.SortOrder;
    bukti?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type LaporanCaSumOrderByAggregateInput = {
    triwulan?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
};
export type LaporanCaCreateNestedManyWithoutCreatorObjInput = {
    create?: Prisma.XOR<Prisma.LaporanCaCreateWithoutCreatorObjInput, Prisma.LaporanCaUncheckedCreateWithoutCreatorObjInput> | Prisma.LaporanCaCreateWithoutCreatorObjInput[] | Prisma.LaporanCaUncheckedCreateWithoutCreatorObjInput[];
    connectOrCreate?: Prisma.LaporanCaCreateOrConnectWithoutCreatorObjInput | Prisma.LaporanCaCreateOrConnectWithoutCreatorObjInput[];
    createMany?: Prisma.LaporanCaCreateManyCreatorObjInputEnvelope;
    connect?: Prisma.LaporanCaWhereUniqueInput | Prisma.LaporanCaWhereUniqueInput[];
};
export type LaporanCaUncheckedCreateNestedManyWithoutCreatorObjInput = {
    create?: Prisma.XOR<Prisma.LaporanCaCreateWithoutCreatorObjInput, Prisma.LaporanCaUncheckedCreateWithoutCreatorObjInput> | Prisma.LaporanCaCreateWithoutCreatorObjInput[] | Prisma.LaporanCaUncheckedCreateWithoutCreatorObjInput[];
    connectOrCreate?: Prisma.LaporanCaCreateOrConnectWithoutCreatorObjInput | Prisma.LaporanCaCreateOrConnectWithoutCreatorObjInput[];
    createMany?: Prisma.LaporanCaCreateManyCreatorObjInputEnvelope;
    connect?: Prisma.LaporanCaWhereUniqueInput | Prisma.LaporanCaWhereUniqueInput[];
};
export type LaporanCaUpdateManyWithoutCreatorObjNestedInput = {
    create?: Prisma.XOR<Prisma.LaporanCaCreateWithoutCreatorObjInput, Prisma.LaporanCaUncheckedCreateWithoutCreatorObjInput> | Prisma.LaporanCaCreateWithoutCreatorObjInput[] | Prisma.LaporanCaUncheckedCreateWithoutCreatorObjInput[];
    connectOrCreate?: Prisma.LaporanCaCreateOrConnectWithoutCreatorObjInput | Prisma.LaporanCaCreateOrConnectWithoutCreatorObjInput[];
    upsert?: Prisma.LaporanCaUpsertWithWhereUniqueWithoutCreatorObjInput | Prisma.LaporanCaUpsertWithWhereUniqueWithoutCreatorObjInput[];
    createMany?: Prisma.LaporanCaCreateManyCreatorObjInputEnvelope;
    set?: Prisma.LaporanCaWhereUniqueInput | Prisma.LaporanCaWhereUniqueInput[];
    disconnect?: Prisma.LaporanCaWhereUniqueInput | Prisma.LaporanCaWhereUniqueInput[];
    delete?: Prisma.LaporanCaWhereUniqueInput | Prisma.LaporanCaWhereUniqueInput[];
    connect?: Prisma.LaporanCaWhereUniqueInput | Prisma.LaporanCaWhereUniqueInput[];
    update?: Prisma.LaporanCaUpdateWithWhereUniqueWithoutCreatorObjInput | Prisma.LaporanCaUpdateWithWhereUniqueWithoutCreatorObjInput[];
    updateMany?: Prisma.LaporanCaUpdateManyWithWhereWithoutCreatorObjInput | Prisma.LaporanCaUpdateManyWithWhereWithoutCreatorObjInput[];
    deleteMany?: Prisma.LaporanCaScalarWhereInput | Prisma.LaporanCaScalarWhereInput[];
};
export type LaporanCaUncheckedUpdateManyWithoutCreatorObjNestedInput = {
    create?: Prisma.XOR<Prisma.LaporanCaCreateWithoutCreatorObjInput, Prisma.LaporanCaUncheckedCreateWithoutCreatorObjInput> | Prisma.LaporanCaCreateWithoutCreatorObjInput[] | Prisma.LaporanCaUncheckedCreateWithoutCreatorObjInput[];
    connectOrCreate?: Prisma.LaporanCaCreateOrConnectWithoutCreatorObjInput | Prisma.LaporanCaCreateOrConnectWithoutCreatorObjInput[];
    upsert?: Prisma.LaporanCaUpsertWithWhereUniqueWithoutCreatorObjInput | Prisma.LaporanCaUpsertWithWhereUniqueWithoutCreatorObjInput[];
    createMany?: Prisma.LaporanCaCreateManyCreatorObjInputEnvelope;
    set?: Prisma.LaporanCaWhereUniqueInput | Prisma.LaporanCaWhereUniqueInput[];
    disconnect?: Prisma.LaporanCaWhereUniqueInput | Prisma.LaporanCaWhereUniqueInput[];
    delete?: Prisma.LaporanCaWhereUniqueInput | Prisma.LaporanCaWhereUniqueInput[];
    connect?: Prisma.LaporanCaWhereUniqueInput | Prisma.LaporanCaWhereUniqueInput[];
    update?: Prisma.LaporanCaUpdateWithWhereUniqueWithoutCreatorObjInput | Prisma.LaporanCaUpdateWithWhereUniqueWithoutCreatorObjInput[];
    updateMany?: Prisma.LaporanCaUpdateManyWithWhereWithoutCreatorObjInput | Prisma.LaporanCaUpdateManyWithWhereWithoutCreatorObjInput[];
    deleteMany?: Prisma.LaporanCaScalarWhereInput | Prisma.LaporanCaScalarWhereInput[];
};
export type LaporanCaCreateNestedManyWithoutBuktiObjInput = {
    create?: Prisma.XOR<Prisma.LaporanCaCreateWithoutBuktiObjInput, Prisma.LaporanCaUncheckedCreateWithoutBuktiObjInput> | Prisma.LaporanCaCreateWithoutBuktiObjInput[] | Prisma.LaporanCaUncheckedCreateWithoutBuktiObjInput[];
    connectOrCreate?: Prisma.LaporanCaCreateOrConnectWithoutBuktiObjInput | Prisma.LaporanCaCreateOrConnectWithoutBuktiObjInput[];
    createMany?: Prisma.LaporanCaCreateManyBuktiObjInputEnvelope;
    connect?: Prisma.LaporanCaWhereUniqueInput | Prisma.LaporanCaWhereUniqueInput[];
};
export type LaporanCaUncheckedCreateNestedManyWithoutBuktiObjInput = {
    create?: Prisma.XOR<Prisma.LaporanCaCreateWithoutBuktiObjInput, Prisma.LaporanCaUncheckedCreateWithoutBuktiObjInput> | Prisma.LaporanCaCreateWithoutBuktiObjInput[] | Prisma.LaporanCaUncheckedCreateWithoutBuktiObjInput[];
    connectOrCreate?: Prisma.LaporanCaCreateOrConnectWithoutBuktiObjInput | Prisma.LaporanCaCreateOrConnectWithoutBuktiObjInput[];
    createMany?: Prisma.LaporanCaCreateManyBuktiObjInputEnvelope;
    connect?: Prisma.LaporanCaWhereUniqueInput | Prisma.LaporanCaWhereUniqueInput[];
};
export type LaporanCaUpdateManyWithoutBuktiObjNestedInput = {
    create?: Prisma.XOR<Prisma.LaporanCaCreateWithoutBuktiObjInput, Prisma.LaporanCaUncheckedCreateWithoutBuktiObjInput> | Prisma.LaporanCaCreateWithoutBuktiObjInput[] | Prisma.LaporanCaUncheckedCreateWithoutBuktiObjInput[];
    connectOrCreate?: Prisma.LaporanCaCreateOrConnectWithoutBuktiObjInput | Prisma.LaporanCaCreateOrConnectWithoutBuktiObjInput[];
    upsert?: Prisma.LaporanCaUpsertWithWhereUniqueWithoutBuktiObjInput | Prisma.LaporanCaUpsertWithWhereUniqueWithoutBuktiObjInput[];
    createMany?: Prisma.LaporanCaCreateManyBuktiObjInputEnvelope;
    set?: Prisma.LaporanCaWhereUniqueInput | Prisma.LaporanCaWhereUniqueInput[];
    disconnect?: Prisma.LaporanCaWhereUniqueInput | Prisma.LaporanCaWhereUniqueInput[];
    delete?: Prisma.LaporanCaWhereUniqueInput | Prisma.LaporanCaWhereUniqueInput[];
    connect?: Prisma.LaporanCaWhereUniqueInput | Prisma.LaporanCaWhereUniqueInput[];
    update?: Prisma.LaporanCaUpdateWithWhereUniqueWithoutBuktiObjInput | Prisma.LaporanCaUpdateWithWhereUniqueWithoutBuktiObjInput[];
    updateMany?: Prisma.LaporanCaUpdateManyWithWhereWithoutBuktiObjInput | Prisma.LaporanCaUpdateManyWithWhereWithoutBuktiObjInput[];
    deleteMany?: Prisma.LaporanCaScalarWhereInput | Prisma.LaporanCaScalarWhereInput[];
};
export type LaporanCaUncheckedUpdateManyWithoutBuktiObjNestedInput = {
    create?: Prisma.XOR<Prisma.LaporanCaCreateWithoutBuktiObjInput, Prisma.LaporanCaUncheckedCreateWithoutBuktiObjInput> | Prisma.LaporanCaCreateWithoutBuktiObjInput[] | Prisma.LaporanCaUncheckedCreateWithoutBuktiObjInput[];
    connectOrCreate?: Prisma.LaporanCaCreateOrConnectWithoutBuktiObjInput | Prisma.LaporanCaCreateOrConnectWithoutBuktiObjInput[];
    upsert?: Prisma.LaporanCaUpsertWithWhereUniqueWithoutBuktiObjInput | Prisma.LaporanCaUpsertWithWhereUniqueWithoutBuktiObjInput[];
    createMany?: Prisma.LaporanCaCreateManyBuktiObjInputEnvelope;
    set?: Prisma.LaporanCaWhereUniqueInput | Prisma.LaporanCaWhereUniqueInput[];
    disconnect?: Prisma.LaporanCaWhereUniqueInput | Prisma.LaporanCaWhereUniqueInput[];
    delete?: Prisma.LaporanCaWhereUniqueInput | Prisma.LaporanCaWhereUniqueInput[];
    connect?: Prisma.LaporanCaWhereUniqueInput | Prisma.LaporanCaWhereUniqueInput[];
    update?: Prisma.LaporanCaUpdateWithWhereUniqueWithoutBuktiObjInput | Prisma.LaporanCaUpdateWithWhereUniqueWithoutBuktiObjInput[];
    updateMany?: Prisma.LaporanCaUpdateManyWithWhereWithoutBuktiObjInput | Prisma.LaporanCaUpdateManyWithWhereWithoutBuktiObjInput[];
    deleteMany?: Prisma.LaporanCaScalarWhereInput | Prisma.LaporanCaScalarWhereInput[];
};
export type LaporanCaCreateWithoutCreatorObjInput = {
    uuid?: string;
    triwulan: number;
    tahun: number;
    satker: string;
    created_at?: Date | string;
    last_updated?: Date | string;
    buktiObj: Prisma.FileUploadCreateNestedOneWithoutLaporanObjInput;
};
export type LaporanCaUncheckedCreateWithoutCreatorObjInput = {
    uuid?: string;
    triwulan: number;
    tahun: number;
    satker: string;
    bukti: string;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type LaporanCaCreateOrConnectWithoutCreatorObjInput = {
    where: Prisma.LaporanCaWhereUniqueInput;
    create: Prisma.XOR<Prisma.LaporanCaCreateWithoutCreatorObjInput, Prisma.LaporanCaUncheckedCreateWithoutCreatorObjInput>;
};
export type LaporanCaCreateManyCreatorObjInputEnvelope = {
    data: Prisma.LaporanCaCreateManyCreatorObjInput | Prisma.LaporanCaCreateManyCreatorObjInput[];
    skipDuplicates?: boolean;
};
export type LaporanCaUpsertWithWhereUniqueWithoutCreatorObjInput = {
    where: Prisma.LaporanCaWhereUniqueInput;
    update: Prisma.XOR<Prisma.LaporanCaUpdateWithoutCreatorObjInput, Prisma.LaporanCaUncheckedUpdateWithoutCreatorObjInput>;
    create: Prisma.XOR<Prisma.LaporanCaCreateWithoutCreatorObjInput, Prisma.LaporanCaUncheckedCreateWithoutCreatorObjInput>;
};
export type LaporanCaUpdateWithWhereUniqueWithoutCreatorObjInput = {
    where: Prisma.LaporanCaWhereUniqueInput;
    data: Prisma.XOR<Prisma.LaporanCaUpdateWithoutCreatorObjInput, Prisma.LaporanCaUncheckedUpdateWithoutCreatorObjInput>;
};
export type LaporanCaUpdateManyWithWhereWithoutCreatorObjInput = {
    where: Prisma.LaporanCaScalarWhereInput;
    data: Prisma.XOR<Prisma.LaporanCaUpdateManyMutationInput, Prisma.LaporanCaUncheckedUpdateManyWithoutCreatorObjInput>;
};
export type LaporanCaScalarWhereInput = {
    AND?: Prisma.LaporanCaScalarWhereInput | Prisma.LaporanCaScalarWhereInput[];
    OR?: Prisma.LaporanCaScalarWhereInput[];
    NOT?: Prisma.LaporanCaScalarWhereInput | Prisma.LaporanCaScalarWhereInput[];
    uuid?: Prisma.StringFilter<"LaporanCa"> | string;
    triwulan?: Prisma.IntFilter<"LaporanCa"> | number;
    tahun?: Prisma.IntFilter<"LaporanCa"> | number;
    satker?: Prisma.StringFilter<"LaporanCa"> | string;
    bukti?: Prisma.StringFilter<"LaporanCa"> | string;
    created_by?: Prisma.StringFilter<"LaporanCa"> | string;
    created_at?: Prisma.DateTimeFilter<"LaporanCa"> | Date | string;
    last_updated?: Prisma.DateTimeFilter<"LaporanCa"> | Date | string;
};
export type LaporanCaCreateWithoutBuktiObjInput = {
    uuid?: string;
    triwulan: number;
    tahun: number;
    satker: string;
    created_at?: Date | string;
    last_updated?: Date | string;
    creatorObj: Prisma.UserCreateNestedOneWithoutListLaporanInput;
};
export type LaporanCaUncheckedCreateWithoutBuktiObjInput = {
    uuid?: string;
    triwulan: number;
    tahun: number;
    satker: string;
    created_by: string;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type LaporanCaCreateOrConnectWithoutBuktiObjInput = {
    where: Prisma.LaporanCaWhereUniqueInput;
    create: Prisma.XOR<Prisma.LaporanCaCreateWithoutBuktiObjInput, Prisma.LaporanCaUncheckedCreateWithoutBuktiObjInput>;
};
export type LaporanCaCreateManyBuktiObjInputEnvelope = {
    data: Prisma.LaporanCaCreateManyBuktiObjInput | Prisma.LaporanCaCreateManyBuktiObjInput[];
    skipDuplicates?: boolean;
};
export type LaporanCaUpsertWithWhereUniqueWithoutBuktiObjInput = {
    where: Prisma.LaporanCaWhereUniqueInput;
    update: Prisma.XOR<Prisma.LaporanCaUpdateWithoutBuktiObjInput, Prisma.LaporanCaUncheckedUpdateWithoutBuktiObjInput>;
    create: Prisma.XOR<Prisma.LaporanCaCreateWithoutBuktiObjInput, Prisma.LaporanCaUncheckedCreateWithoutBuktiObjInput>;
};
export type LaporanCaUpdateWithWhereUniqueWithoutBuktiObjInput = {
    where: Prisma.LaporanCaWhereUniqueInput;
    data: Prisma.XOR<Prisma.LaporanCaUpdateWithoutBuktiObjInput, Prisma.LaporanCaUncheckedUpdateWithoutBuktiObjInput>;
};
export type LaporanCaUpdateManyWithWhereWithoutBuktiObjInput = {
    where: Prisma.LaporanCaScalarWhereInput;
    data: Prisma.XOR<Prisma.LaporanCaUpdateManyMutationInput, Prisma.LaporanCaUncheckedUpdateManyWithoutBuktiObjInput>;
};
export type LaporanCaCreateManyCreatorObjInput = {
    uuid?: string;
    triwulan: number;
    tahun: number;
    satker: string;
    bukti: string;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type LaporanCaUpdateWithoutCreatorObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    triwulan?: Prisma.IntFieldUpdateOperationsInput | number;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    buktiObj?: Prisma.FileUploadUpdateOneRequiredWithoutLaporanObjNestedInput;
};
export type LaporanCaUncheckedUpdateWithoutCreatorObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    triwulan?: Prisma.IntFieldUpdateOperationsInput | number;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    bukti?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LaporanCaUncheckedUpdateManyWithoutCreatorObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    triwulan?: Prisma.IntFieldUpdateOperationsInput | number;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    bukti?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LaporanCaCreateManyBuktiObjInput = {
    uuid?: string;
    triwulan: number;
    tahun: number;
    satker: string;
    created_by: string;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type LaporanCaUpdateWithoutBuktiObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    triwulan?: Prisma.IntFieldUpdateOperationsInput | number;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creatorObj?: Prisma.UserUpdateOneRequiredWithoutListLaporanNestedInput;
};
export type LaporanCaUncheckedUpdateWithoutBuktiObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    triwulan?: Prisma.IntFieldUpdateOperationsInput | number;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LaporanCaUncheckedUpdateManyWithoutBuktiObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    triwulan?: Prisma.IntFieldUpdateOperationsInput | number;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LaporanCaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    triwulan?: boolean;
    tahun?: boolean;
    satker?: boolean;
    bukti?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
    creatorObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    buktiObj?: boolean | Prisma.FileUploadDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["laporanCa"]>;
export type LaporanCaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    triwulan?: boolean;
    tahun?: boolean;
    satker?: boolean;
    bukti?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
    creatorObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    buktiObj?: boolean | Prisma.FileUploadDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["laporanCa"]>;
export type LaporanCaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    triwulan?: boolean;
    tahun?: boolean;
    satker?: boolean;
    bukti?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
    creatorObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    buktiObj?: boolean | Prisma.FileUploadDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["laporanCa"]>;
export type LaporanCaSelectScalar = {
    uuid?: boolean;
    triwulan?: boolean;
    tahun?: boolean;
    satker?: boolean;
    bukti?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
};
export type LaporanCaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"uuid" | "triwulan" | "tahun" | "satker" | "bukti" | "created_by" | "created_at" | "last_updated", ExtArgs["result"]["laporanCa"]>;
export type LaporanCaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creatorObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    buktiObj?: boolean | Prisma.FileUploadDefaultArgs<ExtArgs>;
};
export type LaporanCaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creatorObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    buktiObj?: boolean | Prisma.FileUploadDefaultArgs<ExtArgs>;
};
export type LaporanCaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creatorObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    buktiObj?: boolean | Prisma.FileUploadDefaultArgs<ExtArgs>;
};
export type $LaporanCaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LaporanCa";
    objects: {
        creatorObj: Prisma.$UserPayload<ExtArgs>;
        buktiObj: Prisma.$FileUploadPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        uuid: string;
        triwulan: number;
        tahun: number;
        satker: string;
        bukti: string;
        created_by: string;
        created_at: Date;
        last_updated: Date;
    }, ExtArgs["result"]["laporanCa"]>;
    composites: {};
};
export type LaporanCaGetPayload<S extends boolean | null | undefined | LaporanCaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LaporanCaPayload, S>;
export type LaporanCaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LaporanCaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LaporanCaCountAggregateInputType | true;
};
export interface LaporanCaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LaporanCa'];
        meta: {
            name: 'LaporanCa';
        };
    };
    /**
     * Find zero or one LaporanCa that matches the filter.
     * @param {LaporanCaFindUniqueArgs} args - Arguments to find a LaporanCa
     * @example
     * // Get one LaporanCa
     * const laporanCa = await prisma.laporanCa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LaporanCaFindUniqueArgs>(args: Prisma.SelectSubset<T, LaporanCaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LaporanCaClient<runtime.Types.Result.GetResult<Prisma.$LaporanCaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one LaporanCa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LaporanCaFindUniqueOrThrowArgs} args - Arguments to find a LaporanCa
     * @example
     * // Get one LaporanCa
     * const laporanCa = await prisma.laporanCa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LaporanCaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LaporanCaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LaporanCaClient<runtime.Types.Result.GetResult<Prisma.$LaporanCaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LaporanCa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanCaFindFirstArgs} args - Arguments to find a LaporanCa
     * @example
     * // Get one LaporanCa
     * const laporanCa = await prisma.laporanCa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LaporanCaFindFirstArgs>(args?: Prisma.SelectSubset<T, LaporanCaFindFirstArgs<ExtArgs>>): Prisma.Prisma__LaporanCaClient<runtime.Types.Result.GetResult<Prisma.$LaporanCaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first LaporanCa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanCaFindFirstOrThrowArgs} args - Arguments to find a LaporanCa
     * @example
     * // Get one LaporanCa
     * const laporanCa = await prisma.laporanCa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LaporanCaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LaporanCaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LaporanCaClient<runtime.Types.Result.GetResult<Prisma.$LaporanCaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more LaporanCas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanCaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LaporanCas
     * const laporanCas = await prisma.laporanCa.findMany()
     *
     * // Get first 10 LaporanCas
     * const laporanCas = await prisma.laporanCa.findMany({ take: 10 })
     *
     * // Only select the `uuid`
     * const laporanCaWithUuidOnly = await prisma.laporanCa.findMany({ select: { uuid: true } })
     *
     */
    findMany<T extends LaporanCaFindManyArgs>(args?: Prisma.SelectSubset<T, LaporanCaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LaporanCaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a LaporanCa.
     * @param {LaporanCaCreateArgs} args - Arguments to create a LaporanCa.
     * @example
     * // Create one LaporanCa
     * const LaporanCa = await prisma.laporanCa.create({
     *   data: {
     *     // ... data to create a LaporanCa
     *   }
     * })
     *
     */
    create<T extends LaporanCaCreateArgs>(args: Prisma.SelectSubset<T, LaporanCaCreateArgs<ExtArgs>>): Prisma.Prisma__LaporanCaClient<runtime.Types.Result.GetResult<Prisma.$LaporanCaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many LaporanCas.
     * @param {LaporanCaCreateManyArgs} args - Arguments to create many LaporanCas.
     * @example
     * // Create many LaporanCas
     * const laporanCa = await prisma.laporanCa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LaporanCaCreateManyArgs>(args?: Prisma.SelectSubset<T, LaporanCaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many LaporanCas and returns the data saved in the database.
     * @param {LaporanCaCreateManyAndReturnArgs} args - Arguments to create many LaporanCas.
     * @example
     * // Create many LaporanCas
     * const laporanCa = await prisma.laporanCa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many LaporanCas and only return the `uuid`
     * const laporanCaWithUuidOnly = await prisma.laporanCa.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LaporanCaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LaporanCaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LaporanCaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a LaporanCa.
     * @param {LaporanCaDeleteArgs} args - Arguments to delete one LaporanCa.
     * @example
     * // Delete one LaporanCa
     * const LaporanCa = await prisma.laporanCa.delete({
     *   where: {
     *     // ... filter to delete one LaporanCa
     *   }
     * })
     *
     */
    delete<T extends LaporanCaDeleteArgs>(args: Prisma.SelectSubset<T, LaporanCaDeleteArgs<ExtArgs>>): Prisma.Prisma__LaporanCaClient<runtime.Types.Result.GetResult<Prisma.$LaporanCaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one LaporanCa.
     * @param {LaporanCaUpdateArgs} args - Arguments to update one LaporanCa.
     * @example
     * // Update one LaporanCa
     * const laporanCa = await prisma.laporanCa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LaporanCaUpdateArgs>(args: Prisma.SelectSubset<T, LaporanCaUpdateArgs<ExtArgs>>): Prisma.Prisma__LaporanCaClient<runtime.Types.Result.GetResult<Prisma.$LaporanCaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more LaporanCas.
     * @param {LaporanCaDeleteManyArgs} args - Arguments to filter LaporanCas to delete.
     * @example
     * // Delete a few LaporanCas
     * const { count } = await prisma.laporanCa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LaporanCaDeleteManyArgs>(args?: Prisma.SelectSubset<T, LaporanCaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LaporanCas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanCaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LaporanCas
     * const laporanCa = await prisma.laporanCa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LaporanCaUpdateManyArgs>(args: Prisma.SelectSubset<T, LaporanCaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more LaporanCas and returns the data updated in the database.
     * @param {LaporanCaUpdateManyAndReturnArgs} args - Arguments to update many LaporanCas.
     * @example
     * // Update many LaporanCas
     * const laporanCa = await prisma.laporanCa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more LaporanCas and only return the `uuid`
     * const laporanCaWithUuidOnly = await prisma.laporanCa.updateManyAndReturn({
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
    updateManyAndReturn<T extends LaporanCaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LaporanCaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LaporanCaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one LaporanCa.
     * @param {LaporanCaUpsertArgs} args - Arguments to update or create a LaporanCa.
     * @example
     * // Update or create a LaporanCa
     * const laporanCa = await prisma.laporanCa.upsert({
     *   create: {
     *     // ... data to create a LaporanCa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LaporanCa we want to update
     *   }
     * })
     */
    upsert<T extends LaporanCaUpsertArgs>(args: Prisma.SelectSubset<T, LaporanCaUpsertArgs<ExtArgs>>): Prisma.Prisma__LaporanCaClient<runtime.Types.Result.GetResult<Prisma.$LaporanCaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of LaporanCas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanCaCountArgs} args - Arguments to filter LaporanCas to count.
     * @example
     * // Count the number of LaporanCas
     * const count = await prisma.laporanCa.count({
     *   where: {
     *     // ... the filter for the LaporanCas we want to count
     *   }
     * })
    **/
    count<T extends LaporanCaCountArgs>(args?: Prisma.Subset<T, LaporanCaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LaporanCaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a LaporanCa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanCaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LaporanCaAggregateArgs>(args: Prisma.Subset<T, LaporanCaAggregateArgs>): Prisma.PrismaPromise<GetLaporanCaAggregateType<T>>;
    /**
     * Group by LaporanCa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanCaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LaporanCaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LaporanCaGroupByArgs['orderBy'];
    } : {
        orderBy?: LaporanCaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LaporanCaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLaporanCaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the LaporanCa model
     */
    readonly fields: LaporanCaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for LaporanCa.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LaporanCaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    creatorObj<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    buktiObj<T extends Prisma.FileUploadDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FileUploadDefaultArgs<ExtArgs>>): Prisma.Prisma__FileUploadClient<runtime.Types.Result.GetResult<Prisma.$FileUploadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the LaporanCa model
 */
export interface LaporanCaFieldRefs {
    readonly uuid: Prisma.FieldRef<"LaporanCa", 'String'>;
    readonly triwulan: Prisma.FieldRef<"LaporanCa", 'Int'>;
    readonly tahun: Prisma.FieldRef<"LaporanCa", 'Int'>;
    readonly satker: Prisma.FieldRef<"LaporanCa", 'String'>;
    readonly bukti: Prisma.FieldRef<"LaporanCa", 'String'>;
    readonly created_by: Prisma.FieldRef<"LaporanCa", 'String'>;
    readonly created_at: Prisma.FieldRef<"LaporanCa", 'DateTime'>;
    readonly last_updated: Prisma.FieldRef<"LaporanCa", 'DateTime'>;
}
/**
 * LaporanCa findUnique
 */
export type LaporanCaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LaporanCa to fetch.
     */
    where: Prisma.LaporanCaWhereUniqueInput;
};
/**
 * LaporanCa findUniqueOrThrow
 */
export type LaporanCaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LaporanCa to fetch.
     */
    where: Prisma.LaporanCaWhereUniqueInput;
};
/**
 * LaporanCa findFirst
 */
export type LaporanCaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LaporanCa to fetch.
     */
    where?: Prisma.LaporanCaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LaporanCas to fetch.
     */
    orderBy?: Prisma.LaporanCaOrderByWithRelationInput | Prisma.LaporanCaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LaporanCas.
     */
    cursor?: Prisma.LaporanCaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LaporanCas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LaporanCas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LaporanCas.
     */
    distinct?: Prisma.LaporanCaScalarFieldEnum | Prisma.LaporanCaScalarFieldEnum[];
};
/**
 * LaporanCa findFirstOrThrow
 */
export type LaporanCaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LaporanCa to fetch.
     */
    where?: Prisma.LaporanCaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LaporanCas to fetch.
     */
    orderBy?: Prisma.LaporanCaOrderByWithRelationInput | Prisma.LaporanCaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for LaporanCas.
     */
    cursor?: Prisma.LaporanCaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LaporanCas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LaporanCas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of LaporanCas.
     */
    distinct?: Prisma.LaporanCaScalarFieldEnum | Prisma.LaporanCaScalarFieldEnum[];
};
/**
 * LaporanCa findMany
 */
export type LaporanCaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which LaporanCas to fetch.
     */
    where?: Prisma.LaporanCaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of LaporanCas to fetch.
     */
    orderBy?: Prisma.LaporanCaOrderByWithRelationInput | Prisma.LaporanCaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing LaporanCas.
     */
    cursor?: Prisma.LaporanCaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` LaporanCas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` LaporanCas.
     */
    skip?: number;
    distinct?: Prisma.LaporanCaScalarFieldEnum | Prisma.LaporanCaScalarFieldEnum[];
};
/**
 * LaporanCa create
 */
export type LaporanCaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a LaporanCa.
     */
    data: Prisma.XOR<Prisma.LaporanCaCreateInput, Prisma.LaporanCaUncheckedCreateInput>;
};
/**
 * LaporanCa createMany
 */
export type LaporanCaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many LaporanCas.
     */
    data: Prisma.LaporanCaCreateManyInput | Prisma.LaporanCaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * LaporanCa createManyAndReturn
 */
export type LaporanCaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanCa
     */
    select?: Prisma.LaporanCaSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LaporanCa
     */
    omit?: Prisma.LaporanCaOmit<ExtArgs> | null;
    /**
     * The data used to create many LaporanCas.
     */
    data: Prisma.LaporanCaCreateManyInput | Prisma.LaporanCaCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LaporanCaIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * LaporanCa update
 */
export type LaporanCaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a LaporanCa.
     */
    data: Prisma.XOR<Prisma.LaporanCaUpdateInput, Prisma.LaporanCaUncheckedUpdateInput>;
    /**
     * Choose, which LaporanCa to update.
     */
    where: Prisma.LaporanCaWhereUniqueInput;
};
/**
 * LaporanCa updateMany
 */
export type LaporanCaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update LaporanCas.
     */
    data: Prisma.XOR<Prisma.LaporanCaUpdateManyMutationInput, Prisma.LaporanCaUncheckedUpdateManyInput>;
    /**
     * Filter which LaporanCas to update
     */
    where?: Prisma.LaporanCaWhereInput;
    /**
     * Limit how many LaporanCas to update.
     */
    limit?: number;
};
/**
 * LaporanCa updateManyAndReturn
 */
export type LaporanCaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanCa
     */
    select?: Prisma.LaporanCaSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the LaporanCa
     */
    omit?: Prisma.LaporanCaOmit<ExtArgs> | null;
    /**
     * The data used to update LaporanCas.
     */
    data: Prisma.XOR<Prisma.LaporanCaUpdateManyMutationInput, Prisma.LaporanCaUncheckedUpdateManyInput>;
    /**
     * Filter which LaporanCas to update
     */
    where?: Prisma.LaporanCaWhereInput;
    /**
     * Limit how many LaporanCas to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LaporanCaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * LaporanCa upsert
 */
export type LaporanCaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the LaporanCa to update in case it exists.
     */
    where: Prisma.LaporanCaWhereUniqueInput;
    /**
     * In case the LaporanCa found by the `where` argument doesn't exist, create a new LaporanCa with this data.
     */
    create: Prisma.XOR<Prisma.LaporanCaCreateInput, Prisma.LaporanCaUncheckedCreateInput>;
    /**
     * In case the LaporanCa was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LaporanCaUpdateInput, Prisma.LaporanCaUncheckedUpdateInput>;
};
/**
 * LaporanCa delete
 */
export type LaporanCaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which LaporanCa to delete.
     */
    where: Prisma.LaporanCaWhereUniqueInput;
};
/**
 * LaporanCa deleteMany
 */
export type LaporanCaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which LaporanCas to delete
     */
    where?: Prisma.LaporanCaWhereInput;
    /**
     * Limit how many LaporanCas to delete.
     */
    limit?: number;
};
/**
 * LaporanCa without action
 */
export type LaporanCaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=LaporanCa.d.ts.map