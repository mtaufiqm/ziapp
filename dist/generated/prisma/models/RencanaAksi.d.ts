import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model RencanaAksi
 *
 */
export type RencanaAksiModel = runtime.Types.Result.DefaultSelection<Prisma.$RencanaAksiPayload>;
export type AggregateRencanaAksi = {
    _count: RencanaAksiCountAggregateOutputType | null;
    _avg: RencanaAksiAvgAggregateOutputType | null;
    _sum: RencanaAksiSumAggregateOutputType | null;
    _min: RencanaAksiMinAggregateOutputType | null;
    _max: RencanaAksiMaxAggregateOutputType | null;
};
export type RencanaAksiAvgAggregateOutputType = {
    dukungan_rb: number | null;
    status: number | null;
    tahun: number | null;
};
export type RencanaAksiSumAggregateOutputType = {
    dukungan_rb: number | null;
    status: number | null;
    tahun: number | null;
};
export type RencanaAksiMinAggregateOutputType = {
    uuid: string | null;
    nama_program: string | null;
    uraian_kegiatan: string | null;
    isu_strategis: string | null;
    dukungan_rb: number | null;
    output: string | null;
    timeline: string | null;
    ukuran_keberhasilan: string | null;
    outcome: string | null;
    keterangan: string | null;
    status: number | null;
    tahun: number | null;
    satker: string | null;
    last_updated: string | null;
    created_by: string | null;
};
export type RencanaAksiMaxAggregateOutputType = {
    uuid: string | null;
    nama_program: string | null;
    uraian_kegiatan: string | null;
    isu_strategis: string | null;
    dukungan_rb: number | null;
    output: string | null;
    timeline: string | null;
    ukuran_keberhasilan: string | null;
    outcome: string | null;
    keterangan: string | null;
    status: number | null;
    tahun: number | null;
    satker: string | null;
    last_updated: string | null;
    created_by: string | null;
};
export type RencanaAksiCountAggregateOutputType = {
    uuid: number;
    nama_program: number;
    uraian_kegiatan: number;
    isu_strategis: number;
    dukungan_rb: number;
    output: number;
    timeline: number;
    ukuran_keberhasilan: number;
    outcome: number;
    keterangan: number;
    status: number;
    tahun: number;
    satker: number;
    last_updated: number;
    created_by: number;
    _all: number;
};
export type RencanaAksiAvgAggregateInputType = {
    dukungan_rb?: true;
    status?: true;
    tahun?: true;
};
export type RencanaAksiSumAggregateInputType = {
    dukungan_rb?: true;
    status?: true;
    tahun?: true;
};
export type RencanaAksiMinAggregateInputType = {
    uuid?: true;
    nama_program?: true;
    uraian_kegiatan?: true;
    isu_strategis?: true;
    dukungan_rb?: true;
    output?: true;
    timeline?: true;
    ukuran_keberhasilan?: true;
    outcome?: true;
    keterangan?: true;
    status?: true;
    tahun?: true;
    satker?: true;
    last_updated?: true;
    created_by?: true;
};
export type RencanaAksiMaxAggregateInputType = {
    uuid?: true;
    nama_program?: true;
    uraian_kegiatan?: true;
    isu_strategis?: true;
    dukungan_rb?: true;
    output?: true;
    timeline?: true;
    ukuran_keberhasilan?: true;
    outcome?: true;
    keterangan?: true;
    status?: true;
    tahun?: true;
    satker?: true;
    last_updated?: true;
    created_by?: true;
};
export type RencanaAksiCountAggregateInputType = {
    uuid?: true;
    nama_program?: true;
    uraian_kegiatan?: true;
    isu_strategis?: true;
    dukungan_rb?: true;
    output?: true;
    timeline?: true;
    ukuran_keberhasilan?: true;
    outcome?: true;
    keterangan?: true;
    status?: true;
    tahun?: true;
    satker?: true;
    last_updated?: true;
    created_by?: true;
    _all?: true;
};
export type RencanaAksiAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RencanaAksi to aggregate.
     */
    where?: Prisma.RencanaAksiWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RencanaAksis to fetch.
     */
    orderBy?: Prisma.RencanaAksiOrderByWithRelationInput | Prisma.RencanaAksiOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.RencanaAksiWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RencanaAksis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RencanaAksis.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RencanaAksis
    **/
    _count?: true | RencanaAksiCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: RencanaAksiAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: RencanaAksiSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RencanaAksiMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RencanaAksiMaxAggregateInputType;
};
export type GetRencanaAksiAggregateType<T extends RencanaAksiAggregateArgs> = {
    [P in keyof T & keyof AggregateRencanaAksi]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRencanaAksi[P]> : Prisma.GetScalarType<T[P], AggregateRencanaAksi[P]>;
};
export type RencanaAksiGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RencanaAksiWhereInput;
    orderBy?: Prisma.RencanaAksiOrderByWithAggregationInput | Prisma.RencanaAksiOrderByWithAggregationInput[];
    by: Prisma.RencanaAksiScalarFieldEnum[] | Prisma.RencanaAksiScalarFieldEnum;
    having?: Prisma.RencanaAksiScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RencanaAksiCountAggregateInputType | true;
    _avg?: RencanaAksiAvgAggregateInputType;
    _sum?: RencanaAksiSumAggregateInputType;
    _min?: RencanaAksiMinAggregateInputType;
    _max?: RencanaAksiMaxAggregateInputType;
};
export type RencanaAksiGroupByOutputType = {
    uuid: string;
    nama_program: string | null;
    uraian_kegiatan: string | null;
    isu_strategis: string | null;
    dukungan_rb: number;
    output: string | null;
    timeline: string | null;
    ukuran_keberhasilan: string | null;
    outcome: string | null;
    keterangan: string | null;
    status: number;
    tahun: number;
    satker: string;
    last_updated: string;
    created_by: string;
    _count: RencanaAksiCountAggregateOutputType | null;
    _avg: RencanaAksiAvgAggregateOutputType | null;
    _sum: RencanaAksiSumAggregateOutputType | null;
    _min: RencanaAksiMinAggregateOutputType | null;
    _max: RencanaAksiMaxAggregateOutputType | null;
};
type GetRencanaAksiGroupByPayload<T extends RencanaAksiGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RencanaAksiGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RencanaAksiGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RencanaAksiGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RencanaAksiGroupByOutputType[P]>;
}>>;
export type RencanaAksiWhereInput = {
    AND?: Prisma.RencanaAksiWhereInput | Prisma.RencanaAksiWhereInput[];
    OR?: Prisma.RencanaAksiWhereInput[];
    NOT?: Prisma.RencanaAksiWhereInput | Prisma.RencanaAksiWhereInput[];
    uuid?: Prisma.StringFilter<"RencanaAksi"> | string;
    nama_program?: Prisma.StringNullableFilter<"RencanaAksi"> | string | null;
    uraian_kegiatan?: Prisma.StringNullableFilter<"RencanaAksi"> | string | null;
    isu_strategis?: Prisma.StringNullableFilter<"RencanaAksi"> | string | null;
    dukungan_rb?: Prisma.IntFilter<"RencanaAksi"> | number;
    output?: Prisma.StringNullableFilter<"RencanaAksi"> | string | null;
    timeline?: Prisma.StringNullableFilter<"RencanaAksi"> | string | null;
    ukuran_keberhasilan?: Prisma.StringNullableFilter<"RencanaAksi"> | string | null;
    outcome?: Prisma.StringNullableFilter<"RencanaAksi"> | string | null;
    keterangan?: Prisma.StringNullableFilter<"RencanaAksi"> | string | null;
    status?: Prisma.IntFilter<"RencanaAksi"> | number;
    tahun?: Prisma.IntFilter<"RencanaAksi"> | number;
    satker?: Prisma.StringFilter<"RencanaAksi"> | string;
    last_updated?: Prisma.StringFilter<"RencanaAksi"> | string;
    created_by?: Prisma.StringFilter<"RencanaAksi"> | string;
    dukunganRbObj?: Prisma.XOR<Prisma.DukunganRBScalarRelationFilter, Prisma.DukunganRBWhereInput>;
    raStatusObj?: Prisma.XOR<Prisma.RencanaAksiStatusScalarRelationFilter, Prisma.RencanaAksiStatusWhereInput>;
    satkerObj?: Prisma.XOR<Prisma.SatkerScalarRelationFilter, Prisma.SatkerWhereInput>;
    creatorObj?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    listOfProgress?: Prisma.ProgressRencanaAksiListRelationFilter;
};
export type RencanaAksiOrderByWithRelationInput = {
    uuid?: Prisma.SortOrder;
    nama_program?: Prisma.SortOrderInput | Prisma.SortOrder;
    uraian_kegiatan?: Prisma.SortOrderInput | Prisma.SortOrder;
    isu_strategis?: Prisma.SortOrderInput | Prisma.SortOrder;
    dukungan_rb?: Prisma.SortOrder;
    output?: Prisma.SortOrderInput | Prisma.SortOrder;
    timeline?: Prisma.SortOrderInput | Prisma.SortOrder;
    ukuran_keberhasilan?: Prisma.SortOrderInput | Prisma.SortOrder;
    outcome?: Prisma.SortOrderInput | Prisma.SortOrder;
    keterangan?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    satker?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    dukunganRbObj?: Prisma.DukunganRBOrderByWithRelationInput;
    raStatusObj?: Prisma.RencanaAksiStatusOrderByWithRelationInput;
    satkerObj?: Prisma.SatkerOrderByWithRelationInput;
    creatorObj?: Prisma.UserOrderByWithRelationInput;
    listOfProgress?: Prisma.ProgressRencanaAksiOrderByRelationAggregateInput;
};
export type RencanaAksiWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string;
    AND?: Prisma.RencanaAksiWhereInput | Prisma.RencanaAksiWhereInput[];
    OR?: Prisma.RencanaAksiWhereInput[];
    NOT?: Prisma.RencanaAksiWhereInput | Prisma.RencanaAksiWhereInput[];
    nama_program?: Prisma.StringNullableFilter<"RencanaAksi"> | string | null;
    uraian_kegiatan?: Prisma.StringNullableFilter<"RencanaAksi"> | string | null;
    isu_strategis?: Prisma.StringNullableFilter<"RencanaAksi"> | string | null;
    dukungan_rb?: Prisma.IntFilter<"RencanaAksi"> | number;
    output?: Prisma.StringNullableFilter<"RencanaAksi"> | string | null;
    timeline?: Prisma.StringNullableFilter<"RencanaAksi"> | string | null;
    ukuran_keberhasilan?: Prisma.StringNullableFilter<"RencanaAksi"> | string | null;
    outcome?: Prisma.StringNullableFilter<"RencanaAksi"> | string | null;
    keterangan?: Prisma.StringNullableFilter<"RencanaAksi"> | string | null;
    status?: Prisma.IntFilter<"RencanaAksi"> | number;
    tahun?: Prisma.IntFilter<"RencanaAksi"> | number;
    satker?: Prisma.StringFilter<"RencanaAksi"> | string;
    last_updated?: Prisma.StringFilter<"RencanaAksi"> | string;
    created_by?: Prisma.StringFilter<"RencanaAksi"> | string;
    dukunganRbObj?: Prisma.XOR<Prisma.DukunganRBScalarRelationFilter, Prisma.DukunganRBWhereInput>;
    raStatusObj?: Prisma.XOR<Prisma.RencanaAksiStatusScalarRelationFilter, Prisma.RencanaAksiStatusWhereInput>;
    satkerObj?: Prisma.XOR<Prisma.SatkerScalarRelationFilter, Prisma.SatkerWhereInput>;
    creatorObj?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    listOfProgress?: Prisma.ProgressRencanaAksiListRelationFilter;
}, "uuid">;
export type RencanaAksiOrderByWithAggregationInput = {
    uuid?: Prisma.SortOrder;
    nama_program?: Prisma.SortOrderInput | Prisma.SortOrder;
    uraian_kegiatan?: Prisma.SortOrderInput | Prisma.SortOrder;
    isu_strategis?: Prisma.SortOrderInput | Prisma.SortOrder;
    dukungan_rb?: Prisma.SortOrder;
    output?: Prisma.SortOrderInput | Prisma.SortOrder;
    timeline?: Prisma.SortOrderInput | Prisma.SortOrder;
    ukuran_keberhasilan?: Prisma.SortOrderInput | Prisma.SortOrder;
    outcome?: Prisma.SortOrderInput | Prisma.SortOrder;
    keterangan?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    satker?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    _count?: Prisma.RencanaAksiCountOrderByAggregateInput;
    _avg?: Prisma.RencanaAksiAvgOrderByAggregateInput;
    _max?: Prisma.RencanaAksiMaxOrderByAggregateInput;
    _min?: Prisma.RencanaAksiMinOrderByAggregateInput;
    _sum?: Prisma.RencanaAksiSumOrderByAggregateInput;
};
export type RencanaAksiScalarWhereWithAggregatesInput = {
    AND?: Prisma.RencanaAksiScalarWhereWithAggregatesInput | Prisma.RencanaAksiScalarWhereWithAggregatesInput[];
    OR?: Prisma.RencanaAksiScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RencanaAksiScalarWhereWithAggregatesInput | Prisma.RencanaAksiScalarWhereWithAggregatesInput[];
    uuid?: Prisma.StringWithAggregatesFilter<"RencanaAksi"> | string;
    nama_program?: Prisma.StringNullableWithAggregatesFilter<"RencanaAksi"> | string | null;
    uraian_kegiatan?: Prisma.StringNullableWithAggregatesFilter<"RencanaAksi"> | string | null;
    isu_strategis?: Prisma.StringNullableWithAggregatesFilter<"RencanaAksi"> | string | null;
    dukungan_rb?: Prisma.IntWithAggregatesFilter<"RencanaAksi"> | number;
    output?: Prisma.StringNullableWithAggregatesFilter<"RencanaAksi"> | string | null;
    timeline?: Prisma.StringNullableWithAggregatesFilter<"RencanaAksi"> | string | null;
    ukuran_keberhasilan?: Prisma.StringNullableWithAggregatesFilter<"RencanaAksi"> | string | null;
    outcome?: Prisma.StringNullableWithAggregatesFilter<"RencanaAksi"> | string | null;
    keterangan?: Prisma.StringNullableWithAggregatesFilter<"RencanaAksi"> | string | null;
    status?: Prisma.IntWithAggregatesFilter<"RencanaAksi"> | number;
    tahun?: Prisma.IntWithAggregatesFilter<"RencanaAksi"> | number;
    satker?: Prisma.StringWithAggregatesFilter<"RencanaAksi"> | string;
    last_updated?: Prisma.StringWithAggregatesFilter<"RencanaAksi"> | string;
    created_by?: Prisma.StringWithAggregatesFilter<"RencanaAksi"> | string;
};
export type RencanaAksiCreateInput = {
    uuid: string;
    nama_program?: string | null;
    uraian_kegiatan?: string | null;
    isu_strategis?: string | null;
    output?: string | null;
    timeline?: string | null;
    ukuran_keberhasilan?: string | null;
    outcome?: string | null;
    keterangan?: string | null;
    tahun: number;
    last_updated: string;
    dukunganRbObj: Prisma.DukunganRBCreateNestedOneWithoutRencanaAksiInput;
    raStatusObj: Prisma.RencanaAksiStatusCreateNestedOneWithoutRencanaAksiInput;
    satkerObj: Prisma.SatkerCreateNestedOneWithoutRencanaAksiInput;
    creatorObj: Prisma.UserCreateNestedOneWithoutRencanaAksiInput;
    listOfProgress?: Prisma.ProgressRencanaAksiCreateNestedManyWithoutRaObjInput;
};
export type RencanaAksiUncheckedCreateInput = {
    uuid: string;
    nama_program?: string | null;
    uraian_kegiatan?: string | null;
    isu_strategis?: string | null;
    dukungan_rb: number;
    output?: string | null;
    timeline?: string | null;
    ukuran_keberhasilan?: string | null;
    outcome?: string | null;
    keterangan?: string | null;
    status: number;
    tahun: number;
    satker: string;
    last_updated: string;
    created_by: string;
    listOfProgress?: Prisma.ProgressRencanaAksiUncheckedCreateNestedManyWithoutRaObjInput;
};
export type RencanaAksiUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_program?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uraian_kegiatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isu_strategis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keterangan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
    dukunganRbObj?: Prisma.DukunganRBUpdateOneRequiredWithoutRencanaAksiNestedInput;
    raStatusObj?: Prisma.RencanaAksiStatusUpdateOneRequiredWithoutRencanaAksiNestedInput;
    satkerObj?: Prisma.SatkerUpdateOneRequiredWithoutRencanaAksiNestedInput;
    creatorObj?: Prisma.UserUpdateOneRequiredWithoutRencanaAksiNestedInput;
    listOfProgress?: Prisma.ProgressRencanaAksiUpdateManyWithoutRaObjNestedInput;
};
export type RencanaAksiUncheckedUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_program?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uraian_kegiatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isu_strategis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dukungan_rb?: Prisma.IntFieldUpdateOperationsInput | number;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keterangan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    listOfProgress?: Prisma.ProgressRencanaAksiUncheckedUpdateManyWithoutRaObjNestedInput;
};
export type RencanaAksiCreateManyInput = {
    uuid: string;
    nama_program?: string | null;
    uraian_kegiatan?: string | null;
    isu_strategis?: string | null;
    dukungan_rb: number;
    output?: string | null;
    timeline?: string | null;
    ukuran_keberhasilan?: string | null;
    outcome?: string | null;
    keterangan?: string | null;
    status: number;
    tahun: number;
    satker: string;
    last_updated: string;
    created_by: string;
};
export type RencanaAksiUpdateManyMutationInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_program?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uraian_kegiatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isu_strategis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keterangan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RencanaAksiUncheckedUpdateManyInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_program?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uraian_kegiatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isu_strategis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dukungan_rb?: Prisma.IntFieldUpdateOperationsInput | number;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keterangan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RencanaAksiListRelationFilter = {
    every?: Prisma.RencanaAksiWhereInput;
    some?: Prisma.RencanaAksiWhereInput;
    none?: Prisma.RencanaAksiWhereInput;
};
export type RencanaAksiOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RencanaAksiCountOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    nama_program?: Prisma.SortOrder;
    uraian_kegiatan?: Prisma.SortOrder;
    isu_strategis?: Prisma.SortOrder;
    dukungan_rb?: Prisma.SortOrder;
    output?: Prisma.SortOrder;
    timeline?: Prisma.SortOrder;
    ukuran_keberhasilan?: Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    keterangan?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    satker?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type RencanaAksiAvgOrderByAggregateInput = {
    dukungan_rb?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
};
export type RencanaAksiMaxOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    nama_program?: Prisma.SortOrder;
    uraian_kegiatan?: Prisma.SortOrder;
    isu_strategis?: Prisma.SortOrder;
    dukungan_rb?: Prisma.SortOrder;
    output?: Prisma.SortOrder;
    timeline?: Prisma.SortOrder;
    ukuran_keberhasilan?: Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    keterangan?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    satker?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type RencanaAksiMinOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    nama_program?: Prisma.SortOrder;
    uraian_kegiatan?: Prisma.SortOrder;
    isu_strategis?: Prisma.SortOrder;
    dukungan_rb?: Prisma.SortOrder;
    output?: Prisma.SortOrder;
    timeline?: Prisma.SortOrder;
    ukuran_keberhasilan?: Prisma.SortOrder;
    outcome?: Prisma.SortOrder;
    keterangan?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
    satker?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type RencanaAksiSumOrderByAggregateInput = {
    dukungan_rb?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    tahun?: Prisma.SortOrder;
};
export type RencanaAksiScalarRelationFilter = {
    is?: Prisma.RencanaAksiWhereInput;
    isNot?: Prisma.RencanaAksiWhereInput;
};
export type RencanaAksiCreateNestedManyWithoutCreatorObjInput = {
    create?: Prisma.XOR<Prisma.RencanaAksiCreateWithoutCreatorObjInput, Prisma.RencanaAksiUncheckedCreateWithoutCreatorObjInput> | Prisma.RencanaAksiCreateWithoutCreatorObjInput[] | Prisma.RencanaAksiUncheckedCreateWithoutCreatorObjInput[];
    connectOrCreate?: Prisma.RencanaAksiCreateOrConnectWithoutCreatorObjInput | Prisma.RencanaAksiCreateOrConnectWithoutCreatorObjInput[];
    createMany?: Prisma.RencanaAksiCreateManyCreatorObjInputEnvelope;
    connect?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
};
export type RencanaAksiUncheckedCreateNestedManyWithoutCreatorObjInput = {
    create?: Prisma.XOR<Prisma.RencanaAksiCreateWithoutCreatorObjInput, Prisma.RencanaAksiUncheckedCreateWithoutCreatorObjInput> | Prisma.RencanaAksiCreateWithoutCreatorObjInput[] | Prisma.RencanaAksiUncheckedCreateWithoutCreatorObjInput[];
    connectOrCreate?: Prisma.RencanaAksiCreateOrConnectWithoutCreatorObjInput | Prisma.RencanaAksiCreateOrConnectWithoutCreatorObjInput[];
    createMany?: Prisma.RencanaAksiCreateManyCreatorObjInputEnvelope;
    connect?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
};
export type RencanaAksiUpdateManyWithoutCreatorObjNestedInput = {
    create?: Prisma.XOR<Prisma.RencanaAksiCreateWithoutCreatorObjInput, Prisma.RencanaAksiUncheckedCreateWithoutCreatorObjInput> | Prisma.RencanaAksiCreateWithoutCreatorObjInput[] | Prisma.RencanaAksiUncheckedCreateWithoutCreatorObjInput[];
    connectOrCreate?: Prisma.RencanaAksiCreateOrConnectWithoutCreatorObjInput | Prisma.RencanaAksiCreateOrConnectWithoutCreatorObjInput[];
    upsert?: Prisma.RencanaAksiUpsertWithWhereUniqueWithoutCreatorObjInput | Prisma.RencanaAksiUpsertWithWhereUniqueWithoutCreatorObjInput[];
    createMany?: Prisma.RencanaAksiCreateManyCreatorObjInputEnvelope;
    set?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    disconnect?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    delete?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    connect?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    update?: Prisma.RencanaAksiUpdateWithWhereUniqueWithoutCreatorObjInput | Prisma.RencanaAksiUpdateWithWhereUniqueWithoutCreatorObjInput[];
    updateMany?: Prisma.RencanaAksiUpdateManyWithWhereWithoutCreatorObjInput | Prisma.RencanaAksiUpdateManyWithWhereWithoutCreatorObjInput[];
    deleteMany?: Prisma.RencanaAksiScalarWhereInput | Prisma.RencanaAksiScalarWhereInput[];
};
export type RencanaAksiUncheckedUpdateManyWithoutCreatorObjNestedInput = {
    create?: Prisma.XOR<Prisma.RencanaAksiCreateWithoutCreatorObjInput, Prisma.RencanaAksiUncheckedCreateWithoutCreatorObjInput> | Prisma.RencanaAksiCreateWithoutCreatorObjInput[] | Prisma.RencanaAksiUncheckedCreateWithoutCreatorObjInput[];
    connectOrCreate?: Prisma.RencanaAksiCreateOrConnectWithoutCreatorObjInput | Prisma.RencanaAksiCreateOrConnectWithoutCreatorObjInput[];
    upsert?: Prisma.RencanaAksiUpsertWithWhereUniqueWithoutCreatorObjInput | Prisma.RencanaAksiUpsertWithWhereUniqueWithoutCreatorObjInput[];
    createMany?: Prisma.RencanaAksiCreateManyCreatorObjInputEnvelope;
    set?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    disconnect?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    delete?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    connect?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    update?: Prisma.RencanaAksiUpdateWithWhereUniqueWithoutCreatorObjInput | Prisma.RencanaAksiUpdateWithWhereUniqueWithoutCreatorObjInput[];
    updateMany?: Prisma.RencanaAksiUpdateManyWithWhereWithoutCreatorObjInput | Prisma.RencanaAksiUpdateManyWithWhereWithoutCreatorObjInput[];
    deleteMany?: Prisma.RencanaAksiScalarWhereInput | Prisma.RencanaAksiScalarWhereInput[];
};
export type RencanaAksiCreateNestedManyWithoutSatkerObjInput = {
    create?: Prisma.XOR<Prisma.RencanaAksiCreateWithoutSatkerObjInput, Prisma.RencanaAksiUncheckedCreateWithoutSatkerObjInput> | Prisma.RencanaAksiCreateWithoutSatkerObjInput[] | Prisma.RencanaAksiUncheckedCreateWithoutSatkerObjInput[];
    connectOrCreate?: Prisma.RencanaAksiCreateOrConnectWithoutSatkerObjInput | Prisma.RencanaAksiCreateOrConnectWithoutSatkerObjInput[];
    createMany?: Prisma.RencanaAksiCreateManySatkerObjInputEnvelope;
    connect?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
};
export type RencanaAksiUncheckedCreateNestedManyWithoutSatkerObjInput = {
    create?: Prisma.XOR<Prisma.RencanaAksiCreateWithoutSatkerObjInput, Prisma.RencanaAksiUncheckedCreateWithoutSatkerObjInput> | Prisma.RencanaAksiCreateWithoutSatkerObjInput[] | Prisma.RencanaAksiUncheckedCreateWithoutSatkerObjInput[];
    connectOrCreate?: Prisma.RencanaAksiCreateOrConnectWithoutSatkerObjInput | Prisma.RencanaAksiCreateOrConnectWithoutSatkerObjInput[];
    createMany?: Prisma.RencanaAksiCreateManySatkerObjInputEnvelope;
    connect?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
};
export type RencanaAksiUpdateManyWithoutSatkerObjNestedInput = {
    create?: Prisma.XOR<Prisma.RencanaAksiCreateWithoutSatkerObjInput, Prisma.RencanaAksiUncheckedCreateWithoutSatkerObjInput> | Prisma.RencanaAksiCreateWithoutSatkerObjInput[] | Prisma.RencanaAksiUncheckedCreateWithoutSatkerObjInput[];
    connectOrCreate?: Prisma.RencanaAksiCreateOrConnectWithoutSatkerObjInput | Prisma.RencanaAksiCreateOrConnectWithoutSatkerObjInput[];
    upsert?: Prisma.RencanaAksiUpsertWithWhereUniqueWithoutSatkerObjInput | Prisma.RencanaAksiUpsertWithWhereUniqueWithoutSatkerObjInput[];
    createMany?: Prisma.RencanaAksiCreateManySatkerObjInputEnvelope;
    set?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    disconnect?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    delete?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    connect?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    update?: Prisma.RencanaAksiUpdateWithWhereUniqueWithoutSatkerObjInput | Prisma.RencanaAksiUpdateWithWhereUniqueWithoutSatkerObjInput[];
    updateMany?: Prisma.RencanaAksiUpdateManyWithWhereWithoutSatkerObjInput | Prisma.RencanaAksiUpdateManyWithWhereWithoutSatkerObjInput[];
    deleteMany?: Prisma.RencanaAksiScalarWhereInput | Prisma.RencanaAksiScalarWhereInput[];
};
export type RencanaAksiUncheckedUpdateManyWithoutSatkerObjNestedInput = {
    create?: Prisma.XOR<Prisma.RencanaAksiCreateWithoutSatkerObjInput, Prisma.RencanaAksiUncheckedCreateWithoutSatkerObjInput> | Prisma.RencanaAksiCreateWithoutSatkerObjInput[] | Prisma.RencanaAksiUncheckedCreateWithoutSatkerObjInput[];
    connectOrCreate?: Prisma.RencanaAksiCreateOrConnectWithoutSatkerObjInput | Prisma.RencanaAksiCreateOrConnectWithoutSatkerObjInput[];
    upsert?: Prisma.RencanaAksiUpsertWithWhereUniqueWithoutSatkerObjInput | Prisma.RencanaAksiUpsertWithWhereUniqueWithoutSatkerObjInput[];
    createMany?: Prisma.RencanaAksiCreateManySatkerObjInputEnvelope;
    set?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    disconnect?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    delete?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    connect?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    update?: Prisma.RencanaAksiUpdateWithWhereUniqueWithoutSatkerObjInput | Prisma.RencanaAksiUpdateWithWhereUniqueWithoutSatkerObjInput[];
    updateMany?: Prisma.RencanaAksiUpdateManyWithWhereWithoutSatkerObjInput | Prisma.RencanaAksiUpdateManyWithWhereWithoutSatkerObjInput[];
    deleteMany?: Prisma.RencanaAksiScalarWhereInput | Prisma.RencanaAksiScalarWhereInput[];
};
export type RencanaAksiCreateNestedManyWithoutDukunganRbObjInput = {
    create?: Prisma.XOR<Prisma.RencanaAksiCreateWithoutDukunganRbObjInput, Prisma.RencanaAksiUncheckedCreateWithoutDukunganRbObjInput> | Prisma.RencanaAksiCreateWithoutDukunganRbObjInput[] | Prisma.RencanaAksiUncheckedCreateWithoutDukunganRbObjInput[];
    connectOrCreate?: Prisma.RencanaAksiCreateOrConnectWithoutDukunganRbObjInput | Prisma.RencanaAksiCreateOrConnectWithoutDukunganRbObjInput[];
    createMany?: Prisma.RencanaAksiCreateManyDukunganRbObjInputEnvelope;
    connect?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
};
export type RencanaAksiUncheckedCreateNestedManyWithoutDukunganRbObjInput = {
    create?: Prisma.XOR<Prisma.RencanaAksiCreateWithoutDukunganRbObjInput, Prisma.RencanaAksiUncheckedCreateWithoutDukunganRbObjInput> | Prisma.RencanaAksiCreateWithoutDukunganRbObjInput[] | Prisma.RencanaAksiUncheckedCreateWithoutDukunganRbObjInput[];
    connectOrCreate?: Prisma.RencanaAksiCreateOrConnectWithoutDukunganRbObjInput | Prisma.RencanaAksiCreateOrConnectWithoutDukunganRbObjInput[];
    createMany?: Prisma.RencanaAksiCreateManyDukunganRbObjInputEnvelope;
    connect?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
};
export type RencanaAksiUpdateManyWithoutDukunganRbObjNestedInput = {
    create?: Prisma.XOR<Prisma.RencanaAksiCreateWithoutDukunganRbObjInput, Prisma.RencanaAksiUncheckedCreateWithoutDukunganRbObjInput> | Prisma.RencanaAksiCreateWithoutDukunganRbObjInput[] | Prisma.RencanaAksiUncheckedCreateWithoutDukunganRbObjInput[];
    connectOrCreate?: Prisma.RencanaAksiCreateOrConnectWithoutDukunganRbObjInput | Prisma.RencanaAksiCreateOrConnectWithoutDukunganRbObjInput[];
    upsert?: Prisma.RencanaAksiUpsertWithWhereUniqueWithoutDukunganRbObjInput | Prisma.RencanaAksiUpsertWithWhereUniqueWithoutDukunganRbObjInput[];
    createMany?: Prisma.RencanaAksiCreateManyDukunganRbObjInputEnvelope;
    set?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    disconnect?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    delete?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    connect?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    update?: Prisma.RencanaAksiUpdateWithWhereUniqueWithoutDukunganRbObjInput | Prisma.RencanaAksiUpdateWithWhereUniqueWithoutDukunganRbObjInput[];
    updateMany?: Prisma.RencanaAksiUpdateManyWithWhereWithoutDukunganRbObjInput | Prisma.RencanaAksiUpdateManyWithWhereWithoutDukunganRbObjInput[];
    deleteMany?: Prisma.RencanaAksiScalarWhereInput | Prisma.RencanaAksiScalarWhereInput[];
};
export type RencanaAksiUncheckedUpdateManyWithoutDukunganRbObjNestedInput = {
    create?: Prisma.XOR<Prisma.RencanaAksiCreateWithoutDukunganRbObjInput, Prisma.RencanaAksiUncheckedCreateWithoutDukunganRbObjInput> | Prisma.RencanaAksiCreateWithoutDukunganRbObjInput[] | Prisma.RencanaAksiUncheckedCreateWithoutDukunganRbObjInput[];
    connectOrCreate?: Prisma.RencanaAksiCreateOrConnectWithoutDukunganRbObjInput | Prisma.RencanaAksiCreateOrConnectWithoutDukunganRbObjInput[];
    upsert?: Prisma.RencanaAksiUpsertWithWhereUniqueWithoutDukunganRbObjInput | Prisma.RencanaAksiUpsertWithWhereUniqueWithoutDukunganRbObjInput[];
    createMany?: Prisma.RencanaAksiCreateManyDukunganRbObjInputEnvelope;
    set?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    disconnect?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    delete?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    connect?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    update?: Prisma.RencanaAksiUpdateWithWhereUniqueWithoutDukunganRbObjInput | Prisma.RencanaAksiUpdateWithWhereUniqueWithoutDukunganRbObjInput[];
    updateMany?: Prisma.RencanaAksiUpdateManyWithWhereWithoutDukunganRbObjInput | Prisma.RencanaAksiUpdateManyWithWhereWithoutDukunganRbObjInput[];
    deleteMany?: Prisma.RencanaAksiScalarWhereInput | Prisma.RencanaAksiScalarWhereInput[];
};
export type RencanaAksiCreateNestedManyWithoutRaStatusObjInput = {
    create?: Prisma.XOR<Prisma.RencanaAksiCreateWithoutRaStatusObjInput, Prisma.RencanaAksiUncheckedCreateWithoutRaStatusObjInput> | Prisma.RencanaAksiCreateWithoutRaStatusObjInput[] | Prisma.RencanaAksiUncheckedCreateWithoutRaStatusObjInput[];
    connectOrCreate?: Prisma.RencanaAksiCreateOrConnectWithoutRaStatusObjInput | Prisma.RencanaAksiCreateOrConnectWithoutRaStatusObjInput[];
    createMany?: Prisma.RencanaAksiCreateManyRaStatusObjInputEnvelope;
    connect?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
};
export type RencanaAksiUncheckedCreateNestedManyWithoutRaStatusObjInput = {
    create?: Prisma.XOR<Prisma.RencanaAksiCreateWithoutRaStatusObjInput, Prisma.RencanaAksiUncheckedCreateWithoutRaStatusObjInput> | Prisma.RencanaAksiCreateWithoutRaStatusObjInput[] | Prisma.RencanaAksiUncheckedCreateWithoutRaStatusObjInput[];
    connectOrCreate?: Prisma.RencanaAksiCreateOrConnectWithoutRaStatusObjInput | Prisma.RencanaAksiCreateOrConnectWithoutRaStatusObjInput[];
    createMany?: Prisma.RencanaAksiCreateManyRaStatusObjInputEnvelope;
    connect?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
};
export type RencanaAksiUpdateManyWithoutRaStatusObjNestedInput = {
    create?: Prisma.XOR<Prisma.RencanaAksiCreateWithoutRaStatusObjInput, Prisma.RencanaAksiUncheckedCreateWithoutRaStatusObjInput> | Prisma.RencanaAksiCreateWithoutRaStatusObjInput[] | Prisma.RencanaAksiUncheckedCreateWithoutRaStatusObjInput[];
    connectOrCreate?: Prisma.RencanaAksiCreateOrConnectWithoutRaStatusObjInput | Prisma.RencanaAksiCreateOrConnectWithoutRaStatusObjInput[];
    upsert?: Prisma.RencanaAksiUpsertWithWhereUniqueWithoutRaStatusObjInput | Prisma.RencanaAksiUpsertWithWhereUniqueWithoutRaStatusObjInput[];
    createMany?: Prisma.RencanaAksiCreateManyRaStatusObjInputEnvelope;
    set?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    disconnect?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    delete?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    connect?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    update?: Prisma.RencanaAksiUpdateWithWhereUniqueWithoutRaStatusObjInput | Prisma.RencanaAksiUpdateWithWhereUniqueWithoutRaStatusObjInput[];
    updateMany?: Prisma.RencanaAksiUpdateManyWithWhereWithoutRaStatusObjInput | Prisma.RencanaAksiUpdateManyWithWhereWithoutRaStatusObjInput[];
    deleteMany?: Prisma.RencanaAksiScalarWhereInput | Prisma.RencanaAksiScalarWhereInput[];
};
export type RencanaAksiUncheckedUpdateManyWithoutRaStatusObjNestedInput = {
    create?: Prisma.XOR<Prisma.RencanaAksiCreateWithoutRaStatusObjInput, Prisma.RencanaAksiUncheckedCreateWithoutRaStatusObjInput> | Prisma.RencanaAksiCreateWithoutRaStatusObjInput[] | Prisma.RencanaAksiUncheckedCreateWithoutRaStatusObjInput[];
    connectOrCreate?: Prisma.RencanaAksiCreateOrConnectWithoutRaStatusObjInput | Prisma.RencanaAksiCreateOrConnectWithoutRaStatusObjInput[];
    upsert?: Prisma.RencanaAksiUpsertWithWhereUniqueWithoutRaStatusObjInput | Prisma.RencanaAksiUpsertWithWhereUniqueWithoutRaStatusObjInput[];
    createMany?: Prisma.RencanaAksiCreateManyRaStatusObjInputEnvelope;
    set?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    disconnect?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    delete?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    connect?: Prisma.RencanaAksiWhereUniqueInput | Prisma.RencanaAksiWhereUniqueInput[];
    update?: Prisma.RencanaAksiUpdateWithWhereUniqueWithoutRaStatusObjInput | Prisma.RencanaAksiUpdateWithWhereUniqueWithoutRaStatusObjInput[];
    updateMany?: Prisma.RencanaAksiUpdateManyWithWhereWithoutRaStatusObjInput | Prisma.RencanaAksiUpdateManyWithWhereWithoutRaStatusObjInput[];
    deleteMany?: Prisma.RencanaAksiScalarWhereInput | Prisma.RencanaAksiScalarWhereInput[];
};
export type RencanaAksiCreateNestedOneWithoutListOfProgressInput = {
    create?: Prisma.XOR<Prisma.RencanaAksiCreateWithoutListOfProgressInput, Prisma.RencanaAksiUncheckedCreateWithoutListOfProgressInput>;
    connectOrCreate?: Prisma.RencanaAksiCreateOrConnectWithoutListOfProgressInput;
    connect?: Prisma.RencanaAksiWhereUniqueInput;
};
export type RencanaAksiUpdateOneRequiredWithoutListOfProgressNestedInput = {
    create?: Prisma.XOR<Prisma.RencanaAksiCreateWithoutListOfProgressInput, Prisma.RencanaAksiUncheckedCreateWithoutListOfProgressInput>;
    connectOrCreate?: Prisma.RencanaAksiCreateOrConnectWithoutListOfProgressInput;
    upsert?: Prisma.RencanaAksiUpsertWithoutListOfProgressInput;
    connect?: Prisma.RencanaAksiWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RencanaAksiUpdateToOneWithWhereWithoutListOfProgressInput, Prisma.RencanaAksiUpdateWithoutListOfProgressInput>, Prisma.RencanaAksiUncheckedUpdateWithoutListOfProgressInput>;
};
export type RencanaAksiCreateWithoutCreatorObjInput = {
    uuid: string;
    nama_program?: string | null;
    uraian_kegiatan?: string | null;
    isu_strategis?: string | null;
    output?: string | null;
    timeline?: string | null;
    ukuran_keberhasilan?: string | null;
    outcome?: string | null;
    keterangan?: string | null;
    tahun: number;
    last_updated: string;
    dukunganRbObj: Prisma.DukunganRBCreateNestedOneWithoutRencanaAksiInput;
    raStatusObj: Prisma.RencanaAksiStatusCreateNestedOneWithoutRencanaAksiInput;
    satkerObj: Prisma.SatkerCreateNestedOneWithoutRencanaAksiInput;
    listOfProgress?: Prisma.ProgressRencanaAksiCreateNestedManyWithoutRaObjInput;
};
export type RencanaAksiUncheckedCreateWithoutCreatorObjInput = {
    uuid: string;
    nama_program?: string | null;
    uraian_kegiatan?: string | null;
    isu_strategis?: string | null;
    dukungan_rb: number;
    output?: string | null;
    timeline?: string | null;
    ukuran_keberhasilan?: string | null;
    outcome?: string | null;
    keterangan?: string | null;
    status: number;
    tahun: number;
    satker: string;
    last_updated: string;
    listOfProgress?: Prisma.ProgressRencanaAksiUncheckedCreateNestedManyWithoutRaObjInput;
};
export type RencanaAksiCreateOrConnectWithoutCreatorObjInput = {
    where: Prisma.RencanaAksiWhereUniqueInput;
    create: Prisma.XOR<Prisma.RencanaAksiCreateWithoutCreatorObjInput, Prisma.RencanaAksiUncheckedCreateWithoutCreatorObjInput>;
};
export type RencanaAksiCreateManyCreatorObjInputEnvelope = {
    data: Prisma.RencanaAksiCreateManyCreatorObjInput | Prisma.RencanaAksiCreateManyCreatorObjInput[];
    skipDuplicates?: boolean;
};
export type RencanaAksiUpsertWithWhereUniqueWithoutCreatorObjInput = {
    where: Prisma.RencanaAksiWhereUniqueInput;
    update: Prisma.XOR<Prisma.RencanaAksiUpdateWithoutCreatorObjInput, Prisma.RencanaAksiUncheckedUpdateWithoutCreatorObjInput>;
    create: Prisma.XOR<Prisma.RencanaAksiCreateWithoutCreatorObjInput, Prisma.RencanaAksiUncheckedCreateWithoutCreatorObjInput>;
};
export type RencanaAksiUpdateWithWhereUniqueWithoutCreatorObjInput = {
    where: Prisma.RencanaAksiWhereUniqueInput;
    data: Prisma.XOR<Prisma.RencanaAksiUpdateWithoutCreatorObjInput, Prisma.RencanaAksiUncheckedUpdateWithoutCreatorObjInput>;
};
export type RencanaAksiUpdateManyWithWhereWithoutCreatorObjInput = {
    where: Prisma.RencanaAksiScalarWhereInput;
    data: Prisma.XOR<Prisma.RencanaAksiUpdateManyMutationInput, Prisma.RencanaAksiUncheckedUpdateManyWithoutCreatorObjInput>;
};
export type RencanaAksiScalarWhereInput = {
    AND?: Prisma.RencanaAksiScalarWhereInput | Prisma.RencanaAksiScalarWhereInput[];
    OR?: Prisma.RencanaAksiScalarWhereInput[];
    NOT?: Prisma.RencanaAksiScalarWhereInput | Prisma.RencanaAksiScalarWhereInput[];
    uuid?: Prisma.StringFilter<"RencanaAksi"> | string;
    nama_program?: Prisma.StringNullableFilter<"RencanaAksi"> | string | null;
    uraian_kegiatan?: Prisma.StringNullableFilter<"RencanaAksi"> | string | null;
    isu_strategis?: Prisma.StringNullableFilter<"RencanaAksi"> | string | null;
    dukungan_rb?: Prisma.IntFilter<"RencanaAksi"> | number;
    output?: Prisma.StringNullableFilter<"RencanaAksi"> | string | null;
    timeline?: Prisma.StringNullableFilter<"RencanaAksi"> | string | null;
    ukuran_keberhasilan?: Prisma.StringNullableFilter<"RencanaAksi"> | string | null;
    outcome?: Prisma.StringNullableFilter<"RencanaAksi"> | string | null;
    keterangan?: Prisma.StringNullableFilter<"RencanaAksi"> | string | null;
    status?: Prisma.IntFilter<"RencanaAksi"> | number;
    tahun?: Prisma.IntFilter<"RencanaAksi"> | number;
    satker?: Prisma.StringFilter<"RencanaAksi"> | string;
    last_updated?: Prisma.StringFilter<"RencanaAksi"> | string;
    created_by?: Prisma.StringFilter<"RencanaAksi"> | string;
};
export type RencanaAksiCreateWithoutSatkerObjInput = {
    uuid: string;
    nama_program?: string | null;
    uraian_kegiatan?: string | null;
    isu_strategis?: string | null;
    output?: string | null;
    timeline?: string | null;
    ukuran_keberhasilan?: string | null;
    outcome?: string | null;
    keterangan?: string | null;
    tahun: number;
    last_updated: string;
    dukunganRbObj: Prisma.DukunganRBCreateNestedOneWithoutRencanaAksiInput;
    raStatusObj: Prisma.RencanaAksiStatusCreateNestedOneWithoutRencanaAksiInput;
    creatorObj: Prisma.UserCreateNestedOneWithoutRencanaAksiInput;
    listOfProgress?: Prisma.ProgressRencanaAksiCreateNestedManyWithoutRaObjInput;
};
export type RencanaAksiUncheckedCreateWithoutSatkerObjInput = {
    uuid: string;
    nama_program?: string | null;
    uraian_kegiatan?: string | null;
    isu_strategis?: string | null;
    dukungan_rb: number;
    output?: string | null;
    timeline?: string | null;
    ukuran_keberhasilan?: string | null;
    outcome?: string | null;
    keterangan?: string | null;
    status: number;
    tahun: number;
    last_updated: string;
    created_by: string;
    listOfProgress?: Prisma.ProgressRencanaAksiUncheckedCreateNestedManyWithoutRaObjInput;
};
export type RencanaAksiCreateOrConnectWithoutSatkerObjInput = {
    where: Prisma.RencanaAksiWhereUniqueInput;
    create: Prisma.XOR<Prisma.RencanaAksiCreateWithoutSatkerObjInput, Prisma.RencanaAksiUncheckedCreateWithoutSatkerObjInput>;
};
export type RencanaAksiCreateManySatkerObjInputEnvelope = {
    data: Prisma.RencanaAksiCreateManySatkerObjInput | Prisma.RencanaAksiCreateManySatkerObjInput[];
    skipDuplicates?: boolean;
};
export type RencanaAksiUpsertWithWhereUniqueWithoutSatkerObjInput = {
    where: Prisma.RencanaAksiWhereUniqueInput;
    update: Prisma.XOR<Prisma.RencanaAksiUpdateWithoutSatkerObjInput, Prisma.RencanaAksiUncheckedUpdateWithoutSatkerObjInput>;
    create: Prisma.XOR<Prisma.RencanaAksiCreateWithoutSatkerObjInput, Prisma.RencanaAksiUncheckedCreateWithoutSatkerObjInput>;
};
export type RencanaAksiUpdateWithWhereUniqueWithoutSatkerObjInput = {
    where: Prisma.RencanaAksiWhereUniqueInput;
    data: Prisma.XOR<Prisma.RencanaAksiUpdateWithoutSatkerObjInput, Prisma.RencanaAksiUncheckedUpdateWithoutSatkerObjInput>;
};
export type RencanaAksiUpdateManyWithWhereWithoutSatkerObjInput = {
    where: Prisma.RencanaAksiScalarWhereInput;
    data: Prisma.XOR<Prisma.RencanaAksiUpdateManyMutationInput, Prisma.RencanaAksiUncheckedUpdateManyWithoutSatkerObjInput>;
};
export type RencanaAksiCreateWithoutDukunganRbObjInput = {
    uuid: string;
    nama_program?: string | null;
    uraian_kegiatan?: string | null;
    isu_strategis?: string | null;
    output?: string | null;
    timeline?: string | null;
    ukuran_keberhasilan?: string | null;
    outcome?: string | null;
    keterangan?: string | null;
    tahun: number;
    last_updated: string;
    raStatusObj: Prisma.RencanaAksiStatusCreateNestedOneWithoutRencanaAksiInput;
    satkerObj: Prisma.SatkerCreateNestedOneWithoutRencanaAksiInput;
    creatorObj: Prisma.UserCreateNestedOneWithoutRencanaAksiInput;
    listOfProgress?: Prisma.ProgressRencanaAksiCreateNestedManyWithoutRaObjInput;
};
export type RencanaAksiUncheckedCreateWithoutDukunganRbObjInput = {
    uuid: string;
    nama_program?: string | null;
    uraian_kegiatan?: string | null;
    isu_strategis?: string | null;
    output?: string | null;
    timeline?: string | null;
    ukuran_keberhasilan?: string | null;
    outcome?: string | null;
    keterangan?: string | null;
    status: number;
    tahun: number;
    satker: string;
    last_updated: string;
    created_by: string;
    listOfProgress?: Prisma.ProgressRencanaAksiUncheckedCreateNestedManyWithoutRaObjInput;
};
export type RencanaAksiCreateOrConnectWithoutDukunganRbObjInput = {
    where: Prisma.RencanaAksiWhereUniqueInput;
    create: Prisma.XOR<Prisma.RencanaAksiCreateWithoutDukunganRbObjInput, Prisma.RencanaAksiUncheckedCreateWithoutDukunganRbObjInput>;
};
export type RencanaAksiCreateManyDukunganRbObjInputEnvelope = {
    data: Prisma.RencanaAksiCreateManyDukunganRbObjInput | Prisma.RencanaAksiCreateManyDukunganRbObjInput[];
    skipDuplicates?: boolean;
};
export type RencanaAksiUpsertWithWhereUniqueWithoutDukunganRbObjInput = {
    where: Prisma.RencanaAksiWhereUniqueInput;
    update: Prisma.XOR<Prisma.RencanaAksiUpdateWithoutDukunganRbObjInput, Prisma.RencanaAksiUncheckedUpdateWithoutDukunganRbObjInput>;
    create: Prisma.XOR<Prisma.RencanaAksiCreateWithoutDukunganRbObjInput, Prisma.RencanaAksiUncheckedCreateWithoutDukunganRbObjInput>;
};
export type RencanaAksiUpdateWithWhereUniqueWithoutDukunganRbObjInput = {
    where: Prisma.RencanaAksiWhereUniqueInput;
    data: Prisma.XOR<Prisma.RencanaAksiUpdateWithoutDukunganRbObjInput, Prisma.RencanaAksiUncheckedUpdateWithoutDukunganRbObjInput>;
};
export type RencanaAksiUpdateManyWithWhereWithoutDukunganRbObjInput = {
    where: Prisma.RencanaAksiScalarWhereInput;
    data: Prisma.XOR<Prisma.RencanaAksiUpdateManyMutationInput, Prisma.RencanaAksiUncheckedUpdateManyWithoutDukunganRbObjInput>;
};
export type RencanaAksiCreateWithoutRaStatusObjInput = {
    uuid: string;
    nama_program?: string | null;
    uraian_kegiatan?: string | null;
    isu_strategis?: string | null;
    output?: string | null;
    timeline?: string | null;
    ukuran_keberhasilan?: string | null;
    outcome?: string | null;
    keterangan?: string | null;
    tahun: number;
    last_updated: string;
    dukunganRbObj: Prisma.DukunganRBCreateNestedOneWithoutRencanaAksiInput;
    satkerObj: Prisma.SatkerCreateNestedOneWithoutRencanaAksiInput;
    creatorObj: Prisma.UserCreateNestedOneWithoutRencanaAksiInput;
    listOfProgress?: Prisma.ProgressRencanaAksiCreateNestedManyWithoutRaObjInput;
};
export type RencanaAksiUncheckedCreateWithoutRaStatusObjInput = {
    uuid: string;
    nama_program?: string | null;
    uraian_kegiatan?: string | null;
    isu_strategis?: string | null;
    dukungan_rb: number;
    output?: string | null;
    timeline?: string | null;
    ukuran_keberhasilan?: string | null;
    outcome?: string | null;
    keterangan?: string | null;
    tahun: number;
    satker: string;
    last_updated: string;
    created_by: string;
    listOfProgress?: Prisma.ProgressRencanaAksiUncheckedCreateNestedManyWithoutRaObjInput;
};
export type RencanaAksiCreateOrConnectWithoutRaStatusObjInput = {
    where: Prisma.RencanaAksiWhereUniqueInput;
    create: Prisma.XOR<Prisma.RencanaAksiCreateWithoutRaStatusObjInput, Prisma.RencanaAksiUncheckedCreateWithoutRaStatusObjInput>;
};
export type RencanaAksiCreateManyRaStatusObjInputEnvelope = {
    data: Prisma.RencanaAksiCreateManyRaStatusObjInput | Prisma.RencanaAksiCreateManyRaStatusObjInput[];
    skipDuplicates?: boolean;
};
export type RencanaAksiUpsertWithWhereUniqueWithoutRaStatusObjInput = {
    where: Prisma.RencanaAksiWhereUniqueInput;
    update: Prisma.XOR<Prisma.RencanaAksiUpdateWithoutRaStatusObjInput, Prisma.RencanaAksiUncheckedUpdateWithoutRaStatusObjInput>;
    create: Prisma.XOR<Prisma.RencanaAksiCreateWithoutRaStatusObjInput, Prisma.RencanaAksiUncheckedCreateWithoutRaStatusObjInput>;
};
export type RencanaAksiUpdateWithWhereUniqueWithoutRaStatusObjInput = {
    where: Prisma.RencanaAksiWhereUniqueInput;
    data: Prisma.XOR<Prisma.RencanaAksiUpdateWithoutRaStatusObjInput, Prisma.RencanaAksiUncheckedUpdateWithoutRaStatusObjInput>;
};
export type RencanaAksiUpdateManyWithWhereWithoutRaStatusObjInput = {
    where: Prisma.RencanaAksiScalarWhereInput;
    data: Prisma.XOR<Prisma.RencanaAksiUpdateManyMutationInput, Prisma.RencanaAksiUncheckedUpdateManyWithoutRaStatusObjInput>;
};
export type RencanaAksiCreateWithoutListOfProgressInput = {
    uuid: string;
    nama_program?: string | null;
    uraian_kegiatan?: string | null;
    isu_strategis?: string | null;
    output?: string | null;
    timeline?: string | null;
    ukuran_keberhasilan?: string | null;
    outcome?: string | null;
    keterangan?: string | null;
    tahun: number;
    last_updated: string;
    dukunganRbObj: Prisma.DukunganRBCreateNestedOneWithoutRencanaAksiInput;
    raStatusObj: Prisma.RencanaAksiStatusCreateNestedOneWithoutRencanaAksiInput;
    satkerObj: Prisma.SatkerCreateNestedOneWithoutRencanaAksiInput;
    creatorObj: Prisma.UserCreateNestedOneWithoutRencanaAksiInput;
};
export type RencanaAksiUncheckedCreateWithoutListOfProgressInput = {
    uuid: string;
    nama_program?: string | null;
    uraian_kegiatan?: string | null;
    isu_strategis?: string | null;
    dukungan_rb: number;
    output?: string | null;
    timeline?: string | null;
    ukuran_keberhasilan?: string | null;
    outcome?: string | null;
    keterangan?: string | null;
    status: number;
    tahun: number;
    satker: string;
    last_updated: string;
    created_by: string;
};
export type RencanaAksiCreateOrConnectWithoutListOfProgressInput = {
    where: Prisma.RencanaAksiWhereUniqueInput;
    create: Prisma.XOR<Prisma.RencanaAksiCreateWithoutListOfProgressInput, Prisma.RencanaAksiUncheckedCreateWithoutListOfProgressInput>;
};
export type RencanaAksiUpsertWithoutListOfProgressInput = {
    update: Prisma.XOR<Prisma.RencanaAksiUpdateWithoutListOfProgressInput, Prisma.RencanaAksiUncheckedUpdateWithoutListOfProgressInput>;
    create: Prisma.XOR<Prisma.RencanaAksiCreateWithoutListOfProgressInput, Prisma.RencanaAksiUncheckedCreateWithoutListOfProgressInput>;
    where?: Prisma.RencanaAksiWhereInput;
};
export type RencanaAksiUpdateToOneWithWhereWithoutListOfProgressInput = {
    where?: Prisma.RencanaAksiWhereInput;
    data: Prisma.XOR<Prisma.RencanaAksiUpdateWithoutListOfProgressInput, Prisma.RencanaAksiUncheckedUpdateWithoutListOfProgressInput>;
};
export type RencanaAksiUpdateWithoutListOfProgressInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_program?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uraian_kegiatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isu_strategis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keterangan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
    dukunganRbObj?: Prisma.DukunganRBUpdateOneRequiredWithoutRencanaAksiNestedInput;
    raStatusObj?: Prisma.RencanaAksiStatusUpdateOneRequiredWithoutRencanaAksiNestedInput;
    satkerObj?: Prisma.SatkerUpdateOneRequiredWithoutRencanaAksiNestedInput;
    creatorObj?: Prisma.UserUpdateOneRequiredWithoutRencanaAksiNestedInput;
};
export type RencanaAksiUncheckedUpdateWithoutListOfProgressInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_program?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uraian_kegiatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isu_strategis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dukungan_rb?: Prisma.IntFieldUpdateOperationsInput | number;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keterangan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RencanaAksiCreateManyCreatorObjInput = {
    uuid: string;
    nama_program?: string | null;
    uraian_kegiatan?: string | null;
    isu_strategis?: string | null;
    dukungan_rb: number;
    output?: string | null;
    timeline?: string | null;
    ukuran_keberhasilan?: string | null;
    outcome?: string | null;
    keterangan?: string | null;
    status: number;
    tahun: number;
    satker: string;
    last_updated: string;
};
export type RencanaAksiUpdateWithoutCreatorObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_program?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uraian_kegiatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isu_strategis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keterangan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
    dukunganRbObj?: Prisma.DukunganRBUpdateOneRequiredWithoutRencanaAksiNestedInput;
    raStatusObj?: Prisma.RencanaAksiStatusUpdateOneRequiredWithoutRencanaAksiNestedInput;
    satkerObj?: Prisma.SatkerUpdateOneRequiredWithoutRencanaAksiNestedInput;
    listOfProgress?: Prisma.ProgressRencanaAksiUpdateManyWithoutRaObjNestedInput;
};
export type RencanaAksiUncheckedUpdateWithoutCreatorObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_program?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uraian_kegiatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isu_strategis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dukungan_rb?: Prisma.IntFieldUpdateOperationsInput | number;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keterangan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
    listOfProgress?: Prisma.ProgressRencanaAksiUncheckedUpdateManyWithoutRaObjNestedInput;
};
export type RencanaAksiUncheckedUpdateManyWithoutCreatorObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_program?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uraian_kegiatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isu_strategis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dukungan_rb?: Prisma.IntFieldUpdateOperationsInput | number;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keterangan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RencanaAksiCreateManySatkerObjInput = {
    uuid: string;
    nama_program?: string | null;
    uraian_kegiatan?: string | null;
    isu_strategis?: string | null;
    dukungan_rb: number;
    output?: string | null;
    timeline?: string | null;
    ukuran_keberhasilan?: string | null;
    outcome?: string | null;
    keterangan?: string | null;
    status: number;
    tahun: number;
    last_updated: string;
    created_by: string;
};
export type RencanaAksiUpdateWithoutSatkerObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_program?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uraian_kegiatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isu_strategis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keterangan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
    dukunganRbObj?: Prisma.DukunganRBUpdateOneRequiredWithoutRencanaAksiNestedInput;
    raStatusObj?: Prisma.RencanaAksiStatusUpdateOneRequiredWithoutRencanaAksiNestedInput;
    creatorObj?: Prisma.UserUpdateOneRequiredWithoutRencanaAksiNestedInput;
    listOfProgress?: Prisma.ProgressRencanaAksiUpdateManyWithoutRaObjNestedInput;
};
export type RencanaAksiUncheckedUpdateWithoutSatkerObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_program?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uraian_kegiatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isu_strategis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dukungan_rb?: Prisma.IntFieldUpdateOperationsInput | number;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keterangan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    listOfProgress?: Prisma.ProgressRencanaAksiUncheckedUpdateManyWithoutRaObjNestedInput;
};
export type RencanaAksiUncheckedUpdateManyWithoutSatkerObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_program?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uraian_kegiatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isu_strategis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dukungan_rb?: Prisma.IntFieldUpdateOperationsInput | number;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keterangan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RencanaAksiCreateManyDukunganRbObjInput = {
    uuid: string;
    nama_program?: string | null;
    uraian_kegiatan?: string | null;
    isu_strategis?: string | null;
    output?: string | null;
    timeline?: string | null;
    ukuran_keberhasilan?: string | null;
    outcome?: string | null;
    keterangan?: string | null;
    status: number;
    tahun: number;
    satker: string;
    last_updated: string;
    created_by: string;
};
export type RencanaAksiUpdateWithoutDukunganRbObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_program?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uraian_kegiatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isu_strategis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keterangan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
    raStatusObj?: Prisma.RencanaAksiStatusUpdateOneRequiredWithoutRencanaAksiNestedInput;
    satkerObj?: Prisma.SatkerUpdateOneRequiredWithoutRencanaAksiNestedInput;
    creatorObj?: Prisma.UserUpdateOneRequiredWithoutRencanaAksiNestedInput;
    listOfProgress?: Prisma.ProgressRencanaAksiUpdateManyWithoutRaObjNestedInput;
};
export type RencanaAksiUncheckedUpdateWithoutDukunganRbObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_program?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uraian_kegiatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isu_strategis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keterangan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    listOfProgress?: Prisma.ProgressRencanaAksiUncheckedUpdateManyWithoutRaObjNestedInput;
};
export type RencanaAksiUncheckedUpdateManyWithoutDukunganRbObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_program?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uraian_kegiatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isu_strategis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keterangan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.IntFieldUpdateOperationsInput | number;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RencanaAksiCreateManyRaStatusObjInput = {
    uuid: string;
    nama_program?: string | null;
    uraian_kegiatan?: string | null;
    isu_strategis?: string | null;
    dukungan_rb: number;
    output?: string | null;
    timeline?: string | null;
    ukuran_keberhasilan?: string | null;
    outcome?: string | null;
    keterangan?: string | null;
    tahun: number;
    satker: string;
    last_updated: string;
    created_by: string;
};
export type RencanaAksiUpdateWithoutRaStatusObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_program?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uraian_kegiatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isu_strategis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keterangan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
    dukunganRbObj?: Prisma.DukunganRBUpdateOneRequiredWithoutRencanaAksiNestedInput;
    satkerObj?: Prisma.SatkerUpdateOneRequiredWithoutRencanaAksiNestedInput;
    creatorObj?: Prisma.UserUpdateOneRequiredWithoutRencanaAksiNestedInput;
    listOfProgress?: Prisma.ProgressRencanaAksiUpdateManyWithoutRaObjNestedInput;
};
export type RencanaAksiUncheckedUpdateWithoutRaStatusObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_program?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uraian_kegiatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isu_strategis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dukungan_rb?: Prisma.IntFieldUpdateOperationsInput | number;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keterangan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    listOfProgress?: Prisma.ProgressRencanaAksiUncheckedUpdateManyWithoutRaObjNestedInput;
};
export type RencanaAksiUncheckedUpdateManyWithoutRaStatusObjInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    nama_program?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uraian_kegiatan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isu_strategis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dukungan_rb?: Prisma.IntFieldUpdateOperationsInput | number;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ukuran_keberhasilan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    outcome?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keterangan?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tahun?: Prisma.IntFieldUpdateOperationsInput | number;
    satker?: Prisma.StringFieldUpdateOperationsInput | string;
    last_updated?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type RencanaAksiCountOutputType
 */
