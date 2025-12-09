import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ProgressRencanaAksi
 *
 */
export type ProgressRencanaAksiModel = runtime.Types.Result.DefaultSelection<Prisma.$ProgressRencanaAksiPayload>;
export type AggregateProgressRencanaAksi = {
    _count: ProgressRencanaAksiCountAggregateOutputType | null;
    _avg: ProgressRencanaAksiAvgAggregateOutputType | null;
    _sum: ProgressRencanaAksiSumAggregateOutputType | null;
    _min: ProgressRencanaAksiMinAggregateOutputType | null;
    _max: ProgressRencanaAksiMaxAggregateOutputType | null;
};
export type ProgressRencanaAksiAvgAggregateOutputType = {
    pelaksanaan_pg: number | null;
    capaian_pg: number | null;
    status: number | null;
};
export type ProgressRencanaAksiSumAggregateOutputType = {
    pelaksanaan_pg: number | null;
    capaian_pg: number | null;
    status: number | null;
};
export type ProgressRencanaAksiMinAggregateOutputType = {
    uuid: string | null;
    ra: string | null;
    desc: string | null;
    date: string | null;
    pelaksanaan_pg: number | null;
    capaian_pg: number | null;
    bukti: string | null;
    notes: string | null;
    status: number | null;
    created_by: string | null;
    last_updated: string | null;
};
export type ProgressRencanaAksiMaxAggregateOutputType = {
    uuid: string | null;
    ra: string | null;
    desc: string | null;
    date: string | null;
    pelaksanaan_pg: number | null;
    capaian_pg: number | null;
    bukti: string | null;
    notes: string | null;
    status: number | null;
    created_by: string | null;
    last_updated: string | null;
};
export type ProgressRencanaAksiCountAggregateOutputType = {
    uuid: number;
    ra: number;
    desc: number;
    date: number;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti: number;
    notes: number;
    status: number;
    created_by: number;
    last_updated: number;
    _all: number;
};
export type ProgressRencanaAksiAvgAggregateInputType = {
    pelaksanaan_pg?: true;
    capaian_pg?: true;
    status?: true;
};
export type ProgressRencanaAksiSumAggregateInputType = {
    pelaksanaan_pg?: true;
    capaian_pg?: true;
    status?: true;
};
export type ProgressRencanaAksiMinAggregateInputType = {
    uuid?: true;
    ra?: true;
    desc?: true;
    date?: true;
    pelaksanaan_pg?: true;
    capaian_pg?: true;
    bukti?: true;
    notes?: true;
    status?: true;
    created_by?: true;
    last_updated?: true;
};
export type ProgressRencanaAksiMaxAggregateInputType = {
    uuid?: true;
    ra?: true;
    desc?: true;
    date?: true;
    pelaksanaan_pg?: true;
    capaian_pg?: true;
    bukti?: true;
    notes?: true;
    status?: true;
    created_by?: true;
    last_updated?: true;
};
export type ProgressRencanaAksiCountAggregateInputType = {
    uuid?: true;
    ra?: true;
    desc?: true;
    date?: true;
    pelaksanaan_pg?: true;
    capaian_pg?: true;
    bukti?: true;
    notes?: true;
    status?: true;
    created_by?: true;
    last_updated?: true;
    _all?: true;
};
export type ProgressRencanaAksiAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressRencanaAksi to aggregate.
     */
    where?: Prisma.ProgressRencanaAksiWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProgressRencanaAksis to fetch.
     */
    orderBy?: Prisma.ProgressRencanaAksiOrderByWithRelationInput | Prisma.ProgressRencanaAksiOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProgressRencanaAksiWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProgressRencanaAksis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProgressRencanaAksis.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProgressRencanaAksis
    **/
    _count?: true | ProgressRencanaAksiCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ProgressRencanaAksiAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ProgressRencanaAksiSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProgressRencanaAksiMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProgressRencanaAksiMaxAggregateInputType;
};
export type GetProgressRencanaAksiAggregateType<T extends ProgressRencanaAksiAggregateArgs> = {
    [P in keyof T & keyof AggregateProgressRencanaAksi]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProgressRencanaAksi[P]> : Prisma.GetScalarType<T[P], AggregateProgressRencanaAksi[P]>;
};
export type ProgressRencanaAksiGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgressRencanaAksiWhereInput;
    orderBy?: Prisma.ProgressRencanaAksiOrderByWithAggregationInput | Prisma.ProgressRencanaAksiOrderByWithAggregationInput[];
    by: Prisma.ProgressRencanaAksiScalarFieldEnum[] | Prisma.ProgressRencanaAksiScalarFieldEnum;
    having?: Prisma.ProgressRencanaAksiScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProgressRencanaAksiCountAggregateInputType | true;
    _avg?: ProgressRencanaAksiAvgAggregateInputType;
    _sum?: ProgressRencanaAksiSumAggregateInputType;
    _min?: ProgressRencanaAksiMinAggregateInputType;
    _max?: ProgressRencanaAksiMaxAggregateInputType;
};
export type ProgressRencanaAksiGroupByOutputType = {
    uuid: string;
    ra: string;
    desc: string | null;
    date: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti: string | null;
    notes: string | null;
    status: number;
    created_by: string;
    last_updated: string;
    _count: ProgressRencanaAksiCountAggregateOutputType | null;
    _avg: ProgressRencanaAksiAvgAggregateOutputType | null;
    _sum: ProgressRencanaAksiSumAggregateOutputType | null;
    _min: ProgressRencanaAksiMinAggregateOutputType | null;
    _max: ProgressRencanaAksiMaxAggregateOutputType | null;
};
type GetProgressRencanaAksiGroupByPayload<T extends ProgressRencanaAksiGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProgressRencanaAksiGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProgressRencanaAksiGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProgressRencanaAksiGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProgressRencanaAksiGroupByOutputType[P]>;
}>>;
export type ProgressRencanaAksiWhereInput = {
    AND?: Prisma.ProgressRencanaAksiWhereInput | Prisma.ProgressRencanaAksiWhereInput[];
    OR?: Prisma.ProgressRencanaAksiWhereInput[];
    NOT?: Prisma.ProgressRencanaAksiWhereInput | Prisma.ProgressRencanaAksiWhereInput[];
    uuid?: Prisma.StringFilter<"ProgressRencanaAksi"> | string;
    ra?: Prisma.StringFilter<"ProgressRencanaAksi"> | string;
    desc?: Prisma.StringNullableFilter<"ProgressRencanaAksi"> | string | null;
    date?: Prisma.StringNullableFilter<"ProgressRencanaAksi"> | string | null;
    pelaksanaan_pg?: Prisma.FloatFilter<"ProgressRencanaAksi"> | number;
    capaian_pg?: Prisma.FloatFilter<"ProgressRencanaAksi"> | number;
    bukti?: Prisma.StringNullableFilter<"ProgressRencanaAksi"> | string | null;
    notes?: Prisma.StringNullableFilter<"ProgressRencanaAksi"> | string | null;
    status?: Prisma.IntFilter<"ProgressRencanaAksi"> | number;
    created_by?: Prisma.StringFilter<"ProgressRencanaAksi"> | string;
    last_updated?: Prisma.StringFilter<"ProgressRencanaAksi"> | string;
    raObj?: Prisma.XOR<Prisma.RencanaAksiScalarRelationFilter, Prisma.RencanaAksiWhereInput>;
    statusObj?: Prisma.XOR<Prisma.ProgressStatusScalarRelationFilter, Prisma.ProgressStatusWhereInput>;
    creatorObj?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ProgressRencanaAksiOrderByWithRelationInput = {
    uuid?: Prisma.SortOrder;
    ra?: Prisma.SortOrder;
    desc?: Prisma.SortOrderInput | Prisma.SortOrder;
    date?: Prisma.SortOrderInput | Prisma.SortOrder;
    pelaksanaan_pg?: Prisma.SortOrder;
    capaian_pg?: Prisma.SortOrder;
    bukti?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    raObj?: Prisma.RencanaAksiOrderByWithRelationInput;
    statusObj?: Prisma.ProgressStatusOrderByWithRelationInput;
    creatorObj?: Prisma.UserOrderByWithRelationInput;
};
export type ProgressRencanaAksiWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string;
    AND?: Prisma.ProgressRencanaAksiWhereInput | Prisma.ProgressRencanaAksiWhereInput[];
    OR?: Prisma.ProgressRencanaAksiWhereInput[];
    NOT?: Prisma.ProgressRencanaAksiWhereInput | Prisma.ProgressRencanaAksiWhereInput[];
    ra?: Prisma.StringFilter<"ProgressRencanaAksi"> | string;
    desc?: Prisma.StringNullableFilter<"ProgressRencanaAksi"> | string | null;
    date?: Prisma.StringNullableFilter<"ProgressRencanaAksi"> | string | null;
    pelaksanaan_pg?: Prisma.FloatFilter<"ProgressRencanaAksi"> | number;
    capaian_pg?: Prisma.FloatFilter<"ProgressRencanaAksi"> | number;
    bukti?: Prisma.StringNullableFilter<"ProgressRencanaAksi"> | string | null;
    notes?: Prisma.StringNullableFilter<"ProgressRencanaAksi"> | string | null;
    status?: Prisma.IntFilter<"ProgressRencanaAksi"> | number;
    created_by?: Prisma.StringFilter<"ProgressRencanaAksi"> | string;
    last_updated?: Prisma.StringFilter<"ProgressRencanaAksi"> | string;
    raObj?: Prisma.XOR<Prisma.RencanaAksiScalarRelationFilter, Prisma.RencanaAksiWhereInput>;
    statusObj?: Prisma.XOR<Prisma.ProgressStatusScalarRelationFilter, Prisma.ProgressStatusWhereInput>;
    creatorObj?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "uuid">;
export type ProgressRencanaAksiOrderByWithAggregationInput = {
    uuid?: Prisma.SortOrder;
    ra?: Prisma.SortOrder;
    desc?: Prisma.SortOrderInput | Prisma.SortOrder;
    date?: Prisma.SortOrderInput | Prisma.SortOrder;
    pelaksanaan_pg?: Prisma.SortOrder;
    capaian_pg?: Prisma.SortOrder;
    bukti?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    _count?: Prisma.ProgressRencanaAksiCountOrderByAggregateInput;
    _avg?: Prisma.ProgressRencanaAksiAvgOrderByAggregateInput;
    _max?: Prisma.ProgressRencanaAksiMaxOrderByAggregateInput;
    _min?: Prisma.ProgressRencanaAksiMinOrderByAggregateInput;
    _sum?: Prisma.ProgressRencanaAksiSumOrderByAggregateInput;
};
export type ProgressRencanaAksiScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProgressRencanaAksiScalarWhereWithAggregatesInput | Prisma.ProgressRencanaAksiScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProgressRencanaAksiScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProgressRencanaAksiScalarWhereWithAggregatesInput | Prisma.ProgressRencanaAksiScalarWhereWithAggregatesInput[];
    uuid?: Prisma.StringWithAggregatesFilter<"ProgressRencanaAksi"> | string;
    ra?: Prisma.StringWithAggregatesFilter<"ProgressRencanaAksi"> | string;
    desc?: Prisma.StringNullableWithAggregatesFilter<"ProgressRencanaAksi"> | string | null;
    date?: Prisma.StringNullableWithAggregatesFilter<"ProgressRencanaAksi"> | string | null;
    pelaksanaan_pg?: Prisma.FloatWithAggregatesFilter<"ProgressRencanaAksi"> | number;
    capaian_pg?: Prisma.FloatWithAggregatesFilter<"ProgressRencanaAksi"> | number;
    bukti?: Prisma.StringNullableWithAggregatesFilter<"ProgressRencanaAksi"> | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"ProgressRencanaAksi"> | string | null;
    status?: Prisma.IntWithAggregatesFilter<"ProgressRencanaAksi"> | number;
    created_by?: Prisma.StringWithAggregatesFilter<"ProgressRencanaAksi"> | string;
    last_updated?: Prisma.StringWithAggregatesFilter<"ProgressRencanaAksi"> | string;
};
export type ProgressRencanaAksiCreateInput = {
    uuid: string;
    desc?: string | null;
    date?: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti?: string | null;
    notes?: string | null;
    last_updated: string;
    raObj: Prisma.RencanaAksiCreateNestedOneWithoutListOfProgressInput;
    statusObj: Prisma.ProgressStatusCreateNestedOneWithoutListOfProgressInput;
    creatorObj: Prisma.UserCreateNestedOneWithoutProgressRAInput;
};
export type ProgressRencanaAksiUncheckedCreateInput = {
    uuid: string;
    ra: string;
    desc?: string | null;
    date?: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti?: string | null;
    notes?: string | null;
    status: number;
    created_by: string;
    last_updated: string;
};
export type ProgressRencanaAksiUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pelaksanaan_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    capaian_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    bukti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
    raObj?: Prisma.RencanaAksiUpdateOneRequiredWithoutListOfProgressNestedInput;
    statusObj?: Prisma.ProgressStatusUpdateOneRequiredWithoutListOfProgressNestedInput;
    creatorObj?: Prisma.UserUpdateOneRequiredWithoutProgressRANestedInput;
};
export type ProgressRencanaAksiUncheckedUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    ra?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pelaksanaan_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    capaian_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    bukti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProgressRencanaAksiCreateManyInput = {
    uuid: string;
    ra: string;
    desc?: string | null;
    date?: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti?: string | null;
    notes?: string | null;
    status: number;
    created_by: string;
    last_updated: string;
};
export type ProgressRencanaAksiUpdateManyMutationInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pelaksanaan_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    capaian_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    bukti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProgressRencanaAksiUncheckedUpdateManyInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    ra?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pelaksanaan_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    capaian_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    bukti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProgressRencanaAksiListRelationFilter = {
    every?: Prisma.ProgressRencanaAksiWhereInput;
    some?: Prisma.ProgressRencanaAksiWhereInput;
    none?: Prisma.ProgressRencanaAksiWhereInput;
};
export type ProgressRencanaAksiOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProgressRencanaAksiCountOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    ra?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    pelaksanaan_pg?: Prisma.SortOrder;
    capaian_pg?: Prisma.SortOrder;
    bukti?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type ProgressRencanaAksiAvgOrderByAggregateInput = {
    pelaksanaan_pg?: Prisma.SortOrder;
    capaian_pg?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type ProgressRencanaAksiMaxOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    ra?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    pelaksanaan_pg?: Prisma.SortOrder;
    capaian_pg?: Prisma.SortOrder;
    bukti?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type ProgressRencanaAksiMinOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    ra?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    pelaksanaan_pg?: Prisma.SortOrder;
    capaian_pg?: Prisma.SortOrder;
    bukti?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type ProgressRencanaAksiSumOrderByAggregateInput = {
    pelaksanaan_pg?: Prisma.SortOrder;
    capaian_pg?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type ProgressRencanaAksiCreateNestedManyWithoutCreatorObjInput = {
    create?: Prisma.XOR<Prisma.ProgressRencanaAksiCreateWithoutCreatorObjInput, Prisma.ProgressRencanaAksiUncheckedCreateWithoutCreatorObjInput> | Prisma.ProgressRencanaAksiCreateWithoutCreatorObjInput[] | Prisma.ProgressRencanaAksiUncheckedCreateWithoutCreatorObjInput[];
    connectOrCreate?: Prisma.ProgressRencanaAksiCreateOrConnectWithoutCreatorObjInput | Prisma.ProgressRencanaAksiCreateOrConnectWithoutCreatorObjInput[];
    createMany?: Prisma.ProgressRencanaAksiCreateManyCreatorObjInputEnvelope;
    connect?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
};
export type ProgressRencanaAksiUncheckedCreateNestedManyWithoutCreatorObjInput = {
    create?: Prisma.XOR<Prisma.ProgressRencanaAksiCreateWithoutCreatorObjInput, Prisma.ProgressRencanaAksiUncheckedCreateWithoutCreatorObjInput> | Prisma.ProgressRencanaAksiCreateWithoutCreatorObjInput[] | Prisma.ProgressRencanaAksiUncheckedCreateWithoutCreatorObjInput[];
    connectOrCreate?: Prisma.ProgressRencanaAksiCreateOrConnectWithoutCreatorObjInput | Prisma.ProgressRencanaAksiCreateOrConnectWithoutCreatorObjInput[];
    createMany?: Prisma.ProgressRencanaAksiCreateManyCreatorObjInputEnvelope;
    connect?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
};
export type ProgressRencanaAksiUpdateManyWithoutCreatorObjNestedInput = {
    create?: Prisma.XOR<Prisma.ProgressRencanaAksiCreateWithoutCreatorObjInput, Prisma.ProgressRencanaAksiUncheckedCreateWithoutCreatorObjInput> | Prisma.ProgressRencanaAksiCreateWithoutCreatorObjInput[] | Prisma.ProgressRencanaAksiUncheckedCreateWithoutCreatorObjInput[];
    connectOrCreate?: Prisma.ProgressRencanaAksiCreateOrConnectWithoutCreatorObjInput | Prisma.ProgressRencanaAksiCreateOrConnectWithoutCreatorObjInput[];
    upsert?: Prisma.ProgressRencanaAksiUpsertWithWhereUniqueWithoutCreatorObjInput | Prisma.ProgressRencanaAksiUpsertWithWhereUniqueWithoutCreatorObjInput[];
    createMany?: Prisma.ProgressRencanaAksiCreateManyCreatorObjInputEnvelope;
    set?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
    disconnect?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
    delete?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
    connect?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
    update?: Prisma.ProgressRencanaAksiUpdateWithWhereUniqueWithoutCreatorObjInput | Prisma.ProgressRencanaAksiUpdateWithWhereUniqueWithoutCreatorObjInput[];
    updateMany?: Prisma.ProgressRencanaAksiUpdateManyWithWhereWithoutCreatorObjInput | Prisma.ProgressRencanaAksiUpdateManyWithWhereWithoutCreatorObjInput[];
    deleteMany?: Prisma.ProgressRencanaAksiScalarWhereInput | Prisma.ProgressRencanaAksiScalarWhereInput[];
};
export type ProgressRencanaAksiUncheckedUpdateManyWithoutCreatorObjNestedInput = {
    create?: Prisma.XOR<Prisma.ProgressRencanaAksiCreateWithoutCreatorObjInput, Prisma.ProgressRencanaAksiUncheckedCreateWithoutCreatorObjInput> | Prisma.ProgressRencanaAksiCreateWithoutCreatorObjInput[] | Prisma.ProgressRencanaAksiUncheckedCreateWithoutCreatorObjInput[];
    connectOrCreate?: Prisma.ProgressRencanaAksiCreateOrConnectWithoutCreatorObjInput | Prisma.ProgressRencanaAksiCreateOrConnectWithoutCreatorObjInput[];
    upsert?: Prisma.ProgressRencanaAksiUpsertWithWhereUniqueWithoutCreatorObjInput | Prisma.ProgressRencanaAksiUpsertWithWhereUniqueWithoutCreatorObjInput[];
    createMany?: Prisma.ProgressRencanaAksiCreateManyCreatorObjInputEnvelope;
    set?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
    disconnect?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
    delete?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
    connect?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
    update?: Prisma.ProgressRencanaAksiUpdateWithWhereUniqueWithoutCreatorObjInput | Prisma.ProgressRencanaAksiUpdateWithWhereUniqueWithoutCreatorObjInput[];
    updateMany?: Prisma.ProgressRencanaAksiUpdateManyWithWhereWithoutCreatorObjInput | Prisma.ProgressRencanaAksiUpdateManyWithWhereWithoutCreatorObjInput[];
    deleteMany?: Prisma.ProgressRencanaAksiScalarWhereInput | Prisma.ProgressRencanaAksiScalarWhereInput[];
};
export type ProgressRencanaAksiCreateNestedManyWithoutRaObjInput = {
    create?: Prisma.XOR<Prisma.ProgressRencanaAksiCreateWithoutRaObjInput, Prisma.ProgressRencanaAksiUncheckedCreateWithoutRaObjInput> | Prisma.ProgressRencanaAksiCreateWithoutRaObjInput[] | Prisma.ProgressRencanaAksiUncheckedCreateWithoutRaObjInput[];
    connectOrCreate?: Prisma.ProgressRencanaAksiCreateOrConnectWithoutRaObjInput | Prisma.ProgressRencanaAksiCreateOrConnectWithoutRaObjInput[];
    createMany?: Prisma.ProgressRencanaAksiCreateManyRaObjInputEnvelope;
    connect?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
};
export type ProgressRencanaAksiUncheckedCreateNestedManyWithoutRaObjInput = {
    create?: Prisma.XOR<Prisma.ProgressRencanaAksiCreateWithoutRaObjInput, Prisma.ProgressRencanaAksiUncheckedCreateWithoutRaObjInput> | Prisma.ProgressRencanaAksiCreateWithoutRaObjInput[] | Prisma.ProgressRencanaAksiUncheckedCreateWithoutRaObjInput[];
    connectOrCreate?: Prisma.ProgressRencanaAksiCreateOrConnectWithoutRaObjInput | Prisma.ProgressRencanaAksiCreateOrConnectWithoutRaObjInput[];
    createMany?: Prisma.ProgressRencanaAksiCreateManyRaObjInputEnvelope;
    connect?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
};
export type ProgressRencanaAksiUpdateManyWithoutRaObjNestedInput = {
    create?: Prisma.XOR<Prisma.ProgressRencanaAksiCreateWithoutRaObjInput, Prisma.ProgressRencanaAksiUncheckedCreateWithoutRaObjInput> | Prisma.ProgressRencanaAksiCreateWithoutRaObjInput[] | Prisma.ProgressRencanaAksiUncheckedCreateWithoutRaObjInput[];
    connectOrCreate?: Prisma.ProgressRencanaAksiCreateOrConnectWithoutRaObjInput | Prisma.ProgressRencanaAksiCreateOrConnectWithoutRaObjInput[];
    upsert?: Prisma.ProgressRencanaAksiUpsertWithWhereUniqueWithoutRaObjInput | Prisma.ProgressRencanaAksiUpsertWithWhereUniqueWithoutRaObjInput[];
    createMany?: Prisma.ProgressRencanaAksiCreateManyRaObjInputEnvelope;
    set?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
    disconnect?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
    delete?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
    connect?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
    update?: Prisma.ProgressRencanaAksiUpdateWithWhereUniqueWithoutRaObjInput | Prisma.ProgressRencanaAksiUpdateWithWhereUniqueWithoutRaObjInput[];
    updateMany?: Prisma.ProgressRencanaAksiUpdateManyWithWhereWithoutRaObjInput | Prisma.ProgressRencanaAksiUpdateManyWithWhereWithoutRaObjInput[];
    deleteMany?: Prisma.ProgressRencanaAksiScalarWhereInput | Prisma.ProgressRencanaAksiScalarWhereInput[];
};
export type ProgressRencanaAksiUncheckedUpdateManyWithoutRaObjNestedInput = {
    create?: Prisma.XOR<Prisma.ProgressRencanaAksiCreateWithoutRaObjInput, Prisma.ProgressRencanaAksiUncheckedCreateWithoutRaObjInput> | Prisma.ProgressRencanaAksiCreateWithoutRaObjInput[] | Prisma.ProgressRencanaAksiUncheckedCreateWithoutRaObjInput[];
    connectOrCreate?: Prisma.ProgressRencanaAksiCreateOrConnectWithoutRaObjInput | Prisma.ProgressRencanaAksiCreateOrConnectWithoutRaObjInput[];
    upsert?: Prisma.ProgressRencanaAksiUpsertWithWhereUniqueWithoutRaObjInput | Prisma.ProgressRencanaAksiUpsertWithWhereUniqueWithoutRaObjInput[];
    createMany?: Prisma.ProgressRencanaAksiCreateManyRaObjInputEnvelope;
    set?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
    disconnect?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
    delete?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
    connect?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
    update?: Prisma.ProgressRencanaAksiUpdateWithWhereUniqueWithoutRaObjInput | Prisma.ProgressRencanaAksiUpdateWithWhereUniqueWithoutRaObjInput[];
    updateMany?: Prisma.ProgressRencanaAksiUpdateManyWithWhereWithoutRaObjInput | Prisma.ProgressRencanaAksiUpdateManyWithWhereWithoutRaObjInput[];
    deleteMany?: Prisma.ProgressRencanaAksiScalarWhereInput | Prisma.ProgressRencanaAksiScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ProgressRencanaAksiCreateNestedManyWithoutStatusObjInput = {
    create?: Prisma.XOR<Prisma.ProgressRencanaAksiCreateWithoutStatusObjInput, Prisma.ProgressRencanaAksiUncheckedCreateWithoutStatusObjInput> | Prisma.ProgressRencanaAksiCreateWithoutStatusObjInput[] | Prisma.ProgressRencanaAksiUncheckedCreateWithoutStatusObjInput[];
    connectOrCreate?: Prisma.ProgressRencanaAksiCreateOrConnectWithoutStatusObjInput | Prisma.ProgressRencanaAksiCreateOrConnectWithoutStatusObjInput[];
    createMany?: Prisma.ProgressRencanaAksiCreateManyStatusObjInputEnvelope;
    connect?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
};
export type ProgressRencanaAksiUncheckedCreateNestedManyWithoutStatusObjInput = {
    create?: Prisma.XOR<Prisma.ProgressRencanaAksiCreateWithoutStatusObjInput, Prisma.ProgressRencanaAksiUncheckedCreateWithoutStatusObjInput> | Prisma.ProgressRencanaAksiCreateWithoutStatusObjInput[] | Prisma.ProgressRencanaAksiUncheckedCreateWithoutStatusObjInput[];
    connectOrCreate?: Prisma.ProgressRencanaAksiCreateOrConnectWithoutStatusObjInput | Prisma.ProgressRencanaAksiCreateOrConnectWithoutStatusObjInput[];
    createMany?: Prisma.ProgressRencanaAksiCreateManyStatusObjInputEnvelope;
    connect?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
};
export type ProgressRencanaAksiUpdateManyWithoutStatusObjNestedInput = {
    create?: Prisma.XOR<Prisma.ProgressRencanaAksiCreateWithoutStatusObjInput, Prisma.ProgressRencanaAksiUncheckedCreateWithoutStatusObjInput> | Prisma.ProgressRencanaAksiCreateWithoutStatusObjInput[] | Prisma.ProgressRencanaAksiUncheckedCreateWithoutStatusObjInput[];
    connectOrCreate?: Prisma.ProgressRencanaAksiCreateOrConnectWithoutStatusObjInput | Prisma.ProgressRencanaAksiCreateOrConnectWithoutStatusObjInput[];
    upsert?: Prisma.ProgressRencanaAksiUpsertWithWhereUniqueWithoutStatusObjInput | Prisma.ProgressRencanaAksiUpsertWithWhereUniqueWithoutStatusObjInput[];
    createMany?: Prisma.ProgressRencanaAksiCreateManyStatusObjInputEnvelope;
    set?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
    disconnect?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
    delete?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
    connect?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
    update?: Prisma.ProgressRencanaAksiUpdateWithWhereUniqueWithoutStatusObjInput | Prisma.ProgressRencanaAksiUpdateWithWhereUniqueWithoutStatusObjInput[];
    updateMany?: Prisma.ProgressRencanaAksiUpdateManyWithWhereWithoutStatusObjInput | Prisma.ProgressRencanaAksiUpdateManyWithWhereWithoutStatusObjInput[];
    deleteMany?: Prisma.ProgressRencanaAksiScalarWhereInput | Prisma.ProgressRencanaAksiScalarWhereInput[];
};
export type ProgressRencanaAksiUncheckedUpdateManyWithoutStatusObjNestedInput = {
    create?: Prisma.XOR<Prisma.ProgressRencanaAksiCreateWithoutStatusObjInput, Prisma.ProgressRencanaAksiUncheckedCreateWithoutStatusObjInput> | Prisma.ProgressRencanaAksiCreateWithoutStatusObjInput[] | Prisma.ProgressRencanaAksiUncheckedCreateWithoutStatusObjInput[];
    connectOrCreate?: Prisma.ProgressRencanaAksiCreateOrConnectWithoutStatusObjInput | Prisma.ProgressRencanaAksiCreateOrConnectWithoutStatusObjInput[];
    upsert?: Prisma.ProgressRencanaAksiUpsertWithWhereUniqueWithoutStatusObjInput | Prisma.ProgressRencanaAksiUpsertWithWhereUniqueWithoutStatusObjInput[];
    createMany?: Prisma.ProgressRencanaAksiCreateManyStatusObjInputEnvelope;
    set?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
    disconnect?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
    delete?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
    connect?: Prisma.ProgressRencanaAksiWhereUniqueInput | Prisma.ProgressRencanaAksiWhereUniqueInput[];
    update?: Prisma.ProgressRencanaAksiUpdateWithWhereUniqueWithoutStatusObjInput | Prisma.ProgressRencanaAksiUpdateWithWhereUniqueWithoutStatusObjInput[];
    updateMany?: Prisma.ProgressRencanaAksiUpdateManyWithWhereWithoutStatusObjInput | Prisma.ProgressRencanaAksiUpdateManyWithWhereWithoutStatusObjInput[];
    deleteMany?: Prisma.ProgressRencanaAksiScalarWhereInput | Prisma.ProgressRencanaAksiScalarWhereInput[];
};
export type ProgressRencanaAksiCreateWithoutCreatorObjInput = {
    uuid: string;
    desc?: string | null;
    date?: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti?: string | null;
    notes?: string | null;
    last_updated: string;
    raObj: Prisma.RencanaAksiCreateNestedOneWithoutListOfProgressInput;
    statusObj: Prisma.ProgressStatusCreateNestedOneWithoutListOfProgressInput;
};
export type ProgressRencanaAksiUncheckedCreateWithoutCreatorObjInput = {
    uuid: string;
    ra: string;
    desc?: string | null;
    date?: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti?: string | null;
    notes?: string | null;
    status: number;
    last_updated: string;
};
export type ProgressRencanaAksiCreateOrConnectWithoutCreatorObjInput = {
    where: Prisma.ProgressRencanaAksiWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgressRencanaAksiCreateWithoutCreatorObjInput, Prisma.ProgressRencanaAksiUncheckedCreateWithoutCreatorObjInput>;
};
export type ProgressRencanaAksiCreateManyCreatorObjInputEnvelope = {
    data: Prisma.ProgressRencanaAksiCreateManyCreatorObjInput | Prisma.ProgressRencanaAksiCreateManyCreatorObjInput[];
    skipDuplicates?: boolean;
};
export type ProgressRencanaAksiUpsertWithWhereUniqueWithoutCreatorObjInput = {
    where: Prisma.ProgressRencanaAksiWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProgressRencanaAksiUpdateWithoutCreatorObjInput, Prisma.ProgressRencanaAksiUncheckedUpdateWithoutCreatorObjInput>;
    create: Prisma.XOR<Prisma.ProgressRencanaAksiCreateWithoutCreatorObjInput, Prisma.ProgressRencanaAksiUncheckedCreateWithoutCreatorObjInput>;
};
export type ProgressRencanaAksiUpdateWithWhereUniqueWithoutCreatorObjInput = {
    where: Prisma.ProgressRencanaAksiWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProgressRencanaAksiUpdateWithoutCreatorObjInput, Prisma.ProgressRencanaAksiUncheckedUpdateWithoutCreatorObjInput>;
};
export type ProgressRencanaAksiUpdateManyWithWhereWithoutCreatorObjInput = {
    where: Prisma.ProgressRencanaAksiScalarWhereInput;
    data: Prisma.XOR<Prisma.ProgressRencanaAksiUpdateManyMutationInput, Prisma.ProgressRencanaAksiUncheckedUpdateManyWithoutCreatorObjInput>;
};
export type ProgressRencanaAksiScalarWhereInput = {
    AND?: Prisma.ProgressRencanaAksiScalarWhereInput | Prisma.ProgressRencanaAksiScalarWhereInput[];
    OR?: Prisma.ProgressRencanaAksiScalarWhereInput[];
    NOT?: Prisma.ProgressRencanaAksiScalarWhereInput | Prisma.ProgressRencanaAksiScalarWhereInput[];
    uuid?: Prisma.StringFilter<"ProgressRencanaAksi"> | string;
    ra?: Prisma.StringFilter<"ProgressRencanaAksi"> | string;
    desc?: Prisma.StringNullableFilter<"ProgressRencanaAksi"> | string | null;
    date?: Prisma.StringNullableFilter<"ProgressRencanaAksi"> | string | null;
    pelaksanaan_pg?: Prisma.FloatFilter<"ProgressRencanaAksi"> | number;
    capaian_pg?: Prisma.FloatFilter<"ProgressRencanaAksi"> | number;
    bukti?: Prisma.StringNullableFilter<"ProgressRencanaAksi"> | string | null;
    notes?: Prisma.StringNullableFilter<"ProgressRencanaAksi"> | string | null;
    status?: Prisma.IntFilter<"ProgressRencanaAksi"> | number;
    created_by?: Prisma.StringFilter<"ProgressRencanaAksi"> | string;
    last_updated?: Prisma.StringFilter<"ProgressRencanaAksi"> | string;
};
export type ProgressRencanaAksiCreateWithoutRaObjInput = {
    uuid: string;
    desc?: string | null;
    date?: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti?: string | null;
    notes?: string | null;
    last_updated: string;
    statusObj: Prisma.ProgressStatusCreateNestedOneWithoutListOfProgressInput;
    creatorObj: Prisma.UserCreateNestedOneWithoutProgressRAInput;
};
export type ProgressRencanaAksiUncheckedCreateWithoutRaObjInput = {
    uuid: string;
    desc?: string | null;
    date?: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti?: string | null;
    notes?: string | null;
    status: number;
    created_by: string;
    last_updated: string;
};
export type ProgressRencanaAksiCreateOrConnectWithoutRaObjInput = {
    where: Prisma.ProgressRencanaAksiWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgressRencanaAksiCreateWithoutRaObjInput, Prisma.ProgressRencanaAksiUncheckedCreateWithoutRaObjInput>;
};
export type ProgressRencanaAksiCreateManyRaObjInputEnvelope = {
    data: Prisma.ProgressRencanaAksiCreateManyRaObjInput | Prisma.ProgressRencanaAksiCreateManyRaObjInput[];
    skipDuplicates?: boolean;
};
export type ProgressRencanaAksiUpsertWithWhereUniqueWithoutRaObjInput = {
    where: Prisma.ProgressRencanaAksiWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProgressRencanaAksiUpdateWithoutRaObjInput, Prisma.ProgressRencanaAksiUncheckedUpdateWithoutRaObjInput>;
    create: Prisma.XOR<Prisma.ProgressRencanaAksiCreateWithoutRaObjInput, Prisma.ProgressRencanaAksiUncheckedCreateWithoutRaObjInput>;
};
export type ProgressRencanaAksiUpdateWithWhereUniqueWithoutRaObjInput = {
    where: Prisma.ProgressRencanaAksiWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProgressRencanaAksiUpdateWithoutRaObjInput, Prisma.ProgressRencanaAksiUncheckedUpdateWithoutRaObjInput>;
};
export type ProgressRencanaAksiUpdateManyWithWhereWithoutRaObjInput = {
    where: Prisma.ProgressRencanaAksiScalarWhereInput;
    data: Prisma.XOR<Prisma.ProgressRencanaAksiUpdateManyMutationInput, Prisma.ProgressRencanaAksiUncheckedUpdateManyWithoutRaObjInput>;
};
export type ProgressRencanaAksiCreateWithoutStatusObjInput = {
    uuid: string;
    desc?: string | null;
    date?: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti?: string | null;
    notes?: string | null;
    last_updated: string;
    raObj: Prisma.RencanaAksiCreateNestedOneWithoutListOfProgressInput;
    creatorObj: Prisma.UserCreateNestedOneWithoutProgressRAInput;
};
export type ProgressRencanaAksiUncheckedCreateWithoutStatusObjInput = {
    uuid: string;
    ra: string;
    desc?: string | null;
    date?: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti?: string | null;
    notes?: string | null;
    created_by: string;
    last_updated: string;
};
export type ProgressRencanaAksiCreateOrConnectWithoutStatusObjInput = {
    where: Prisma.ProgressRencanaAksiWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgressRencanaAksiCreateWithoutStatusObjInput, Prisma.ProgressRencanaAksiUncheckedCreateWithoutStatusObjInput>;
};
export type ProgressRencanaAksiCreateManyStatusObjInputEnvelope = {
    data: Prisma.ProgressRencanaAksiCreateManyStatusObjInput | Prisma.ProgressRencanaAksiCreateManyStatusObjInput[];
    skipDuplicates?: boolean;
};
export type ProgressRencanaAksiUpsertWithWhereUniqueWithoutStatusObjInput = {
    where: Prisma.ProgressRencanaAksiWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProgressRencanaAksiUpdateWithoutStatusObjInput, Prisma.ProgressRencanaAksiUncheckedUpdateWithoutStatusObjInput>;
    create: Prisma.XOR<Prisma.ProgressRencanaAksiCreateWithoutStatusObjInput, Prisma.ProgressRencanaAksiUncheckedCreateWithoutStatusObjInput>;
};
export type ProgressRencanaAksiUpdateWithWhereUniqueWithoutStatusObjInput = {
    where: Prisma.ProgressRencanaAksiWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProgressRencanaAksiUpdateWithoutStatusObjInput, Prisma.ProgressRencanaAksiUncheckedUpdateWithoutStatusObjInput>;
};
export type ProgressRencanaAksiUpdateManyWithWhereWithoutStatusObjInput = {
    where: Prisma.ProgressRencanaAksiScalarWhereInput;
    data: Prisma.XOR<Prisma.ProgressRencanaAksiUpdateManyMutationInput, Prisma.ProgressRencanaAksiUncheckedUpdateManyWithoutStatusObjInput>;
};
export type ProgressRencanaAksiCreateManyCreatorObjInput = {
    uuid: string;
    ra: string;
    desc?: string | null;
    date?: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti?: string | null;
    notes?: string | null;
    status: number;
    last_updated: string;
};
export type ProgressRencanaAksiUpdateWithoutCreatorObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pelaksanaan_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    capaian_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    bukti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
    raObj?: Prisma.RencanaAksiUpdateOneRequiredWithoutListOfProgressNestedInput;
    statusObj?: Prisma.ProgressStatusUpdateOneRequiredWithoutListOfProgressNestedInput;
};
export type ProgressRencanaAksiUncheckedUpdateWithoutCreatorObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    ra?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pelaksanaan_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    capaian_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    bukti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProgressRencanaAksiUncheckedUpdateManyWithoutCreatorObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    ra?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pelaksanaan_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    capaian_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    bukti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProgressRencanaAksiCreateManyRaObjInput = {
    uuid: string;
    desc?: string | null;
    date?: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti?: string | null;
    notes?: string | null;
    status: number;
    created_by: string;
    last_updated: string;
};
export type ProgressRencanaAksiUpdateWithoutRaObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pelaksanaan_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    capaian_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    bukti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
    statusObj?: Prisma.ProgressStatusUpdateOneRequiredWithoutListOfProgressNestedInput;
    creatorObj?: Prisma.UserUpdateOneRequiredWithoutProgressRANestedInput;
};
export type ProgressRencanaAksiUncheckedUpdateWithoutRaObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pelaksanaan_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    capaian_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    bukti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProgressRencanaAksiUncheckedUpdateManyWithoutRaObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pelaksanaan_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    capaian_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    bukti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProgressRencanaAksiCreateManyStatusObjInput = {
    uuid: string;
    ra: string;
    desc?: string | null;
    date?: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti?: string | null;
    notes?: string | null;
    created_by: string;
    last_updated: string;
};
export type ProgressRencanaAksiUpdateWithoutStatusObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pelaksanaan_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    capaian_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    bukti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
    raObj?: Prisma.RencanaAksiUpdateOneRequiredWithoutListOfProgressNestedInput;
    creatorObj?: Prisma.UserUpdateOneRequiredWithoutProgressRANestedInput;
};
export type ProgressRencanaAksiUncheckedUpdateWithoutStatusObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    ra?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pelaksanaan_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    capaian_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    bukti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProgressRencanaAksiUncheckedUpdateManyWithoutStatusObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    ra?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pelaksanaan_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    capaian_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    bukti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProgressRencanaAksiSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    ra?: boolean;
    desc?: boolean;
    date?: boolean;
    pelaksanaan_pg?: boolean;
    capaian_pg?: boolean;
    bukti?: boolean;
    notes?: boolean;
    status?: boolean;
    created_by?: boolean;
    last_updated?: boolean;
    raObj?: boolean | Prisma.RencanaAksiDefaultArgs<ExtArgs>;
    statusObj?: boolean | Prisma.ProgressStatusDefaultArgs<ExtArgs>;
    creatorObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["progressRencanaAksi"]>;
