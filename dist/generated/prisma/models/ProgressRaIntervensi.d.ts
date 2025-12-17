import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ProgressRaIntervensi
 *
 */
export type ProgressRaIntervensiModel = runtime.Types.Result.DefaultSelection<Prisma.$ProgressRaIntervensiPayload>;
export type AggregateProgressRaIntervensi = {
    _count: ProgressRaIntervensiCountAggregateOutputType | null;
    _avg: ProgressRaIntervensiAvgAggregateOutputType | null;
    _sum: ProgressRaIntervensiSumAggregateOutputType | null;
    _min: ProgressRaIntervensiMinAggregateOutputType | null;
    _max: ProgressRaIntervensiMaxAggregateOutputType | null;
};
export type ProgressRaIntervensiAvgAggregateOutputType = {
    pelaksanaan_pg: number | null;
    capaian_pg: number | null;
    status: number | null;
};
export type ProgressRaIntervensiSumAggregateOutputType = {
    pelaksanaan_pg: number | null;
    capaian_pg: number | null;
    status: number | null;
};
export type ProgressRaIntervensiMinAggregateOutputType = {
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
    last_updated: Date | null;
};
export type ProgressRaIntervensiMaxAggregateOutputType = {
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
    last_updated: Date | null;
};
export type ProgressRaIntervensiCountAggregateOutputType = {
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
export type ProgressRaIntervensiAvgAggregateInputType = {
    pelaksanaan_pg?: true;
    capaian_pg?: true;
    status?: true;
};
export type ProgressRaIntervensiSumAggregateInputType = {
    pelaksanaan_pg?: true;
    capaian_pg?: true;
    status?: true;
};
export type ProgressRaIntervensiMinAggregateInputType = {
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
export type ProgressRaIntervensiMaxAggregateInputType = {
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
export type ProgressRaIntervensiCountAggregateInputType = {
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
export type ProgressRaIntervensiAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressRaIntervensi to aggregate.
     */
    where?: Prisma.ProgressRaIntervensiWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProgressRaIntervensis to fetch.
     */
    orderBy?: Prisma.ProgressRaIntervensiOrderByWithRelationInput | Prisma.ProgressRaIntervensiOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProgressRaIntervensiWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProgressRaIntervensis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProgressRaIntervensis.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProgressRaIntervensis
    **/
    _count?: true | ProgressRaIntervensiCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ProgressRaIntervensiAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ProgressRaIntervensiSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProgressRaIntervensiMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProgressRaIntervensiMaxAggregateInputType;
};
export type GetProgressRaIntervensiAggregateType<T extends ProgressRaIntervensiAggregateArgs> = {
    [P in keyof T & keyof AggregateProgressRaIntervensi]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProgressRaIntervensi[P]> : Prisma.GetScalarType<T[P], AggregateProgressRaIntervensi[P]>;
};
export type ProgressRaIntervensiGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgressRaIntervensiWhereInput;
    orderBy?: Prisma.ProgressRaIntervensiOrderByWithAggregationInput | Prisma.ProgressRaIntervensiOrderByWithAggregationInput[];
    by: Prisma.ProgressRaIntervensiScalarFieldEnum[] | Prisma.ProgressRaIntervensiScalarFieldEnum;
    having?: Prisma.ProgressRaIntervensiScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProgressRaIntervensiCountAggregateInputType | true;
    _avg?: ProgressRaIntervensiAvgAggregateInputType;
    _sum?: ProgressRaIntervensiSumAggregateInputType;
    _min?: ProgressRaIntervensiMinAggregateInputType;
    _max?: ProgressRaIntervensiMaxAggregateInputType;
};
export type ProgressRaIntervensiGroupByOutputType = {
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
    last_updated: Date;
    _count: ProgressRaIntervensiCountAggregateOutputType | null;
    _avg: ProgressRaIntervensiAvgAggregateOutputType | null;
    _sum: ProgressRaIntervensiSumAggregateOutputType | null;
    _min: ProgressRaIntervensiMinAggregateOutputType | null;
    _max: ProgressRaIntervensiMaxAggregateOutputType | null;
};
type GetProgressRaIntervensiGroupByPayload<T extends ProgressRaIntervensiGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProgressRaIntervensiGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProgressRaIntervensiGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProgressRaIntervensiGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProgressRaIntervensiGroupByOutputType[P]>;
}>>;
export type ProgressRaIntervensiWhereInput = {
    AND?: Prisma.ProgressRaIntervensiWhereInput | Prisma.ProgressRaIntervensiWhereInput[];
    OR?: Prisma.ProgressRaIntervensiWhereInput[];
    NOT?: Prisma.ProgressRaIntervensiWhereInput | Prisma.ProgressRaIntervensiWhereInput[];
    uuid?: Prisma.StringFilter<"ProgressRaIntervensi"> | string;
    ra?: Prisma.StringFilter<"ProgressRaIntervensi"> | string;
    desc?: Prisma.StringNullableFilter<"ProgressRaIntervensi"> | string | null;
    date?: Prisma.StringNullableFilter<"ProgressRaIntervensi"> | string | null;
    pelaksanaan_pg?: Prisma.FloatFilter<"ProgressRaIntervensi"> | number;
    capaian_pg?: Prisma.FloatFilter<"ProgressRaIntervensi"> | number;
    bukti?: Prisma.StringNullableFilter<"ProgressRaIntervensi"> | string | null;
    notes?: Prisma.StringNullableFilter<"ProgressRaIntervensi"> | string | null;
    status?: Prisma.IntFilter<"ProgressRaIntervensi"> | number;
    created_by?: Prisma.StringFilter<"ProgressRaIntervensi"> | string;
    last_updated?: Prisma.DateTimeFilter<"ProgressRaIntervensi"> | Date | string;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    rancananAksi?: Prisma.XOR<Prisma.ProgramIntervensiScalarRelationFilter, Prisma.ProgramIntervensiWhereInput>;
};
export type ProgressRaIntervensiOrderByWithRelationInput = {
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
    creator?: Prisma.UserOrderByWithRelationInput;
    rancananAksi?: Prisma.ProgramIntervensiOrderByWithRelationInput;
};
export type ProgressRaIntervensiWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string;
    AND?: Prisma.ProgressRaIntervensiWhereInput | Prisma.ProgressRaIntervensiWhereInput[];
    OR?: Prisma.ProgressRaIntervensiWhereInput[];
    NOT?: Prisma.ProgressRaIntervensiWhereInput | Prisma.ProgressRaIntervensiWhereInput[];
    ra?: Prisma.StringFilter<"ProgressRaIntervensi"> | string;
    desc?: Prisma.StringNullableFilter<"ProgressRaIntervensi"> | string | null;
    date?: Prisma.StringNullableFilter<"ProgressRaIntervensi"> | string | null;
    pelaksanaan_pg?: Prisma.FloatFilter<"ProgressRaIntervensi"> | number;
    capaian_pg?: Prisma.FloatFilter<"ProgressRaIntervensi"> | number;
    bukti?: Prisma.StringNullableFilter<"ProgressRaIntervensi"> | string | null;
    notes?: Prisma.StringNullableFilter<"ProgressRaIntervensi"> | string | null;
    status?: Prisma.IntFilter<"ProgressRaIntervensi"> | number;
    created_by?: Prisma.StringFilter<"ProgressRaIntervensi"> | string;
    last_updated?: Prisma.DateTimeFilter<"ProgressRaIntervensi"> | Date | string;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    rancananAksi?: Prisma.XOR<Prisma.ProgramIntervensiScalarRelationFilter, Prisma.ProgramIntervensiWhereInput>;
}, "uuid">;
export type ProgressRaIntervensiOrderByWithAggregationInput = {
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
    _count?: Prisma.ProgressRaIntervensiCountOrderByAggregateInput;
    _avg?: Prisma.ProgressRaIntervensiAvgOrderByAggregateInput;
    _max?: Prisma.ProgressRaIntervensiMaxOrderByAggregateInput;
    _min?: Prisma.ProgressRaIntervensiMinOrderByAggregateInput;
    _sum?: Prisma.ProgressRaIntervensiSumOrderByAggregateInput;
};
export type ProgressRaIntervensiScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProgressRaIntervensiScalarWhereWithAggregatesInput | Prisma.ProgressRaIntervensiScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProgressRaIntervensiScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProgressRaIntervensiScalarWhereWithAggregatesInput | Prisma.ProgressRaIntervensiScalarWhereWithAggregatesInput[];
    uuid?: Prisma.StringWithAggregatesFilter<"ProgressRaIntervensi"> | string;
    ra?: Prisma.StringWithAggregatesFilter<"ProgressRaIntervensi"> | string;
    desc?: Prisma.StringNullableWithAggregatesFilter<"ProgressRaIntervensi"> | string | null;
    date?: Prisma.StringNullableWithAggregatesFilter<"ProgressRaIntervensi"> | string | null;
    pelaksanaan_pg?: Prisma.FloatWithAggregatesFilter<"ProgressRaIntervensi"> | number;
    capaian_pg?: Prisma.FloatWithAggregatesFilter<"ProgressRaIntervensi"> | number;
    bukti?: Prisma.StringNullableWithAggregatesFilter<"ProgressRaIntervensi"> | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"ProgressRaIntervensi"> | string | null;
    status?: Prisma.IntWithAggregatesFilter<"ProgressRaIntervensi"> | number;
    created_by?: Prisma.StringWithAggregatesFilter<"ProgressRaIntervensi"> | string;
    last_updated?: Prisma.DateTimeWithAggregatesFilter<"ProgressRaIntervensi"> | Date | string;
};
export type ProgressRaIntervensiCreateInput = {
    uuid?: string;
    desc?: string | null;
    date?: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti?: string | null;
    notes?: string | null;
    status: number;
    last_updated?: Date | string;
    creator: Prisma.UserCreateNestedOneWithoutProgressRAIntervensiInput;
    rancananAksi: Prisma.ProgramIntervensiCreateNestedOneWithoutProgressObjInput;
};
export type ProgressRaIntervensiUncheckedCreateInput = {
    uuid?: string;
    ra: string;
    desc?: string | null;
    date?: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti?: string | null;
    notes?: string | null;
    status: number;
    created_by: string;
    last_updated?: Date | string;
};
export type ProgressRaIntervensiUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pelaksanaan_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    capaian_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    bukti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creator?: Prisma.UserUpdateOneRequiredWithoutProgressRAIntervensiNestedInput;
    rancananAksi?: Prisma.ProgramIntervensiUpdateOneRequiredWithoutProgressObjNestedInput;
};
export type ProgressRaIntervensiUncheckedUpdateInput = {
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
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgressRaIntervensiCreateManyInput = {
    uuid?: string;
    ra: string;
    desc?: string | null;
    date?: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti?: string | null;
    notes?: string | null;
    status: number;
    created_by: string;
    last_updated?: Date | string;
};
export type ProgressRaIntervensiUpdateManyMutationInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pelaksanaan_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    capaian_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    bukti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgressRaIntervensiUncheckedUpdateManyInput = {
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
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgressRaIntervensiListRelationFilter = {
    every?: Prisma.ProgressRaIntervensiWhereInput;
    some?: Prisma.ProgressRaIntervensiWhereInput;
    none?: Prisma.ProgressRaIntervensiWhereInput;
};
export type ProgressRaIntervensiOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProgressRaIntervensiCountOrderByAggregateInput = {
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
export type ProgressRaIntervensiAvgOrderByAggregateInput = {
    pelaksanaan_pg?: Prisma.SortOrder;
    capaian_pg?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type ProgressRaIntervensiMaxOrderByAggregateInput = {
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
export type ProgressRaIntervensiMinOrderByAggregateInput = {
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
export type ProgressRaIntervensiSumOrderByAggregateInput = {
    pelaksanaan_pg?: Prisma.SortOrder;
    capaian_pg?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type ProgressRaIntervensiCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.ProgressRaIntervensiCreateWithoutCreatorInput, Prisma.ProgressRaIntervensiUncheckedCreateWithoutCreatorInput> | Prisma.ProgressRaIntervensiCreateWithoutCreatorInput[] | Prisma.ProgressRaIntervensiUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.ProgressRaIntervensiCreateOrConnectWithoutCreatorInput | Prisma.ProgressRaIntervensiCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.ProgressRaIntervensiCreateManyCreatorInputEnvelope;
    connect?: Prisma.ProgressRaIntervensiWhereUniqueInput | Prisma.ProgressRaIntervensiWhereUniqueInput[];
};
export type ProgressRaIntervensiUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.ProgressRaIntervensiCreateWithoutCreatorInput, Prisma.ProgressRaIntervensiUncheckedCreateWithoutCreatorInput> | Prisma.ProgressRaIntervensiCreateWithoutCreatorInput[] | Prisma.ProgressRaIntervensiUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.ProgressRaIntervensiCreateOrConnectWithoutCreatorInput | Prisma.ProgressRaIntervensiCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.ProgressRaIntervensiCreateManyCreatorInputEnvelope;
    connect?: Prisma.ProgressRaIntervensiWhereUniqueInput | Prisma.ProgressRaIntervensiWhereUniqueInput[];
};
export type ProgressRaIntervensiUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.ProgressRaIntervensiCreateWithoutCreatorInput, Prisma.ProgressRaIntervensiUncheckedCreateWithoutCreatorInput> | Prisma.ProgressRaIntervensiCreateWithoutCreatorInput[] | Prisma.ProgressRaIntervensiUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.ProgressRaIntervensiCreateOrConnectWithoutCreatorInput | Prisma.ProgressRaIntervensiCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.ProgressRaIntervensiUpsertWithWhereUniqueWithoutCreatorInput | Prisma.ProgressRaIntervensiUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.ProgressRaIntervensiCreateManyCreatorInputEnvelope;
    set?: Prisma.ProgressRaIntervensiWhereUniqueInput | Prisma.ProgressRaIntervensiWhereUniqueInput[];
    disconnect?: Prisma.ProgressRaIntervensiWhereUniqueInput | Prisma.ProgressRaIntervensiWhereUniqueInput[];
    delete?: Prisma.ProgressRaIntervensiWhereUniqueInput | Prisma.ProgressRaIntervensiWhereUniqueInput[];
    connect?: Prisma.ProgressRaIntervensiWhereUniqueInput | Prisma.ProgressRaIntervensiWhereUniqueInput[];
    update?: Prisma.ProgressRaIntervensiUpdateWithWhereUniqueWithoutCreatorInput | Prisma.ProgressRaIntervensiUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.ProgressRaIntervensiUpdateManyWithWhereWithoutCreatorInput | Prisma.ProgressRaIntervensiUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.ProgressRaIntervensiScalarWhereInput | Prisma.ProgressRaIntervensiScalarWhereInput[];
};
export type ProgressRaIntervensiUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.ProgressRaIntervensiCreateWithoutCreatorInput, Prisma.ProgressRaIntervensiUncheckedCreateWithoutCreatorInput> | Prisma.ProgressRaIntervensiCreateWithoutCreatorInput[] | Prisma.ProgressRaIntervensiUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.ProgressRaIntervensiCreateOrConnectWithoutCreatorInput | Prisma.ProgressRaIntervensiCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.ProgressRaIntervensiUpsertWithWhereUniqueWithoutCreatorInput | Prisma.ProgressRaIntervensiUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.ProgressRaIntervensiCreateManyCreatorInputEnvelope;
    set?: Prisma.ProgressRaIntervensiWhereUniqueInput | Prisma.ProgressRaIntervensiWhereUniqueInput[];
    disconnect?: Prisma.ProgressRaIntervensiWhereUniqueInput | Prisma.ProgressRaIntervensiWhereUniqueInput[];
    delete?: Prisma.ProgressRaIntervensiWhereUniqueInput | Prisma.ProgressRaIntervensiWhereUniqueInput[];
    connect?: Prisma.ProgressRaIntervensiWhereUniqueInput | Prisma.ProgressRaIntervensiWhereUniqueInput[];
    update?: Prisma.ProgressRaIntervensiUpdateWithWhereUniqueWithoutCreatorInput | Prisma.ProgressRaIntervensiUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.ProgressRaIntervensiUpdateManyWithWhereWithoutCreatorInput | Prisma.ProgressRaIntervensiUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.ProgressRaIntervensiScalarWhereInput | Prisma.ProgressRaIntervensiScalarWhereInput[];
};
export type ProgressRaIntervensiCreateNestedManyWithoutRancananAksiInput = {
    create?: Prisma.XOR<Prisma.ProgressRaIntervensiCreateWithoutRancananAksiInput, Prisma.ProgressRaIntervensiUncheckedCreateWithoutRancananAksiInput> | Prisma.ProgressRaIntervensiCreateWithoutRancananAksiInput[] | Prisma.ProgressRaIntervensiUncheckedCreateWithoutRancananAksiInput[];
    connectOrCreate?: Prisma.ProgressRaIntervensiCreateOrConnectWithoutRancananAksiInput | Prisma.ProgressRaIntervensiCreateOrConnectWithoutRancananAksiInput[];
    createMany?: Prisma.ProgressRaIntervensiCreateManyRancananAksiInputEnvelope;
    connect?: Prisma.ProgressRaIntervensiWhereUniqueInput | Prisma.ProgressRaIntervensiWhereUniqueInput[];
};
export type ProgressRaIntervensiUncheckedCreateNestedManyWithoutRancananAksiInput = {
    create?: Prisma.XOR<Prisma.ProgressRaIntervensiCreateWithoutRancananAksiInput, Prisma.ProgressRaIntervensiUncheckedCreateWithoutRancananAksiInput> | Prisma.ProgressRaIntervensiCreateWithoutRancananAksiInput[] | Prisma.ProgressRaIntervensiUncheckedCreateWithoutRancananAksiInput[];
    connectOrCreate?: Prisma.ProgressRaIntervensiCreateOrConnectWithoutRancananAksiInput | Prisma.ProgressRaIntervensiCreateOrConnectWithoutRancananAksiInput[];
    createMany?: Prisma.ProgressRaIntervensiCreateManyRancananAksiInputEnvelope;
    connect?: Prisma.ProgressRaIntervensiWhereUniqueInput | Prisma.ProgressRaIntervensiWhereUniqueInput[];
};
export type ProgressRaIntervensiUpdateManyWithoutRancananAksiNestedInput = {
    create?: Prisma.XOR<Prisma.ProgressRaIntervensiCreateWithoutRancananAksiInput, Prisma.ProgressRaIntervensiUncheckedCreateWithoutRancananAksiInput> | Prisma.ProgressRaIntervensiCreateWithoutRancananAksiInput[] | Prisma.ProgressRaIntervensiUncheckedCreateWithoutRancananAksiInput[];
    connectOrCreate?: Prisma.ProgressRaIntervensiCreateOrConnectWithoutRancananAksiInput | Prisma.ProgressRaIntervensiCreateOrConnectWithoutRancananAksiInput[];
    upsert?: Prisma.ProgressRaIntervensiUpsertWithWhereUniqueWithoutRancananAksiInput | Prisma.ProgressRaIntervensiUpsertWithWhereUniqueWithoutRancananAksiInput[];
    createMany?: Prisma.ProgressRaIntervensiCreateManyRancananAksiInputEnvelope;
    set?: Prisma.ProgressRaIntervensiWhereUniqueInput | Prisma.ProgressRaIntervensiWhereUniqueInput[];
    disconnect?: Prisma.ProgressRaIntervensiWhereUniqueInput | Prisma.ProgressRaIntervensiWhereUniqueInput[];
    delete?: Prisma.ProgressRaIntervensiWhereUniqueInput | Prisma.ProgressRaIntervensiWhereUniqueInput[];
    connect?: Prisma.ProgressRaIntervensiWhereUniqueInput | Prisma.ProgressRaIntervensiWhereUniqueInput[];
    update?: Prisma.ProgressRaIntervensiUpdateWithWhereUniqueWithoutRancananAksiInput | Prisma.ProgressRaIntervensiUpdateWithWhereUniqueWithoutRancananAksiInput[];
    updateMany?: Prisma.ProgressRaIntervensiUpdateManyWithWhereWithoutRancananAksiInput | Prisma.ProgressRaIntervensiUpdateManyWithWhereWithoutRancananAksiInput[];
    deleteMany?: Prisma.ProgressRaIntervensiScalarWhereInput | Prisma.ProgressRaIntervensiScalarWhereInput[];
};
export type ProgressRaIntervensiUncheckedUpdateManyWithoutRancananAksiNestedInput = {
    create?: Prisma.XOR<Prisma.ProgressRaIntervensiCreateWithoutRancananAksiInput, Prisma.ProgressRaIntervensiUncheckedCreateWithoutRancananAksiInput> | Prisma.ProgressRaIntervensiCreateWithoutRancananAksiInput[] | Prisma.ProgressRaIntervensiUncheckedCreateWithoutRancananAksiInput[];
    connectOrCreate?: Prisma.ProgressRaIntervensiCreateOrConnectWithoutRancananAksiInput | Prisma.ProgressRaIntervensiCreateOrConnectWithoutRancananAksiInput[];
    upsert?: Prisma.ProgressRaIntervensiUpsertWithWhereUniqueWithoutRancananAksiInput | Prisma.ProgressRaIntervensiUpsertWithWhereUniqueWithoutRancananAksiInput[];
    createMany?: Prisma.ProgressRaIntervensiCreateManyRancananAksiInputEnvelope;
    set?: Prisma.ProgressRaIntervensiWhereUniqueInput | Prisma.ProgressRaIntervensiWhereUniqueInput[];
    disconnect?: Prisma.ProgressRaIntervensiWhereUniqueInput | Prisma.ProgressRaIntervensiWhereUniqueInput[];
    delete?: Prisma.ProgressRaIntervensiWhereUniqueInput | Prisma.ProgressRaIntervensiWhereUniqueInput[];
    connect?: Prisma.ProgressRaIntervensiWhereUniqueInput | Prisma.ProgressRaIntervensiWhereUniqueInput[];
    update?: Prisma.ProgressRaIntervensiUpdateWithWhereUniqueWithoutRancananAksiInput | Prisma.ProgressRaIntervensiUpdateWithWhereUniqueWithoutRancananAksiInput[];
    updateMany?: Prisma.ProgressRaIntervensiUpdateManyWithWhereWithoutRancananAksiInput | Prisma.ProgressRaIntervensiUpdateManyWithWhereWithoutRancananAksiInput[];
    deleteMany?: Prisma.ProgressRaIntervensiScalarWhereInput | Prisma.ProgressRaIntervensiScalarWhereInput[];
};
export type ProgressRaIntervensiCreateWithoutCreatorInput = {
    uuid?: string;
    desc?: string | null;
    date?: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti?: string | null;
    notes?: string | null;
    status: number;
    last_updated?: Date | string;
    rancananAksi: Prisma.ProgramIntervensiCreateNestedOneWithoutProgressObjInput;
};
export type ProgressRaIntervensiUncheckedCreateWithoutCreatorInput = {
    uuid?: string;
    ra: string;
    desc?: string | null;
    date?: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti?: string | null;
    notes?: string | null;
    status: number;
    last_updated?: Date | string;
};
export type ProgressRaIntervensiCreateOrConnectWithoutCreatorInput = {
    where: Prisma.ProgressRaIntervensiWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgressRaIntervensiCreateWithoutCreatorInput, Prisma.ProgressRaIntervensiUncheckedCreateWithoutCreatorInput>;
};
export type ProgressRaIntervensiCreateManyCreatorInputEnvelope = {
    data: Prisma.ProgressRaIntervensiCreateManyCreatorInput | Prisma.ProgressRaIntervensiCreateManyCreatorInput[];
    skipDuplicates?: boolean;
};
export type ProgressRaIntervensiUpsertWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.ProgressRaIntervensiWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProgressRaIntervensiUpdateWithoutCreatorInput, Prisma.ProgressRaIntervensiUncheckedUpdateWithoutCreatorInput>;
    create: Prisma.XOR<Prisma.ProgressRaIntervensiCreateWithoutCreatorInput, Prisma.ProgressRaIntervensiUncheckedCreateWithoutCreatorInput>;
};
export type ProgressRaIntervensiUpdateWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.ProgressRaIntervensiWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProgressRaIntervensiUpdateWithoutCreatorInput, Prisma.ProgressRaIntervensiUncheckedUpdateWithoutCreatorInput>;
};
export type ProgressRaIntervensiUpdateManyWithWhereWithoutCreatorInput = {
    where: Prisma.ProgressRaIntervensiScalarWhereInput;
    data: Prisma.XOR<Prisma.ProgressRaIntervensiUpdateManyMutationInput, Prisma.ProgressRaIntervensiUncheckedUpdateManyWithoutCreatorInput>;
};
export type ProgressRaIntervensiScalarWhereInput = {
    AND?: Prisma.ProgressRaIntervensiScalarWhereInput | Prisma.ProgressRaIntervensiScalarWhereInput[];
    OR?: Prisma.ProgressRaIntervensiScalarWhereInput[];
    NOT?: Prisma.ProgressRaIntervensiScalarWhereInput | Prisma.ProgressRaIntervensiScalarWhereInput[];
    uuid?: Prisma.StringFilter<"ProgressRaIntervensi"> | string;
    ra?: Prisma.StringFilter<"ProgressRaIntervensi"> | string;
    desc?: Prisma.StringNullableFilter<"ProgressRaIntervensi"> | string | null;
    date?: Prisma.StringNullableFilter<"ProgressRaIntervensi"> | string | null;
    pelaksanaan_pg?: Prisma.FloatFilter<"ProgressRaIntervensi"> | number;
    capaian_pg?: Prisma.FloatFilter<"ProgressRaIntervensi"> | number;
    bukti?: Prisma.StringNullableFilter<"ProgressRaIntervensi"> | string | null;
    notes?: Prisma.StringNullableFilter<"ProgressRaIntervensi"> | string | null;
    status?: Prisma.IntFilter<"ProgressRaIntervensi"> | number;
    created_by?: Prisma.StringFilter<"ProgressRaIntervensi"> | string;
    last_updated?: Prisma.DateTimeFilter<"ProgressRaIntervensi"> | Date | string;
};
export type ProgressRaIntervensiCreateWithoutRancananAksiInput = {
    uuid?: string;
    desc?: string | null;
    date?: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti?: string | null;
    notes?: string | null;
    status: number;
    last_updated?: Date | string;
    creator: Prisma.UserCreateNestedOneWithoutProgressRAIntervensiInput;
};
export type ProgressRaIntervensiUncheckedCreateWithoutRancananAksiInput = {
    uuid?: string;
    desc?: string | null;
    date?: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti?: string | null;
    notes?: string | null;
    status: number;
    created_by: string;
    last_updated?: Date | string;
};
export type ProgressRaIntervensiCreateOrConnectWithoutRancananAksiInput = {
    where: Prisma.ProgressRaIntervensiWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgressRaIntervensiCreateWithoutRancananAksiInput, Prisma.ProgressRaIntervensiUncheckedCreateWithoutRancananAksiInput>;
};
export type ProgressRaIntervensiCreateManyRancananAksiInputEnvelope = {
    data: Prisma.ProgressRaIntervensiCreateManyRancananAksiInput | Prisma.ProgressRaIntervensiCreateManyRancananAksiInput[];
    skipDuplicates?: boolean;
};
export type ProgressRaIntervensiUpsertWithWhereUniqueWithoutRancananAksiInput = {
    where: Prisma.ProgressRaIntervensiWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProgressRaIntervensiUpdateWithoutRancananAksiInput, Prisma.ProgressRaIntervensiUncheckedUpdateWithoutRancananAksiInput>;
    create: Prisma.XOR<Prisma.ProgressRaIntervensiCreateWithoutRancananAksiInput, Prisma.ProgressRaIntervensiUncheckedCreateWithoutRancananAksiInput>;
};
export type ProgressRaIntervensiUpdateWithWhereUniqueWithoutRancananAksiInput = {
    where: Prisma.ProgressRaIntervensiWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProgressRaIntervensiUpdateWithoutRancananAksiInput, Prisma.ProgressRaIntervensiUncheckedUpdateWithoutRancananAksiInput>;
};
export type ProgressRaIntervensiUpdateManyWithWhereWithoutRancananAksiInput = {
    where: Prisma.ProgressRaIntervensiScalarWhereInput;
    data: Prisma.XOR<Prisma.ProgressRaIntervensiUpdateManyMutationInput, Prisma.ProgressRaIntervensiUncheckedUpdateManyWithoutRancananAksiInput>;
};
export type ProgressRaIntervensiCreateManyCreatorInput = {
    uuid?: string;
    ra: string;
    desc?: string | null;
    date?: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti?: string | null;
    notes?: string | null;
    status: number;
    last_updated?: Date | string;
};
export type ProgressRaIntervensiUpdateWithoutCreatorInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pelaksanaan_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    capaian_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    bukti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rancananAksi?: Prisma.ProgramIntervensiUpdateOneRequiredWithoutProgressObjNestedInput;
};
export type ProgressRaIntervensiUncheckedUpdateWithoutCreatorInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    ra?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pelaksanaan_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    capaian_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    bukti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgressRaIntervensiUncheckedUpdateManyWithoutCreatorInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    ra?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pelaksanaan_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    capaian_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    bukti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgressRaIntervensiCreateManyRancananAksiInput = {
    uuid?: string;
    desc?: string | null;
    date?: string | null;
    pelaksanaan_pg: number;
    capaian_pg: number;
    bukti?: string | null;
    notes?: string | null;
    status: number;
    created_by: string;
    last_updated?: Date | string;
};
export type ProgressRaIntervensiUpdateWithoutRancananAksiInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pelaksanaan_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    capaian_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    bukti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creator?: Prisma.UserUpdateOneRequiredWithoutProgressRAIntervensiNestedInput;
};
export type ProgressRaIntervensiUncheckedUpdateWithoutRancananAksiInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pelaksanaan_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    capaian_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    bukti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgressRaIntervensiUncheckedUpdateManyWithoutRancananAksiInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    date?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pelaksanaan_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    capaian_pg?: Prisma.FloatFieldUpdateOperationsInput | number;
    bukti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProgressRaIntervensiSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
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
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    rancananAksi?: boolean | Prisma.ProgramIntervensiDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["progressRaIntervensi"]>;
export type ProgressRaIntervensiSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
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
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    rancananAksi?: boolean | Prisma.ProgramIntervensiDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["progressRaIntervensi"]>;
export type ProgressRaIntervensiSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
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
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    rancananAksi?: boolean | Prisma.ProgramIntervensiDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["progressRaIntervensi"]>;
export type ProgressRaIntervensiSelectScalar = {
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
export type ProgressRaIntervensiOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"uuid" | "ra" | "desc" | "date" | "pelaksanaan_pg" | "capaian_pg" | "bukti" | "notes" | "status" | "created_by" | "last_updated", ExtArgs["result"]["progressRaIntervensi"]>;
export type ProgressRaIntervensiInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    rancananAksi?: boolean | Prisma.ProgramIntervensiDefaultArgs<ExtArgs>;
};
export type ProgressRaIntervensiIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    rancananAksi?: boolean | Prisma.ProgramIntervensiDefaultArgs<ExtArgs>;
};
export type ProgressRaIntervensiIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    rancananAksi?: boolean | Prisma.ProgramIntervensiDefaultArgs<ExtArgs>;
};
export type $ProgressRaIntervensiPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProgressRaIntervensi";
    objects: {
        creator: Prisma.$UserPayload<ExtArgs>;
        rancananAksi: Prisma.$ProgramIntervensiPayload<ExtArgs>;
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
        last_updated: Date;
    }, ExtArgs["result"]["progressRaIntervensi"]>;
    composites: {};
};
export type ProgressRaIntervensiGetPayload<S extends boolean | null | undefined | ProgressRaIntervensiDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProgressRaIntervensiPayload, S>;
export type ProgressRaIntervensiCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProgressRaIntervensiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProgressRaIntervensiCountAggregateInputType | true;
};
export interface ProgressRaIntervensiDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProgressRaIntervensi'];
        meta: {
            name: 'ProgressRaIntervensi';
        };
    };
    /**
     * Find zero or one ProgressRaIntervensi that matches the filter.
     * @param {ProgressRaIntervensiFindUniqueArgs} args - Arguments to find a ProgressRaIntervensi
     * @example
     * // Get one ProgressRaIntervensi
     * const progressRaIntervensi = await prisma.progressRaIntervensi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgressRaIntervensiFindUniqueArgs>(args: Prisma.SelectSubset<T, ProgressRaIntervensiFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProgressRaIntervensiClient<runtime.Types.Result.GetResult<Prisma.$ProgressRaIntervensiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProgressRaIntervensi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgressRaIntervensiFindUniqueOrThrowArgs} args - Arguments to find a ProgressRaIntervensi
     * @example
     * // Get one ProgressRaIntervensi
     * const progressRaIntervensi = await prisma.progressRaIntervensi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgressRaIntervensiFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProgressRaIntervensiFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProgressRaIntervensiClient<runtime.Types.Result.GetResult<Prisma.$ProgressRaIntervensiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProgressRaIntervensi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressRaIntervensiFindFirstArgs} args - Arguments to find a ProgressRaIntervensi
     * @example
     * // Get one ProgressRaIntervensi
     * const progressRaIntervensi = await prisma.progressRaIntervensi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgressRaIntervensiFindFirstArgs>(args?: Prisma.SelectSubset<T, ProgressRaIntervensiFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProgressRaIntervensiClient<runtime.Types.Result.GetResult<Prisma.$ProgressRaIntervensiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProgressRaIntervensi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressRaIntervensiFindFirstOrThrowArgs} args - Arguments to find a ProgressRaIntervensi
     * @example
     * // Get one ProgressRaIntervensi
     * const progressRaIntervensi = await prisma.progressRaIntervensi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgressRaIntervensiFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProgressRaIntervensiFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProgressRaIntervensiClient<runtime.Types.Result.GetResult<Prisma.$ProgressRaIntervensiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProgressRaIntervensis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressRaIntervensiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgressRaIntervensis
     * const progressRaIntervensis = await prisma.progressRaIntervensi.findMany()
     *
     * // Get first 10 ProgressRaIntervensis
     * const progressRaIntervensis = await prisma.progressRaIntervensi.findMany({ take: 10 })
     *
     * // Only select the `uuid`
     * const progressRaIntervensiWithUuidOnly = await prisma.progressRaIntervensi.findMany({ select: { uuid: true } })
     *
     */
    findMany<T extends ProgressRaIntervensiFindManyArgs>(args?: Prisma.SelectSubset<T, ProgressRaIntervensiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgressRaIntervensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProgressRaIntervensi.
     * @param {ProgressRaIntervensiCreateArgs} args - Arguments to create a ProgressRaIntervensi.
     * @example
     * // Create one ProgressRaIntervensi
     * const ProgressRaIntervensi = await prisma.progressRaIntervensi.create({
     *   data: {
     *     // ... data to create a ProgressRaIntervensi
     *   }
     * })
     *
     */
    create<T extends ProgressRaIntervensiCreateArgs>(args: Prisma.SelectSubset<T, ProgressRaIntervensiCreateArgs<ExtArgs>>): Prisma.Prisma__ProgressRaIntervensiClient<runtime.Types.Result.GetResult<Prisma.$ProgressRaIntervensiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProgressRaIntervensis.
     * @param {ProgressRaIntervensiCreateManyArgs} args - Arguments to create many ProgressRaIntervensis.
     * @example
     * // Create many ProgressRaIntervensis
     * const progressRaIntervensi = await prisma.progressRaIntervensi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProgressRaIntervensiCreateManyArgs>(args?: Prisma.SelectSubset<T, ProgressRaIntervensiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ProgressRaIntervensis and returns the data saved in the database.
     * @param {ProgressRaIntervensiCreateManyAndReturnArgs} args - Arguments to create many ProgressRaIntervensis.
     * @example
     * // Create many ProgressRaIntervensis
     * const progressRaIntervensi = await prisma.progressRaIntervensi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProgressRaIntervensis and only return the `uuid`
     * const progressRaIntervensiWithUuidOnly = await prisma.progressRaIntervensi.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProgressRaIntervensiCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProgressRaIntervensiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgressRaIntervensiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ProgressRaIntervensi.
     * @param {ProgressRaIntervensiDeleteArgs} args - Arguments to delete one ProgressRaIntervensi.
     * @example
     * // Delete one ProgressRaIntervensi
     * const ProgressRaIntervensi = await prisma.progressRaIntervensi.delete({
     *   where: {
     *     // ... filter to delete one ProgressRaIntervensi
     *   }
     * })
     *
     */
    delete<T extends ProgressRaIntervensiDeleteArgs>(args: Prisma.SelectSubset<T, ProgressRaIntervensiDeleteArgs<ExtArgs>>): Prisma.Prisma__ProgressRaIntervensiClient<runtime.Types.Result.GetResult<Prisma.$ProgressRaIntervensiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProgressRaIntervensi.
     * @param {ProgressRaIntervensiUpdateArgs} args - Arguments to update one ProgressRaIntervensi.
     * @example
     * // Update one ProgressRaIntervensi
     * const progressRaIntervensi = await prisma.progressRaIntervensi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProgressRaIntervensiUpdateArgs>(args: Prisma.SelectSubset<T, ProgressRaIntervensiUpdateArgs<ExtArgs>>): Prisma.Prisma__ProgressRaIntervensiClient<runtime.Types.Result.GetResult<Prisma.$ProgressRaIntervensiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProgressRaIntervensis.
     * @param {ProgressRaIntervensiDeleteManyArgs} args - Arguments to filter ProgressRaIntervensis to delete.
     * @example
     * // Delete a few ProgressRaIntervensis
     * const { count } = await prisma.progressRaIntervensi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProgressRaIntervensiDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProgressRaIntervensiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProgressRaIntervensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressRaIntervensiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgressRaIntervensis
     * const progressRaIntervensi = await prisma.progressRaIntervensi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProgressRaIntervensiUpdateManyArgs>(args: Prisma.SelectSubset<T, ProgressRaIntervensiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProgressRaIntervensis and returns the data updated in the database.
     * @param {ProgressRaIntervensiUpdateManyAndReturnArgs} args - Arguments to update many ProgressRaIntervensis.
     * @example
     * // Update many ProgressRaIntervensis
     * const progressRaIntervensi = await prisma.progressRaIntervensi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProgressRaIntervensis and only return the `uuid`
     * const progressRaIntervensiWithUuidOnly = await prisma.progressRaIntervensi.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProgressRaIntervensiUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProgressRaIntervensiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgressRaIntervensiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ProgressRaIntervensi.
     * @param {ProgressRaIntervensiUpsertArgs} args - Arguments to update or create a ProgressRaIntervensi.
     * @example
     * // Update or create a ProgressRaIntervensi
     * const progressRaIntervensi = await prisma.progressRaIntervensi.upsert({
     *   create: {
     *     // ... data to create a ProgressRaIntervensi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgressRaIntervensi we want to update
     *   }
     * })
     */
    upsert<T extends ProgressRaIntervensiUpsertArgs>(args: Prisma.SelectSubset<T, ProgressRaIntervensiUpsertArgs<ExtArgs>>): Prisma.Prisma__ProgressRaIntervensiClient<runtime.Types.Result.GetResult<Prisma.$ProgressRaIntervensiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ProgressRaIntervensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressRaIntervensiCountArgs} args - Arguments to filter ProgressRaIntervensis to count.
     * @example
     * // Count the number of ProgressRaIntervensis
     * const count = await prisma.progressRaIntervensi.count({
     *   where: {
     *     // ... the filter for the ProgressRaIntervensis we want to count
     *   }
     * })
    **/
    count<T extends ProgressRaIntervensiCountArgs>(args?: Prisma.Subset<T, ProgressRaIntervensiCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProgressRaIntervensiCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProgressRaIntervensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressRaIntervensiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgressRaIntervensiAggregateArgs>(args: Prisma.Subset<T, ProgressRaIntervensiAggregateArgs>): Prisma.PrismaPromise<GetProgressRaIntervensiAggregateType<T>>;
    /**
     * Group by ProgressRaIntervensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressRaIntervensiGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProgressRaIntervensiGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProgressRaIntervensiGroupByArgs['orderBy'];
    } : {
        orderBy?: ProgressRaIntervensiGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProgressRaIntervensiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressRaIntervensiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProgressRaIntervensi model
     */
    readonly fields: ProgressRaIntervensiFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProgressRaIntervensi.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProgressRaIntervensiClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    creator<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    rancananAksi<T extends Prisma.ProgramIntervensiDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProgramIntervensiDefaultArgs<ExtArgs>>): Prisma.Prisma__ProgramIntervensiClient<runtime.Types.Result.GetResult<Prisma.$ProgramIntervensiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ProgressRaIntervensi model
 */
export interface ProgressRaIntervensiFieldRefs {
    readonly uuid: Prisma.FieldRef<"ProgressRaIntervensi", 'String'>;
    readonly ra: Prisma.FieldRef<"ProgressRaIntervensi", 'String'>;
    readonly desc: Prisma.FieldRef<"ProgressRaIntervensi", 'String'>;
    readonly date: Prisma.FieldRef<"ProgressRaIntervensi", 'String'>;
    readonly pelaksanaan_pg: Prisma.FieldRef<"ProgressRaIntervensi", 'Float'>;
    readonly capaian_pg: Prisma.FieldRef<"ProgressRaIntervensi", 'Float'>;
    readonly bukti: Prisma.FieldRef<"ProgressRaIntervensi", 'String'>;
    readonly notes: Prisma.FieldRef<"ProgressRaIntervensi", 'String'>;
    readonly status: Prisma.FieldRef<"ProgressRaIntervensi", 'Int'>;
    readonly created_by: Prisma.FieldRef<"ProgressRaIntervensi", 'String'>;
    readonly last_updated: Prisma.FieldRef<"ProgressRaIntervensi", 'DateTime'>;
}
/**
 * ProgressRaIntervensi findUnique
 */
export type ProgressRaIntervensiFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProgressRaIntervensi to fetch.
     */
    where: Prisma.ProgressRaIntervensiWhereUniqueInput;
};
/**
 * ProgressRaIntervensi findUniqueOrThrow
 */
export type ProgressRaIntervensiFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProgressRaIntervensi to fetch.
     */
    where: Prisma.ProgressRaIntervensiWhereUniqueInput;
};
/**
 * ProgressRaIntervensi findFirst
 */