export type RencanaAksiCountOutputType = {
    listOfProgress: number;
};
export type RencanaAksiCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listOfProgress?: boolean | RencanaAksiCountOutputTypeCountListOfProgressArgs;
};
/**
 * RencanaAksiCountOutputType without action
 */
export type RencanaAksiCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RencanaAksiCountOutputType
     */
    select?: Prisma.RencanaAksiCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * RencanaAksiCountOutputType without action
 */
export type RencanaAksiCountOutputTypeCountListOfProgressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgressRencanaAksiWhereInput;
};
export type RencanaAksiSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    nama_program?: boolean;
    uraian_kegiatan?: boolean;
    isu_strategis?: boolean;
    dukungan_rb?: boolean;
    output?: boolean;
    timeline?: boolean;
    ukuran_keberhasilan?: boolean;
    outcome?: boolean;
    keterangan?: boolean;
    status?: boolean;
    tahun?: boolean;
    satker?: boolean;
    last_updated?: boolean;
    created_by?: boolean;
    dukunganRbObj?: boolean | Prisma.DukunganRBDefaultArgs<ExtArgs>;
    raStatusObj?: boolean | Prisma.RencanaAksiStatusDefaultArgs<ExtArgs>;
    satkerObj?: boolean | Prisma.SatkerDefaultArgs<ExtArgs>;
    creatorObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    listOfProgress?: boolean | Prisma.RencanaAksi$listOfProgressArgs<ExtArgs>;
    _count?: boolean | Prisma.RencanaAksiCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rencanaAksi"]>;