export type ProgressRencanaAksiSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    ra?: boolean;
    desc?: boolean;
    date?: boolean;
    pelaksanaan_pg?: boolean;
    capaian_pg?: boolean;
    bukti?: boolean;
    notes?: boolean;
    status?: boolean;
    created_by?: boolean;
    last_updated?: boolean;
    raObj?: boolean | Prisma.RencanaAksiDefaultArgs<ExtArgs>;
    statusObj?: boolean | Prisma.ProgressStatusDefaultArgs<ExtArgs>;
    creatorObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["progressRencanaAksi"]>;
export type ProgressRencanaAksiSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    ra?: boolean;
    desc?: boolean;
    date?: boolean;
    pelaksanaan_pg?: boolean;
    capaian_pg?: boolean;
    bukti?: boolean;
    notes?: boolean;
    status?: boolean;
    created_by?: boolean;
    last_updated?: boolean;
    raObj?: boolean | Prisma.RencanaAksiDefaultArgs<ExtArgs>;
    statusObj?: boolean | Prisma.ProgressStatusDefaultArgs<ExtArgs>;
    creatorObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["progressRencanaAksi"]>;
export type ProgressRencanaAksiSelectScalar = {
    uuid?: boolean;
    ra?: boolean;
    desc?: boolean;
    date?: boolean;
    pelaksanaan_pg?: boolean;
    capaian_pg?: boolean;
    bukti?: boolean;
    notes?: boolean;
    status?: boolean;
    created_by?: boolean;
    last_updated?: boolean;
};
export type ProgressRencanaAksiOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"uuid" | "ra" | "desc" | "date" | "pelaksanaan_pg" | "capaian_pg" | "bukti" | "notes" | "status" | "created_by" | "last_updated", ExtArgs["result"]["progressRencanaAksi"]>;
export type ProgressRencanaAksiInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    raObj?: boolean | Prisma.RencanaAksiDefaultArgs<ExtArgs>;
    statusObj?: boolean | Prisma.ProgressStatusDefaultArgs<ExtArgs>;
    creatorObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ProgressRencanaAksiIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    raObj?: boolean | Prisma.RencanaAksiDefaultArgs<ExtArgs>;
    statusObj?: boolean | Prisma.ProgressStatusDefaultArgs<ExtArgs>;
    creatorObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ProgressRencanaAksiIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    raObj?: boolean | Prisma.RencanaAksiDefaultArgs<ExtArgs>;
    statusObj?: boolean | Prisma.ProgressStatusDefaultArgs<ExtArgs>;
    creatorObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ProgressRencanaAksiPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProgressRencanaAksi";
    objects: {
        raObj: Prisma.$RencanaAksiPayload<ExtArgs>;
        statusObj: Prisma.$ProgressStatusPayload<ExtArgs>;
        creatorObj: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        uuid: string;
        ra: string;
        desc: string | null;
        date: string | null;
        pelaksanaan_pg: number;
        capaian_pg: number;
        bukti: string | null;
        notes: string | null;
        status: number;
        created_by: string;
        last_updated: string;
    }, ExtArgs["result"]["progressRencanaAksi"]>;
    composites: {};
};
export type ProgressRencanaAksiGetPayload<S extends boolean | null | undefined | ProgressRencanaAksiDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProgressRencanaAksiPayload, S>;
export type ProgressRencanaAksiCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProgressRencanaAksiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProgressRencanaAksiCountAggregateInputType | true;
};
export interface ProgressRencanaAksiDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProgressRencanaAksi'];
        meta: {
            name: 'ProgressRencanaAksi';
        };
    };
    /**
     * Find zero or one ProgressRencanaAksi that matches the filter.
     * @param {ProgressRencanaAksiFindUniqueArgs} args - Arguments to find a ProgressRencanaAksi
     * @example
     * // Get one ProgressRencanaAksi
     * const progressRencanaAksi = await prisma.progressRencanaAksi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgressRencanaAksiFindUniqueArgs>(args: Prisma.SelectSubset<T, ProgressRencanaAksiFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProgressRencanaAksiClient<runtime.Types.Result.GetResult<Prisma.$ProgressRencanaAksiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProgressRencanaAksi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgressRencanaAksiFindUniqueOrThrowArgs} args - Arguments to find a ProgressRencanaAksi
     * @example
     * // Get one ProgressRencanaAksi
     * const progressRencanaAksi = await prisma.progressRencanaAksi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgressRencanaAksiFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProgressRencanaAksiFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProgressRencanaAksiClient<runtime.Types.Result.GetResult<Prisma.$ProgressRencanaAksiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProgressRencanaAksi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressRencanaAksiFindFirstArgs} args - Arguments to find a ProgressRencanaAksi
     * @example
     * // Get one ProgressRencanaAksi
     * const progressRencanaAksi = await prisma.progressRencanaAksi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgressRencanaAksiFindFirstArgs>(args?: Prisma.SelectSubset<T, ProgressRencanaAksiFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProgressRencanaAksiClient<runtime.Types.Result.GetResult<Prisma.$ProgressRencanaAksiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProgressRencanaAksi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressRencanaAksiFindFirstOrThrowArgs} args - Arguments to find a ProgressRencanaAksi
     * @example
     * // Get one ProgressRencanaAksi
     * const progressRencanaAksi = await prisma.progressRencanaAksi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgressRencanaAksiFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProgressRencanaAksiFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProgressRencanaAksiClient<runtime.Types.Result.GetResult<Prisma.$ProgressRencanaAksiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProgressRencanaAksis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressRencanaAksiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgressRencanaAksis
     * const progressRencanaAksis = await prisma.progressRencanaAksi.findMany()
     *
     * // Get first 10 ProgressRencanaAksis
     * const progressRencanaAksis = await prisma.progressRencanaAksi.findMany({ take: 10 })
     *
     * // Only select the `uuid`
     * const progressRencanaAksiWithUuidOnly = await prisma.progressRencanaAksi.findMany({ select: { uuid: true } })
     *
     */
    findMany<T extends ProgressRencanaAksiFindManyArgs>(args?: Prisma.SelectSubset<T, ProgressRencanaAksiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgressRencanaAksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProgressRencanaAksi.
     * @param {ProgressRencanaAksiCreateArgs} args - Arguments to create a ProgressRencanaAksi.
     * @example
     * // Create one ProgressRencanaAksi
     * const ProgressRencanaAksi = await prisma.progressRencanaAksi.create({
     *   data: {
     *     // ... data to create a ProgressRencanaAksi
     *   }
     * })
     *
     */
    create<T extends ProgressRencanaAksiCreateArgs>(args: Prisma.SelectSubset<T, ProgressRencanaAksiCreateArgs<ExtArgs>>): Prisma.Prisma__ProgressRencanaAksiClient<runtime.Types.Result.GetResult<Prisma.$ProgressRencanaAksiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProgressRencanaAksis.
     * @param {ProgressRencanaAksiCreateManyArgs} args - Arguments to create many ProgressRencanaAksis.
     * @example
     * // Create many ProgressRencanaAksis
     * const progressRencanaAksi = await prisma.progressRencanaAksi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProgressRencanaAksiCreateManyArgs>(args?: Prisma.SelectSubset<T, ProgressRencanaAksiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ProgressRencanaAksis and returns the data saved in the database.
     * @param {ProgressRencanaAksiCreateManyAndReturnArgs} args - Arguments to create many ProgressRencanaAksis.
     * @example
     * // Create many ProgressRencanaAksis
     * const progressRencanaAksi = await prisma.progressRencanaAksi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProgressRencanaAksis and only return the `uuid`
     * const progressRencanaAksiWithUuidOnly = await prisma.progressRencanaAksi.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProgressRencanaAksiCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProgressRencanaAksiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgressRencanaAksiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ProgressRencanaAksi.
     * @param {ProgressRencanaAksiDeleteArgs} args - Arguments to delete one ProgressRencanaAksi.
     * @example
     * // Delete one ProgressRencanaAksi
     * const ProgressRencanaAksi = await prisma.progressRencanaAksi.delete({
     *   where: {
     *     // ... filter to delete one ProgressRencanaAksi
     *   }
     * })
     *
     */
    delete<T extends ProgressRencanaAksiDeleteArgs>(args: Prisma.SelectSubset<T, ProgressRencanaAksiDeleteArgs<ExtArgs>>): Prisma.Prisma__ProgressRencanaAksiClient<runtime.Types.Result.GetResult<Prisma.$ProgressRencanaAksiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProgressRencanaAksi.
     * @param {ProgressRencanaAksiUpdateArgs} args - Arguments to update one ProgressRencanaAksi.
     * @example
     * // Update one ProgressRencanaAksi
     * const progressRencanaAksi = await prisma.progressRencanaAksi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProgressRencanaAksiUpdateArgs>(args: Prisma.SelectSubset<T, ProgressRencanaAksiUpdateArgs<ExtArgs>>): Prisma.Prisma__ProgressRencanaAksiClient<runtime.Types.Result.GetResult<Prisma.$ProgressRencanaAksiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProgressRencanaAksis.
     * @param {ProgressRencanaAksiDeleteManyArgs} args - Arguments to filter ProgressRencanaAksis to delete.
     * @example
     * // Delete a few ProgressRencanaAksis
     * const { count } = await prisma.progressRencanaAksi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProgressRencanaAksiDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProgressRencanaAksiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProgressRencanaAksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressRencanaAksiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgressRencanaAksis
     * const progressRencanaAksi = await prisma.progressRencanaAksi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProgressRencanaAksiUpdateManyArgs>(args: Prisma.SelectSubset<T, ProgressRencanaAksiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProgressRencanaAksis and returns the data updated in the database.
     * @param {ProgressRencanaAksiUpdateManyAndReturnArgs} args - Arguments to update many ProgressRencanaAksis.
     * @example
     * // Update many ProgressRencanaAksis
     * const progressRencanaAksi = await prisma.progressRencanaAksi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProgressRencanaAksis and only return the `uuid`
     * const progressRencanaAksiWithUuidOnly = await prisma.progressRencanaAksi.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProgressRencanaAksiUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProgressRencanaAksiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgressRencanaAksiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ProgressRencanaAksi.
     * @param {ProgressRencanaAksiUpsertArgs} args - Arguments to update or create a ProgressRencanaAksi.
     * @example
     * // Update or create a ProgressRencanaAksi
     * const progressRencanaAksi = await prisma.progressRencanaAksi.upsert({
     *   create: {
     *     // ... data to create a ProgressRencanaAksi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgressRencanaAksi we want to update
     *   }
     * })
     */
    upsert<T extends ProgressRencanaAksiUpsertArgs>(args: Prisma.SelectSubset<T, ProgressRencanaAksiUpsertArgs<ExtArgs>>): Prisma.Prisma__ProgressRencanaAksiClient<runtime.Types.Result.GetResult<Prisma.$ProgressRencanaAksiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ProgressRencanaAksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressRencanaAksiCountArgs} args - Arguments to filter ProgressRencanaAksis to count.
     * @example
     * // Count the number of ProgressRencanaAksis
     * const count = await prisma.progressRencanaAksi.count({
     *   where: {
     *     // ... the filter for the ProgressRencanaAksis we want to count
     *   }
     * })
    **/
    count<T extends ProgressRencanaAksiCountArgs>(args?: Prisma.Subset<T, ProgressRencanaAksiCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProgressRencanaAksiCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProgressRencanaAksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressRencanaAksiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgressRencanaAksiAggregateArgs>(args: Prisma.Subset<T, ProgressRencanaAksiAggregateArgs>): Prisma.PrismaPromise<GetProgressRencanaAksiAggregateType<T>>;
    /**
     * Group by ProgressRencanaAksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressRencanaAksiGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProgressRencanaAksiGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProgressRencanaAksiGroupByArgs['orderBy'];
    } : {
        orderBy?: ProgressRencanaAksiGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProgressRencanaAksiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressRencanaAksiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProgressRencanaAksi model
     */
    readonly fields: ProgressRencanaAksiFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProgressRencanaAksi.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProgressRencanaAksiClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    raObj<T extends Prisma.RencanaAksiDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RencanaAksiDefaultArgs<ExtArgs>>): Prisma.Prisma__RencanaAksiClient<runtime.Types.Result.GetResult<Prisma.$RencanaAksiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    statusObj<T extends Prisma.ProgressStatusDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProgressStatusDefaultArgs<ExtArgs>>): Prisma.Prisma__ProgressStatusClient<runtime.Types.Result.GetResult<Prisma.$ProgressStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    creatorObj<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ProgressRencanaAksi model
 */
export interface ProgressRencanaAksiFieldRefs {
    readonly uuid: Prisma.FieldRef<"ProgressRencanaAksi", 'String'>;
    readonly ra: Prisma.FieldRef<"ProgressRencanaAksi", 'String'>;
    readonly desc: Prisma.FieldRef<"ProgressRencanaAksi", 'String'>;
    readonly date: Prisma.FieldRef<"ProgressRencanaAksi", 'String'>;
    readonly pelaksanaan_pg: Prisma.FieldRef<"ProgressRencanaAksi", 'Float'>;
    readonly capaian_pg: Prisma.FieldRef<"ProgressRencanaAksi", 'Float'>;
    readonly bukti: Prisma.FieldRef<"ProgressRencanaAksi", 'String'>;
    readonly notes: Prisma.FieldRef<"ProgressRencanaAksi", 'String'>;
    readonly status: Prisma.FieldRef<"ProgressRencanaAksi", 'Int'>;
    readonly created_by: Prisma.FieldRef<"ProgressRencanaAksi", 'String'>;
    readonly last_updated: Prisma.FieldRef<"ProgressRencanaAksi", 'String'>;
}
/**
 * ProgressRencanaAksi findUnique
 */
export type ProgressRencanaAksiFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProgressRencanaAksi to fetch.
     */
    where: Prisma.ProgressRencanaAksiWhereUniqueInput;
};
/**
 * ProgressRencanaAksi findUniqueOrThrow
 */