export type ProgressRaIntervensiFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProgressRaIntervensi to fetch.
     */
    where?: Prisma.ProgressRaIntervensiWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProgressRaIntervensis to fetch.
     */
    orderBy?: Prisma.ProgressRaIntervensiOrderByWithRelationInput | Prisma.ProgressRaIntervensiOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProgressRaIntervensis.
     */
    cursor?: Prisma.ProgressRaIntervensiWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProgressRaIntervensis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProgressRaIntervensis.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProgressRaIntervensis.
     */
    distinct?: Prisma.ProgressRaIntervensiScalarFieldEnum | Prisma.ProgressRaIntervensiScalarFieldEnum[];
};
/**
 * ProgressRaIntervensi findFirstOrThrow
 */
export type ProgressRaIntervensiFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProgressRaIntervensi to fetch.
     */
    where?: Prisma.ProgressRaIntervensiWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProgressRaIntervensis to fetch.
     */
    orderBy?: Prisma.ProgressRaIntervensiOrderByWithRelationInput | Prisma.ProgressRaIntervensiOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProgressRaIntervensis.
     */
    cursor?: Prisma.ProgressRaIntervensiWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProgressRaIntervensis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProgressRaIntervensis.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProgressRaIntervensis.
     */
    distinct?: Prisma.ProgressRaIntervensiScalarFieldEnum | Prisma.ProgressRaIntervensiScalarFieldEnum[];
};
/**
 * ProgressRaIntervensi findMany
 */