export type RencanaAksiSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    nama_program?: boolean;
    uraian_kegiatan?: boolean;
    isu_strategis?: boolean;
    dukungan_rb?: boolean;
    output?: boolean;
    timeline?: boolean;
    ukuran_keberhasilan?: boolean;
    outcome?: boolean;
    keterangan?: boolean;
    status?: boolean;
    tahun?: boolean;
    satker?: boolean;
    last_updated?: boolean;
    created_by?: boolean;
    dukunganRbObj?: boolean | Prisma.DukunganRBDefaultArgs<ExtArgs>;
    raStatusObj?: boolean | Prisma.RencanaAksiStatusDefaultArgs<ExtArgs>;
    satkerObj?: boolean | Prisma.SatkerDefaultArgs<ExtArgs>;
    creatorObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rencanaAksi"]>;
export type RencanaAksiSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    nama_program?: boolean;
    uraian_kegiatan?: boolean;
    isu_strategis?: boolean;
    dukungan_rb?: boolean;
    output?: boolean;
    timeline?: boolean;
    ukuran_keberhasilan?: boolean;
    outcome?: boolean;
    keterangan?: boolean;
    status?: boolean;
    tahun?: boolean;
    satker?: boolean;
    last_updated?: boolean;
    created_by?: boolean;
    dukunganRbObj?: boolean | Prisma.DukunganRBDefaultArgs<ExtArgs>;
    raStatusObj?: boolean | Prisma.RencanaAksiStatusDefaultArgs<ExtArgs>;
    satkerObj?: boolean | Prisma.SatkerDefaultArgs<ExtArgs>;
    creatorObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rencanaAksi"]>;