export type ProgressRencanaAksiFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProgressRencanaAksi to fetch.
     */
    where: Prisma.ProgressRencanaAksiWhereUniqueInput;
};
/**
 * ProgressRencanaAksi findFirst
 */
export type ProgressRencanaAksiFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProgressRencanaAksi to fetch.
     */
    where?: Prisma.ProgressRencanaAksiWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProgressRencanaAksis to fetch.
     */
    orderBy?: Prisma.ProgressRencanaAksiOrderByWithRelationInput | Prisma.ProgressRencanaAksiOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProgressRencanaAksis.
     */
    cursor?: Prisma.ProgressRencanaAksiWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProgressRencanaAksis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProgressRencanaAksis.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProgressRencanaAksis.
     */
    distinct?: Prisma.ProgressRencanaAksiScalarFieldEnum | Prisma.ProgressRencanaAksiScalarFieldEnum[];
};
/**
 * ProgressRencanaAksi findFirstOrThrow
 */
export type ProgressRencanaAksiFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProgressRencanaAksi to fetch.
     */
    where?: Prisma.ProgressRencanaAksiWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProgressRencanaAksis to fetch.
     */
    orderBy?: Prisma.ProgressRencanaAksiOrderByWithRelationInput | Prisma.ProgressRencanaAksiOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProgressRencanaAksis.
     */
    cursor?: Prisma.ProgressRencanaAksiWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProgressRencanaAksis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProgressRencanaAksis.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProgressRencanaAksis.
     */
    distinct?: Prisma.ProgressRencanaAksiScalarFieldEnum | Prisma.ProgressRencanaAksiScalarFieldEnum[];
};
/**
 * ProgressRencanaAksi findMany
 */