export type ProgressRaIntervensiFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProgressRaIntervensis to fetch.
     */
    where?: Prisma.ProgressRaIntervensiWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProgressRaIntervensis to fetch.
     */
    orderBy?: Prisma.ProgressRaIntervensiOrderByWithRelationInput | Prisma.ProgressRaIntervensiOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProgressRaIntervensis.
     */
    cursor?: Prisma.ProgressRaIntervensiWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProgressRaIntervensis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProgressRaIntervensis.
     */
    skip?: number;
    distinct?: Prisma.ProgressRaIntervensiScalarFieldEnum | Prisma.ProgressRaIntervensiScalarFieldEnum[];
};
/**
 * ProgressRaIntervensi create
 */
export type ProgressRaIntervensiCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ProgressRaIntervensi.
     */
    data: Prisma.XOR<Prisma.ProgressRaIntervensiCreateInput, Prisma.ProgressRaIntervensiUncheckedCreateInput>;
};
/**
 * ProgressRaIntervensi createMany
 */
export type ProgressRaIntervensiCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgressRaIntervensis.
     */
    data: Prisma.ProgressRaIntervensiCreateManyInput | Prisma.ProgressRaIntervensiCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProgressRaIntervensi createManyAndReturn
 */
export type ProgressRaIntervensiCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressRaIntervensi
     */
    select?: Prisma.ProgressRaIntervensiSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgressRaIntervensi
     */
    omit?: Prisma.ProgressRaIntervensiOmit<ExtArgs> | null;
    /**
     * The data used to create many ProgressRaIntervensis.
     */
    data: Prisma.ProgressRaIntervensiCreateManyInput | Prisma.ProgressRaIntervensiCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgressRaIntervensiIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ProgressRaIntervensi update
 */