export type RencanaAksiSelectScalar = {
    uuid?: boolean;
    nama_program?: boolean;
    uraian_kegiatan?: boolean;
    isu_strategis?: boolean;
    dukungan_rb?: boolean;
    output?: boolean;
    timeline?: boolean;
    ukuran_keberhasilan?: boolean;
    outcome?: boolean;
    keterangan?: boolean;
    status?: boolean;
    tahun?: boolean;
    satker?: boolean;
    last_updated?: boolean;
    created_by?: boolean;
};
export type RencanaAksiOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"uuid" | "nama_program" | "uraian_kegiatan" | "isu_strategis" | "dukungan_rb" | "output" | "timeline" | "ukuran_keberhasilan" | "outcome" | "keterangan" | "status" | "tahun" | "satker" | "last_updated" | "created_by", ExtArgs["result"]["rencanaAksi"]>;
export type RencanaAksiInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    dukunganRbObj?: boolean | Prisma.DukunganRBDefaultArgs<ExtArgs>;
    raStatusObj?: boolean | Prisma.RencanaAksiStatusDefaultArgs<ExtArgs>;
    satkerObj?: boolean | Prisma.SatkerDefaultArgs<ExtArgs>;
    creatorObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    listOfProgress?: boolean | Prisma.RencanaAksi$listOfProgressArgs<ExtArgs>;
    _count?: boolean | Prisma.RencanaAksiCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RencanaAksiIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    dukunganRbObj?: boolean | Prisma.DukunganRBDefaultArgs<ExtArgs>;
    raStatusObj?: boolean | Prisma.RencanaAksiStatusDefaultArgs<ExtArgs>;
    satkerObj?: boolean | Prisma.SatkerDefaultArgs<ExtArgs>;
    creatorObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type RencanaAksiIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    dukunganRbObj?: boolean | Prisma.DukunganRBDefaultArgs<ExtArgs>;
    raStatusObj?: boolean | Prisma.RencanaAksiStatusDefaultArgs<ExtArgs>;
    satkerObj?: boolean | Prisma.SatkerDefaultArgs<ExtArgs>;
    creatorObj?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $RencanaAksiPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RencanaAksi";
    objects: {
        dukunganRbObj: Prisma.$DukunganRBPayload<ExtArgs>;
        raStatusObj: Prisma.$RencanaAksiStatusPayload<ExtArgs>;
        satkerObj: Prisma.$SatkerPayload<ExtArgs>;
        creatorObj: Prisma.$UserPayload<ExtArgs>;
        listOfProgress: Prisma.$ProgressRencanaAksiPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        uuid: string;
        nama_program: string | null;
        uraian_kegiatan: string | null;
        isu_strategis: string | null;
        dukungan_rb: number;
        output: string | null;
        timeline: string | null;
        ukuran_keberhasilan: string | null;
        outcome: string | null;
        keterangan: string | null;
        status: number;
        tahun: number;
        satker: string;
        last_updated: string;
        created_by: string;
    }, ExtArgs["result"]["rencanaAksi"]>;
    composites: {};
};
export type RencanaAksiGetPayload<S extends boolean | null | undefined | RencanaAksiDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RencanaAksiPayload, S>;
export type RencanaAksiCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RencanaAksiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RencanaAksiCountAggregateInputType | true;
};
export interface RencanaAksiDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RencanaAksi'];
        meta: {
            name: 'RencanaAksi';
        };
    };
    /**
     * Find zero or one RencanaAksi that matches the filter.
     * @param {RencanaAksiFindUniqueArgs} args - Arguments to find a RencanaAksi
     * @example
     * // Get one RencanaAksi
     * const rencanaAksi = await prisma.rencanaAksi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RencanaAksiFindUniqueArgs>(args: Prisma.SelectSubset<T, RencanaAksiFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RencanaAksiClient<runtime.Types.Result.GetResult<Prisma.$RencanaAksiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one RencanaAksi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RencanaAksiFindUniqueOrThrowArgs} args - Arguments to find a RencanaAksi
     * @example
     * // Get one RencanaAksi
     * const rencanaAksi = await prisma.rencanaAksi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RencanaAksiFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RencanaAksiFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RencanaAksiClient<runtime.Types.Result.GetResult<Prisma.$RencanaAksiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RencanaAksi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RencanaAksiFindFirstArgs} args - Arguments to find a RencanaAksi
     * @example
     * // Get one RencanaAksi
     * const rencanaAksi = await prisma.rencanaAksi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RencanaAksiFindFirstArgs>(args?: Prisma.SelectSubset<T, RencanaAksiFindFirstArgs<ExtArgs>>): Prisma.Prisma__RencanaAksiClient<runtime.Types.Result.GetResult<Prisma.$RencanaAksiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RencanaAksi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RencanaAksiFindFirstOrThrowArgs} args - Arguments to find a RencanaAksi
     * @example
     * // Get one RencanaAksi
     * const rencanaAksi = await prisma.rencanaAksi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RencanaAksiFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RencanaAksiFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RencanaAksiClient<runtime.Types.Result.GetResult<Prisma.$RencanaAksiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more RencanaAksis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RencanaAksiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RencanaAksis
     * const rencanaAksis = await prisma.rencanaAksi.findMany()
     *
     * // Get first 10 RencanaAksis
     * const rencanaAksis = await prisma.rencanaAksi.findMany({ take: 10 })
     *
     * // Only select the `uuid`
     * const rencanaAksiWithUuidOnly = await prisma.rencanaAksi.findMany({ select: { uuid: true } })
     *
     */
    findMany<T extends RencanaAksiFindManyArgs>(args?: Prisma.SelectSubset<T, RencanaAksiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RencanaAksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a RencanaAksi.
     * @param {RencanaAksiCreateArgs} args - Arguments to create a RencanaAksi.
     * @example
     * // Create one RencanaAksi
     * const RencanaAksi = await prisma.rencanaAksi.create({
     *   data: {
     *     // ... data to create a RencanaAksi
     *   }
     * })
     *
     */
    create<T extends RencanaAksiCreateArgs>(args: Prisma.SelectSubset<T, RencanaAksiCreateArgs<ExtArgs>>): Prisma.Prisma__RencanaAksiClient<runtime.Types.Result.GetResult<Prisma.$RencanaAksiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many RencanaAksis.
     * @param {RencanaAksiCreateManyArgs} args - Arguments to create many RencanaAksis.
     * @example
     * // Create many RencanaAksis
     * const rencanaAksi = await prisma.rencanaAksi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RencanaAksiCreateManyArgs>(args?: Prisma.SelectSubset<T, RencanaAksiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many RencanaAksis and returns the data saved in the database.
     * @param {RencanaAksiCreateManyAndReturnArgs} args - Arguments to create many RencanaAksis.
     * @example
     * // Create many RencanaAksis
     * const rencanaAksi = await prisma.rencanaAksi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many RencanaAksis and only return the `uuid`
     * const rencanaAksiWithUuidOnly = await prisma.rencanaAksi.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RencanaAksiCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RencanaAksiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RencanaAksiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a RencanaAksi.
     * @param {RencanaAksiDeleteArgs} args - Arguments to delete one RencanaAksi.
     * @example
     * // Delete one RencanaAksi
     * const RencanaAksi = await prisma.rencanaAksi.delete({
     *   where: {
     *     // ... filter to delete one RencanaAksi
     *   }
     * })
     *
     */
    delete<T extends RencanaAksiDeleteArgs>(args: Prisma.SelectSubset<T, RencanaAksiDeleteArgs<ExtArgs>>): Prisma.Prisma__RencanaAksiClient<runtime.Types.Result.GetResult<Prisma.$RencanaAksiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one RencanaAksi.
     * @param {RencanaAksiUpdateArgs} args - Arguments to update one RencanaAksi.
     * @example
     * // Update one RencanaAksi
     * const rencanaAksi = await prisma.rencanaAksi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RencanaAksiUpdateArgs>(args: Prisma.SelectSubset<T, RencanaAksiUpdateArgs<ExtArgs>>): Prisma.Prisma__RencanaAksiClient<runtime.Types.Result.GetResult<Prisma.$RencanaAksiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more RencanaAksis.
     * @param {RencanaAksiDeleteManyArgs} args - Arguments to filter RencanaAksis to delete.
     * @example
     * // Delete a few RencanaAksis
     * const { count } = await prisma.rencanaAksi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RencanaAksiDeleteManyArgs>(args?: Prisma.SelectSubset<T, RencanaAksiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RencanaAksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RencanaAksiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RencanaAksis
     * const rencanaAksi = await prisma.rencanaAksi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RencanaAksiUpdateManyArgs>(args: Prisma.SelectSubset<T, RencanaAksiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RencanaAksis and returns the data updated in the database.
     * @param {RencanaAksiUpdateManyAndReturnArgs} args - Arguments to update many RencanaAksis.
     * @example
     * // Update many RencanaAksis
     * const rencanaAksi = await prisma.rencanaAksi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more RencanaAksis and only return the `uuid`
     * const rencanaAksiWithUuidOnly = await prisma.rencanaAksi.updateManyAndReturn({
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
    updateManyAndReturn<T extends RencanaAksiUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RencanaAksiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RencanaAksiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one RencanaAksi.
     * @param {RencanaAksiUpsertArgs} args - Arguments to update or create a RencanaAksi.
     * @example
     * // Update or create a RencanaAksi
     * const rencanaAksi = await prisma.rencanaAksi.upsert({
     *   create: {
     *     // ... data to create a RencanaAksi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RencanaAksi we want to update
     *   }
     * })
     */
    upsert<T extends RencanaAksiUpsertArgs>(args: Prisma.SelectSubset<T, RencanaAksiUpsertArgs<ExtArgs>>): Prisma.Prisma__RencanaAksiClient<runtime.Types.Result.GetResult<Prisma.$RencanaAksiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of RencanaAksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RencanaAksiCountArgs} args - Arguments to filter RencanaAksis to count.
     * @example
     * // Count the number of RencanaAksis
     * const count = await prisma.rencanaAksi.count({
     *   where: {
     *     // ... the filter for the RencanaAksis we want to count
     *   }
     * })
    **/
    count<T extends RencanaAksiCountArgs>(args?: Prisma.Subset<T, RencanaAksiCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RencanaAksiCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a RencanaAksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RencanaAksiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RencanaAksiAggregateArgs>(args: Prisma.Subset<T, RencanaAksiAggregateArgs>): Prisma.PrismaPromise<GetRencanaAksiAggregateType<T>>;
    /**
     * Group by RencanaAksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RencanaAksiGroupByArgs} args - Group by arguments.
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
    groupBy<T extends RencanaAksiGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RencanaAksiGroupByArgs['orderBy'];
    } : {
        orderBy?: RencanaAksiGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RencanaAksiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRencanaAksiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the RencanaAksi model
     */
    readonly fields: RencanaAksiFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for RencanaAksi.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__RencanaAksiClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    dukunganRbObj<T extends Prisma.DukunganRBDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DukunganRBDefaultArgs<ExtArgs>>): Prisma.Prisma__DukunganRBClient<runtime.Types.Result.GetResult<Prisma.$DukunganRBPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    raStatusObj<T extends Prisma.RencanaAksiStatusDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RencanaAksiStatusDefaultArgs<ExtArgs>>): Prisma.Prisma__RencanaAksiStatusClient<runtime.Types.Result.GetResult<Prisma.$RencanaAksiStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    satkerObj<T extends Prisma.SatkerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SatkerDefaultArgs<ExtArgs>>): Prisma.Prisma__SatkerClient<runtime.Types.Result.GetResult<Prisma.$SatkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    creatorObj<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    listOfProgress<T extends Prisma.RencanaAksi$listOfProgressArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RencanaAksi$listOfProgressArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgressRencanaAksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the RencanaAksi model
 */
export interface RencanaAksiFieldRefs {
    readonly uuid: Prisma.FieldRef<"RencanaAksi", 'String'>;
    readonly nama_program: Prisma.FieldRef<"RencanaAksi", 'String'>;
    readonly uraian_kegiatan: Prisma.FieldRef<"RencanaAksi", 'String'>;
    readonly isu_strategis: Prisma.FieldRef<"RencanaAksi", 'String'>;
    readonly dukungan_rb: Prisma.FieldRef<"RencanaAksi", 'Int'>;
    readonly output: Prisma.FieldRef<"RencanaAksi", 'String'>;
    readonly timeline: Prisma.FieldRef<"RencanaAksi", 'String'>;
    readonly ukuran_keberhasilan: Prisma.FieldRef<"RencanaAksi", 'String'>;
    readonly outcome: Prisma.FieldRef<"RencanaAksi", 'String'>;
    readonly keterangan: Prisma.FieldRef<"RencanaAksi", 'String'>;
    readonly status: Prisma.FieldRef<"RencanaAksi", 'Int'>;
    readonly tahun: Prisma.FieldRef<"RencanaAksi", 'Int'>;
    readonly satker: Prisma.FieldRef<"RencanaAksi", 'String'>;
    readonly last_updated: Prisma.FieldRef<"RencanaAksi", 'String'>;
    readonly created_by: Prisma.FieldRef<"RencanaAksi", 'String'>;
}
/**
 * RencanaAksi findUnique
 */
export type RencanaAksiFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which RencanaAksi to fetch.
     */
    where: Prisma.RencanaAksiWhereUniqueInput;
};
/**
 * RencanaAksi findUniqueOrThrow
 */
export type RencanaAksiFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which RencanaAksi to fetch.
     */
    where: Prisma.RencanaAksiWhereUniqueInput;
};
/**
 * RencanaAksi findFirst
 */
export type RencanaAksiFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which RencanaAksi to fetch.
     */
    where?: Prisma.RencanaAksiWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RencanaAksis to fetch.
     */
    orderBy?: Prisma.RencanaAksiOrderByWithRelationInput | Prisma.RencanaAksiOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RencanaAksis.
     */
    cursor?: Prisma.RencanaAksiWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RencanaAksis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RencanaAksis.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RencanaAksis.
     */
    distinct?: Prisma.RencanaAksiScalarFieldEnum | Prisma.RencanaAksiScalarFieldEnum[];
};
/**
 * RencanaAksi findFirstOrThrow
 */
