import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model MasterIntervensiNasional
 *
 */
export type MasterIntervensiNasionalModel = runtime.Types.Result.DefaultSelection<Prisma.$MasterIntervensiNasionalPayload>;
export type AggregateMasterIntervensiNasional = {
    _count: MasterIntervensiNasionalCountAggregateOutputType | null;
    _avg: MasterIntervensiNasionalAvgAggregateOutputType | null;
    _sum: MasterIntervensiNasionalSumAggregateOutputType | null;
    _min: MasterIntervensiNasionalMinAggregateOutputType | null;
    _max: MasterIntervensiNasionalMaxAggregateOutputType | null;
};
export type MasterIntervensiNasionalAvgAggregateOutputType = {
    tahun: number | null;
};
export type MasterIntervensiNasionalSumAggregateOutputType = {
    tahun: number | null;
};
export type MasterIntervensiNasionalMinAggregateOutputType = {
    uuid: string | null;
    nama_program: string | null;
    uraian_kegiatan: string | null;
    isu_strategis: string | null;
    output: string | null;
    timeline: string | null;
    ukuran_keberhasilan: string | null;
    outcome: string | null;
    keterangan: string | null;
    tahun: number | null;
    last_updated: Date | null;
    created_by: string | null;
};
export type MasterIntervensiNasionalMaxAggregateOutputType = {
    uuid: string | null;
    nama_program: string | null;
    uraian_kegiatan: string | null;
    isu_strategis: string | null;
    output: string | null;
    timeline: string | null;
    ukuran_keberhasilan: string | null;
    outcome: string | null;
    keterangan: string | null;
    tahun: number | null;
    last_updated: Date | null;
    created_by: string | null;
};
export type MasterIntervensiNasionalCountAggregateOutputType = {
    uuid: number;
    nama_program: number;
    uraian_kegiatan: number;
    isu_strategis: number;
    output: number;
    timeline: number;
    ukuran_keberhasilan: number;
    outcome: number;
    keterangan: number;
    tahun: number;
    last_updated: number;
    created_by: number;
    _all: number;
};
export type MasterIntervensiNasionalAvgAggregateInputType = {
    tahun?: true;
};
export type MasterIntervensiNasionalSumAggregateInputType = {
    tahun?: true;
};
export type MasterIntervensiNasionalMinAggregateInputType = {
    uuid?: true;
    nama_program?: true;
    uraian_kegiatan?: true;
    isu_strategis?: true;
    output?: true;
    timeline?: true;
    ukuran_keberhasilan?: true;
    outcome?: true;
    keterangan?: true;
    tahun?: true;
    last_updated?: true;
    created_by?: true;
};
export type MasterIntervensiNasionalMaxAggregateInputType = {
    uuid?: true;
    nama_program?: true;
    uraian_kegiatan?: true;
    isu_strategis?: true;
    output?: true;
    timeline?: true;
    ukuran_keberhasilan?: true;
    outcome?: true;
    keterangan?: true;
    tahun?: true;
    last_updated?: true;
    created_by?: true;
};
export type MasterIntervensiNasionalCountAggregateInputType = {
    uuid?: true;
    nama_program?: true;
    uraian_kegiatan?: true;
    isu_strategis?: true;
    output?: true;
    timeline?: true;
    ukuran_keberhasilan?: true;
    outcome?: true;
    keterangan?: true;
    tahun?: true;
    last_updated?: true;
    created_by?: true;
    _all?: true;
};
export type MasterIntervensiNasionalAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MasterIntervensiNasional to aggregate.
     */
    where?: Prisma.MasterIntervensiNasionalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MasterIntervensiNasionals to fetch.
     */
    orderBy?: Prisma.MasterIntervensiNasionalOrderByWithRelationInput | Prisma.MasterIntervensiNasionalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MasterIntervensiNasionalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MasterIntervensiNasionals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MasterIntervensiNasionals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MasterIntervensiNasionals
    **/
    _count?: true | MasterIntervensiNasionalCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MasterIntervensiNasionalAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MasterIntervensiNasionalSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MasterIntervensiNasionalMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MasterIntervensiNasionalMaxAggregateInputType;
};
export type GetMasterIntervensiNasionalAggregateType<T extends MasterIntervensiNasionalAggregateArgs> = {
    [P in keyof T & keyof AggregateMasterIntervensiNasional]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMasterIntervensiNasional[P]> : Prisma.GetScalarType<T[P], AggregateMasterIntervensiNasional[P]>;
};
export type MasterIntervensiNasionalGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MasterIntervensiNasionalWhereInput;
    orderBy?: Prisma.MasterIntervensiNasionalOrderByWithAggregationInput | Prisma.MasterIntervensiNasionalOrderByWithAggregationInput[];
    by: Prisma.MasterIntervensiNasionalScalarFieldEnum[] | Prisma.MasterIntervensiNasionalScalarFieldEnum;
    having?: Prisma.MasterIntervensiNasionalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MasterIntervensiNasionalCountAggregateInputType | true;
    _avg?: MasterIntervensiNasionalAvgAggregateInputType;
    _sum?: MasterIntervensiNasionalSumAggregateInputType;
    _min?: MasterIntervensiNasionalMinAggregateInputType;
    _max?: MasterIntervensiNasionalMaxAggregateInputType;
};
export type MasterIntervensiNasionalGroupByOutputType = {
    uuid: string;
    nama_program: string | null;
    uraian_kegiatan: string | null;
    isu_strategis: string | null;
    output: string | null;
    timeline: string | null;
    ukuran_keberhasilan: string | null;
    outcome: string | null;
    keterangan: string;
    tahun: number;
    last_updated: Date;
    created_by: string;
    _count: MasterIntervensiNasionalCountAggregateOutputType | null;
    _avg: MasterIntervensiNasionalAvgAggregateOutputType | null;
    _sum: MasterIntervensiNasionalSumAggregateOutputType | null;
    _min: MasterIntervensiNasionalMinAggregateOutputType | null;
    _max: MasterIntervensiNasionalMaxAggregateOutputType | null;
};
type GetMasterIntervensiNasionalGroupByPayload<T extends MasterIntervensiNasionalGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MasterIntervensiNasionalGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MasterIntervensiNasionalGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MasterIntervensiNasionalGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MasterIntervensiNasionalGroupByOutputType[P]>;
}>>;
export type MasterIntervensiNasionalWhereInput = {
    AND?: Prisma.MasterIntervensiNasionalWhereInput | Prisma.MasterIntervensiNasionalWhereInput[];
    OR?: Prisma.MasterIntervensiNasionalWhereInput[];
    NOT?: Prisma.MasterIntervensiNasionalWhereInput | Prisma.MasterIntervensiNasionalWhereInput[];
    uuid?: Prisma.StringFilter<"MasterIntervensiNasional"> | string;
    nama_program?: Prisma.StringNullableFilter<"MasterIntervensiNasional"> | string | null;
    uraian_kegiatan?: Prisma.StringNullableFilter<"MasterIntervensiNasional"> | string | null;
    isu_strategis?: Prisma.StringNullableFilter<"MasterIntervensiNasional"> | string | null;
    output?: Prisma.StringNullableFilter<"MasterIntervensiNasional"> | string | null;
    timeline?: Prisma.StringNullableFilter<"MasterIntervensiNasional"> | string | null;
    ukuran_keberhasilan?: Prisma.StringNullableFilter<"MasterIntervensiNasional"> | string | null;
    outcome?: Prisma.StringNullableFilter<"MasterIntervensiNasional"> | string | null;
    keterangan?: Prisma.StringFilter<"MasterIntervensiNasional"> | string;
    tahun?: Prisma.IntFilter<"MasterIntervensiNasional"> | number;
    last_updated?: Prisma.DateTimeFilter<"MasterIntervensiNasional"> | Date | string;
    created_by?: Prisma.StringFilter<"MasterIntervensiNasional"> | string;
    programIntervensiObj?: Prisma.ProgramIntervensiListRelationFilter;
};
export type MasterIntervensiNasionalOrderByWithRelationInput = {
    uuid?: Prisma.SortOrder;
    nama_program?: Prisma.SortOrderInput | Prisma.SortOrder;
    uraian_kegiatan?: Prisma.SortOrderInput | Prisma.SortOrder;
    isu_strategis?: Prisma.SortOrderInput | Prisma.SortOrder;
    output?: Prisma.SortOrderInput | Prisma.SortOrder;
    timeline?: Prisma.SortOrderInput | Prisma.SortOrder;
    ukuran_keberhasilan?: Prisma.SortOrderInput | Prisma.SortOrder;
    outcome?: Prisma.SortOrderInput | Prisma.SortOrder;
    keterangan?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    programIntervensiObj?: Prisma.ProgramIntervensiOrderByRelationAggregateInput;
};
export type MasterIntervensiNasionalWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string;
    AND?: Prisma.MasterIntervensiNasionalWhereInput | Prisma.MasterIntervensiNasionalWhereInput[];
    OR?: Prisma.MasterIntervensiNasionalWhereInput[];
    NOT?: Prisma.MasterIntervensiNasionalWhereInput | Prisma.MasterIntervensiNasionalWhereInput[];
    nama_program?: Prisma.StringNullableFilter<"MasterIntervensiNasional"> | string | null;
    uraian_kegiatan?: Prisma.StringNullableFilter<"MasterIntervensiNasional"> | string | null;
    isu_strategis?: Prisma.StringNullableFilter<"MasterIntervensiNasional"> | string | null;
    output?: Prisma.StringNullableFilter<"MasterIntervensiNasional"> | string | null;
    timeline?: Prisma.StringNullableFilter<"MasterIntervensiNasional"> | string | null;
    ukuran_keberhasilan?: Prisma.StringNullableFilter<"MasterIntervensiNasional"> | string | null;
    outcome?: Prisma.StringNullableFilter<"MasterIntervensiNasional"> | string | null;
    keterangan?: Prisma.StringFilter<"MasterIntervensiNasional"> | string;
    tahun?: Prisma.IntFilter<"MasterIntervensiNasional"> | number;
    last_updated?: Prisma.DateTimeFilter<"MasterIntervensiNasional"> | Date | string;
    created_by?: Prisma.StringFilter<"MasterIntervensiNasional"> | string;
    programIntervensiObj?: Prisma.ProgramIntervensiListRelationFilter;
}, "uuid">;
export type MasterIntervensiNasionalOrderByWithAggregationInput = {
    uuid?: Prisma.SortOrder;
    nama_program?: Prisma.SortOrderInput | Prisma.SortOrder;
    uraian_kegiatan?: Prisma.SortOrderInput | Prisma.SortOrder;
    isu_strategis?: Prisma.SortOrderInput | Prisma.SortOrder;
    output?: Prisma.SortOrderInput | Prisma.SortOrder;
    timeline?: Prisma.SortOrderInput | Prisma.SortOrder;
    ukuran_keberhasilan?: Prisma.SortOrderInput | Prisma.SortOrder;
    outcome?: Prisma.SortOrderInput | Prisma.SortOrder;
    keterangan?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    _count?: Prisma.MasterIntervensiNasionalCountOrderByAggregateInput;
    _avg?: Prisma.MasterIntervensiNasionalAvgOrderByAggregateInput;
    _max?: Prisma.MasterIntervensiNasionalMaxOrderByAggregateInput;
    _min?: Prisma.MasterIntervensiNasionalMinOrderByAggregateInput;
    _sum?: Prisma.MasterIntervensiNasionalSumOrderByAggregateInput;
};
export type MasterIntervensiNasionalScalarWhereWithAggregatesInput = {
    AND?: Prisma.MasterIntervensiNasionalScalarWhereWithAggregatesInput | Prisma.MasterIntervensiNasionalScalarWhereWithAggregatesInput[];
    OR?: Prisma.MasterIntervensiNasionalScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MasterIntervensiNasionalScalarWhereWithAggregatesInput | Prisma.MasterIntervensiNasionalScalarWhereWithAggregatesInput[];
    uuid?: Prisma.StringWithAggregatesFilter<"MasterIntervensiNasional"> | string;
    nama_program?: Prisma.StringNullableWithAggregatesFilter<"MasterIntervensiNasional"> | string | null;
    uraian_kegiatan?: Prisma.StringNullableWithAggregatesFilter<"MasterIntervensiNasional"> | string | null;
    isu_strategis?: Prisma.StringNullableWithAggregatesFilter<"MasterIntervensiNasional"> | string | null;
    output?: Prisma.StringNullableWithAggregatesFilter<"MasterIntervensiNasional"> | string | null;
    timeline?: Prisma.StringNullableWithAggregatesFilter<"MasterIntervensiNasional"> | string | null;
    ukuran_keberhasilan?: Prisma.StringNullableWithAggregatesFilter<"MasterIntervensiNasional"> | string | null;
    outcome?: Prisma.StringNullableWithAggregatesFilter<"MasterIntervensiNasional"> | string | null;
    keterangan?: Prisma.StringWithAggregatesFilter<"MasterIntervensiNasional"> | string;
    tahun?: Prisma.IntWithAggregatesFilter<"MasterIntervensiNasional"> | number;
    last_updated?: Prisma.DateTimeWithAggregatesFilter<"MasterIntervensiNasional"> | Date | string;
    created_by?: Prisma.StringWithAggregatesFilter<"MasterIntervensiNasional"> | string;
};
export type MasterIntervensiNasionalCreateInput = {
    uuid?: string;
    nama_program?: string | null;
    uraian_kegiatan?: string | null;
    isu_strategis?: string | null;
    output?: string | null;
    timeline?: string | null;
    ukuran_keberhasilan?: string | null;
    outcome?: string | null;
    keterangan: string;
    tahun: number;
    last_updated?: Date | string;
    created_by: string;
    programIntervensiObj?: Prisma.ProgramIntervensiCreateNestedManyWithoutIntervensiObjInput;
};
export type MasterIntervensiNasionalUncheckedCreateInput = {
    uuid?: string;
    nama_program?: string | null;
    uraian_kegiatan?: string | null;
    isu_strategis?: string | null;
    output?: string | null;
    timeline?: string | null;
    ukuran_keberhasilan?: string | null;
    outcome?: string | null;
    keterangan: string;
    tahun: number;
    last_updated?: Date | string;
    created_by: string;
    programIntervensiObj?: Prisma.ProgramIntervensiUncheckedCreateNestedManyWithoutIntervensiObjInput;
};
export type MasterIntervensiNasionalUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_program?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uraian_kegiatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isu_strategis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keterangan?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    programIntervensiObj?: Prisma.ProgramIntervensiUpdateManyWithoutIntervensiObjNestedInput;
};
export type MasterIntervensiNasionalUncheckedUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_program?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uraian_kegiatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isu_strategis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keterangan?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    programIntervensiObj?: Prisma.ProgramIntervensiUncheckedUpdateManyWithoutIntervensiObjNestedInput;
};
export type MasterIntervensiNasionalCreateManyInput = {
    uuid?: string;
    nama_program?: string | null;
    uraian_kegiatan?: string | null;
    isu_strategis?: string | null;
    output?: string | null;
    timeline?: string | null;
    ukuran_keberhasilan?: string | null;
    outcome?: string | null;
    keterangan: string;
    tahun: number;
    last_updated?: Date | string;
    created_by: string;
};
export type MasterIntervensiNasionalUpdateManyMutationInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_program?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uraian_kegiatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isu_strategis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keterangan?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MasterIntervensiNasionalUncheckedUpdateManyInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_program?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uraian_kegiatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isu_strategis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keterangan?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MasterIntervensiNasionalCountOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    nama_program?: Prisma.SortOrder;
    uraian_kegiatan?: Prisma.SortOrder;
    isu_strategis?: Prisma.SortOrder;
    output?: Prisma.SortOrder;
    timeline?: Prisma.SortOrder;
    ukuran_keberhasilan?: Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    keterangan?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type MasterIntervensiNasionalAvgOrderByAggregateInput = {
    tahun?: Prisma.SortOrder;
};
export type MasterIntervensiNasionalMaxOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    nama_program?: Prisma.SortOrder;
    uraian_kegiatan?: Prisma.SortOrder;
    isu_strategis?: Prisma.SortOrder;
    output?: Prisma.SortOrder;
    timeline?: Prisma.SortOrder;
    ukuran_keberhasilan?: Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    keterangan?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type MasterIntervensiNasionalMinOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    nama_program?: Prisma.SortOrder;
    uraian_kegiatan?: Prisma.SortOrder;
    isu_strategis?: Prisma.SortOrder;
    output?: Prisma.SortOrder;
    timeline?: Prisma.SortOrder;
    ukuran_keberhasilan?: Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    keterangan?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type MasterIntervensiNasionalSumOrderByAggregateInput = {
    tahun?: Prisma.SortOrder;
};
export type MasterIntervensiNasionalScalarRelationFilter = {
    is?: Prisma.MasterIntervensiNasionalWhereInput;
    isNot?: Prisma.MasterIntervensiNasionalWhereInput;
};
export type MasterIntervensiNasionalCreateNestedOneWithoutProgramIntervensiObjInput = {
    create?: Prisma.XOR<Prisma.MasterIntervensiNasionalCreateWithoutProgramIntervensiObjInput, Prisma.MasterIntervensiNasionalUncheckedCreateWithoutProgramIntervensiObjInput>;
    connectOrCreate?: Prisma.MasterIntervensiNasionalCreateOrConnectWithoutProgramIntervensiObjInput;
    connect?: Prisma.MasterIntervensiNasionalWhereUniqueInput;
};
export type MasterIntervensiNasionalUpdateOneRequiredWithoutProgramIntervensiObjNestedInput = {
    create?: Prisma.XOR<Prisma.MasterIntervensiNasionalCreateWithoutProgramIntervensiObjInput, Prisma.MasterIntervensiNasionalUncheckedCreateWithoutProgramIntervensiObjInput>;
    connectOrCreate?: Prisma.MasterIntervensiNasionalCreateOrConnectWithoutProgramIntervensiObjInput;
    upsert?: Prisma.MasterIntervensiNasionalUpsertWithoutProgramIntervensiObjInput;
    connect?: Prisma.MasterIntervensiNasionalWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MasterIntervensiNasionalUpdateToOneWithWhereWithoutProgramIntervensiObjInput, Prisma.MasterIntervensiNasionalUpdateWithoutProgramIntervensiObjInput>, Prisma.MasterIntervensiNasionalUncheckedUpdateWithoutProgramIntervensiObjInput>;
};
export type MasterIntervensiNasionalCreateWithoutProgramIntervensiObjInput = {
    uuid?: string;
    nama_program?: string | null;
    uraian_kegiatan?: string | null;
    isu_strategis?: string | null;
    output?: string | null;
    timeline?: string | null;
    ukuran_keberhasilan?: string | null;
    outcome?: string | null;
    keterangan: string;
    tahun: number;
    last_updated?: Date | string;
    created_by: string;
};
export type MasterIntervensiNasionalUncheckedCreateWithoutProgramIntervensiObjInput = {
    uuid?: string;
    nama_program?: string | null;
    uraian_kegiatan?: string | null;
    isu_strategis?: string | null;
    output?: string | null;
    timeline?: string | null;
    ukuran_keberhasilan?: string | null;
    outcome?: string | null;
    keterangan: string;
    tahun: number;
    last_updated?: Date | string;
    created_by: string;
};
export type MasterIntervensiNasionalCreateOrConnectWithoutProgramIntervensiObjInput = {
    where: Prisma.MasterIntervensiNasionalWhereUniqueInput;
    create: Prisma.XOR<Prisma.MasterIntervensiNasionalCreateWithoutProgramIntervensiObjInput, Prisma.MasterIntervensiNasionalUncheckedCreateWithoutProgramIntervensiObjInput>;
};
export type MasterIntervensiNasionalUpsertWithoutProgramIntervensiObjInput = {
    update: Prisma.XOR<Prisma.MasterIntervensiNasionalUpdateWithoutProgramIntervensiObjInput, Prisma.MasterIntervensiNasionalUncheckedUpdateWithoutProgramIntervensiObjInput>;
    create: Prisma.XOR<Prisma.MasterIntervensiNasionalCreateWithoutProgramIntervensiObjInput, Prisma.MasterIntervensiNasionalUncheckedCreateWithoutProgramIntervensiObjInput>;
    where?: Prisma.MasterIntervensiNasionalWhereInput;
};
export type MasterIntervensiNasionalUpdateToOneWithWhereWithoutProgramIntervensiObjInput = {
    where?: Prisma.MasterIntervensiNasionalWhereInput;
    data: Prisma.XOR<Prisma.MasterIntervensiNasionalUpdateWithoutProgramIntervensiObjInput, Prisma.MasterIntervensiNasionalUncheckedUpdateWithoutProgramIntervensiObjInput>;
};
export type MasterIntervensiNasionalUpdateWithoutProgramIntervensiObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_program?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uraian_kegiatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isu_strategis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keterangan?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MasterIntervensiNasionalUncheckedUpdateWithoutProgramIntervensiObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_program?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uraian_kegiatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isu_strategis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keterangan?: Prisma.StringFieldUpdateOperationsInput | string;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type MasterIntervensiNasionalCountOutputType
 */