export type ProgressRaIntervensiUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ProgressRaIntervensi.
     */
    data: Prisma.XOR<Prisma.ProgressRaIntervensiUpdateInput, Prisma.ProgressRaIntervensiUncheckedUpdateInput>;
    /**
     * Choose, which ProgressRaIntervensi to update.
     */
    where: Prisma.ProgressRaIntervensiWhereUniqueInput;
};
/**
 * ProgressRaIntervensi updateMany
 */
export type ProgressRaIntervensiUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgressRaIntervensis.
     */
    data: Prisma.XOR<Prisma.ProgressRaIntervensiUpdateManyMutationInput, Prisma.ProgressRaIntervensiUncheckedUpdateManyInput>;
    /**
     * Filter which ProgressRaIntervensis to update
     */
    where?: Prisma.ProgressRaIntervensiWhereInput;
    /**
     * Limit how many ProgressRaIntervensis to update.
     */
    limit?: number;
};
/**
 * ProgressRaIntervensi updateManyAndReturn
 */
export type ProgressRaIntervensiUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressRaIntervensi
     */
    select?: Prisma.ProgressRaIntervensiSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgressRaIntervensi
     */
    omit?: Prisma.ProgressRaIntervensiOmit<ExtArgs> | null;
    /**
     * The data used to update ProgressRaIntervensis.
     */
    data: Prisma.XOR<Prisma.ProgressRaIntervensiUpdateManyMutationInput, Prisma.ProgressRaIntervensiUncheckedUpdateManyInput>;
    /**
     * Filter which ProgressRaIntervensis to update
     */
    where?: Prisma.ProgressRaIntervensiWhereInput;
    /**
     * Limit how many ProgressRaIntervensis to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgressRaIntervensiIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ProgressRaIntervensi upsert
 */
