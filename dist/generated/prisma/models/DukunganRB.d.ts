import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model DukunganRB
 *
 */
export type DukunganRBModel = runtime.Types.Result.DefaultSelection<Prisma.$DukunganRBPayload>;
export type AggregateDukunganRB = {
    _count: DukunganRBCountAggregateOutputType | null;
    _avg: DukunganRBAvgAggregateOutputType | null;
    _sum: DukunganRBSumAggregateOutputType | null;
    _min: DukunganRBMinAggregateOutputType | null;
    _max: DukunganRBMaxAggregateOutputType | null;
};
export type DukunganRBAvgAggregateOutputType = {
    id: number | null;
};
export type DukunganRBSumAggregateOutputType = {
    id: number | null;
};
export type DukunganRBMinAggregateOutputType = {
    id: number | null;
    desc: string | null;
};
export type DukunganRBMaxAggregateOutputType = {
    id: number | null;
    desc: string | null;
};
export type DukunganRBCountAggregateOutputType = {
    id: number;
    desc: number;
    _all: number;
};
export type DukunganRBAvgAggregateInputType = {
    id?: true;
};
export type DukunganRBSumAggregateInputType = {
    id?: true;
};
export type DukunganRBMinAggregateInputType = {
    id?: true;
    desc?: true;
};
export type DukunganRBMaxAggregateInputType = {
    id?: true;
    desc?: true;
};
export type DukunganRBCountAggregateInputType = {
    id?: true;
    desc?: true;
    _all?: true;
};
export type DukunganRBAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DukunganRB to aggregate.
     */
    where?: Prisma.DukunganRBWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DukunganRBS to fetch.
     */
    orderBy?: Prisma.DukunganRBOrderByWithRelationInput | Prisma.DukunganRBOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DukunganRBWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DukunganRBS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DukunganRBS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DukunganRBS
    **/
    _count?: true | DukunganRBCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: DukunganRBAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: DukunganRBSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DukunganRBMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DukunganRBMaxAggregateInputType;
};
export type GetDukunganRBAggregateType<T extends DukunganRBAggregateArgs> = {
    [P in keyof T & keyof AggregateDukunganRB]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDukunganRB[P]> : Prisma.GetScalarType<T[P], AggregateDukunganRB[P]>;
};
export type DukunganRBGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DukunganRBWhereInput;
    orderBy?: Prisma.DukunganRBOrderByWithAggregationInput | Prisma.DukunganRBOrderByWithAggregationInput[];
    by: Prisma.DukunganRBScalarFieldEnum[] | Prisma.DukunganRBScalarFieldEnum;
    having?: Prisma.DukunganRBScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DukunganRBCountAggregateInputType | true;
    _avg?: DukunganRBAvgAggregateInputType;
    _sum?: DukunganRBSumAggregateInputType;
    _min?: DukunganRBMinAggregateInputType;
    _max?: DukunganRBMaxAggregateInputType;
};
export type DukunganRBGroupByOutputType = {
    id: number;
    desc: string;
    _count: DukunganRBCountAggregateOutputType | null;
    _avg: DukunganRBAvgAggregateOutputType | null;
    _sum: DukunganRBSumAggregateOutputType | null;
    _min: DukunganRBMinAggregateOutputType | null;
    _max: DukunganRBMaxAggregateOutputType | null;
};
type GetDukunganRBGroupByPayload<T extends DukunganRBGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DukunganRBGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DukunganRBGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DukunganRBGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DukunganRBGroupByOutputType[P]>;
}>>;
export type DukunganRBWhereInput = {
    AND?: Prisma.DukunganRBWhereInput | Prisma.DukunganRBWhereInput[];
    OR?: Prisma.DukunganRBWhereInput[];
    NOT?: Prisma.DukunganRBWhereInput | Prisma.DukunganRBWhereInput[];
    id?: Prisma.IntFilter<"DukunganRB"> | number;
    desc?: Prisma.StringFilter<"DukunganRB"> | string;
    rencanaAksi?: Prisma.RencanaAksiListRelationFilter;
};
export type DukunganRBOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    rencanaAksi?: Prisma.RencanaAksiOrderByRelationAggregateInput;
};
export type DukunganRBWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.DukunganRBWhereInput | Prisma.DukunganRBWhereInput[];
    OR?: Prisma.DukunganRBWhereInput[];
    NOT?: Prisma.DukunganRBWhereInput | Prisma.DukunganRBWhereInput[];
    desc?: Prisma.StringFilter<"DukunganRB"> | string;
    rencanaAksi?: Prisma.RencanaAksiListRelationFilter;
}, "id">;
export type DukunganRBOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    _count?: Prisma.DukunganRBCountOrderByAggregateInput;
    _avg?: Prisma.DukunganRBAvgOrderByAggregateInput;
    _max?: Prisma.DukunganRBMaxOrderByAggregateInput;
    _min?: Prisma.DukunganRBMinOrderByAggregateInput;
    _sum?: Prisma.DukunganRBSumOrderByAggregateInput;
};
export type DukunganRBScalarWhereWithAggregatesInput = {
    AND?: Prisma.DukunganRBScalarWhereWithAggregatesInput | Prisma.DukunganRBScalarWhereWithAggregatesInput[];
    OR?: Prisma.DukunganRBScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DukunganRBScalarWhereWithAggregatesInput | Prisma.DukunganRBScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"DukunganRB"> | number;
    desc?: Prisma.StringWithAggregatesFilter<"DukunganRB"> | string;
};
export type DukunganRBCreateInput = {
    id: number;
    desc: string;
    rencanaAksi?: Prisma.RencanaAksiCreateNestedManyWithoutDukunganRbObjInput;
};
export type DukunganRBUncheckedCreateInput = {
    id: number;
    desc: string;
    rencanaAksi?: Prisma.RencanaAksiUncheckedCreateNestedManyWithoutDukunganRbObjInput;
};
export type DukunganRBUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    rencanaAksi?: Prisma.RencanaAksiUpdateManyWithoutDukunganRbObjNestedInput;
};
export type DukunganRBUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    rencanaAksi?: Prisma.RencanaAksiUncheckedUpdateManyWithoutDukunganRbObjNestedInput;
};
export type DukunganRBCreateManyInput = {
    id: number;
    desc: string;
};
export type DukunganRBUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DukunganRBUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DukunganRBCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
};
export type DukunganRBAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type DukunganRBMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
};
export type DukunganRBMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
};
export type DukunganRBSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type DukunganRBScalarRelationFilter = {
    is?: Prisma.DukunganRBWhereInput;
    isNot?: Prisma.DukunganRBWhereInput;
};
export type DukunganRBCreateNestedOneWithoutRencanaAksiInput = {
    create?: Prisma.XOR<Prisma.DukunganRBCreateWithoutRencanaAksiInput, Prisma.DukunganRBUncheckedCreateWithoutRencanaAksiInput>;
    connectOrCreate?: Prisma.DukunganRBCreateOrConnectWithoutRencanaAksiInput;
    connect?: Prisma.DukunganRBWhereUniqueInput;
};
export type DukunganRBUpdateOneRequiredWithoutRencanaAksiNestedInput = {
    create?: Prisma.XOR<Prisma.DukunganRBCreateWithoutRencanaAksiInput, Prisma.DukunganRBUncheckedCreateWithoutRencanaAksiInput>;
    connectOrCreate?: Prisma.DukunganRBCreateOrConnectWithoutRencanaAksiInput;
    upsert?: Prisma.DukunganRBUpsertWithoutRencanaAksiInput;
    connect?: Prisma.DukunganRBWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DukunganRBUpdateToOneWithWhereWithoutRencanaAksiInput, Prisma.DukunganRBUpdateWithoutRencanaAksiInput>, Prisma.DukunganRBUncheckedUpdateWithoutRencanaAksiInput>;
};
export type DukunganRBCreateWithoutRencanaAksiInput = {
    id: number;
    desc: string;
};
export type DukunganRBUncheckedCreateWithoutRencanaAksiInput = {
    id: number;
    desc: string;
};
export type DukunganRBCreateOrConnectWithoutRencanaAksiInput = {
    where: Prisma.DukunganRBWhereUniqueInput;
    create: Prisma.XOR<Prisma.DukunganRBCreateWithoutRencanaAksiInput, Prisma.DukunganRBUncheckedCreateWithoutRencanaAksiInput>;
};
export type DukunganRBUpsertWithoutRencanaAksiInput = {
    update: Prisma.XOR<Prisma.DukunganRBUpdateWithoutRencanaAksiInput, Prisma.DukunganRBUncheckedUpdateWithoutRencanaAksiInput>;
    create: Prisma.XOR<Prisma.DukunganRBCreateWithoutRencanaAksiInput, Prisma.DukunganRBUncheckedCreateWithoutRencanaAksiInput>;
    where?: Prisma.DukunganRBWhereInput;
};
export type DukunganRBUpdateToOneWithWhereWithoutRencanaAksiInput = {
    where?: Prisma.DukunganRBWhereInput;
    data: Prisma.XOR<Prisma.DukunganRBUpdateWithoutRencanaAksiInput, Prisma.DukunganRBUncheckedUpdateWithoutRencanaAksiInput>;
};
export type DukunganRBUpdateWithoutRencanaAksiInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DukunganRBUncheckedUpdateWithoutRencanaAksiInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type DukunganRBCountOutputType
 */