export type ProgressRencanaAksiFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProgressRencanaAksis to fetch.
     */
    where?: Prisma.ProgressRencanaAksiWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProgressRencanaAksis to fetch.
     */
    orderBy?: Prisma.ProgressRencanaAksiOrderByWithRelationInput | Prisma.ProgressRencanaAksiOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProgressRencanaAksis.
     */
    cursor?: Prisma.ProgressRencanaAksiWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProgressRencanaAksis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProgressRencanaAksis.
     */
    skip?: number;
    distinct?: Prisma.ProgressRencanaAksiScalarFieldEnum | Prisma.ProgressRencanaAksiScalarFieldEnum[];
};
/**
 * ProgressRencanaAksi create
 */
export type ProgressRencanaAksiCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ProgressRencanaAksi.
     */
    data: Prisma.XOR<Prisma.ProgressRencanaAksiCreateInput, Prisma.ProgressRencanaAksiUncheckedCreateInput>;
};
/**
 * ProgressRencanaAksi createMany
 */
export type ProgressRencanaAksiCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgressRencanaAksis.
     */
    data: Prisma.ProgressRencanaAksiCreateManyInput | Prisma.ProgressRencanaAksiCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProgressRencanaAksi createManyAndReturn
 */
export type ProgressRencanaAksiCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressRencanaAksi
     */
    select?: Prisma.ProgressRencanaAksiSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgressRencanaAksi
     */
    omit?: Prisma.ProgressRencanaAksiOmit<ExtArgs> | null;
    /**
     * The data used to create many ProgressRencanaAksis.
     */
    data: Prisma.ProgressRencanaAksiCreateManyInput | Prisma.ProgressRencanaAksiCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgressRencanaAksiIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ProgressRencanaAksi update
 */
