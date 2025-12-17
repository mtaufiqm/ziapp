import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ProgramIntervensi
 *
 */
export type ProgramIntervensiModel = runtime.Types.Result.DefaultSelection<Prisma.$ProgramIntervensiPayload>;
export type AggregateProgramIntervensi = {
    _count: ProgramIntervensiCountAggregateOutputType | null;
    _avg: ProgramIntervensiAvgAggregateOutputType | null;
    _sum: ProgramIntervensiSumAggregateOutputType | null;
    _min: ProgramIntervensiMinAggregateOutputType | null;
    _max: ProgramIntervensiMaxAggregateOutputType | null;
};
export type ProgramIntervensiAvgAggregateOutputType = {
    status: number | null;
    tahun: number | null;
};
export type ProgramIntervensiSumAggregateOutputType = {
    status: number | null;
    tahun: number | null;
};
export type ProgramIntervensiMinAggregateOutputType = {
    uuid: string | null;
    intervensi: string | null;
    ukuran_keberhasilan: string | null;
    timeline: string | null;
    status: number | null;
    satker: string | null;
    tahun: number | null;
    last_updated: Date | null;
    created_by: string | null;
};
export type ProgramIntervensiMaxAggregateOutputType = {
    uuid: string | null;
    intervensi: string | null;
    ukuran_keberhasilan: string | null;
    timeline: string | null;
    status: number | null;
    satker: string | null;
    tahun: number | null;
    last_updated: Date | null;
    created_by: string | null;
};
export type ProgramIntervensiCountAggregateOutputType = {
    uuid: number;
    intervensi: number;
    ukuran_keberhasilan: number;
    timeline: number;
    status: number;
    satker: number;
    tahun: number;
    last_updated: number;
    created_by: number;
    _all: number;
};
export type ProgramIntervensiAvgAggregateInputType = {
    status?: true;
    tahun?: true;
};
export type ProgramIntervensiSumAggregateInputType = {
    status?: true;
    tahun?: true;
};
export type ProgramIntervensiMinAggregateInputType = {
    uuid?: true;
    intervensi?: true;
    ukuran_keberhasilan?: true;
    timeline?: true;
    status?: true;
    satker?: true;
    tahun?: true;
    last_updated?: true;
    created_by?: true;
};
export type ProgramIntervensiMaxAggregateInputType = {
    uuid?: true;
    intervensi?: true;
    ukuran_keberhasilan?: true;
    timeline?: true;
    status?: true;
    satker?: true;
    tahun?: true;
    last_updated?: true;
    created_by?: true;
};
export type ProgramIntervensiCountAggregateInputType = {
    uuid?: true;
    intervensi?: true;
    ukuran_keberhasilan?: true;
    timeline?: true;
    status?: true;
    satker?: true;
    tahun?: true;
    last_updated?: true;
    created_by?: true;
    _all?: true;
};
export type ProgramIntervensiAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramIntervensi to aggregate.
     */
    where?: Prisma.ProgramIntervensiWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProgramIntervensis to fetch.
     */
    orderBy?: Prisma.ProgramIntervensiOrderByWithRelationInput | Prisma.ProgramIntervensiOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProgramIntervensiWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProgramIntervensis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProgramIntervensis.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProgramIntervensis
    **/
    _count?: true | ProgramIntervensiCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ProgramIntervensiAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ProgramIntervensiSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProgramIntervensiMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProgramIntervensiMaxAggregateInputType;
};
export type GetProgramIntervensiAggregateType<T extends ProgramIntervensiAggregateArgs> = {
    [P in keyof T & keyof AggregateProgramIntervensi]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProgramIntervensi[P]> : Prisma.GetScalarType<T[P], AggregateProgramIntervensi[P]>;
};
export type ProgramIntervensiGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgramIntervensiWhereInput;
    orderBy?: Prisma.ProgramIntervensiOrderByWithAggregationInput | Prisma.ProgramIntervensiOrderByWithAggregationInput[];
    by: Prisma.ProgramIntervensiScalarFieldEnum[] | Prisma.ProgramIntervensiScalarFieldEnum;
    having?: Prisma.ProgramIntervensiScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProgramIntervensiCountAggregateInputType | true;
    _avg?: ProgramIntervensiAvgAggregateInputType;
    _sum?: ProgramIntervensiSumAggregateInputType;
    _min?: ProgramIntervensiMinAggregateInputType;
    _max?: ProgramIntervensiMaxAggregateInputType;
};
export type ProgramIntervensiGroupByOutputType = {
    uuid: string;
    intervensi: string;
    ukuran_keberhasilan: string | null;
    timeline: string | null;
    status: number;
    satker: string;
    tahun: number;
    last_updated: Date;
    created_by: string;
    _count: ProgramIntervensiCountAggregateOutputType | null;
    _avg: ProgramIntervensiAvgAggregateOutputType | null;
    _sum: ProgramIntervensiSumAggregateOutputType | null;
    _min: ProgramIntervensiMinAggregateOutputType | null;
    _max: ProgramIntervensiMaxAggregateOutputType | null;
};
type GetProgramIntervensiGroupByPayload<T extends ProgramIntervensiGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProgramIntervensiGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProgramIntervensiGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProgramIntervensiGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProgramIntervensiGroupByOutputType[P]>;
}>>;
export type ProgramIntervensiWhereInput = {
    AND?: Prisma.ProgramIntervensiWhereInput | Prisma.ProgramIntervensiWhereInput[];
    OR?: Prisma.ProgramIntervensiWhereInput[];
    NOT?: Prisma.ProgramIntervensiWhereInput | Prisma.ProgramIntervensiWhereInput[];
    uuid?: Prisma.StringFilter<"ProgramIntervensi"> | string;
    intervensi?: Prisma.StringFilter<"ProgramIntervensi"> | string;
    ukuran_keberhasilan?: Prisma.StringNullableFilter<"ProgramIntervensi"> | string | null;
    timeline?: Prisma.StringNullableFilter<"ProgramIntervensi"> | string | null;
    status?: Prisma.IntFilter<"ProgramIntervensi"> | number;
    satker?: Prisma.StringFilter<"ProgramIntervensi"> | string;
    tahun?: Prisma.IntFilter<"ProgramIntervensi"> | number;
    last_updated?: Prisma.DateTimeFilter<"ProgramIntervensi"> | Date | string;
    created_by?: Prisma.StringFilter<"ProgramIntervensi"> | string;
    intervensiObj?: Prisma.XOR<Prisma.MasterIntervensiNasionalScalarRelationFilter, Prisma.MasterIntervensiNasionalWhereInput>;
    statusObj?: Prisma.XOR<Prisma.ProgressStatusScalarRelationFilter, Prisma.ProgressStatusWhereInput>;
    progressObj?: Prisma.ProgressRaIntervensiListRelationFilter;
};
export type ProgramIntervensiOrderByWithRelationInput = {
    uuid?: Prisma.SortOrder;
    intervensi?: Prisma.SortOrder;
    ukuran_keberhasilan?: Prisma.SortOrderInput | Prisma.SortOrder;
    timeline?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    satker?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    intervensiObj?: Prisma.MasterIntervensiNasionalOrderByWithRelationInput;
    statusObj?: Prisma.ProgressStatusOrderByWithRelationInput;
    progressObj?: Prisma.ProgressRaIntervensiOrderByRelationAggregateInput;
};
export type ProgramIntervensiWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string;
    intervensi_satker_tahun?: Prisma.ProgramIntervensiIntervensiSatkerTahunCompoundUniqueInput;
    AND?: Prisma.ProgramIntervensiWhereInput | Prisma.ProgramIntervensiWhereInput[];
    OR?: Prisma.ProgramIntervensiWhereInput[];
    NOT?: Prisma.ProgramIntervensiWhereInput | Prisma.ProgramIntervensiWhereInput[];
    intervensi?: Prisma.StringFilter<"ProgramIntervensi"> | string;
    ukuran_keberhasilan?: Prisma.StringNullableFilter<"ProgramIntervensi"> | string | null;
    timeline?: Prisma.StringNullableFilter<"ProgramIntervensi"> | string | null;
    status?: Prisma.IntFilter<"ProgramIntervensi"> | number;
    satker?: Prisma.StringFilter<"ProgramIntervensi"> | string;
    tahun?: Prisma.IntFilter<"ProgramIntervensi"> | number;
    last_updated?: Prisma.DateTimeFilter<"ProgramIntervensi"> | Date | string;
    created_by?: Prisma.StringFilter<"ProgramIntervensi"> | string;
    intervensiObj?: Prisma.XOR<Prisma.MasterIntervensiNasionalScalarRelationFilter, Prisma.MasterIntervensiNasionalWhereInput>;
    statusObj?: Prisma.XOR<Prisma.ProgressStatusScalarRelationFilter, Prisma.ProgressStatusWhereInput>;
    progressObj?: Prisma.ProgressRaIntervensiListRelationFilter;
}, "uuid" | "intervensi_satker_tahun">;
export type ProgramIntervensiOrderByWithAggregationInput = {
    uuid?: Prisma.SortOrder;
    intervensi?: Prisma.SortOrder;
    ukuran_keberhasilan?: Prisma.SortOrderInput | Prisma.SortOrder;
    timeline?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    satker?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    _count?: Prisma.ProgramIntervensiCountOrderByAggregateInput;
    _avg?: Prisma.ProgramIntervensiAvgOrderByAggregateInput;
    _max?: Prisma.ProgramIntervensiMaxOrderByAggregateInput;
    _min?: Prisma.ProgramIntervensiMinOrderByAggregateInput;
    _sum?: Prisma.ProgramIntervensiSumOrderByAggregateInput;
};
export type ProgramIntervensiScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProgramIntervensiScalarWhereWithAggregatesInput | Prisma.ProgramIntervensiScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProgramIntervensiScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProgramIntervensiScalarWhereWithAggregatesInput | Prisma.ProgramIntervensiScalarWhereWithAggregatesInput[];
    uuid?: Prisma.StringWithAggregatesFilter<"ProgramIntervensi"> | string;
    intervensi?: Prisma.StringWithAggregatesFilter<"ProgramIntervensi"> | string;
    ukuran_keberhasilan?: Prisma.StringNullableWithAggregatesFilter<"ProgramIntervensi"> | string | null;
    timeline?: Prisma.StringNullableWithAggregatesFilter<"ProgramIntervensi"> | string | null;
    status?: Prisma.IntWithAggregatesFilter<"ProgramIntervensi"> | number;
    satker?: Prisma.StringWithAggregatesFilter<"ProgramIntervensi"> | string;
    tahun?: Prisma.IntWithAggregatesFilter<"ProgramIntervensi"> | number;
    last_updated?: Prisma.DateTimeWithAggregatesFilter<"ProgramIntervensi"> | Date | string;
    created_by?: Prisma.StringWithAggregatesFilter<"ProgramIntervensi"> | string;
};
export type ProgramIntervensiCreateInput = {
    uuid?: string;
    ukuran_keberhasilan?: string | null;
    timeline?: string | null;
    satker: string;
    tahun: number;
    last_updated?: Date | string;
    created_by: string;
    intervensiObj: Prisma.MasterIntervensiNasionalCreateNestedOneWithoutProgramIntervensiObjInput;
    statusObj: Prisma.ProgressStatusCreateNestedOneWithoutListOfProgramIntervensiInput;
    progressObj?: Prisma.ProgressRaIntervensiCreateNestedManyWithoutRancananAksiInput;
};
export type ProgramIntervensiUncheckedCreateInput = {
    uuid?: string;
    intervensi: string;
    ukuran_keberhasilan?: string | null;
    timeline?: string | null;
    status: number;
    satker: string;
    tahun: number;
    last_updated?: Date | string;
    created_by: string;
    progressObj?: Prisma.ProgressRaIntervensiUncheckedCreateNestedManyWithoutRancananAksiInput;
};
export type ProgramIntervensiUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    intervensiObj?: Prisma.MasterIntervensiNasionalUpdateOneRequiredWithoutProgramIntervensiObjNestedInput;
    statusObj?: Prisma.ProgressStatusUpdateOneRequiredWithoutListOfProgramIntervensiNestedInput;
    progressObj?: Prisma.ProgressRaIntervensiUpdateManyWithoutRancananAksiNestedInput;
};
export type ProgramIntervensiUncheckedUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    intervensi?: Prisma.StringFieldUpdateOperationsInput | string;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    progressObj?: Prisma.ProgressRaIntervensiUncheckedUpdateManyWithoutRancananAksiNestedInput;
};
export type ProgramIntervensiCreateManyInput = {
    uuid?: string;
    intervensi: string;
    ukuran_keberhasilan?: string | null;
    timeline?: string | null;
    status: number;
    satker: string;
    tahun: number;
    last_updated?: Date | string;
    created_by: string;
};
export type ProgramIntervensiUpdateManyMutationInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProgramIntervensiUncheckedUpdateManyInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    intervensi?: Prisma.StringFieldUpdateOperationsInput | string;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProgramIntervensiListRelationFilter = {
    every?: Prisma.ProgramIntervensiWhereInput;
    some?: Prisma.ProgramIntervensiWhereInput;
    none?: Prisma.ProgramIntervensiWhereInput;
};
export type ProgramIntervensiOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProgramIntervensiIntervensiSatkerTahunCompoundUniqueInput = {
    intervensi: string;
    satker: string;
    tahun: number;
};
export type ProgramIntervensiCountOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    intervensi?: Prisma.SortOrder;
    ukuran_keberhasilan?: Prisma.SortOrder;
    timeline?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    satker?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type ProgramIntervensiAvgOrderByAggregateInput = {
    status?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
};
export type ProgramIntervensiMaxOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    intervensi?: Prisma.SortOrder;
    ukuran_keberhasilan?: Prisma.SortOrder;
    timeline?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    satker?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type ProgramIntervensiMinOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    intervensi?: Prisma.SortOrder;
    ukuran_keberhasilan?: Prisma.SortOrder;
    timeline?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    satker?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type ProgramIntervensiSumOrderByAggregateInput = {
    status?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
};
export type ProgramIntervensiScalarRelationFilter = {
    is?: Prisma.ProgramIntervensiWhereInput;
    isNot?: Prisma.ProgramIntervensiWhereInput;
};
export type ProgramIntervensiCreateNestedManyWithoutStatusObjInput = {
    create?: Prisma.XOR<Prisma.ProgramIntervensiCreateWithoutStatusObjInput, Prisma.ProgramIntervensiUncheckedCreateWithoutStatusObjInput> | Prisma.ProgramIntervensiCreateWithoutStatusObjInput[] | Prisma.ProgramIntervensiUncheckedCreateWithoutStatusObjInput[];
    connectOrCreate?: Prisma.ProgramIntervensiCreateOrConnectWithoutStatusObjInput | Prisma.ProgramIntervensiCreateOrConnectWithoutStatusObjInput[];
    createMany?: Prisma.ProgramIntervensiCreateManyStatusObjInputEnvelope;
    connect?: Prisma.ProgramIntervensiWhereUniqueInput | Prisma.ProgramIntervensiWhereUniqueInput[];
};
export type ProgramIntervensiUncheckedCreateNestedManyWithoutStatusObjInput = {
    create?: Prisma.XOR<Prisma.ProgramIntervensiCreateWithoutStatusObjInput, Prisma.ProgramIntervensiUncheckedCreateWithoutStatusObjInput> | Prisma.ProgramIntervensiCreateWithoutStatusObjInput[] | Prisma.ProgramIntervensiUncheckedCreateWithoutStatusObjInput[];
    connectOrCreate?: Prisma.ProgramIntervensiCreateOrConnectWithoutStatusObjInput | Prisma.ProgramIntervensiCreateOrConnectWithoutStatusObjInput[];
    createMany?: Prisma.ProgramIntervensiCreateManyStatusObjInputEnvelope;
    connect?: Prisma.ProgramIntervensiWhereUniqueInput | Prisma.ProgramIntervensiWhereUniqueInput[];
};
export type ProgramIntervensiUpdateManyWithoutStatusObjNestedInput = {
    create?: Prisma.XOR<Prisma.ProgramIntervensiCreateWithoutStatusObjInput, Prisma.ProgramIntervensiUncheckedCreateWithoutStatusObjInput> | Prisma.ProgramIntervensiCreateWithoutStatusObjInput[] | Prisma.ProgramIntervensiUncheckedCreateWithoutStatusObjInput[];
    connectOrCreate?: Prisma.ProgramIntervensiCreateOrConnectWithoutStatusObjInput | Prisma.ProgramIntervensiCreateOrConnectWithoutStatusObjInput[];
    upsert?: Prisma.ProgramIntervensiUpsertWithWhereUniqueWithoutStatusObjInput | Prisma.ProgramIntervensiUpsertWithWhereUniqueWithoutStatusObjInput[];
    createMany?: Prisma.ProgramIntervensiCreateManyStatusObjInputEnvelope;
    set?: Prisma.ProgramIntervensiWhereUniqueInput | Prisma.ProgramIntervensiWhereUniqueInput[];
    disconnect?: Prisma.ProgramIntervensiWhereUniqueInput | Prisma.ProgramIntervensiWhereUniqueInput[];
    delete?: Prisma.ProgramIntervensiWhereUniqueInput | Prisma.ProgramIntervensiWhereUniqueInput[];
    connect?: Prisma.ProgramIntervensiWhereUniqueInput | Prisma.ProgramIntervensiWhereUniqueInput[];
    update?: Prisma.ProgramIntervensiUpdateWithWhereUniqueWithoutStatusObjInput | Prisma.ProgramIntervensiUpdateWithWhereUniqueWithoutStatusObjInput[];
    updateMany?: Prisma.ProgramIntervensiUpdateManyWithWhereWithoutStatusObjInput | Prisma.ProgramIntervensiUpdateManyWithWhereWithoutStatusObjInput[];
    deleteMany?: Prisma.ProgramIntervensiScalarWhereInput | Prisma.ProgramIntervensiScalarWhereInput[];
};
export type ProgramIntervensiUncheckedUpdateManyWithoutStatusObjNestedInput = {
    create?: Prisma.XOR<Prisma.ProgramIntervensiCreateWithoutStatusObjInput, Prisma.ProgramIntervensiUncheckedCreateWithoutStatusObjInput> | Prisma.ProgramIntervensiCreateWithoutStatusObjInput[] | Prisma.ProgramIntervensiUncheckedCreateWithoutStatusObjInput[];
    connectOrCreate?: Prisma.ProgramIntervensiCreateOrConnectWithoutStatusObjInput | Prisma.ProgramIntervensiCreateOrConnectWithoutStatusObjInput[];
    upsert?: Prisma.ProgramIntervensiUpsertWithWhereUniqueWithoutStatusObjInput | Prisma.ProgramIntervensiUpsertWithWhereUniqueWithoutStatusObjInput[];
    createMany?: Prisma.ProgramIntervensiCreateManyStatusObjInputEnvelope;
    set?: Prisma.ProgramIntervensiWhereUniqueInput | Prisma.ProgramIntervensiWhereUniqueInput[];
    disconnect?: Prisma.ProgramIntervensiWhereUniqueInput | Prisma.ProgramIntervensiWhereUniqueInput[];
    delete?: Prisma.ProgramIntervensiWhereUniqueInput | Prisma.ProgramIntervensiWhereUniqueInput[];
    connect?: Prisma.ProgramIntervensiWhereUniqueInput | Prisma.ProgramIntervensiWhereUniqueInput[];
    update?: Prisma.ProgramIntervensiUpdateWithWhereUniqueWithoutStatusObjInput | Prisma.ProgramIntervensiUpdateWithWhereUniqueWithoutStatusObjInput[];
    updateMany?: Prisma.ProgramIntervensiUpdateManyWithWhereWithoutStatusObjInput | Prisma.ProgramIntervensiUpdateManyWithWhereWithoutStatusObjInput[];
    deleteMany?: Prisma.ProgramIntervensiScalarWhereInput | Prisma.ProgramIntervensiScalarWhereInput[];
};
export type ProgramIntervensiCreateNestedManyWithoutIntervensiObjInput = {
    create?: Prisma.XOR<Prisma.ProgramIntervensiCreateWithoutIntervensiObjInput, Prisma.ProgramIntervensiUncheckedCreateWithoutIntervensiObjInput> | Prisma.ProgramIntervensiCreateWithoutIntervensiObjInput[] | Prisma.ProgramIntervensiUncheckedCreateWithoutIntervensiObjInput[];
    connectOrCreate?: Prisma.ProgramIntervensiCreateOrConnectWithoutIntervensiObjInput | Prisma.ProgramIntervensiCreateOrConnectWithoutIntervensiObjInput[];
    createMany?: Prisma.ProgramIntervensiCreateManyIntervensiObjInputEnvelope;
    connect?: Prisma.ProgramIntervensiWhereUniqueInput | Prisma.ProgramIntervensiWhereUniqueInput[];
};
export type ProgramIntervensiUncheckedCreateNestedManyWithoutIntervensiObjInput = {
    create?: Prisma.XOR<Prisma.ProgramIntervensiCreateWithoutIntervensiObjInput, Prisma.ProgramIntervensiUncheckedCreateWithoutIntervensiObjInput> | Prisma.ProgramIntervensiCreateWithoutIntervensiObjInput[] | Prisma.ProgramIntervensiUncheckedCreateWithoutIntervensiObjInput[];
    connectOrCreate?: Prisma.ProgramIntervensiCreateOrConnectWithoutIntervensiObjInput | Prisma.ProgramIntervensiCreateOrConnectWithoutIntervensiObjInput[];
    createMany?: Prisma.ProgramIntervensiCreateManyIntervensiObjInputEnvelope;
    connect?: Prisma.ProgramIntervensiWhereUniqueInput | Prisma.ProgramIntervensiWhereUniqueInput[];
};
export type ProgramIntervensiUpdateManyWithoutIntervensiObjNestedInput = {
    create?: Prisma.XOR<Prisma.ProgramIntervensiCreateWithoutIntervensiObjInput, Prisma.ProgramIntervensiUncheckedCreateWithoutIntervensiObjInput> | Prisma.ProgramIntervensiCreateWithoutIntervensiObjInput[] | Prisma.ProgramIntervensiUncheckedCreateWithoutIntervensiObjInput[];
    connectOrCreate?: Prisma.ProgramIntervensiCreateOrConnectWithoutIntervensiObjInput | Prisma.ProgramIntervensiCreateOrConnectWithoutIntervensiObjInput[];
    upsert?: Prisma.ProgramIntervensiUpsertWithWhereUniqueWithoutIntervensiObjInput | Prisma.ProgramIntervensiUpsertWithWhereUniqueWithoutIntervensiObjInput[];
    createMany?: Prisma.ProgramIntervensiCreateManyIntervensiObjInputEnvelope;
    set?: Prisma.ProgramIntervensiWhereUniqueInput | Prisma.ProgramIntervensiWhereUniqueInput[];
    disconnect?: Prisma.ProgramIntervensiWhereUniqueInput | Prisma.ProgramIntervensiWhereUniqueInput[];
    delete?: Prisma.ProgramIntervensiWhereUniqueInput | Prisma.ProgramIntervensiWhereUniqueInput[];
    connect?: Prisma.ProgramIntervensiWhereUniqueInput | Prisma.ProgramIntervensiWhereUniqueInput[];
    update?: Prisma.ProgramIntervensiUpdateWithWhereUniqueWithoutIntervensiObjInput | Prisma.ProgramIntervensiUpdateWithWhereUniqueWithoutIntervensiObjInput[];
    updateMany?: Prisma.ProgramIntervensiUpdateManyWithWhereWithoutIntervensiObjInput | Prisma.ProgramIntervensiUpdateManyWithWhereWithoutIntervensiObjInput[];
    deleteMany?: Prisma.ProgramIntervensiScalarWhereInput | Prisma.ProgramIntervensiScalarWhereInput[];
};
export type ProgramIntervensiUncheckedUpdateManyWithoutIntervensiObjNestedInput = {
    create?: Prisma.XOR<Prisma.ProgramIntervensiCreateWithoutIntervensiObjInput, Prisma.ProgramIntervensiUncheckedCreateWithoutIntervensiObjInput> | Prisma.ProgramIntervensiCreateWithoutIntervensiObjInput[] | Prisma.ProgramIntervensiUncheckedCreateWithoutIntervensiObjInput[];
    connectOrCreate?: Prisma.ProgramIntervensiCreateOrConnectWithoutIntervensiObjInput | Prisma.ProgramIntervensiCreateOrConnectWithoutIntervensiObjInput[];
    upsert?: Prisma.ProgramIntervensiUpsertWithWhereUniqueWithoutIntervensiObjInput | Prisma.ProgramIntervensiUpsertWithWhereUniqueWithoutIntervensiObjInput[];
    createMany?: Prisma.ProgramIntervensiCreateManyIntervensiObjInputEnvelope;
    set?: Prisma.ProgramIntervensiWhereUniqueInput | Prisma.ProgramIntervensiWhereUniqueInput[];
    disconnect?: Prisma.ProgramIntervensiWhereUniqueInput | Prisma.ProgramIntervensiWhereUniqueInput[];
    delete?: Prisma.ProgramIntervensiWhereUniqueInput | Prisma.ProgramIntervensiWhereUniqueInput[];
    connect?: Prisma.ProgramIntervensiWhereUniqueInput | Prisma.ProgramIntervensiWhereUniqueInput[];
    update?: Prisma.ProgramIntervensiUpdateWithWhereUniqueWithoutIntervensiObjInput | Prisma.ProgramIntervensiUpdateWithWhereUniqueWithoutIntervensiObjInput[];
    updateMany?: Prisma.ProgramIntervensiUpdateManyWithWhereWithoutIntervensiObjInput | Prisma.ProgramIntervensiUpdateManyWithWhereWithoutIntervensiObjInput[];
    deleteMany?: Prisma.ProgramIntervensiScalarWhereInput | Prisma.ProgramIntervensiScalarWhereInput[];
};
export type ProgramIntervensiCreateNestedOneWithoutProgressObjInput = {
    create?: Prisma.XOR<Prisma.ProgramIntervensiCreateWithoutProgressObjInput, Prisma.ProgramIntervensiUncheckedCreateWithoutProgressObjInput>;
    connectOrCreate?: Prisma.ProgramIntervensiCreateOrConnectWithoutProgressObjInput;
    connect?: Prisma.ProgramIntervensiWhereUniqueInput;
};
export type ProgramIntervensiUpdateOneRequiredWithoutProgressObjNestedInput = {
    create?: Prisma.XOR<Prisma.ProgramIntervensiCreateWithoutProgressObjInput, Prisma.ProgramIntervensiUncheckedCreateWithoutProgressObjInput>;
    connectOrCreate?: Prisma.ProgramIntervensiCreateOrConnectWithoutProgressObjInput;
    upsert?: Prisma.ProgramIntervensiUpsertWithoutProgressObjInput;
    connect?: Prisma.ProgramIntervensiWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProgramIntervensiUpdateToOneWithWhereWithoutProgressObjInput, Prisma.ProgramIntervensiUpdateWithoutProgressObjInput>, Prisma.ProgramIntervensiUncheckedUpdateWithoutProgressObjInput>;
};
export type ProgramIntervensiCreateWithoutStatusObjInput = {
    uuid?: string;
    ukuran_keberhasilan?: string | null;
    timeline?: string | null;
    satker: string;
    tahun: number;
    last_updated?: Date | string;
    created_by: string;
    intervensiObj: Prisma.MasterIntervensiNasionalCreateNestedOneWithoutProgramIntervensiObjInput;
    progressObj?: Prisma.ProgressRaIntervensiCreateNestedManyWithoutRancananAksiInput;
};
export type ProgramIntervensiUncheckedCreateWithoutStatusObjInput = {
    uuid?: string;
    intervensi: string;
    ukuran_keberhasilan?: string | null;
    timeline?: string | null;
    satker: string;
    tahun: number;
    last_updated?: Date | string;
    created_by: string;
    progressObj?: Prisma.ProgressRaIntervensiUncheckedCreateNestedManyWithoutRancananAksiInput;
};
export type ProgramIntervensiCreateOrConnectWithoutStatusObjInput = {
    where: Prisma.ProgramIntervensiWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgramIntervensiCreateWithoutStatusObjInput, Prisma.ProgramIntervensiUncheckedCreateWithoutStatusObjInput>;
};
export type ProgramIntervensiCreateManyStatusObjInputEnvelope = {
    data: Prisma.ProgramIntervensiCreateManyStatusObjInput | Prisma.ProgramIntervensiCreateManyStatusObjInput[];
    skipDuplicates?: boolean;
};
export type ProgramIntervensiUpsertWithWhereUniqueWithoutStatusObjInput = {
    where: Prisma.ProgramIntervensiWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProgramIntervensiUpdateWithoutStatusObjInput, Prisma.ProgramIntervensiUncheckedUpdateWithoutStatusObjInput>;
    create: Prisma.XOR<Prisma.ProgramIntervensiCreateWithoutStatusObjInput, Prisma.ProgramIntervensiUncheckedCreateWithoutStatusObjInput>;
};
export type ProgramIntervensiUpdateWithWhereUniqueWithoutStatusObjInput = {
    where: Prisma.ProgramIntervensiWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProgramIntervensiUpdateWithoutStatusObjInput, Prisma.ProgramIntervensiUncheckedUpdateWithoutStatusObjInput>;
};
export type ProgramIntervensiUpdateManyWithWhereWithoutStatusObjInput = {
    where: Prisma.ProgramIntervensiScalarWhereInput;
    data: Prisma.XOR<Prisma.ProgramIntervensiUpdateManyMutationInput, Prisma.ProgramIntervensiUncheckedUpdateManyWithoutStatusObjInput>;
};
export type ProgramIntervensiScalarWhereInput = {
    AND?: Prisma.ProgramIntervensiScalarWhereInput | Prisma.ProgramIntervensiScalarWhereInput[];
    OR?: Prisma.ProgramIntervensiScalarWhereInput[];
    NOT?: Prisma.ProgramIntervensiScalarWhereInput | Prisma.ProgramIntervensiScalarWhereInput[];
    uuid?: Prisma.StringFilter<"ProgramIntervensi"> | string;
    intervensi?: Prisma.StringFilter<"ProgramIntervensi"> | string;
    ukuran_keberhasilan?: Prisma.StringNullableFilter<"ProgramIntervensi"> | string | null;
    timeline?: Prisma.StringNullableFilter<"ProgramIntervensi"> | string | null;
    status?: Prisma.IntFilter<"ProgramIntervensi"> | number;
    satker?: Prisma.StringFilter<"ProgramIntervensi"> | string;
    tahun?: Prisma.IntFilter<"ProgramIntervensi"> | number;
    last_updated?: Prisma.DateTimeFilter<"ProgramIntervensi"> | Date | string;
    created_by?: Prisma.StringFilter<"ProgramIntervensi"> | string;
};
export type ProgramIntervensiCreateWithoutIntervensiObjInput = {
    uuid?: string;
    ukuran_keberhasilan?: string | null;
    timeline?: string | null;
    satker: string;
    tahun: number;
    last_updated?: Date | string;
    created_by: string;
    statusObj: Prisma.ProgressStatusCreateNestedOneWithoutListOfProgramIntervensiInput;
    progressObj?: Prisma.ProgressRaIntervensiCreateNestedManyWithoutRancananAksiInput;
};
export type ProgramIntervensiUncheckedCreateWithoutIntervensiObjInput = {
    uuid?: string;
    ukuran_keberhasilan?: string | null;
    timeline?: string | null;
    status: number;
    satker: string;
    tahun: number;
    last_updated?: Date | string;
    created_by: string;
    progressObj?: Prisma.ProgressRaIntervensiUncheckedCreateNestedManyWithoutRancananAksiInput;
};
export type ProgramIntervensiCreateOrConnectWithoutIntervensiObjInput = {
    where: Prisma.ProgramIntervensiWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgramIntervensiCreateWithoutIntervensiObjInput, Prisma.ProgramIntervensiUncheckedCreateWithoutIntervensiObjInput>;
};
export type ProgramIntervensiCreateManyIntervensiObjInputEnvelope = {
    data: Prisma.ProgramIntervensiCreateManyIntervensiObjInput | Prisma.ProgramIntervensiCreateManyIntervensiObjInput[];
    skipDuplicates?: boolean;
};
export type ProgramIntervensiUpsertWithWhereUniqueWithoutIntervensiObjInput = {
    where: Prisma.ProgramIntervensiWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProgramIntervensiUpdateWithoutIntervensiObjInput, Prisma.ProgramIntervensiUncheckedUpdateWithoutIntervensiObjInput>;
    create: Prisma.XOR<Prisma.ProgramIntervensiCreateWithoutIntervensiObjInput, Prisma.ProgramIntervensiUncheckedCreateWithoutIntervensiObjInput>;
};
export type ProgramIntervensiUpdateWithWhereUniqueWithoutIntervensiObjInput = {
    where: Prisma.ProgramIntervensiWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProgramIntervensiUpdateWithoutIntervensiObjInput, Prisma.ProgramIntervensiUncheckedUpdateWithoutIntervensiObjInput>;
};
export type ProgramIntervensiUpdateManyWithWhereWithoutIntervensiObjInput = {
    where: Prisma.ProgramIntervensiScalarWhereInput;
    data: Prisma.XOR<Prisma.ProgramIntervensiUpdateManyMutationInput, Prisma.ProgramIntervensiUncheckedUpdateManyWithoutIntervensiObjInput>;
};
export type ProgramIntervensiCreateWithoutProgressObjInput = {
    uuid?: string;
    ukuran_keberhasilan?: string | null;
    timeline?: string | null;
    satker: string;
    tahun: number;
    last_updated?: Date | string;
    created_by: string;
    intervensiObj: Prisma.MasterIntervensiNasionalCreateNestedOneWithoutProgramIntervensiObjInput;
    statusObj: Prisma.ProgressStatusCreateNestedOneWithoutListOfProgramIntervensiInput;
};
export type ProgramIntervensiUncheckedCreateWithoutProgressObjInput = {
    uuid?: string;
    intervensi: string;
    ukuran_keberhasilan?: string | null;
    timeline?: string | null;
    status: number;
    satker: string;
    tahun: number;
    last_updated?: Date | string;
    created_by: string;
};
export type ProgramIntervensiCreateOrConnectWithoutProgressObjInput = {
    where: Prisma.ProgramIntervensiWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgramIntervensiCreateWithoutProgressObjInput, Prisma.ProgramIntervensiUncheckedCreateWithoutProgressObjInput>;
};
export type ProgramIntervensiUpsertWithoutProgressObjInput = {
    update: Prisma.XOR<Prisma.ProgramIntervensiUpdateWithoutProgressObjInput, Prisma.ProgramIntervensiUncheckedUpdateWithoutProgressObjInput>;
    create: Prisma.XOR<Prisma.ProgramIntervensiCreateWithoutProgressObjInput, Prisma.ProgramIntervensiUncheckedCreateWithoutProgressObjInput>;
    where?: Prisma.ProgramIntervensiWhereInput;
};
export type ProgramIntervensiUpdateToOneWithWhereWithoutProgressObjInput = {
    where?: Prisma.ProgramIntervensiWhereInput;
    data: Prisma.XOR<Prisma.ProgramIntervensiUpdateWithoutProgressObjInput, Prisma.ProgramIntervensiUncheckedUpdateWithoutProgressObjInput>;
};
export type ProgramIntervensiUpdateWithoutProgressObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    intervensiObj?: Prisma.MasterIntervensiNasionalUpdateOneRequiredWithoutProgramIntervensiObjNestedInput;
    statusObj?: Prisma.ProgressStatusUpdateOneRequiredWithoutListOfProgramIntervensiNestedInput;
};
export type ProgramIntervensiUncheckedUpdateWithoutProgressObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    intervensi?: Prisma.StringFieldUpdateOperationsInput | string;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProgramIntervensiCreateManyStatusObjInput = {
    uuid?: string;
    intervensi: string;
    ukuran_keberhasilan?: string | null;
    timeline?: string | null;
    satker: string;
    tahun: number;
    last_updated?: Date | string;
    created_by: string;
};
export type ProgramIntervensiUpdateWithoutStatusObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    intervensiObj?: Prisma.MasterIntervensiNasionalUpdateOneRequiredWithoutProgramIntervensiObjNestedInput;
    progressObj?: Prisma.ProgressRaIntervensiUpdateManyWithoutRancananAksiNestedInput;
};
export type ProgramIntervensiUncheckedUpdateWithoutStatusObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    intervensi?: Prisma.StringFieldUpdateOperationsInput | string;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    progressObj?: Prisma.ProgressRaIntervensiUncheckedUpdateManyWithoutRancananAksiNestedInput;
};
export type ProgramIntervensiUncheckedUpdateManyWithoutStatusObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    intervensi?: Prisma.StringFieldUpdateOperationsInput | string;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProgramIntervensiCreateManyIntervensiObjInput = {
    uuid?: string;
    ukuran_keberhasilan?: string | null;
    timeline?: string | null;
    status: number;
    satker: string;
    tahun: number;
    last_updated?: Date | string;
    created_by: string;
};
export type ProgramIntervensiUpdateWithoutIntervensiObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    statusObj?: Prisma.ProgressStatusUpdateOneRequiredWithoutListOfProgramIntervensiNestedInput;
    progressObj?: Prisma.ProgressRaIntervensiUpdateManyWithoutRancananAksiNestedInput;
};
export type ProgramIntervensiUncheckedUpdateWithoutIntervensiObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    progressObj?: Prisma.ProgressRaIntervensiUncheckedUpdateManyWithoutRancananAksiNestedInput;
};
export type ProgramIntervensiUncheckedUpdateManyWithoutIntervensiObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type ProgramIntervensiCountOutputType
 */