export type ProgressRaIntervensiUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ProgressRaIntervensi to update in case it exists.
     */
    where: Prisma.ProgressRaIntervensiWhereUniqueInput;
    /**
     * In case the ProgressRaIntervensi found by the `where` argument doesn't exist, create a new ProgressRaIntervensi with this data.
     */
    create: Prisma.XOR<Prisma.ProgressRaIntervensiCreateInput, Prisma.ProgressRaIntervensiUncheckedCreateInput>;
    /**
     * In case the ProgressRaIntervensi was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProgressRaIntervensiUpdateInput, Prisma.ProgressRaIntervensiUncheckedUpdateInput>;
};
/**
 * ProgressRaIntervensi delete
 */
export type ProgressRaIntervensiDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ProgressRaIntervensi to delete.
     */
    where: Prisma.ProgressRaIntervensiWhereUniqueInput;
};
/**
 * ProgressRaIntervensi deleteMany
 */
export type ProgressRaIntervensiDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressRaIntervensis to delete
     */
    where?: Prisma.ProgressRaIntervensiWhereInput;
    /**
     * Limit how many ProgressRaIntervensis to delete.
     */
    limit?: number;
};
/**
 * ProgressRaIntervensi without action
 */
export type ProgressRaIntervensiDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=ProgressRaIntervensi.d.ts.map