export type DukunganRBCountOutputType = {
    rencanaAksi: number;
};
export type DukunganRBCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rencanaAksi?: boolean | DukunganRBCountOutputTypeCountRencanaAksiArgs;
};
/**
 * DukunganRBCountOutputType without action
 */
export type DukunganRBCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DukunganRBCountOutputType
     */
    select?: Prisma.DukunganRBCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * DukunganRBCountOutputType without action
 */
export type DukunganRBCountOutputTypeCountRencanaAksiArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RencanaAksiWhereInput;
};
export type DukunganRBSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    desc?: boolean;
    rencanaAksi?: boolean | Prisma.DukunganRB$rencanaAksiArgs<ExtArgs>;
    _count?: boolean | Prisma.DukunganRBCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dukunganRB"]>;
export type DukunganRBSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    desc?: boolean;
}, ExtArgs["result"]["dukunganRB"]>;
export type DukunganRBSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    desc?: boolean;
}, ExtArgs["result"]["dukunganRB"]>;
export type DukunganRBSelectScalar = {
    id?: boolean;
    desc?: boolean;
};
export type DukunganRBOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "desc", ExtArgs["result"]["dukunganRB"]>;
export type DukunganRBInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rencanaAksi?: boolean | Prisma.DukunganRB$rencanaAksiArgs<ExtArgs>;
    _count?: boolean | Prisma.DukunganRBCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DukunganRBIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type DukunganRBIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $DukunganRBPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DukunganRB";
    objects: {
        rencanaAksi: Prisma.$RencanaAksiPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        desc: string;
    }, ExtArgs["result"]["dukunganRB"]>;
    composites: {};
};
export type DukunganRBGetPayload<S extends boolean | null | undefined | DukunganRBDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DukunganRBPayload, S>;
export type DukunganRBCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DukunganRBFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DukunganRBCountAggregateInputType | true;
};
export interface DukunganRBDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DukunganRB'];
        meta: {
            name: 'DukunganRB';
        };
    };
    /**
     * Find zero or one DukunganRB that matches the filter.
     * @param {DukunganRBFindUniqueArgs} args - Arguments to find a DukunganRB
     * @example
     * // Get one DukunganRB
     * const dukunganRB = await prisma.dukunganRB.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DukunganRBFindUniqueArgs>(args: Prisma.SelectSubset<T, DukunganRBFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DukunganRBClient<runtime.Types.Result.GetResult<Prisma.$DukunganRBPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one DukunganRB that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DukunganRBFindUniqueOrThrowArgs} args - Arguments to find a DukunganRB
     * @example
     * // Get one DukunganRB
     * const dukunganRB = await prisma.dukunganRB.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DukunganRBFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DukunganRBFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DukunganRBClient<runtime.Types.Result.GetResult<Prisma.$DukunganRBPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DukunganRB that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DukunganRBFindFirstArgs} args - Arguments to find a DukunganRB
     * @example
     * // Get one DukunganRB
     * const dukunganRB = await prisma.dukunganRB.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DukunganRBFindFirstArgs>(args?: Prisma.SelectSubset<T, DukunganRBFindFirstArgs<ExtArgs>>): Prisma.Prisma__DukunganRBClient<runtime.Types.Result.GetResult<Prisma.$DukunganRBPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DukunganRB that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DukunganRBFindFirstOrThrowArgs} args - Arguments to find a DukunganRB
     * @example
     * // Get one DukunganRB
     * const dukunganRB = await prisma.dukunganRB.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DukunganRBFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DukunganRBFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DukunganRBClient<runtime.Types.Result.GetResult<Prisma.$DukunganRBPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more DukunganRBS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DukunganRBFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DukunganRBS
     * const dukunganRBS = await prisma.dukunganRB.findMany()
     *
     * // Get first 10 DukunganRBS
     * const dukunganRBS = await prisma.dukunganRB.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const dukunganRBWithIdOnly = await prisma.dukunganRB.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DukunganRBFindManyArgs>(args?: Prisma.SelectSubset<T, DukunganRBFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DukunganRBPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a DukunganRB.
     * @param {DukunganRBCreateArgs} args - Arguments to create a DukunganRB.
     * @example
     * // Create one DukunganRB
     * const DukunganRB = await prisma.dukunganRB.create({
     *   data: {
     *     // ... data to create a DukunganRB
     *   }
     * })
     *
     */
    create<T extends DukunganRBCreateArgs>(args: Prisma.SelectSubset<T, DukunganRBCreateArgs<ExtArgs>>): Prisma.Prisma__DukunganRBClient<runtime.Types.Result.GetResult<Prisma.$DukunganRBPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many DukunganRBS.
     * @param {DukunganRBCreateManyArgs} args - Arguments to create many DukunganRBS.
     * @example
     * // Create many DukunganRBS
     * const dukunganRB = await prisma.dukunganRB.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DukunganRBCreateManyArgs>(args?: Prisma.SelectSubset<T, DukunganRBCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many DukunganRBS and returns the data saved in the database.
     * @param {DukunganRBCreateManyAndReturnArgs} args - Arguments to create many DukunganRBS.
     * @example
     * // Create many DukunganRBS
     * const dukunganRB = await prisma.dukunganRB.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DukunganRBS and only return the `id`
     * const dukunganRBWithIdOnly = await prisma.dukunganRB.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DukunganRBCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DukunganRBCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DukunganRBPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a DukunganRB.
     * @param {DukunganRBDeleteArgs} args - Arguments to delete one DukunganRB.
     * @example
     * // Delete one DukunganRB
     * const DukunganRB = await prisma.dukunganRB.delete({
     *   where: {
     *     // ... filter to delete one DukunganRB
     *   }
     * })
     *
     */
    delete<T extends DukunganRBDeleteArgs>(args: Prisma.SelectSubset<T, DukunganRBDeleteArgs<ExtArgs>>): Prisma.Prisma__DukunganRBClient<runtime.Types.Result.GetResult<Prisma.$DukunganRBPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one DukunganRB.
     * @param {DukunganRBUpdateArgs} args - Arguments to update one DukunganRB.
     * @example
     * // Update one DukunganRB
     * const dukunganRB = await prisma.dukunganRB.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DukunganRBUpdateArgs>(args: Prisma.SelectSubset<T, DukunganRBUpdateArgs<ExtArgs>>): Prisma.Prisma__DukunganRBClient<runtime.Types.Result.GetResult<Prisma.$DukunganRBPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more DukunganRBS.
     * @param {DukunganRBDeleteManyArgs} args - Arguments to filter DukunganRBS to delete.
     * @example
     * // Delete a few DukunganRBS
     * const { count } = await prisma.dukunganRB.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DukunganRBDeleteManyArgs>(args?: Prisma.SelectSubset<T, DukunganRBDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DukunganRBS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DukunganRBUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DukunganRBS
     * const dukunganRB = await prisma.dukunganRB.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DukunganRBUpdateManyArgs>(args: Prisma.SelectSubset<T, DukunganRBUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DukunganRBS and returns the data updated in the database.
     * @param {DukunganRBUpdateManyAndReturnArgs} args - Arguments to update many DukunganRBS.
     * @example
     * // Update many DukunganRBS
     * const dukunganRB = await prisma.dukunganRB.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DukunganRBS and only return the `id`
     * const dukunganRBWithIdOnly = await prisma.dukunganRB.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends DukunganRBUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DukunganRBUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DukunganRBPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one DukunganRB.
     * @param {DukunganRBUpsertArgs} args - Arguments to update or create a DukunganRB.
     * @example
     * // Update or create a DukunganRB
     * const dukunganRB = await prisma.dukunganRB.upsert({
     *   create: {
     *     // ... data to create a DukunganRB
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DukunganRB we want to update
     *   }
     * })
     */
    upsert<T extends DukunganRBUpsertArgs>(args: Prisma.SelectSubset<T, DukunganRBUpsertArgs<ExtArgs>>): Prisma.Prisma__DukunganRBClient<runtime.Types.Result.GetResult<Prisma.$DukunganRBPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of DukunganRBS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DukunganRBCountArgs} args - Arguments to filter DukunganRBS to count.
     * @example
     * // Count the number of DukunganRBS
     * const count = await prisma.dukunganRB.count({
     *   where: {
     *     // ... the filter for the DukunganRBS we want to count
     *   }
     * })
    **/
    count<T extends DukunganRBCountArgs>(args?: Prisma.Subset<T, DukunganRBCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DukunganRBCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a DukunganRB.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DukunganRBAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DukunganRBAggregateArgs>(args: Prisma.Subset<T, DukunganRBAggregateArgs>): Prisma.PrismaPromise<GetDukunganRBAggregateType<T>>;
    /**
     * Group by DukunganRB.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DukunganRBGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DukunganRBGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DukunganRBGroupByArgs['orderBy'];
    } : {
        orderBy?: DukunganRBGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DukunganRBGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDukunganRBGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DukunganRB model
     */
    readonly fields: DukunganRBFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for DukunganRB.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DukunganRBClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rencanaAksi<T extends Prisma.DukunganRB$rencanaAksiArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DukunganRB$rencanaAksiArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RencanaAksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the DukunganRB model
 */
export interface DukunganRBFieldRefs {
    readonly id: Prisma.FieldRef<"DukunganRB", 'Int'>;
    readonly desc: Prisma.FieldRef<"DukunganRB", 'String'>;
}
/**
 * DukunganRB findUnique
 */
export type DukunganRBFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DukunganRB
     */
    select?: Prisma.DukunganRBSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DukunganRB
     */
    omit?: Prisma.DukunganRBOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DukunganRBInclude<ExtArgs> | null;
    /**
     * Filter, which DukunganRB to fetch.
     */
    where: Prisma.DukunganRBWhereUniqueInput;
};
/**
 * DukunganRB findUniqueOrThrow
 */
export type DukunganRBFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DukunganRB
     */
    select?: Prisma.DukunganRBSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DukunganRB
     */
    omit?: Prisma.DukunganRBOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DukunganRBInclude<ExtArgs> | null;
    /**
     * Filter, which DukunganRB to fetch.
     */
    where: Prisma.DukunganRBWhereUniqueInput;
};
/**
 * DukunganRB findFirst
 */
export type DukunganRBFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DukunganRB
     */
    select?: Prisma.DukunganRBSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DukunganRB
     */
    omit?: Prisma.DukunganRBOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DukunganRBInclude<ExtArgs> | null;
    /**
     * Filter, which DukunganRB to fetch.
     */
    where?: Prisma.DukunganRBWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DukunganRBS to fetch.
     */
    orderBy?: Prisma.DukunganRBOrderByWithRelationInput | Prisma.DukunganRBOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DukunganRBS.
     */
    cursor?: Prisma.DukunganRBWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DukunganRBS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DukunganRBS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DukunganRBS.
     */
    distinct?: Prisma.DukunganRBScalarFieldEnum | Prisma.DukunganRBScalarFieldEnum[];
};
/**
 * DukunganRB findFirstOrThrow
 */