export type ProgramIntervensiCountOutputType = {
    progressObj: number;
};
export type ProgramIntervensiCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    progressObj?: boolean | ProgramIntervensiCountOutputTypeCountProgressObjArgs;
};
/**
 * ProgramIntervensiCountOutputType without action
 */
export type ProgramIntervensiCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramIntervensiCountOutputType
     */
    select?: Prisma.ProgramIntervensiCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ProgramIntervensiCountOutputType without action
 */
export type ProgramIntervensiCountOutputTypeCountProgressObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgressRaIntervensiWhereInput;
};
export type ProgramIntervensiSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    intervensi?: boolean;
    ukuran_keberhasilan?: boolean;
    timeline?: boolean;
    status?: boolean;
    satker?: boolean;
    tahun?: boolean;
    last_updated?: boolean;
    created_by?: boolean;
    intervensiObj?: boolean | Prisma.MasterIntervensiNasionalDefaultArgs<ExtArgs>;
    statusObj?: boolean | Prisma.ProgressStatusDefaultArgs<ExtArgs>;
    progressObj?: boolean | Prisma.ProgramIntervensi$progressObjArgs<ExtArgs>;
    _count?: boolean | Prisma.ProgramIntervensiCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["programIntervensi"]>;
export type ProgramIntervensiSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    intervensi?: boolean;
    ukuran_keberhasilan?: boolean;
    timeline?: boolean;
    status?: boolean;
    satker?: boolean;
    tahun?: boolean;
    last_updated?: boolean;
    created_by?: boolean;
    intervensiObj?: boolean | Prisma.MasterIntervensiNasionalDefaultArgs<ExtArgs>;
    statusObj?: boolean | Prisma.ProgressStatusDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["programIntervensi"]>;
