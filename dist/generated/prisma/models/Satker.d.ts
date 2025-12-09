import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Satker
 *
 */
export type SatkerModel = runtime.Types.Result.DefaultSelection<Prisma.$SatkerPayload>;
export type AggregateSatker = {
    _count: SatkerCountAggregateOutputType | null;
    _avg: SatkerAvgAggregateOutputType | null;
    _sum: SatkerSumAggregateOutputType | null;
    _min: SatkerMinAggregateOutputType | null;
    _max: SatkerMaxAggregateOutputType | null;
};
export type SatkerAvgAggregateOutputType = {
    type: number | null;
};
export type SatkerSumAggregateOutputType = {
    type: number | null;
};
export type SatkerMinAggregateOutputType = {
    code: string | null;
    desc: string | null;
    type: number | null;
};
export type SatkerMaxAggregateOutputType = {
    code: string | null;
    desc: string | null;
    type: number | null;
};
export type SatkerCountAggregateOutputType = {
    code: number;
    desc: number;
    type: number;
    _all: number;
};
export type SatkerAvgAggregateInputType = {
    type?: true;
};
export type SatkerSumAggregateInputType = {
    type?: true;
};
export type SatkerMinAggregateInputType = {
    code?: true;
    desc?: true;
    type?: true;
};
export type SatkerMaxAggregateInputType = {
    code?: true;
    desc?: true;
    type?: true;
};
export type SatkerCountAggregateInputType = {
    code?: true;
    desc?: true;
    type?: true;
    _all?: true;
};
export type SatkerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Satker to aggregate.
     */
    where?: Prisma.SatkerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Satkers to fetch.
     */
    orderBy?: Prisma.SatkerOrderByWithRelationInput | Prisma.SatkerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SatkerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Satkers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Satkers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Satkers
    **/
    _count?: true | SatkerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SatkerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SatkerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SatkerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SatkerMaxAggregateInputType;
};
export type GetSatkerAggregateType<T extends SatkerAggregateArgs> = {
    [P in keyof T & keyof AggregateSatker]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSatker[P]> : Prisma.GetScalarType<T[P], AggregateSatker[P]>;
};
export type SatkerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SatkerWhereInput;
    orderBy?: Prisma.SatkerOrderByWithAggregationInput | Prisma.SatkerOrderByWithAggregationInput[];
    by: Prisma.SatkerScalarFieldEnum[] | Prisma.SatkerScalarFieldEnum;
    having?: Prisma.SatkerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SatkerCountAggregateInputType | true;
    _avg?: SatkerAvgAggregateInputType;
    _sum?: SatkerSumAggregateInputType;
    _min?: SatkerMinAggregateInputType;
    _max?: SatkerMaxAggregateInputType;
};
export type SatkerGroupByOutputType = {
    code: string;
    desc: string;
    type: number;
    _count: SatkerCountAggregateOutputType | null;
    _avg: SatkerAvgAggregateOutputType | null;
    _sum: SatkerSumAggregateOutputType | null;
    _min: SatkerMinAggregateOutputType | null;
    _max: SatkerMaxAggregateOutputType | null;
};
type GetSatkerGroupByPayload<T extends SatkerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SatkerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SatkerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SatkerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SatkerGroupByOutputType[P]>;
}>>;
export type SatkerWhereInput = {
    AND?: Prisma.SatkerWhereInput | Prisma.SatkerWhereInput[];
    OR?: Prisma.SatkerWhereInput[];
    NOT?: Prisma.SatkerWhereInput | Prisma.SatkerWhereInput[];
    code?: Prisma.StringFilter<"Satker"> | string;
    desc?: Prisma.StringFilter<"Satker"> | string;
    type?: Prisma.IntFilter<"Satker"> | number;
    satkertype?: Prisma.XOR<Prisma.SatkerTypeScalarRelationFilter, Prisma.SatkerTypeWhereInput>;
    pegawai?: Prisma.PegawaiListRelationFilter;
    rencanaAksi?: Prisma.RencanaAksiListRelationFilter;
};
export type SatkerOrderByWithRelationInput = {
    code?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    satkertype?: Prisma.SatkerTypeOrderByWithRelationInput;
    pegawai?: Prisma.PegawaiOrderByRelationAggregateInput;
    rencanaAksi?: Prisma.RencanaAksiOrderByRelationAggregateInput;
};
export type SatkerWhereUniqueInput = Prisma.AtLeast<{
    code?: string;
    AND?: Prisma.SatkerWhereInput | Prisma.SatkerWhereInput[];
    OR?: Prisma.SatkerWhereInput[];
    NOT?: Prisma.SatkerWhereInput | Prisma.SatkerWhereInput[];
    desc?: Prisma.StringFilter<"Satker"> | string;
    type?: Prisma.IntFilter<"Satker"> | number;
    satkertype?: Prisma.XOR<Prisma.SatkerTypeScalarRelationFilter, Prisma.SatkerTypeWhereInput>;
    pegawai?: Prisma.PegawaiListRelationFilter;
    rencanaAksi?: Prisma.RencanaAksiListRelationFilter;
}, "code">;
export type SatkerOrderByWithAggregationInput = {
    code?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    _count?: Prisma.SatkerCountOrderByAggregateInput;
    _avg?: Prisma.SatkerAvgOrderByAggregateInput;
    _max?: Prisma.SatkerMaxOrderByAggregateInput;
    _min?: Prisma.SatkerMinOrderByAggregateInput;
    _sum?: Prisma.SatkerSumOrderByAggregateInput;
};
export type SatkerScalarWhereWithAggregatesInput = {
    AND?: Prisma.SatkerScalarWhereWithAggregatesInput | Prisma.SatkerScalarWhereWithAggregatesInput[];
    OR?: Prisma.SatkerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SatkerScalarWhereWithAggregatesInput | Prisma.SatkerScalarWhereWithAggregatesInput[];
    code?: Prisma.StringWithAggregatesFilter<"Satker"> | string;
    desc?: Prisma.StringWithAggregatesFilter<"Satker"> | string;
    type?: Prisma.IntWithAggregatesFilter<"Satker"> | number;
};
export type SatkerCreateInput = {
    code: string;
    desc: string;
    satkertype: Prisma.SatkerTypeCreateNestedOneWithoutSatkerInput;
    pegawai?: Prisma.PegawaiCreateNestedManyWithoutSatkerObjInput;
    rencanaAksi?: Prisma.RencanaAksiCreateNestedManyWithoutSatkerObjInput;
};
export type SatkerUncheckedCreateInput = {
    code: string;
    desc: string;
    type: number;
    pegawai?: Prisma.PegawaiUncheckedCreateNestedManyWithoutSatkerObjInput;
    rencanaAksi?: Prisma.RencanaAksiUncheckedCreateNestedManyWithoutSatkerObjInput;
};
export type SatkerUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    satkertype?: Prisma.SatkerTypeUpdateOneRequiredWithoutSatkerNestedInput;
    pegawai?: Prisma.PegawaiUpdateManyWithoutSatkerObjNestedInput;
    rencanaAksi?: Prisma.RencanaAksiUpdateManyWithoutSatkerObjNestedInput;
};
export type SatkerUncheckedUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.IntFieldUpdateOperationsInput | number;
    pegawai?: Prisma.PegawaiUncheckedUpdateManyWithoutSatkerObjNestedInput;
    rencanaAksi?: Prisma.RencanaAksiUncheckedUpdateManyWithoutSatkerObjNestedInput;
};
export type SatkerCreateManyInput = {
    code: string;
    desc: string;
    type: number;
};
export type SatkerUpdateManyMutationInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SatkerUncheckedUpdateManyInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SatkerNullableScalarRelationFilter = {
    is?: Prisma.SatkerWhereInput | null;
    isNot?: Prisma.SatkerWhereInput | null;
};
export type SatkerCountOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
};
export type SatkerAvgOrderByAggregateInput = {
    type?: Prisma.SortOrder;
};
export type SatkerMaxOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
};
export type SatkerMinOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
};
export type SatkerSumOrderByAggregateInput = {
    type?: Prisma.SortOrder;
};
export type SatkerListRelationFilter = {
    every?: Prisma.SatkerWhereInput;
    some?: Prisma.SatkerWhereInput;
    none?: Prisma.SatkerWhereInput;
};
export type SatkerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SatkerScalarRelationFilter = {
    is?: Prisma.SatkerWhereInput;
    isNot?: Prisma.SatkerWhereInput;
};
export type SatkerCreateNestedOneWithoutPegawaiInput = {
    create?: Prisma.XOR<Prisma.SatkerCreateWithoutPegawaiInput, Prisma.SatkerUncheckedCreateWithoutPegawaiInput>;
    connectOrCreate?: Prisma.SatkerCreateOrConnectWithoutPegawaiInput;
    connect?: Prisma.SatkerWhereUniqueInput;
};
export type SatkerUpdateOneWithoutPegawaiNestedInput = {
    create?: Prisma.XOR<Prisma.SatkerCreateWithoutPegawaiInput, Prisma.SatkerUncheckedCreateWithoutPegawaiInput>;
    connectOrCreate?: Prisma.SatkerCreateOrConnectWithoutPegawaiInput;
    upsert?: Prisma.SatkerUpsertWithoutPegawaiInput;
    disconnect?: Prisma.SatkerWhereInput | boolean;
    delete?: Prisma.SatkerWhereInput | boolean;
    connect?: Prisma.SatkerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SatkerUpdateToOneWithWhereWithoutPegawaiInput, Prisma.SatkerUpdateWithoutPegawaiInput>, Prisma.SatkerUncheckedUpdateWithoutPegawaiInput>;
};
export type SatkerCreateNestedManyWithoutSatkertypeInput = {
    create?: Prisma.XOR<Prisma.SatkerCreateWithoutSatkertypeInput, Prisma.SatkerUncheckedCreateWithoutSatkertypeInput> | Prisma.SatkerCreateWithoutSatkertypeInput[] | Prisma.SatkerUncheckedCreateWithoutSatkertypeInput[];
    connectOrCreate?: Prisma.SatkerCreateOrConnectWithoutSatkertypeInput | Prisma.SatkerCreateOrConnectWithoutSatkertypeInput[];
    createMany?: Prisma.SatkerCreateManySatkertypeInputEnvelope;
    connect?: Prisma.SatkerWhereUniqueInput | Prisma.SatkerWhereUniqueInput[];
};
export type SatkerUncheckedCreateNestedManyWithoutSatkertypeInput = {
    create?: Prisma.XOR<Prisma.SatkerCreateWithoutSatkertypeInput, Prisma.SatkerUncheckedCreateWithoutSatkertypeInput> | Prisma.SatkerCreateWithoutSatkertypeInput[] | Prisma.SatkerUncheckedCreateWithoutSatkertypeInput[];
    connectOrCreate?: Prisma.SatkerCreateOrConnectWithoutSatkertypeInput | Prisma.SatkerCreateOrConnectWithoutSatkertypeInput[];
    createMany?: Prisma.SatkerCreateManySatkertypeInputEnvelope;
    connect?: Prisma.SatkerWhereUniqueInput | Prisma.SatkerWhereUniqueInput[];
};
export type SatkerUpdateManyWithoutSatkertypeNestedInput = {
    create?: Prisma.XOR<Prisma.SatkerCreateWithoutSatkertypeInput, Prisma.SatkerUncheckedCreateWithoutSatkertypeInput> | Prisma.SatkerCreateWithoutSatkertypeInput[] | Prisma.SatkerUncheckedCreateWithoutSatkertypeInput[];
    connectOrCreate?: Prisma.SatkerCreateOrConnectWithoutSatkertypeInput | Prisma.SatkerCreateOrConnectWithoutSatkertypeInput[];
    upsert?: Prisma.SatkerUpsertWithWhereUniqueWithoutSatkertypeInput | Prisma.SatkerUpsertWithWhereUniqueWithoutSatkertypeInput[];
    createMany?: Prisma.SatkerCreateManySatkertypeInputEnvelope;
    set?: Prisma.SatkerWhereUniqueInput | Prisma.SatkerWhereUniqueInput[];
    disconnect?: Prisma.SatkerWhereUniqueInput | Prisma.SatkerWhereUniqueInput[];
    delete?: Prisma.SatkerWhereUniqueInput | Prisma.SatkerWhereUniqueInput[];
    connect?: Prisma.SatkerWhereUniqueInput | Prisma.SatkerWhereUniqueInput[];
    update?: Prisma.SatkerUpdateWithWhereUniqueWithoutSatkertypeInput | Prisma.SatkerUpdateWithWhereUniqueWithoutSatkertypeInput[];
    updateMany?: Prisma.SatkerUpdateManyWithWhereWithoutSatkertypeInput | Prisma.SatkerUpdateManyWithWhereWithoutSatkertypeInput[];
    deleteMany?: Prisma.SatkerScalarWhereInput | Prisma.SatkerScalarWhereInput[];
};
export type SatkerUncheckedUpdateManyWithoutSatkertypeNestedInput = {
    create?: Prisma.XOR<Prisma.SatkerCreateWithoutSatkertypeInput, Prisma.SatkerUncheckedCreateWithoutSatkertypeInput> | Prisma.SatkerCreateWithoutSatkertypeInput[] | Prisma.SatkerUncheckedCreateWithoutSatkertypeInput[];
    connectOrCreate?: Prisma.SatkerCreateOrConnectWithoutSatkertypeInput | Prisma.SatkerCreateOrConnectWithoutSatkertypeInput[];
    upsert?: Prisma.SatkerUpsertWithWhereUniqueWithoutSatkertypeInput | Prisma.SatkerUpsertWithWhereUniqueWithoutSatkertypeInput[];
    createMany?: Prisma.SatkerCreateManySatkertypeInputEnvelope;
    set?: Prisma.SatkerWhereUniqueInput | Prisma.SatkerWhereUniqueInput[];
    disconnect?: Prisma.SatkerWhereUniqueInput | Prisma.SatkerWhereUniqueInput[];
    delete?: Prisma.SatkerWhereUniqueInput | Prisma.SatkerWhereUniqueInput[];
    connect?: Prisma.SatkerWhereUniqueInput | Prisma.SatkerWhereUniqueInput[];
    update?: Prisma.SatkerUpdateWithWhereUniqueWithoutSatkertypeInput | Prisma.SatkerUpdateWithWhereUniqueWithoutSatkertypeInput[];
    updateMany?: Prisma.SatkerUpdateManyWithWhereWithoutSatkertypeInput | Prisma.SatkerUpdateManyWithWhereWithoutSatkertypeInput[];
    deleteMany?: Prisma.SatkerScalarWhereInput | Prisma.SatkerScalarWhereInput[];
};
export type SatkerCreateNestedOneWithoutRencanaAksiInput = {
    create?: Prisma.XOR<Prisma.SatkerCreateWithoutRencanaAksiInput, Prisma.SatkerUncheckedCreateWithoutRencanaAksiInput>;
    connectOrCreate?: Prisma.SatkerCreateOrConnectWithoutRencanaAksiInput;
    connect?: Prisma.SatkerWhereUniqueInput;
};
export type SatkerUpdateOneRequiredWithoutRencanaAksiNestedInput = {
    create?: Prisma.XOR<Prisma.SatkerCreateWithoutRencanaAksiInput, Prisma.SatkerUncheckedCreateWithoutRencanaAksiInput>;
    connectOrCreate?: Prisma.SatkerCreateOrConnectWithoutRencanaAksiInput;
    upsert?: Prisma.SatkerUpsertWithoutRencanaAksiInput;
    connect?: Prisma.SatkerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SatkerUpdateToOneWithWhereWithoutRencanaAksiInput, Prisma.SatkerUpdateWithoutRencanaAksiInput>, Prisma.SatkerUncheckedUpdateWithoutRencanaAksiInput>;
};
export type SatkerCreateWithoutPegawaiInput = {
    code: string;
    desc: string;
    satkertype: Prisma.SatkerTypeCreateNestedOneWithoutSatkerInput;
    rencanaAksi?: Prisma.RencanaAksiCreateNestedManyWithoutSatkerObjInput;
};
export type SatkerUncheckedCreateWithoutPegawaiInput = {
    code: string;
    desc: string;
    type: number;
    rencanaAksi?: Prisma.RencanaAksiUncheckedCreateNestedManyWithoutSatkerObjInput;
};
export type SatkerCreateOrConnectWithoutPegawaiInput = {
    where: Prisma.SatkerWhereUniqueInput;
    create: Prisma.XOR<Prisma.SatkerCreateWithoutPegawaiInput, Prisma.SatkerUncheckedCreateWithoutPegawaiInput>;
};
export type SatkerUpsertWithoutPegawaiInput = {
    update: Prisma.XOR<Prisma.SatkerUpdateWithoutPegawaiInput, Prisma.SatkerUncheckedUpdateWithoutPegawaiInput>;
    create: Prisma.XOR<Prisma.SatkerCreateWithoutPegawaiInput, Prisma.SatkerUncheckedCreateWithoutPegawaiInput>;
    where?: Prisma.SatkerWhereInput;
};
export type SatkerUpdateToOneWithWhereWithoutPegawaiInput = {
    where?: Prisma.SatkerWhereInput;
    data: Prisma.XOR<Prisma.SatkerUpdateWithoutPegawaiInput, Prisma.SatkerUncheckedUpdateWithoutPegawaiInput>;
};
export type SatkerUpdateWithoutPegawaiInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    satkertype?: Prisma.SatkerTypeUpdateOneRequiredWithoutSatkerNestedInput;
    rencanaAksi?: Prisma.RencanaAksiUpdateManyWithoutSatkerObjNestedInput;
};
export type SatkerUncheckedUpdateWithoutPegawaiInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.IntFieldUpdateOperationsInput | number;
    rencanaAksi?: Prisma.RencanaAksiUncheckedUpdateManyWithoutSatkerObjNestedInput;
};
export type SatkerCreateWithoutSatkertypeInput = {
    code: string;
    desc: string;
    pegawai?: Prisma.PegawaiCreateNestedManyWithoutSatkerObjInput;
    rencanaAksi?: Prisma.RencanaAksiCreateNestedManyWithoutSatkerObjInput;
};
export type SatkerUncheckedCreateWithoutSatkertypeInput = {
    code: string;
    desc: string;
    pegawai?: Prisma.PegawaiUncheckedCreateNestedManyWithoutSatkerObjInput;
    rencanaAksi?: Prisma.RencanaAksiUncheckedCreateNestedManyWithoutSatkerObjInput;
};
export type SatkerCreateOrConnectWithoutSatkertypeInput = {
    where: Prisma.SatkerWhereUniqueInput;
    create: Prisma.XOR<Prisma.SatkerCreateWithoutSatkertypeInput, Prisma.SatkerUncheckedCreateWithoutSatkertypeInput>;
};
export type SatkerCreateManySatkertypeInputEnvelope = {
    data: Prisma.SatkerCreateManySatkertypeInput | Prisma.SatkerCreateManySatkertypeInput[];
    skipDuplicates?: boolean;
};
export type SatkerUpsertWithWhereUniqueWithoutSatkertypeInput = {
    where: Prisma.SatkerWhereUniqueInput;
    update: Prisma.XOR<Prisma.SatkerUpdateWithoutSatkertypeInput, Prisma.SatkerUncheckedUpdateWithoutSatkertypeInput>;
    create: Prisma.XOR<Prisma.SatkerCreateWithoutSatkertypeInput, Prisma.SatkerUncheckedCreateWithoutSatkertypeInput>;
};
export type SatkerUpdateWithWhereUniqueWithoutSatkertypeInput = {
    where: Prisma.SatkerWhereUniqueInput;
    data: Prisma.XOR<Prisma.SatkerUpdateWithoutSatkertypeInput, Prisma.SatkerUncheckedUpdateWithoutSatkertypeInput>;
};
export type SatkerUpdateManyWithWhereWithoutSatkertypeInput = {
    where: Prisma.SatkerScalarWhereInput;
    data: Prisma.XOR<Prisma.SatkerUpdateManyMutationInput, Prisma.SatkerUncheckedUpdateManyWithoutSatkertypeInput>;
};
export type SatkerScalarWhereInput = {
    AND?: Prisma.SatkerScalarWhereInput | Prisma.SatkerScalarWhereInput[];
    OR?: Prisma.SatkerScalarWhereInput[];
    NOT?: Prisma.SatkerScalarWhereInput | Prisma.SatkerScalarWhereInput[];
    code?: Prisma.StringFilter<"Satker"> | string;
    desc?: Prisma.StringFilter<"Satker"> | string;
    type?: Prisma.IntFilter<"Satker"> | number;
};
export type SatkerCreateWithoutRencanaAksiInput = {
    code: string;
    desc: string;
    satkertype: Prisma.SatkerTypeCreateNestedOneWithoutSatkerInput;
    pegawai?: Prisma.PegawaiCreateNestedManyWithoutSatkerObjInput;
};
export type SatkerUncheckedCreateWithoutRencanaAksiInput = {
    code: string;
    desc: string;
    type: number;
    pegawai?: Prisma.PegawaiUncheckedCreateNestedManyWithoutSatkerObjInput;
};
export type SatkerCreateOrConnectWithoutRencanaAksiInput = {
    where: Prisma.SatkerWhereUniqueInput;
    create: Prisma.XOR<Prisma.SatkerCreateWithoutRencanaAksiInput, Prisma.SatkerUncheckedCreateWithoutRencanaAksiInput>;
};
export type SatkerUpsertWithoutRencanaAksiInput = {
    update: Prisma.XOR<Prisma.SatkerUpdateWithoutRencanaAksiInput, Prisma.SatkerUncheckedUpdateWithoutRencanaAksiInput>;
    create: Prisma.XOR<Prisma.SatkerCreateWithoutRencanaAksiInput, Prisma.SatkerUncheckedCreateWithoutRencanaAksiInput>;
    where?: Prisma.SatkerWhereInput;
};
export type SatkerUpdateToOneWithWhereWithoutRencanaAksiInput = {
    where?: Prisma.SatkerWhereInput;
    data: Prisma.XOR<Prisma.SatkerUpdateWithoutRencanaAksiInput, Prisma.SatkerUncheckedUpdateWithoutRencanaAksiInput>;
};
export type SatkerUpdateWithoutRencanaAksiInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    satkertype?: Prisma.SatkerTypeUpdateOneRequiredWithoutSatkerNestedInput;
    pegawai?: Prisma.PegawaiUpdateManyWithoutSatkerObjNestedInput;
};
export type SatkerUncheckedUpdateWithoutRencanaAksiInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.IntFieldUpdateOperationsInput | number;
    pegawai?: Prisma.PegawaiUncheckedUpdateManyWithoutSatkerObjNestedInput;
};
export type SatkerCreateManySatkertypeInput = {
    code: string;
    desc: string;
};
export type SatkerUpdateWithoutSatkertypeInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    pegawai?: Prisma.PegawaiUpdateManyWithoutSatkerObjNestedInput;
    rencanaAksi?: Prisma.RencanaAksiUpdateManyWithoutSatkerObjNestedInput;
};
export type SatkerUncheckedUpdateWithoutSatkertypeInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    pegawai?: Prisma.PegawaiUncheckedUpdateManyWithoutSatkerObjNestedInput;
    rencanaAksi?: Prisma.RencanaAksiUncheckedUpdateManyWithoutSatkerObjNestedInput;
};
export type SatkerUncheckedUpdateManyWithoutSatkertypeInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type SatkerCountOutputType
 */