export type RencanaAksiFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which RencanaAksi to fetch.
     */
    where?: Prisma.RencanaAksiWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RencanaAksis to fetch.
     */
    orderBy?: Prisma.RencanaAksiOrderByWithRelationInput | Prisma.RencanaAksiOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RencanaAksis.
     */
    cursor?: Prisma.RencanaAksiWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RencanaAksis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RencanaAksis.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RencanaAksis.
     */
    distinct?: Prisma.RencanaAksiScalarFieldEnum | Prisma.RencanaAksiScalarFieldEnum[];
};
/**
 * RencanaAksi findMany
 */
export type RencanaAksiFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which RencanaAksis to fetch.
     */
    where?: Prisma.RencanaAksiWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RencanaAksis to fetch.
     */
    orderBy?: Prisma.RencanaAksiOrderByWithRelationInput | Prisma.RencanaAksiOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RencanaAksis.
     */
    cursor?: Prisma.RencanaAksiWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RencanaAksis from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RencanaAksis.
     */
    skip?: number;
    distinct?: Prisma.RencanaAksiScalarFieldEnum | Prisma.RencanaAksiScalarFieldEnum[];
};
/**
 * RencanaAksi create
 */
export type RencanaAksiCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a RencanaAksi.
     */
    data: Prisma.XOR<Prisma.RencanaAksiCreateInput, Prisma.RencanaAksiUncheckedCreateInput>;
};
/**
 * RencanaAksi createMany
 */