export type ProgramIntervensiSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    intervensi?: boolean;
    ukuran_keberhasilan?: boolean;
    timeline?: boolean;
    status?: boolean;
    satker?: boolean;
    tahun?: boolean;
    last_updated?: boolean;
    created_by?: boolean;
    intervensiObj?: boolean | Prisma.MasterIntervensiNasionalDefaultArgs<ExtArgs>;
    statusObj?: boolean | Prisma.ProgressStatusDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["programIntervensi"]>;
export type ProgramIntervensiSelectScalar = {
    uuid?: boolean;
    intervensi?: boolean;
    ukuran_keberhasilan?: boolean;
    timeline?: boolean;
    status?: boolean;
    satker?: boolean;
    tahun?: boolean;
    last_updated?: boolean;
    created_by?: boolean;
};
export type ProgramIntervensiOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"uuid" | "intervensi" | "ukuran_keberhasilan" | "timeline" | "status" | "satker" | "tahun" | "last_updated" | "created_by", ExtArgs["result"]["programIntervensi"]>;
export type ProgramIntervensiInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    intervensiObj?: boolean | Prisma.MasterIntervensiNasionalDefaultArgs<ExtArgs>;
    statusObj?: boolean | Prisma.ProgressStatusDefaultArgs<ExtArgs>;
    progressObj?: boolean | Prisma.ProgramIntervensi$progressObjArgs<ExtArgs>;
    _count?: boolean | Prisma.ProgramIntervensiCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProgramIntervensiIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    intervensiObj?: boolean | Prisma.MasterIntervensiNasionalDefaultArgs<ExtArgs>;
    statusObj?: boolean | Prisma.ProgressStatusDefaultArgs<ExtArgs>;
};
export type ProgramIntervensiIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    intervensiObj?: boolean | Prisma.MasterIntervensiNasionalDefaultArgs<ExtArgs>;
    statusObj?: boolean | Prisma.ProgressStatusDefaultArgs<ExtArgs>;
};
export type $ProgramIntervensiPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProgramIntervensi";
    objects: {
        intervensiObj: Prisma.$MasterIntervensiNasionalPayload<ExtArgs>;
        statusObj: Prisma.$ProgressStatusPayload<ExtArgs>;
        progressObj: Prisma.$ProgressRaIntervensiPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        uuid: string;
        intervensi: string;
        ukuran_keberhasilan: string | null;
        timeline: string | null;
        status: number;
        satker: string;
        tahun: number;
        last_updated: Date;
        created_by: string;
    }, ExtArgs["result"]["programIntervensi"]>;
    composites: {};
};
export type ProgramIntervensiGetPayload<S extends boolean | null | undefined | ProgramIntervensiDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProgramIntervensiPayload, S>;
export type ProgramIntervensiCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProgramIntervensiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProgramIntervensiCountAggregateInputType | true;
};
export interface ProgramIntervensiDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProgramIntervensi'];
        meta: {
            name: 'ProgramIntervensi';
        };
    };
    /**
     * Find zero or one ProgramIntervensi that matches the filter.
     * @param {ProgramIntervensiFindUniqueArgs} args - Arguments to find a ProgramIntervensi
     * @example
     * // Get one ProgramIntervensi
     * const programIntervensi = await prisma.programIntervensi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramIntervensiFindUniqueArgs>(args: Prisma.SelectSubset<T, ProgramIntervensiFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProgramIntervensiClient<runtime.Types.Result.GetResult<Prisma.$ProgramIntervensiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProgramIntervensi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgramIntervensiFindUniqueOrThrowArgs} args - Arguments to find a ProgramIntervensi
     * @example
     * // Get one ProgramIntervensi
     * const programIntervensi = await prisma.programIntervensi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramIntervensiFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProgramIntervensiFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProgramIntervensiClient<runtime.Types.Result.GetResult<Prisma.$ProgramIntervensiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProgramIntervensi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramIntervensiFindFirstArgs} args - Arguments to find a ProgramIntervensi
     * @example
     * // Get one ProgramIntervensi
     * const programIntervensi = await prisma.programIntervensi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramIntervensiFindFirstArgs>(args?: Prisma.SelectSubset<T, ProgramIntervensiFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProgramIntervensiClient<runtime.Types.Result.GetResult<Prisma.$ProgramIntervensiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProgramIntervensi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramIntervensiFindFirstOrThrowArgs} args - Arguments to find a ProgramIntervensi
     * @example
     * // Get one ProgramIntervensi
     * const programIntervensi = await prisma.programIntervensi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramIntervensiFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProgramIntervensiFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProgramIntervensiClient<runtime.Types.Result.GetResult<Prisma.$ProgramIntervensiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProgramIntervensis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramIntervensiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgramIntervensis
     * const programIntervensis = await prisma.programIntervensi.findMany()
     *
     * // Get first 10 ProgramIntervensis
     * const programIntervensis = await prisma.programIntervensi.findMany({ take: 10 })
     *
     * // Only select the `uuid`
     * const programIntervensiWithUuidOnly = await prisma.programIntervensi.findMany({ select: { uuid: true } })
     *
     */
    findMany<T extends ProgramIntervensiFindManyArgs>(args?: Prisma.SelectSubset<T, ProgramIntervensiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgramIntervensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProgramIntervensi.
     * @param {ProgramIntervensiCreateArgs} args - Arguments to create a ProgramIntervensi.
     * @example
     * // Create one ProgramIntervensi
     * const ProgramIntervensi = await prisma.programIntervensi.create({
     *   data: {
     *     // ... data to create a ProgramIntervensi
     *   }
     * })
     *
     */
    create<T extends ProgramIntervensiCreateArgs>(args: Prisma.SelectSubset<T, ProgramIntervensiCreateArgs<ExtArgs>>): Prisma.Prisma__ProgramIntervensiClient<runtime.Types.Result.GetResult<Prisma.$ProgramIntervensiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProgramIntervensis.
     * @param {ProgramIntervensiCreateManyArgs} args - Arguments to create many ProgramIntervensis.
     * @example
     * // Create many ProgramIntervensis
     * const programIntervensi = await prisma.programIntervensi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProgramIntervensiCreateManyArgs>(args?: Prisma.SelectSubset<T, ProgramIntervensiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ProgramIntervensis and returns the data saved in the database.
     * @param {ProgramIntervensiCreateManyAndReturnArgs} args - Arguments to create many ProgramIntervensis.
     * @example
     * // Create many ProgramIntervensis
     * const programIntervensi = await prisma.programIntervensi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProgramIntervensis and only return the `uuid`
     * const programIntervensiWithUuidOnly = await prisma.programIntervensi.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProgramIntervensiCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProgramIntervensiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgramIntervensiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ProgramIntervensi.
     * @param {ProgramIntervensiDeleteArgs} args - Arguments to delete one ProgramIntervensi.
     * @example
     * // Delete one ProgramIntervensi
     * const ProgramIntervensi = await prisma.programIntervensi.delete({
     *   where: {
     *     // ... filter to delete one ProgramIntervensi
     *   }
     * })
     *
     */
    delete<T extends ProgramIntervensiDeleteArgs>(args: Prisma.SelectSubset<T, ProgramIntervensiDeleteArgs<ExtArgs>>): Prisma.Prisma__ProgramIntervensiClient<runtime.Types.Result.GetResult<Prisma.$ProgramIntervensiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProgramIntervensi.
     * @param {ProgramIntervensiUpdateArgs} args - Arguments to update one ProgramIntervensi.
     * @example
     * // Update one ProgramIntervensi
     * const programIntervensi = await prisma.programIntervensi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProgramIntervensiUpdateArgs>(args: Prisma.SelectSubset<T, ProgramIntervensiUpdateArgs<ExtArgs>>): Prisma.Prisma__ProgramIntervensiClient<runtime.Types.Result.GetResult<Prisma.$ProgramIntervensiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProgramIntervensis.
     * @param {ProgramIntervensiDeleteManyArgs} args - Arguments to filter ProgramIntervensis to delete.
     * @example
     * // Delete a few ProgramIntervensis
     * const { count } = await prisma.programIntervensi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProgramIntervensiDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProgramIntervensiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProgramIntervensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramIntervensiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgramIntervensis
     * const programIntervensi = await prisma.programIntervensi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProgramIntervensiUpdateManyArgs>(args: Prisma.SelectSubset<T, ProgramIntervensiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProgramIntervensis and returns the data updated in the database.
     * @param {ProgramIntervensiUpdateManyAndReturnArgs} args - Arguments to update many ProgramIntervensis.
     * @example
     * // Update many ProgramIntervensis
     * const programIntervensi = await prisma.programIntervensi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProgramIntervensis and only return the `uuid`
     * const programIntervensiWithUuidOnly = await prisma.programIntervensi.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProgramIntervensiUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProgramIntervensiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgramIntervensiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ProgramIntervensi.
     * @param {ProgramIntervensiUpsertArgs} args - Arguments to update or create a ProgramIntervensi.
     * @example
     * // Update or create a ProgramIntervensi
     * const programIntervensi = await prisma.programIntervensi.upsert({
     *   create: {
     *     // ... data to create a ProgramIntervensi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgramIntervensi we want to update
     *   }
     * })
     */
    upsert<T extends ProgramIntervensiUpsertArgs>(args: Prisma.SelectSubset<T, ProgramIntervensiUpsertArgs<ExtArgs>>): Prisma.Prisma__ProgramIntervensiClient<runtime.Types.Result.GetResult<Prisma.$ProgramIntervensiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ProgramIntervensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramIntervensiCountArgs} args - Arguments to filter ProgramIntervensis to count.
     * @example
     * // Count the number of ProgramIntervensis
     * const count = await prisma.programIntervensi.count({
     *   where: {
     *     // ... the filter for the ProgramIntervensis we want to count
     *   }
     * })
    **/
    count<T extends ProgramIntervensiCountArgs>(args?: Prisma.Subset<T, ProgramIntervensiCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProgramIntervensiCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProgramIntervensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramIntervensiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgramIntervensiAggregateArgs>(args: Prisma.Subset<T, ProgramIntervensiAggregateArgs>): Prisma.PrismaPromise<GetProgramIntervensiAggregateType<T>>;
    /**
     * Group by ProgramIntervensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramIntervensiGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProgramIntervensiGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProgramIntervensiGroupByArgs['orderBy'];
    } : {
        orderBy?: ProgramIntervensiGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProgramIntervensiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramIntervensiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProgramIntervensi model
     */
    readonly fields: ProgramIntervensiFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProgramIntervensi.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProgramIntervensiClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    intervensiObj<T extends Prisma.MasterIntervensiNasionalDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MasterIntervensiNasionalDefaultArgs<ExtArgs>>): Prisma.Prisma__MasterIntervensiNasionalClient<runtime.Types.Result.GetResult<Prisma.$MasterIntervensiNasionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    statusObj<T extends Prisma.ProgressStatusDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProgressStatusDefaultArgs<ExtArgs>>): Prisma.Prisma__ProgressStatusClient<runtime.Types.Result.GetResult<Prisma.$ProgressStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    progressObj<T extends Prisma.ProgramIntervensi$progressObjArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProgramIntervensi$progressObjArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgressRaIntervensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the ProgramIntervensi model
 */
export interface ProgramIntervensiFieldRefs {
    readonly uuid: Prisma.FieldRef<"ProgramIntervensi", 'String'>;
    readonly intervensi: Prisma.FieldRef<"ProgramIntervensi", 'String'>;
    readonly ukuran_keberhasilan: Prisma.FieldRef<"ProgramIntervensi", 'String'>;
    readonly timeline: Prisma.FieldRef<"ProgramIntervensi", 'String'>;
    readonly status: Prisma.FieldRef<"ProgramIntervensi", 'Int'>;
    readonly satker: Prisma.FieldRef<"ProgramIntervensi", 'String'>;
    readonly tahun: Prisma.FieldRef<"ProgramIntervensi", 'Int'>;
    readonly last_updated: Prisma.FieldRef<"ProgramIntervensi", 'DateTime'>;
    readonly created_by: Prisma.FieldRef<"ProgramIntervensi", 'String'>;
}
/**
 * ProgramIntervensi findUnique
 */
export type ProgramIntervensiFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramIntervensi
     */
    select?: Prisma.ProgramIntervensiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgramIntervensi
     */
    omit?: Prisma.ProgramIntervensiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgramIntervensiInclude<ExtArgs> | null;
    /**
     * Filter, which ProgramIntervensi to fetch.
     */
    where: Prisma.ProgramIntervensiWhereUniqueInput;
};
/**
 * ProgramIntervensi findUniqueOrThrow
 */