export type MasterIntervensiNasionalCountOutputType = {
    programIntervensiObj: number;
};
export type MasterIntervensiNasionalCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    programIntervensiObj?: boolean | MasterIntervensiNasionalCountOutputTypeCountProgramIntervensiObjArgs;
};
/**
 * MasterIntervensiNasionalCountOutputType without action
 */
export type MasterIntervensiNasionalCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterIntervensiNasionalCountOutputType
     */
    select?: Prisma.MasterIntervensiNasionalCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * MasterIntervensiNasionalCountOutputType without action
 */
export type MasterIntervensiNasionalCountOutputTypeCountProgramIntervensiObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgramIntervensiWhereInput;
};
export type MasterIntervensiNasionalSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    nama_program?: boolean;
    uraian_kegiatan?: boolean;
    isu_strategis?: boolean;
    output?: boolean;
    timeline?: boolean;
    ukuran_keberhasilan?: boolean;
    outcome?: boolean;
    keterangan?: boolean;
    tahun?: boolean;
    last_updated?: boolean;
    created_by?: boolean;
    programIntervensiObj?: boolean | Prisma.MasterIntervensiNasional$programIntervensiObjArgs<ExtArgs>;
    _count?: boolean | Prisma.MasterIntervensiNasionalCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["masterIntervensiNasional"]>;
export type MasterIntervensiNasionalSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    nama_program?: boolean;
    uraian_kegiatan?: boolean;
    isu_strategis?: boolean;
    output?: boolean;
    timeline?: boolean;
    ukuran_keberhasilan?: boolean;
    outcome?: boolean;
    keterangan?: boolean;
    tahun?: boolean;
    last_updated?: boolean;
    created_by?: boolean;
}, ExtArgs["result"]["masterIntervensiNasional"]>;
export type MasterIntervensiNasionalSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    nama_program?: boolean;
    uraian_kegiatan?: boolean;
    isu_strategis?: boolean;
    output?: boolean;
    timeline?: boolean;
    ukuran_keberhasilan?: boolean;
    outcome?: boolean;
    keterangan?: boolean;
    tahun?: boolean;
    last_updated?: boolean;
    created_by?: boolean;
}, ExtArgs["result"]["masterIntervensiNasional"]>;
export type MasterIntervensiNasionalSelectScalar = {
    uuid?: boolean;
    nama_program?: boolean;
    uraian_kegiatan?: boolean;
    isu_strategis?: boolean;
    output?: boolean;
    timeline?: boolean;
    ukuran_keberhasilan?: boolean;
    outcome?: boolean;
    keterangan?: boolean;
    tahun?: boolean;
    last_updated?: boolean;
    created_by?: boolean;
};
export type MasterIntervensiNasionalOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"uuid" | "nama_program" | "uraian_kegiatan" | "isu_strategis" | "output" | "timeline" | "ukuran_keberhasilan" | "outcome" | "keterangan" | "tahun" | "last_updated" | "created_by", ExtArgs["result"]["masterIntervensiNasional"]>;
export type MasterIntervensiNasionalInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    programIntervensiObj?: boolean | Prisma.MasterIntervensiNasional$programIntervensiObjArgs<ExtArgs>;
    _count?: boolean | Prisma.MasterIntervensiNasionalCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MasterIntervensiNasionalIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type MasterIntervensiNasionalIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $MasterIntervensiNasionalPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MasterIntervensiNasional";
    objects: {
        programIntervensiObj: Prisma.$ProgramIntervensiPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        uuid: string;
        nama_program: string | null;
        uraian_kegiatan: string | null;
        isu_strategis: string | null;
        output: string | null;
        timeline: string | null;
        ukuran_keberhasilan: string | null;
        outcome: string | null;
        keterangan: string;
        tahun: number;
        last_updated: Date;
        created_by: string;
    }, ExtArgs["result"]["masterIntervensiNasional"]>;
    composites: {};
};
export type MasterIntervensiNasionalGetPayload<S extends boolean | null | undefined | MasterIntervensiNasionalDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MasterIntervensiNasionalPayload, S>;
export type MasterIntervensiNasionalCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MasterIntervensiNasionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MasterIntervensiNasionalCountAggregateInputType | true;
};
export interface MasterIntervensiNasionalDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MasterIntervensiNasional'];
        meta: {
            name: 'MasterIntervensiNasional';
        };
    };
    /**
     * Find zero or one MasterIntervensiNasional that matches the filter.
     * @param {MasterIntervensiNasionalFindUniqueArgs} args - Arguments to find a MasterIntervensiNasional
     * @example
     * // Get one MasterIntervensiNasional
     * const masterIntervensiNasional = await prisma.masterIntervensiNasional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MasterIntervensiNasionalFindUniqueArgs>(args: Prisma.SelectSubset<T, MasterIntervensiNasionalFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MasterIntervensiNasionalClient<runtime.Types.Result.GetResult<Prisma.$MasterIntervensiNasionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one MasterIntervensiNasional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MasterIntervensiNasionalFindUniqueOrThrowArgs} args - Arguments to find a MasterIntervensiNasional
     * @example
     * // Get one MasterIntervensiNasional
     * const masterIntervensiNasional = await prisma.masterIntervensiNasional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MasterIntervensiNasionalFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MasterIntervensiNasionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MasterIntervensiNasionalClient<runtime.Types.Result.GetResult<Prisma.$MasterIntervensiNasionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MasterIntervensiNasional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterIntervensiNasionalFindFirstArgs} args - Arguments to find a MasterIntervensiNasional
     * @example
     * // Get one MasterIntervensiNasional
     * const masterIntervensiNasional = await prisma.masterIntervensiNasional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MasterIntervensiNasionalFindFirstArgs>(args?: Prisma.SelectSubset<T, MasterIntervensiNasionalFindFirstArgs<ExtArgs>>): Prisma.Prisma__MasterIntervensiNasionalClient<runtime.Types.Result.GetResult<Prisma.$MasterIntervensiNasionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MasterIntervensiNasional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterIntervensiNasionalFindFirstOrThrowArgs} args - Arguments to find a MasterIntervensiNasional
     * @example
     * // Get one MasterIntervensiNasional
     * const masterIntervensiNasional = await prisma.masterIntervensiNasional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MasterIntervensiNasionalFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MasterIntervensiNasionalFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MasterIntervensiNasionalClient<runtime.Types.Result.GetResult<Prisma.$MasterIntervensiNasionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more MasterIntervensiNasionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterIntervensiNasionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MasterIntervensiNasionals
     * const masterIntervensiNasionals = await prisma.masterIntervensiNasional.findMany()
     *
     * // Get first 10 MasterIntervensiNasionals
     * const masterIntervensiNasionals = await prisma.masterIntervensiNasional.findMany({ take: 10 })
     *
     * // Only select the `uuid`
     * const masterIntervensiNasionalWithUuidOnly = await prisma.masterIntervensiNasional.findMany({ select: { uuid: true } })
     *
     */
    findMany<T extends MasterIntervensiNasionalFindManyArgs>(args?: Prisma.SelectSubset<T, MasterIntervensiNasionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MasterIntervensiNasionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a MasterIntervensiNasional.
     * @param {MasterIntervensiNasionalCreateArgs} args - Arguments to create a MasterIntervensiNasional.
     * @example
     * // Create one MasterIntervensiNasional
     * const MasterIntervensiNasional = await prisma.masterIntervensiNasional.create({
     *   data: {
     *     // ... data to create a MasterIntervensiNasional
     *   }
     * })
     *
     */
    create<T extends MasterIntervensiNasionalCreateArgs>(args: Prisma.SelectSubset<T, MasterIntervensiNasionalCreateArgs<ExtArgs>>): Prisma.Prisma__MasterIntervensiNasionalClient<runtime.Types.Result.GetResult<Prisma.$MasterIntervensiNasionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many MasterIntervensiNasionals.
     * @param {MasterIntervensiNasionalCreateManyArgs} args - Arguments to create many MasterIntervensiNasionals.
     * @example
     * // Create many MasterIntervensiNasionals
     * const masterIntervensiNasional = await prisma.masterIntervensiNasional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MasterIntervensiNasionalCreateManyArgs>(args?: Prisma.SelectSubset<T, MasterIntervensiNasionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many MasterIntervensiNasionals and returns the data saved in the database.
     * @param {MasterIntervensiNasionalCreateManyAndReturnArgs} args - Arguments to create many MasterIntervensiNasionals.
     * @example
     * // Create many MasterIntervensiNasionals
     * const masterIntervensiNasional = await prisma.masterIntervensiNasional.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MasterIntervensiNasionals and only return the `uuid`
     * const masterIntervensiNasionalWithUuidOnly = await prisma.masterIntervensiNasional.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MasterIntervensiNasionalCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MasterIntervensiNasionalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MasterIntervensiNasionalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a MasterIntervensiNasional.
     * @param {MasterIntervensiNasionalDeleteArgs} args - Arguments to delete one MasterIntervensiNasional.
     * @example
     * // Delete one MasterIntervensiNasional
     * const MasterIntervensiNasional = await prisma.masterIntervensiNasional.delete({
     *   where: {
     *     // ... filter to delete one MasterIntervensiNasional
     *   }
     * })
     *
     */
    delete<T extends MasterIntervensiNasionalDeleteArgs>(args: Prisma.SelectSubset<T, MasterIntervensiNasionalDeleteArgs<ExtArgs>>): Prisma.Prisma__MasterIntervensiNasionalClient<runtime.Types.Result.GetResult<Prisma.$MasterIntervensiNasionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one MasterIntervensiNasional.
     * @param {MasterIntervensiNasionalUpdateArgs} args - Arguments to update one MasterIntervensiNasional.
     * @example
     * // Update one MasterIntervensiNasional
     * const masterIntervensiNasional = await prisma.masterIntervensiNasional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MasterIntervensiNasionalUpdateArgs>(args: Prisma.SelectSubset<T, MasterIntervensiNasionalUpdateArgs<ExtArgs>>): Prisma.Prisma__MasterIntervensiNasionalClient<runtime.Types.Result.GetResult<Prisma.$MasterIntervensiNasionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more MasterIntervensiNasionals.
     * @param {MasterIntervensiNasionalDeleteManyArgs} args - Arguments to filter MasterIntervensiNasionals to delete.
     * @example
     * // Delete a few MasterIntervensiNasionals
     * const { count } = await prisma.masterIntervensiNasional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MasterIntervensiNasionalDeleteManyArgs>(args?: Prisma.SelectSubset<T, MasterIntervensiNasionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MasterIntervensiNasionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterIntervensiNasionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MasterIntervensiNasionals
     * const masterIntervensiNasional = await prisma.masterIntervensiNasional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MasterIntervensiNasionalUpdateManyArgs>(args: Prisma.SelectSubset<T, MasterIntervensiNasionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MasterIntervensiNasionals and returns the data updated in the database.
     * @param {MasterIntervensiNasionalUpdateManyAndReturnArgs} args - Arguments to update many MasterIntervensiNasionals.
     * @example
     * // Update many MasterIntervensiNasionals
     * const masterIntervensiNasional = await prisma.masterIntervensiNasional.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MasterIntervensiNasionals and only return the `uuid`
     * const masterIntervensiNasionalWithUuidOnly = await prisma.masterIntervensiNasional.updateManyAndReturn({
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
    updateManyAndReturn<T extends MasterIntervensiNasionalUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MasterIntervensiNasionalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MasterIntervensiNasionalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one MasterIntervensiNasional.
     * @param {MasterIntervensiNasionalUpsertArgs} args - Arguments to update or create a MasterIntervensiNasional.
     * @example
     * // Update or create a MasterIntervensiNasional
     * const masterIntervensiNasional = await prisma.masterIntervensiNasional.upsert({
     *   create: {
     *     // ... data to create a MasterIntervensiNasional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MasterIntervensiNasional we want to update
     *   }
     * })
     */
    upsert<T extends MasterIntervensiNasionalUpsertArgs>(args: Prisma.SelectSubset<T, MasterIntervensiNasionalUpsertArgs<ExtArgs>>): Prisma.Prisma__MasterIntervensiNasionalClient<runtime.Types.Result.GetResult<Prisma.$MasterIntervensiNasionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of MasterIntervensiNasionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterIntervensiNasionalCountArgs} args - Arguments to filter MasterIntervensiNasionals to count.
     * @example
     * // Count the number of MasterIntervensiNasionals
     * const count = await prisma.masterIntervensiNasional.count({
     *   where: {
     *     // ... the filter for the MasterIntervensiNasionals we want to count
     *   }
     * })
    **/
    count<T extends MasterIntervensiNasionalCountArgs>(args?: Prisma.Subset<T, MasterIntervensiNasionalCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MasterIntervensiNasionalCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a MasterIntervensiNasional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterIntervensiNasionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MasterIntervensiNasionalAggregateArgs>(args: Prisma.Subset<T, MasterIntervensiNasionalAggregateArgs>): Prisma.PrismaPromise<GetMasterIntervensiNasionalAggregateType<T>>;
    /**
     * Group by MasterIntervensiNasional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterIntervensiNasionalGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MasterIntervensiNasionalGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MasterIntervensiNasionalGroupByArgs['orderBy'];
    } : {
        orderBy?: MasterIntervensiNasionalGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MasterIntervensiNasionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasterIntervensiNasionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MasterIntervensiNasional model
     */
    readonly fields: MasterIntervensiNasionalFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for MasterIntervensiNasional.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MasterIntervensiNasionalClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    programIntervensiObj<T extends Prisma.MasterIntervensiNasional$programIntervensiObjArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MasterIntervensiNasional$programIntervensiObjArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgramIntervensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the MasterIntervensiNasional model
 */
export interface MasterIntervensiNasionalFieldRefs {
    readonly uuid: Prisma.FieldRef<"MasterIntervensiNasional", 'String'>;
    readonly nama_program: Prisma.FieldRef<"MasterIntervensiNasional", 'String'>;
    readonly uraian_kegiatan: Prisma.FieldRef<"MasterIntervensiNasional", 'String'>;
    readonly isu_strategis: Prisma.FieldRef<"MasterIntervensiNasional", 'String'>;
    readonly output: Prisma.FieldRef<"MasterIntervensiNasional", 'String'>;
    readonly timeline: Prisma.FieldRef<"MasterIntervensiNasional", 'String'>;
    readonly ukuran_keberhasilan: Prisma.FieldRef<"MasterIntervensiNasional", 'String'>;
    readonly outcome: Prisma.FieldRef<"MasterIntervensiNasional", 'String'>;
    readonly keterangan: Prisma.FieldRef<"MasterIntervensiNasional", 'String'>;
    readonly tahun: Prisma.FieldRef<"MasterIntervensiNasional", 'Int'>;
    readonly last_updated: Prisma.FieldRef<"MasterIntervensiNasional", 'DateTime'>;
    readonly created_by: Prisma.FieldRef<"MasterIntervensiNasional", 'String'>;
}
/**
 * MasterIntervensiNasional findUnique
 */
export type MasterIntervensiNasionalFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterIntervensiNasional
     */
    select?: Prisma.MasterIntervensiNasionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MasterIntervensiNasional
     */
    omit?: Prisma.MasterIntervensiNasionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MasterIntervensiNasionalInclude<ExtArgs> | null;
    /**
     * Filter, which MasterIntervensiNasional to fetch.
     */
    where: Prisma.MasterIntervensiNasionalWhereUniqueInput;
};
/**
 * MasterIntervensiNasional findUniqueOrThrow
 */
export type MasterIntervensiNasionalFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterIntervensiNasional
     */
    select?: Prisma.MasterIntervensiNasionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MasterIntervensiNasional
     */
    omit?: Prisma.MasterIntervensiNasionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MasterIntervensiNasionalInclude<ExtArgs> | null;
    /**
     * Filter, which MasterIntervensiNasional to fetch.
     */
    where: Prisma.MasterIntervensiNasionalWhereUniqueInput;
};
/**
 * MasterIntervensiNasional findFirst
 */
export type MasterIntervensiNasionalFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterIntervensiNasional
     */
    select?: Prisma.MasterIntervensiNasionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MasterIntervensiNasional
     */
    omit?: Prisma.MasterIntervensiNasionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MasterIntervensiNasionalInclude<ExtArgs> | null;
    /**
     * Filter, which MasterIntervensiNasional to fetch.
     */
    where?: Prisma.MasterIntervensiNasionalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MasterIntervensiNasionals to fetch.
     */
    orderBy?: Prisma.MasterIntervensiNasionalOrderByWithRelationInput | Prisma.MasterIntervensiNasionalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MasterIntervensiNasionals.
     */
    cursor?: Prisma.MasterIntervensiNasionalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MasterIntervensiNasionals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MasterIntervensiNasionals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MasterIntervensiNasionals.
     */
    distinct?: Prisma.MasterIntervensiNasionalScalarFieldEnum | Prisma.MasterIntervensiNasionalScalarFieldEnum[];
};
/**
 * MasterIntervensiNasional findFirstOrThrow
 */
export type MasterIntervensiNasionalFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterIntervensiNasional
     */
    select?: Prisma.MasterIntervensiNasionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MasterIntervensiNasional
     */
    omit?: Prisma.MasterIntervensiNasionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MasterIntervensiNasionalInclude<ExtArgs> | null;
    /**
     * Filter, which MasterIntervensiNasional to fetch.
     */
    where?: Prisma.MasterIntervensiNasionalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MasterIntervensiNasionals to fetch.
     */
    orderBy?: Prisma.MasterIntervensiNasionalOrderByWithRelationInput | Prisma.MasterIntervensiNasionalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MasterIntervensiNasionals.
     */
    cursor?: Prisma.MasterIntervensiNasionalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MasterIntervensiNasionals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MasterIntervensiNasionals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MasterIntervensiNasionals.
     */
    distinct?: Prisma.MasterIntervensiNasionalScalarFieldEnum | Prisma.MasterIntervensiNasionalScalarFieldEnum[];
};
/**
 * MasterIntervensiNasional findMany
 */
export type MasterIntervensiNasionalFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterIntervensiNasional
     */
    select?: Prisma.MasterIntervensiNasionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MasterIntervensiNasional
     */
    omit?: Prisma.MasterIntervensiNasionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MasterIntervensiNasionalInclude<ExtArgs> | null;
    /**
     * Filter, which MasterIntervensiNasionals to fetch.
     */
    where?: Prisma.MasterIntervensiNasionalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MasterIntervensiNasionals to fetch.
     */
    orderBy?: Prisma.MasterIntervensiNasionalOrderByWithRelationInput | Prisma.MasterIntervensiNasionalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MasterIntervensiNasionals.
     */
    cursor?: Prisma.MasterIntervensiNasionalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MasterIntervensiNasionals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MasterIntervensiNasionals.
     */
    skip?: number;
    distinct?: Prisma.MasterIntervensiNasionalScalarFieldEnum | Prisma.MasterIntervensiNasionalScalarFieldEnum[];
};
/**
 * MasterIntervensiNasional create
 */
export type MasterIntervensiNasionalCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterIntervensiNasional
     */
    select?: Prisma.MasterIntervensiNasionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MasterIntervensiNasional
     */
    omit?: Prisma.MasterIntervensiNasionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MasterIntervensiNasionalInclude<ExtArgs> | null;
    /**
     * The data needed to create a MasterIntervensiNasional.
     */
    data: Prisma.XOR<Prisma.MasterIntervensiNasionalCreateInput, Prisma.MasterIntervensiNasionalUncheckedCreateInput>;
};
/**
 * MasterIntervensiNasional createMany
 */
export type MasterIntervensiNasionalCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MasterIntervensiNasionals.
     */
    data: Prisma.MasterIntervensiNasionalCreateManyInput | Prisma.MasterIntervensiNasionalCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MasterIntervensiNasional createManyAndReturn
 */
export type MasterIntervensiNasionalCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterIntervensiNasional
     */
    select?: Prisma.MasterIntervensiNasionalSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MasterIntervensiNasional
     */
    omit?: Prisma.MasterIntervensiNasionalOmit<ExtArgs> | null;
    /**
     * The data used to create many MasterIntervensiNasionals.
     */
    data: Prisma.MasterIntervensiNasionalCreateManyInput | Prisma.MasterIntervensiNasionalCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MasterIntervensiNasional update
 */
export type MasterIntervensiNasionalUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterIntervensiNasional
     */
    select?: Prisma.MasterIntervensiNasionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MasterIntervensiNasional
     */
    omit?: Prisma.MasterIntervensiNasionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MasterIntervensiNasionalInclude<ExtArgs> | null;
    /**
     * The data needed to update a MasterIntervensiNasional.
     */
    data: Prisma.XOR<Prisma.MasterIntervensiNasionalUpdateInput, Prisma.MasterIntervensiNasionalUncheckedUpdateInput>;
    /**
     * Choose, which MasterIntervensiNasional to update.
     */
    where: Prisma.MasterIntervensiNasionalWhereUniqueInput;
};
/**
 * MasterIntervensiNasional updateMany
 */
export type MasterIntervensiNasionalUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MasterIntervensiNasionals.
     */
    data: Prisma.XOR<Prisma.MasterIntervensiNasionalUpdateManyMutationInput, Prisma.MasterIntervensiNasionalUncheckedUpdateManyInput>;
    /**
     * Filter which MasterIntervensiNasionals to update
     */
    where?: Prisma.MasterIntervensiNasionalWhereInput;
    /**
     * Limit how many MasterIntervensiNasionals to update.
     */
    limit?: number;
};
/**
 * MasterIntervensiNasional updateManyAndReturn
 */
export type MasterIntervensiNasionalUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterIntervensiNasional
     */
    select?: Prisma.MasterIntervensiNasionalSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MasterIntervensiNasional
     */
    omit?: Prisma.MasterIntervensiNasionalOmit<ExtArgs> | null;
    /**
     * The data used to update MasterIntervensiNasionals.
     */
    data: Prisma.XOR<Prisma.MasterIntervensiNasionalUpdateManyMutationInput, Prisma.MasterIntervensiNasionalUncheckedUpdateManyInput>;
    /**
     * Filter which MasterIntervensiNasionals to update
     */
    where?: Prisma.MasterIntervensiNasionalWhereInput;
    /**
     * Limit how many MasterIntervensiNasionals to update.
     */
    limit?: number;
};
/**
 * MasterIntervensiNasional upsert
 */
export type MasterIntervensiNasionalUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterIntervensiNasional
     */
    select?: Prisma.MasterIntervensiNasionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MasterIntervensiNasional
     */
    omit?: Prisma.MasterIntervensiNasionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MasterIntervensiNasionalInclude<ExtArgs> | null;
    /**
     * The filter to search for the MasterIntervensiNasional to update in case it exists.
     */
    where: Prisma.MasterIntervensiNasionalWhereUniqueInput;
    /**
     * In case the MasterIntervensiNasional found by the `where` argument doesn't exist, create a new MasterIntervensiNasional with this data.
     */
    create: Prisma.XOR<Prisma.MasterIntervensiNasionalCreateInput, Prisma.MasterIntervensiNasionalUncheckedCreateInput>;
    /**
     * In case the MasterIntervensiNasional was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MasterIntervensiNasionalUpdateInput, Prisma.MasterIntervensiNasionalUncheckedUpdateInput>;
};
/**
 * MasterIntervensiNasional delete
 */
export type MasterIntervensiNasionalDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterIntervensiNasional
     */
    select?: Prisma.MasterIntervensiNasionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MasterIntervensiNasional
     */
    omit?: Prisma.MasterIntervensiNasionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MasterIntervensiNasionalInclude<ExtArgs> | null;
    /**
     * Filter which MasterIntervensiNasional to delete.
     */
    where: Prisma.MasterIntervensiNasionalWhereUniqueInput;
};
/**
 * MasterIntervensiNasional deleteMany
 */
export type MasterIntervensiNasionalDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MasterIntervensiNasionals to delete
     */
    where?: Prisma.MasterIntervensiNasionalWhereInput;
    /**
     * Limit how many MasterIntervensiNasionals to delete.
     */
    limit?: number;
};
/**
 * MasterIntervensiNasional.programIntervensiObj
 */
export type MasterIntervensiNasional$programIntervensiObjArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ProgramIntervensiWhereInput;
    orderBy?: Prisma.ProgramIntervensiOrderByWithRelationInput | Prisma.ProgramIntervensiOrderByWithRelationInput[];
    cursor?: Prisma.ProgramIntervensiWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProgramIntervensiScalarFieldEnum | Prisma.ProgramIntervensiScalarFieldEnum[];
};
/**
 * MasterIntervensiNasional without action
 */
export type MasterIntervensiNasionalDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterIntervensiNasional
     */
    select?: Prisma.MasterIntervensiNasionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MasterIntervensiNasional
     */
    omit?: Prisma.MasterIntervensiNasionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MasterIntervensiNasionalInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=MasterIntervensiNasional.d.ts.map