export type DukunganRBFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DukunganRB
     */
    select?: Prisma.DukunganRBSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DukunganRB
     */
    omit?: Prisma.DukunganRBOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DukunganRBInclude<ExtArgs> | null;
    /**
     * Filter, which DukunganRB to fetch.
     */
    where?: Prisma.DukunganRBWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DukunganRBS to fetch.
     */
    orderBy?: Prisma.DukunganRBOrderByWithRelationInput | Prisma.DukunganRBOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DukunganRBS.
     */
    cursor?: Prisma.DukunganRBWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DukunganRBS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DukunganRBS.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DukunganRBS.
     */
    distinct?: Prisma.DukunganRBScalarFieldEnum | Prisma.DukunganRBScalarFieldEnum[];
};
/**
 * DukunganRB findMany
 */
export type DukunganRBFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DukunganRB
     */
    select?: Prisma.DukunganRBSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DukunganRB
     */
    omit?: Prisma.DukunganRBOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DukunganRBInclude<ExtArgs> | null;
    /**
     * Filter, which DukunganRBS to fetch.
     */
    where?: Prisma.DukunganRBWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DukunganRBS to fetch.
     */
    orderBy?: Prisma.DukunganRBOrderByWithRelationInput | Prisma.DukunganRBOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DukunganRBS.
     */
    cursor?: Prisma.DukunganRBWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DukunganRBS from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DukunganRBS.
     */
    skip?: number;
    distinct?: Prisma.DukunganRBScalarFieldEnum | Prisma.DukunganRBScalarFieldEnum[];
};
/**
 * DukunganRB create
 */