export type ProgramIntervensiFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramIntervensi
     */
    select?: Prisma.ProgramIntervensiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgramIntervensi
     */
    omit?: Prisma.ProgramIntervensiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgramIntervensiInclude<ExtArgs> | null;
    /**
     * Filter, which ProgramIntervensi to fetch.
     */
    where: Prisma.ProgramIntervensiWhereUniqueInput;
};
/**
 * ProgramIntervensi findFirst
 */
export type ProgramIntervensiFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramIntervensi
     */
    select?: Prisma.ProgramIntervensiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgramIntervensi
     */
    omit?: Prisma.ProgramIntervensiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgramIntervensiInclude<ExtArgs> | null;
    /**
     * Filter, which ProgramIntervensi to fetch.
     */
    where?: Prisma.ProgramIntervensiWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProgramIntervensis to fetch.
     */
    orderBy?: Prisma.ProgramIntervensiOrderByWithRelationInput | Prisma.ProgramIntervensiOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProgramIntervensis.
     */
    cursor?: Prisma.ProgramIntervensiWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProgramIntervensis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProgramIntervensis.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProgramIntervensis.
     */
    distinct?: Prisma.ProgramIntervensiScalarFieldEnum | Prisma.ProgramIntervensiScalarFieldEnum[];
};
/**
 * ProgramIntervensi findFirstOrThrow
 */