export type RencanaAksiCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many RencanaAksis.
     */
    data: Prisma.RencanaAksiCreateManyInput | Prisma.RencanaAksiCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * RencanaAksi createManyAndReturn
 */
export type RencanaAksiCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RencanaAksi
     */
    select?: Prisma.RencanaAksiSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RencanaAksi
     */
    omit?: Prisma.RencanaAksiOmit<ExtArgs> | null;
    /**
     * The data used to create many RencanaAksis.
     */
    data: Prisma.RencanaAksiCreateManyInput | Prisma.RencanaAksiCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RencanaAksiIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * RencanaAksi update
 */
export type RencanaAksiUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a RencanaAksi.
     */
    data: Prisma.XOR<Prisma.RencanaAksiUpdateInput, Prisma.RencanaAksiUncheckedUpdateInput>;
    /**
     * Choose, which RencanaAksi to update.
     */
    where: Prisma.RencanaAksiWhereUniqueInput;
};
/**
 * RencanaAksi updateMany
 */
export type RencanaAksiUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update RencanaAksis.
     */
    data: Prisma.XOR<Prisma.RencanaAksiUpdateManyMutationInput, Prisma.RencanaAksiUncheckedUpdateManyInput>;
    /**
     * Filter which RencanaAksis to update
     */
    where?: Prisma.RencanaAksiWhereInput;
    /**
     * Limit how many RencanaAksis to update.
     */
    limit?: number;
};
/**
 * RencanaAksi updateManyAndReturn
 */