export type DukunganRBCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DukunganRB
     */
    select?: Prisma.DukunganRBSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DukunganRB
     */
    omit?: Prisma.DukunganRBOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DukunganRBInclude<ExtArgs> | null;
    /**
     * The data needed to create a DukunganRB.
     */
    data: Prisma.XOR<Prisma.DukunganRBCreateInput, Prisma.DukunganRBUncheckedCreateInput>;
};
/**
 * DukunganRB createMany
 */
export type DukunganRBCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many DukunganRBS.
     */
    data: Prisma.DukunganRBCreateManyInput | Prisma.DukunganRBCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DukunganRB createManyAndReturn
 */
export type DukunganRBCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DukunganRB
     */
    select?: Prisma.DukunganRBSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DukunganRB
     */
    omit?: Prisma.DukunganRBOmit<ExtArgs> | null;
    /**
     * The data used to create many DukunganRBS.
     */
    data: Prisma.DukunganRBCreateManyInput | Prisma.DukunganRBCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DukunganRB update
 */
export type DukunganRBUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DukunganRB
     */
    select?: Prisma.DukunganRBSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DukunganRB
     */
    omit?: Prisma.DukunganRBOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DukunganRBInclude<ExtArgs> | null;
    /**
     * The data needed to update a DukunganRB.
     */
    data: Prisma.XOR<Prisma.DukunganRBUpdateInput, Prisma.DukunganRBUncheckedUpdateInput>;
    /**
     * Choose, which DukunganRB to update.
     */
    where: Prisma.DukunganRBWhereUniqueInput;
};
/**
 * DukunganRB updateMany
 */