export type ProgramIntervensiFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramIntervensi
     */
    select?: Prisma.ProgramIntervensiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgramIntervensi
     */
    omit?: Prisma.ProgramIntervensiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgramIntervensiInclude<ExtArgs> | null;
    /**
     * Filter, which ProgramIntervensi to fetch.
     */
    where?: Prisma.ProgramIntervensiWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProgramIntervensis to fetch.
     */
    orderBy?: Prisma.ProgramIntervensiOrderByWithRelationInput | Prisma.ProgramIntervensiOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProgramIntervensis.
     */
    cursor?: Prisma.ProgramIntervensiWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProgramIntervensis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProgramIntervensis.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProgramIntervensis.
     */
    distinct?: Prisma.ProgramIntervensiScalarFieldEnum | Prisma.ProgramIntervensiScalarFieldEnum[];
};
/**
 * ProgramIntervensi findMany
 */
export type ProgramIntervensiFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramIntervensi
     */
    select?: Prisma.ProgramIntervensiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgramIntervensi
     */
    omit?: Prisma.ProgramIntervensiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgramIntervensiInclude<ExtArgs> | null;
    /**
     * Filter, which ProgramIntervensis to fetch.
     */
    where?: Prisma.ProgramIntervensiWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProgramIntervensis to fetch.
     */
    orderBy?: Prisma.ProgramIntervensiOrderByWithRelationInput | Prisma.ProgramIntervensiOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProgramIntervensis.
     */
    cursor?: Prisma.ProgramIntervensiWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProgramIntervensis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProgramIntervensis.
     */
    skip?: number;
    distinct?: Prisma.ProgramIntervensiScalarFieldEnum | Prisma.ProgramIntervensiScalarFieldEnum[];
};
/**
 * ProgramIntervensi create
 */