export type RencanaAksiUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RencanaAksi
     */
    select?: Prisma.RencanaAksiSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RencanaAksi
     */
    omit?: Prisma.RencanaAksiOmit<ExtArgs> | null;
    /**
     * The data used to update RencanaAksis.
     */
    data: Prisma.XOR<Prisma.RencanaAksiUpdateManyMutationInput, Prisma.RencanaAksiUncheckedUpdateManyInput>;
    /**
     * Filter which RencanaAksis to update
     */
    where?: Prisma.RencanaAksiWhereInput;
    /**
     * Limit how many RencanaAksis to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RencanaAksiIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * RencanaAksi upsert
 */
export type RencanaAksiUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the RencanaAksi to update in case it exists.
     */
    where: Prisma.RencanaAksiWhereUniqueInput;
    /**
     * In case the RencanaAksi found by the `where` argument doesn't exist, create a new RencanaAksi with this data.
     */
    create: Prisma.XOR<Prisma.RencanaAksiCreateInput, Prisma.RencanaAksiUncheckedCreateInput>;
    /**
     * In case the RencanaAksi was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.RencanaAksiUpdateInput, Prisma.RencanaAksiUncheckedUpdateInput>;
};
/**
 * RencanaAksi delete
 */
export type RencanaAksiDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which RencanaAksi to delete.
     */
    where: Prisma.RencanaAksiWhereUniqueInput;
};
/**
 * RencanaAksi deleteMany
 */
export type RencanaAksiDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RencanaAksis to delete
     */
    where?: Prisma.RencanaAksiWhereInput;
    /**
     * Limit how many RencanaAksis to delete.
     */
    limit?: number;
};
/**
 * RencanaAksi.listOfProgress
 */
export type RencanaAksi$listOfProgressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * RencanaAksi without action
 */
export type RencanaAksiDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=RencanaAksi.d.ts.map