export type DukunganRBUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update DukunganRBS.
     */
    data: Prisma.XOR<Prisma.DukunganRBUpdateManyMutationInput, Prisma.DukunganRBUncheckedUpdateManyInput>;
    /**
     * Filter which DukunganRBS to update
     */
    where?: Prisma.DukunganRBWhereInput;
    /**
     * Limit how many DukunganRBS to update.
     */
    limit?: number;
};
/**
 * DukunganRB updateManyAndReturn
 */
export type DukunganRBUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DukunganRB
     */
    select?: Prisma.DukunganRBSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DukunganRB
     */
    omit?: Prisma.DukunganRBOmit<ExtArgs> | null;
    /**
     * The data used to update DukunganRBS.
     */
    data: Prisma.XOR<Prisma.DukunganRBUpdateManyMutationInput, Prisma.DukunganRBUncheckedUpdateManyInput>;
    /**
     * Filter which DukunganRBS to update
     */
    where?: Prisma.DukunganRBWhereInput;
    /**
     * Limit how many DukunganRBS to update.
     */
    limit?: number;
};
/**
 * DukunganRB upsert
 */
export type DukunganRBUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DukunganRB
     */
    select?: Prisma.DukunganRBSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DukunganRB
     */
    omit?: Prisma.DukunganRBOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DukunganRBInclude<ExtArgs> | null;
    /**
     * The filter to search for the DukunganRB to update in case it exists.
     */
    where: Prisma.DukunganRBWhereUniqueInput;
    /**
     * In case the DukunganRB found by the `where` argument doesn't exist, create a new DukunganRB with this data.
     */
    create: Prisma.XOR<Prisma.DukunganRBCreateInput, Prisma.DukunganRBUncheckedCreateInput>;
    /**
     * In case the DukunganRB was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DukunganRBUpdateInput, Prisma.DukunganRBUncheckedUpdateInput>;
};
/**
 * DukunganRB delete
 */
export type DukunganRBDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DukunganRB
     */
    select?: Prisma.DukunganRBSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DukunganRB
     */
    omit?: Prisma.DukunganRBOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DukunganRBInclude<ExtArgs> | null;
    /**
     * Filter which DukunganRB to delete.
     */
    where: Prisma.DukunganRBWhereUniqueInput;
};
/**
 * DukunganRB deleteMany
 */
export type DukunganRBDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DukunganRBS to delete
     */
    where?: Prisma.DukunganRBWhereInput;
    /**
     * Limit how many DukunganRBS to delete.
     */
    limit?: number;
};
/**
 * DukunganRB.rencanaAksi
 */
export type DukunganRB$rencanaAksiArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * DukunganRB without action
 */
export type DukunganRBDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DukunganRB
     */
    select?: Prisma.DukunganRBSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DukunganRB
     */
    omit?: Prisma.DukunganRBOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DukunganRBInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=DukunganRB.d.ts.map