export type SatkerCountOutputType = {
    pegawai: number;
    rencanaAksi: number;
};
export type SatkerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pegawai?: boolean | SatkerCountOutputTypeCountPegawaiArgs;
    rencanaAksi?: boolean | SatkerCountOutputTypeCountRencanaAksiArgs;
};
/**
 * SatkerCountOutputType without action
 */
export type SatkerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatkerCountOutputType
     */
    select?: Prisma.SatkerCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * SatkerCountOutputType without action
 */
export type SatkerCountOutputTypeCountPegawaiArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PegawaiWhereInput;
};
/**
 * SatkerCountOutputType without action
 */
export type SatkerCountOutputTypeCountRencanaAksiArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RencanaAksiWhereInput;
};
export type SatkerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    desc?: boolean;
    type?: boolean;
    satkertype?: boolean | Prisma.SatkerTypeDefaultArgs<ExtArgs>;
    pegawai?: boolean | Prisma.Satker$pegawaiArgs<ExtArgs>;
    rencanaAksi?: boolean | Prisma.Satker$rencanaAksiArgs<ExtArgs>;
    _count?: boolean | Prisma.SatkerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["satker"]>;
export type SatkerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    desc?: boolean;
    type?: boolean;
    satkertype?: boolean | Prisma.SatkerTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["satker"]>;