export type ProgramIntervensiCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramIntervensi
     */
    select?: Prisma.ProgramIntervensiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgramIntervensi
     */
    omit?: Prisma.ProgramIntervensiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgramIntervensiInclude<ExtArgs> | null;
    /**
     * The data needed to create a ProgramIntervensi.
     */
    data: Prisma.XOR<Prisma.ProgramIntervensiCreateInput, Prisma.ProgramIntervensiUncheckedCreateInput>;
};
/**
 * ProgramIntervensi createMany
 */
export type ProgramIntervensiCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgramIntervensis.
     */
    data: Prisma.ProgramIntervensiCreateManyInput | Prisma.ProgramIntervensiCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProgramIntervensi createManyAndReturn
 */
export type ProgramIntervensiCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramIntervensi
     */
    select?: Prisma.ProgramIntervensiSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgramIntervensi
     */
    omit?: Prisma.ProgramIntervensiOmit<ExtArgs> | null;
    /**
     * The data used to create many ProgramIntervensis.
     */
    data: Prisma.ProgramIntervensiCreateManyInput | Prisma.ProgramIntervensiCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgramIntervensiIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ProgramIntervensi update
 */
export type ProgramIntervensiUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramIntervensi
     */
    select?: Prisma.ProgramIntervensiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgramIntervensi
     */
    omit?: Prisma.ProgramIntervensiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgramIntervensiInclude<ExtArgs> | null;
    /**
     * The data needed to update a ProgramIntervensi.
     */
    data: Prisma.XOR<Prisma.ProgramIntervensiUpdateInput, Prisma.ProgramIntervensiUncheckedUpdateInput>;
    /**
     * Choose, which ProgramIntervensi to update.
     */
    where: Prisma.ProgramIntervensiWhereUniqueInput;
};
/**
 * ProgramIntervensi updateMany
 */