export type ProgressRencanaAksiUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ProgressRencanaAksi.
     */
    data: Prisma.XOR<Prisma.ProgressRencanaAksiUpdateInput, Prisma.ProgressRencanaAksiUncheckedUpdateInput>;
    /**
     * Choose, which ProgressRencanaAksi to update.
     */
    where: Prisma.ProgressRencanaAksiWhereUniqueInput;
};
/**
 * ProgressRencanaAksi updateMany
 */
export type ProgressRencanaAksiUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgressRencanaAksis.
     */
    data: Prisma.XOR<Prisma.ProgressRencanaAksiUpdateManyMutationInput, Prisma.ProgressRencanaAksiUncheckedUpdateManyInput>;
    /**
     * Filter which ProgressRencanaAksis to update
     */
    where?: Prisma.ProgressRencanaAksiWhereInput;
    /**
     * Limit how many ProgressRencanaAksis to update.
     */
    limit?: number;
};
/**
 * ProgressRencanaAksi updateManyAndReturn
 */
export type ProgressRencanaAksiUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressRencanaAksi
     */
    select?: Prisma.ProgressRencanaAksiSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgressRencanaAksi
     */
    omit?: Prisma.ProgressRencanaAksiOmit<ExtArgs> | null;
    /**
     * The data used to update ProgressRencanaAksis.
     */
    data: Prisma.XOR<Prisma.ProgressRencanaAksiUpdateManyMutationInput, Prisma.ProgressRencanaAksiUncheckedUpdateManyInput>;
    /**
     * Filter which ProgressRencanaAksis to update
     */
    where?: Prisma.ProgressRencanaAksiWhereInput;
    /**
     * Limit how many ProgressRencanaAksis to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgressRencanaAksiIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ProgressRencanaAksi upsert
 */