export type SatkerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    desc?: boolean;
    type?: boolean;
    satkertype?: boolean | Prisma.SatkerTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["satker"]>;
export type SatkerSelectScalar = {
    code?: boolean;
    desc?: boolean;
    type?: boolean;
};
export type SatkerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"code" | "desc" | "type", ExtArgs["result"]["satker"]>;
export type SatkerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    satkertype?: boolean | Prisma.SatkerTypeDefaultArgs<ExtArgs>;
    pegawai?: boolean | Prisma.Satker$pegawaiArgs<ExtArgs>;
    rencanaAksi?: boolean | Prisma.Satker$rencanaAksiArgs<ExtArgs>;
    _count?: boolean | Prisma.SatkerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SatkerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    satkertype?: boolean | Prisma.SatkerTypeDefaultArgs<ExtArgs>;
};
export type SatkerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    satkertype?: boolean | Prisma.SatkerTypeDefaultArgs<ExtArgs>;
};
export type $SatkerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Satker";
    objects: {
        satkertype: Prisma.$SatkerTypePayload<ExtArgs>;
        pegawai: Prisma.$PegawaiPayload<ExtArgs>[];
        rencanaAksi: Prisma.$RencanaAksiPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        code: string;
        desc: string;
        type: number;
    }, ExtArgs["result"]["satker"]>;
    composites: {};
};
export type SatkerGetPayload<S extends boolean | null | undefined | SatkerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SatkerPayload, S>;
export type SatkerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SatkerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SatkerCountAggregateInputType | true;
};
export interface SatkerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Satker'];
        meta: {
            name: 'Satker';
        };
    };
    /**
     * Find zero or one Satker that matches the filter.
     * @param {SatkerFindUniqueArgs} args - Arguments to find a Satker
     * @example
     * // Get one Satker
     * const satker = await prisma.satker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SatkerFindUniqueArgs>(args: Prisma.SelectSubset<T, SatkerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SatkerClient<runtime.Types.Result.GetResult<Prisma.$SatkerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Satker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SatkerFindUniqueOrThrowArgs} args - Arguments to find a Satker
     * @example
     * // Get one Satker
     * const satker = await prisma.satker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SatkerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SatkerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SatkerClient<runtime.Types.Result.GetResult<Prisma.$SatkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Satker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatkerFindFirstArgs} args - Arguments to find a Satker
     * @example
     * // Get one Satker
     * const satker = await prisma.satker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SatkerFindFirstArgs>(args?: Prisma.SelectSubset<T, SatkerFindFirstArgs<ExtArgs>>): Prisma.Prisma__SatkerClient<runtime.Types.Result.GetResult<Prisma.$SatkerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Satker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatkerFindFirstOrThrowArgs} args - Arguments to find a Satker
     * @example
     * // Get one Satker
     * const satker = await prisma.satker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SatkerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SatkerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SatkerClient<runtime.Types.Result.GetResult<Prisma.$SatkerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Satkers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatkerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Satkers
     * const satkers = await prisma.satker.findMany()
     *
     * // Get first 10 Satkers
     * const satkers = await prisma.satker.findMany({ take: 10 })
     *
     * // Only select the `code`
     * const satkerWithCodeOnly = await prisma.satker.findMany({ select: { code: true } })
     *
     */
    findMany<T extends SatkerFindManyArgs>(args?: Prisma.SelectSubset<T, SatkerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SatkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Satker.
     * @param {SatkerCreateArgs} args - Arguments to create a Satker.
     * @example
     * // Create one Satker
     * const Satker = await prisma.satker.create({
     *   data: {
     *     // ... data to create a Satker
     *   }
     * })
     *
     */
    create<T extends SatkerCreateArgs>(args: Prisma.SelectSubset<T, SatkerCreateArgs<ExtArgs>>): Prisma.Prisma__SatkerClient<runtime.Types.Result.GetResult<Prisma.$SatkerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Satkers.
     * @param {SatkerCreateManyArgs} args - Arguments to create many Satkers.
     * @example
     * // Create many Satkers
     * const satker = await prisma.satker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SatkerCreateManyArgs>(args?: Prisma.SelectSubset<T, SatkerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Satkers and returns the data saved in the database.
     * @param {SatkerCreateManyAndReturnArgs} args - Arguments to create many Satkers.
     * @example
     * // Create many Satkers
     * const satker = await prisma.satker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Satkers and only return the `code`
     * const satkerWithCodeOnly = await prisma.satker.createManyAndReturn({
     *   select: { code: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SatkerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SatkerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SatkerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Satker.
     * @param {SatkerDeleteArgs} args - Arguments to delete one Satker.
     * @example
     * // Delete one Satker
     * const Satker = await prisma.satker.delete({
     *   where: {
     *     // ... filter to delete one Satker
     *   }
     * })
     *
     */
    delete<T extends SatkerDeleteArgs>(args: Prisma.SelectSubset<T, SatkerDeleteArgs<ExtArgs>>): Prisma.Prisma__SatkerClient<runtime.Types.Result.GetResult<Prisma.$SatkerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Satker.
     * @param {SatkerUpdateArgs} args - Arguments to update one Satker.
     * @example
     * // Update one Satker
     * const satker = await prisma.satker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SatkerUpdateArgs>(args: Prisma.SelectSubset<T, SatkerUpdateArgs<ExtArgs>>): Prisma.Prisma__SatkerClient<runtime.Types.Result.GetResult<Prisma.$SatkerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Satkers.
     * @param {SatkerDeleteManyArgs} args - Arguments to filter Satkers to delete.
     * @example
     * // Delete a few Satkers
     * const { count } = await prisma.satker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SatkerDeleteManyArgs>(args?: Prisma.SelectSubset<T, SatkerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Satkers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatkerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Satkers
     * const satker = await prisma.satker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SatkerUpdateManyArgs>(args: Prisma.SelectSubset<T, SatkerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Satkers and returns the data updated in the database.
     * @param {SatkerUpdateManyAndReturnArgs} args - Arguments to update many Satkers.
     * @example
     * // Update many Satkers
     * const satker = await prisma.satker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Satkers and only return the `code`
     * const satkerWithCodeOnly = await prisma.satker.updateManyAndReturn({
     *   select: { code: true },
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
    updateManyAndReturn<T extends SatkerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SatkerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SatkerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Satker.
     * @param {SatkerUpsertArgs} args - Arguments to update or create a Satker.
     * @example
     * // Update or create a Satker
     * const satker = await prisma.satker.upsert({
     *   create: {
     *     // ... data to create a Satker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Satker we want to update
     *   }
     * })
     */
    upsert<T extends SatkerUpsertArgs>(args: Prisma.SelectSubset<T, SatkerUpsertArgs<ExtArgs>>): Prisma.Prisma__SatkerClient<runtime.Types.Result.GetResult<Prisma.$SatkerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Satkers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatkerCountArgs} args - Arguments to filter Satkers to count.
     * @example
     * // Count the number of Satkers
     * const count = await prisma.satker.count({
     *   where: {
     *     // ... the filter for the Satkers we want to count
     *   }
     * })
    **/
    count<T extends SatkerCountArgs>(args?: Prisma.Subset<T, SatkerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SatkerCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Satker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatkerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SatkerAggregateArgs>(args: Prisma.Subset<T, SatkerAggregateArgs>): Prisma.PrismaPromise<GetSatkerAggregateType<T>>;
    /**
     * Group by Satker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatkerGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SatkerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SatkerGroupByArgs['orderBy'];
    } : {
        orderBy?: SatkerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SatkerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSatkerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Satker model
     */
    readonly fields: SatkerFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Satker.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SatkerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    satkertype<T extends Prisma.SatkerTypeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SatkerTypeDefaultArgs<ExtArgs>>): Prisma.Prisma__SatkerTypeClient<runtime.Types.Result.GetResult<Prisma.$SatkerTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    pegawai<T extends Prisma.Satker$pegawaiArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Satker$pegawaiArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    rencanaAksi<T extends Prisma.Satker$rencanaAksiArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Satker$rencanaAksiArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RencanaAksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Satker model
 */
export interface SatkerFieldRefs {
    readonly code: Prisma.FieldRef<"Satker", 'String'>;
    readonly desc: Prisma.FieldRef<"Satker", 'String'>;
    readonly type: Prisma.FieldRef<"Satker", 'Int'>;
}
/**
 * Satker findUnique
 */
export type SatkerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satker
     */
    select?: Prisma.SatkerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Satker
     */
    omit?: Prisma.SatkerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SatkerInclude<ExtArgs> | null;
    /**
     * Filter, which Satker to fetch.
     */
    where: Prisma.SatkerWhereUniqueInput;
};
/**
 * Satker findUniqueOrThrow
 */
export type SatkerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satker
     */
    select?: Prisma.SatkerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Satker
     */
    omit?: Prisma.SatkerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SatkerInclude<ExtArgs> | null;
    /**
     * Filter, which Satker to fetch.
     */
    where: Prisma.SatkerWhereUniqueInput;
};
/**
 * Satker findFirst
 */
export type SatkerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satker
     */
    select?: Prisma.SatkerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Satker
     */
    omit?: Prisma.SatkerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SatkerInclude<ExtArgs> | null;
    /**
     * Filter, which Satker to fetch.
     */
    where?: Prisma.SatkerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Satkers to fetch.
     */
    orderBy?: Prisma.SatkerOrderByWithRelationInput | Prisma.SatkerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Satkers.
     */
    cursor?: Prisma.SatkerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Satkers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Satkers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Satkers.
     */
    distinct?: Prisma.SatkerScalarFieldEnum | Prisma.SatkerScalarFieldEnum[];
};
/**
 * Satker findFirstOrThrow
 */
export type SatkerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satker
     */
    select?: Prisma.SatkerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Satker
     */
    omit?: Prisma.SatkerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SatkerInclude<ExtArgs> | null;
    /**
     * Filter, which Satker to fetch.
     */
    where?: Prisma.SatkerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Satkers to fetch.
     */
    orderBy?: Prisma.SatkerOrderByWithRelationInput | Prisma.SatkerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Satkers.
     */
    cursor?: Prisma.SatkerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Satkers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Satkers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Satkers.
     */
    distinct?: Prisma.SatkerScalarFieldEnum | Prisma.SatkerScalarFieldEnum[];
};
/**
 * Satker findMany
 */
export type SatkerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satker
     */
    select?: Prisma.SatkerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Satker
     */
    omit?: Prisma.SatkerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SatkerInclude<ExtArgs> | null;
    /**
     * Filter, which Satkers to fetch.
     */
    where?: Prisma.SatkerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Satkers to fetch.
     */
    orderBy?: Prisma.SatkerOrderByWithRelationInput | Prisma.SatkerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Satkers.
     */
    cursor?: Prisma.SatkerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Satkers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Satkers.
     */
    skip?: number;
    distinct?: Prisma.SatkerScalarFieldEnum | Prisma.SatkerScalarFieldEnum[];
};
/**
 * Satker create
 */
export type SatkerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satker
     */
    select?: Prisma.SatkerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Satker
     */
    omit?: Prisma.SatkerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SatkerInclude<ExtArgs> | null;
    /**
     * The data needed to create a Satker.
     */
    data: Prisma.XOR<Prisma.SatkerCreateInput, Prisma.SatkerUncheckedCreateInput>;
};
/**
 * Satker createMany
 */
export type SatkerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Satkers.
     */
    data: Prisma.SatkerCreateManyInput | Prisma.SatkerCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Satker createManyAndReturn
 */
export type SatkerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satker
     */
    select?: Prisma.SatkerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Satker
     */
    omit?: Prisma.SatkerOmit<ExtArgs> | null;
    /**
     * The data used to create many Satkers.
     */
    data: Prisma.SatkerCreateManyInput | Prisma.SatkerCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SatkerIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Satker update
 */
export type SatkerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satker
     */
    select?: Prisma.SatkerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Satker
     */
    omit?: Prisma.SatkerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SatkerInclude<ExtArgs> | null;
    /**
     * The data needed to update a Satker.
     */
    data: Prisma.XOR<Prisma.SatkerUpdateInput, Prisma.SatkerUncheckedUpdateInput>;
    /**
     * Choose, which Satker to update.
     */
    where: Prisma.SatkerWhereUniqueInput;
};
/**
 * Satker updateMany
 */
export type SatkerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Satkers.
     */
    data: Prisma.XOR<Prisma.SatkerUpdateManyMutationInput, Prisma.SatkerUncheckedUpdateManyInput>;
    /**
     * Filter which Satkers to update
     */
    where?: Prisma.SatkerWhereInput;
    /**
     * Limit how many Satkers to update.
     */
    limit?: number;
};
/**
 * Satker updateManyAndReturn
 */