export type ProgramIntervensiUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgramIntervensis.
     */
    data: Prisma.XOR<Prisma.ProgramIntervensiUpdateManyMutationInput, Prisma.ProgramIntervensiUncheckedUpdateManyInput>;
    /**
     * Filter which ProgramIntervensis to update
     */
    where?: Prisma.ProgramIntervensiWhereInput;
    /**
     * Limit how many ProgramIntervensis to update.
     */
    limit?: number;
};
/**
 * ProgramIntervensi updateManyAndReturn
 */
export type ProgramIntervensiUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramIntervensi
     */
    select?: Prisma.ProgramIntervensiSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgramIntervensi
     */
    omit?: Prisma.ProgramIntervensiOmit<ExtArgs> | null;
    /**
     * The data used to update ProgramIntervensis.
     */
    data: Prisma.XOR<Prisma.ProgramIntervensiUpdateManyMutationInput, Prisma.ProgramIntervensiUncheckedUpdateManyInput>;
    /**
     * Filter which ProgramIntervensis to update
     */
    where?: Prisma.ProgramIntervensiWhereInput;
    /**
     * Limit how many ProgramIntervensis to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgramIntervensiIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ProgramIntervensi upsert
 */
export type ProgramIntervensiUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramIntervensi
     */
    select?: Prisma.ProgramIntervensiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgramIntervensi
     */
    omit?: Prisma.ProgramIntervensiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgramIntervensiInclude<ExtArgs> | null;
    /**
     * The filter to search for the ProgramIntervensi to update in case it exists.
     */
    where: Prisma.ProgramIntervensiWhereUniqueInput;
    /**
     * In case the ProgramIntervensi found by the `where` argument doesn't exist, create a new ProgramIntervensi with this data.
     */
    create: Prisma.XOR<Prisma.ProgramIntervensiCreateInput, Prisma.ProgramIntervensiUncheckedCreateInput>;
    /**
     * In case the ProgramIntervensi was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProgramIntervensiUpdateInput, Prisma.ProgramIntervensiUncheckedUpdateInput>;
};
/**
 * ProgramIntervensi delete
 */
export type ProgramIntervensiDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramIntervensi
     */
    select?: Prisma.ProgramIntervensiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgramIntervensi
     */
    omit?: Prisma.ProgramIntervensiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgramIntervensiInclude<ExtArgs> | null;
    /**
     * Filter which ProgramIntervensi to delete.
     */
    where: Prisma.ProgramIntervensiWhereUniqueInput;
};
/**
 * ProgramIntervensi deleteMany
 */
export type ProgramIntervensiDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramIntervensis to delete
     */
    where?: Prisma.ProgramIntervensiWhereInput;
    /**
     * Limit how many ProgramIntervensis to delete.
     */
    limit?: number;
};
/**
 * ProgramIntervensi.progressObj
 */
export type ProgramIntervensi$progressObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ProgramIntervensi without action
 */
export type ProgramIntervensiDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramIntervensi
     */
    select?: Prisma.ProgramIntervensiSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgramIntervensi
     */
    omit?: Prisma.ProgramIntervensiOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgramIntervensiInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ProgramIntervensi.d.ts.map