export type ProgressRencanaAksiUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ProgressRencanaAksi to update in case it exists.
     */
    where: Prisma.ProgressRencanaAksiWhereUniqueInput;
    /**
     * In case the ProgressRencanaAksi found by the `where` argument doesn't exist, create a new ProgressRencanaAksi with this data.
     */
    create: Prisma.XOR<Prisma.ProgressRencanaAksiCreateInput, Prisma.ProgressRencanaAksiUncheckedCreateInput>;
    /**
     * In case the ProgressRencanaAksi was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProgressRencanaAksiUpdateInput, Prisma.ProgressRencanaAksiUncheckedUpdateInput>;
};
/**
 * ProgressRencanaAksi delete
 */
export type ProgressRencanaAksiDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ProgressRencanaAksi to delete.
     */
    where: Prisma.ProgressRencanaAksiWhereUniqueInput;
};
/**
 * ProgressRencanaAksi deleteMany
 */
export type ProgressRencanaAksiDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressRencanaAksis to delete
     */
    where?: Prisma.ProgressRencanaAksiWhereInput;
    /**
     * Limit how many ProgressRencanaAksis to delete.
     */
    limit?: number;
};
/**
 * ProgressRencanaAksi without action
 */
export type ProgressRencanaAksiDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=ProgressRencanaAksi.d.ts.map