export type SatkerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satker
     */
    select?: Prisma.SatkerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Satker
     */
    omit?: Prisma.SatkerOmit<ExtArgs> | null;
    /**
     * The data used to update Satkers.
     */
    data: Prisma.XOR<Prisma.SatkerUpdateManyMutationInput, Prisma.SatkerUncheckedUpdateManyInput>;
    /**
     * Filter which Satkers to update
     */
    where?: Prisma.SatkerWhereInput;
    /**
     * Limit how many Satkers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SatkerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Satker upsert
 */
export type SatkerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satker
     */
    select?: Prisma.SatkerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Satker
     */
    omit?: Prisma.SatkerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SatkerInclude<ExtArgs> | null;
    /**
     * The filter to search for the Satker to update in case it exists.
     */
    where: Prisma.SatkerWhereUniqueInput;
    /**
     * In case the Satker found by the `where` argument doesn't exist, create a new Satker with this data.
     */
    create: Prisma.XOR<Prisma.SatkerCreateInput, Prisma.SatkerUncheckedCreateInput>;
    /**
     * In case the Satker was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SatkerUpdateInput, Prisma.SatkerUncheckedUpdateInput>;
};
/**
 * Satker delete
 */
export type SatkerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satker
     */
    select?: Prisma.SatkerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Satker
     */
    omit?: Prisma.SatkerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SatkerInclude<ExtArgs> | null;
    /**
     * Filter which Satker to delete.
     */
    where: Prisma.SatkerWhereUniqueInput;
};
/**
 * Satker deleteMany
 */
export type SatkerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Satkers to delete
     */
    where?: Prisma.SatkerWhereInput;
    /**
     * Limit how many Satkers to delete.
     */
    limit?: number;
};
/**
 * Satker.pegawai
 */
export type Satker$pegawaiArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.PegawaiOrderByWithRelationInput | Prisma.PegawaiOrderByWithRelationInput[];
    cursor?: Prisma.PegawaiWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PegawaiScalarFieldEnum | Prisma.PegawaiScalarFieldEnum[];
};
/**
 * Satker.rencanaAksi
 */
export type Satker$rencanaAksiArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Satker without action
 */
export type SatkerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Satker
     */
    select?: Prisma.SatkerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Satker
     */
    omit?: Prisma.SatkerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SatkerInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Satker.d.ts.map