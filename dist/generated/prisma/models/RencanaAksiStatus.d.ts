import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model RencanaAksiStatus
 *
 */
export type RencanaAksiStatusModel = runtime.Types.Result.DefaultSelection<Prisma.$RencanaAksiStatusPayload>;
export type AggregateRencanaAksiStatus = {
    _count: RencanaAksiStatusCountAggregateOutputType | null;
    _avg: RencanaAksiStatusAvgAggregateOutputType | null;
    _sum: RencanaAksiStatusSumAggregateOutputType | null;
    _min: RencanaAksiStatusMinAggregateOutputType | null;
    _max: RencanaAksiStatusMaxAggregateOutputType | null;
};
export type RencanaAksiStatusAvgAggregateOutputType = {
    id: number | null;
};
export type RencanaAksiStatusSumAggregateOutputType = {
    id: number | null;
};
export type RencanaAksiStatusMinAggregateOutputType = {
    id: number | null;
    desc: string | null;
};
export type RencanaAksiStatusMaxAggregateOutputType = {
    id: number | null;
    desc: string | null;
};
export type RencanaAksiStatusCountAggregateOutputType = {
    id: number;
    desc: number;
    _all: number;
};
export type RencanaAksiStatusAvgAggregateInputType = {
    id?: true;
};
export type RencanaAksiStatusSumAggregateInputType = {
    id?: true;
};
export type RencanaAksiStatusMinAggregateInputType = {
    id?: true;
    desc?: true;
};
export type RencanaAksiStatusMaxAggregateInputType = {
    id?: true;
    desc?: true;
};
export type RencanaAksiStatusCountAggregateInputType = {
    id?: true;
    desc?: true;
    _all?: true;
};
export type RencanaAksiStatusAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RencanaAksiStatus to aggregate.
     */
    where?: Prisma.RencanaAksiStatusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RencanaAksiStatuses to fetch.
     */
    orderBy?: Prisma.RencanaAksiStatusOrderByWithRelationInput | Prisma.RencanaAksiStatusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.RencanaAksiStatusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RencanaAksiStatuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RencanaAksiStatuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RencanaAksiStatuses
    **/
    _count?: true | RencanaAksiStatusCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: RencanaAksiStatusAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: RencanaAksiStatusSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RencanaAksiStatusMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RencanaAksiStatusMaxAggregateInputType;
};
export type GetRencanaAksiStatusAggregateType<T extends RencanaAksiStatusAggregateArgs> = {
    [P in keyof T & keyof AggregateRencanaAksiStatus]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRencanaAksiStatus[P]> : Prisma.GetScalarType<T[P], AggregateRencanaAksiStatus[P]>;
};
export type RencanaAksiStatusGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RencanaAksiStatusWhereInput;
    orderBy?: Prisma.RencanaAksiStatusOrderByWithAggregationInput | Prisma.RencanaAksiStatusOrderByWithAggregationInput[];
    by: Prisma.RencanaAksiStatusScalarFieldEnum[] | Prisma.RencanaAksiStatusScalarFieldEnum;
    having?: Prisma.RencanaAksiStatusScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RencanaAksiStatusCountAggregateInputType | true;
    _avg?: RencanaAksiStatusAvgAggregateInputType;
    _sum?: RencanaAksiStatusSumAggregateInputType;
    _min?: RencanaAksiStatusMinAggregateInputType;
    _max?: RencanaAksiStatusMaxAggregateInputType;
};
export type RencanaAksiStatusGroupByOutputType = {
    id: number;
    desc: string;
    _count: RencanaAksiStatusCountAggregateOutputType | null;
    _avg: RencanaAksiStatusAvgAggregateOutputType | null;
    _sum: RencanaAksiStatusSumAggregateOutputType | null;
    _min: RencanaAksiStatusMinAggregateOutputType | null;
    _max: RencanaAksiStatusMaxAggregateOutputType | null;
};
type GetRencanaAksiStatusGroupByPayload<T extends RencanaAksiStatusGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RencanaAksiStatusGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RencanaAksiStatusGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RencanaAksiStatusGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RencanaAksiStatusGroupByOutputType[P]>;
}>>;
export type RencanaAksiStatusWhereInput = {
    AND?: Prisma.RencanaAksiStatusWhereInput | Prisma.RencanaAksiStatusWhereInput[];
    OR?: Prisma.RencanaAksiStatusWhereInput[];
    NOT?: Prisma.RencanaAksiStatusWhereInput | Prisma.RencanaAksiStatusWhereInput[];
    id?: Prisma.IntFilter<"RencanaAksiStatus"> | number;
    desc?: Prisma.StringFilter<"RencanaAksiStatus"> | string;
    rencanaAksi?: Prisma.RencanaAksiListRelationFilter;
};
export type RencanaAksiStatusOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    rencanaAksi?: Prisma.RencanaAksiOrderByRelationAggregateInput;
};
export type RencanaAksiStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.RencanaAksiStatusWhereInput | Prisma.RencanaAksiStatusWhereInput[];
    OR?: Prisma.RencanaAksiStatusWhereInput[];
    NOT?: Prisma.RencanaAksiStatusWhereInput | Prisma.RencanaAksiStatusWhereInput[];
    desc?: Prisma.StringFilter<"RencanaAksiStatus"> | string;
    rencanaAksi?: Prisma.RencanaAksiListRelationFilter;
}, "id">;
export type RencanaAksiStatusOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    _count?: Prisma.RencanaAksiStatusCountOrderByAggregateInput;
    _avg?: Prisma.RencanaAksiStatusAvgOrderByAggregateInput;
    _max?: Prisma.RencanaAksiStatusMaxOrderByAggregateInput;
    _min?: Prisma.RencanaAksiStatusMinOrderByAggregateInput;
    _sum?: Prisma.RencanaAksiStatusSumOrderByAggregateInput;
};
export type RencanaAksiStatusScalarWhereWithAggregatesInput = {
    AND?: Prisma.RencanaAksiStatusScalarWhereWithAggregatesInput | Prisma.RencanaAksiStatusScalarWhereWithAggregatesInput[];
    OR?: Prisma.RencanaAksiStatusScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RencanaAksiStatusScalarWhereWithAggregatesInput | Prisma.RencanaAksiStatusScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"RencanaAksiStatus"> | number;
    desc?: Prisma.StringWithAggregatesFilter<"RencanaAksiStatus"> | string;
};
export type RencanaAksiStatusCreateInput = {
    id: number;
    desc: string;
    rencanaAksi?: Prisma.RencanaAksiCreateNestedManyWithoutRaStatusObjInput;
};
export type RencanaAksiStatusUncheckedCreateInput = {
    id: number;
    desc: string;
    rencanaAksi?: Prisma.RencanaAksiUncheckedCreateNestedManyWithoutRaStatusObjInput;
};
export type RencanaAksiStatusUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    rencanaAksi?: Prisma.RencanaAksiUpdateManyWithoutRaStatusObjNestedInput;
};
export type RencanaAksiStatusUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    rencanaAksi?: Prisma.RencanaAksiUncheckedUpdateManyWithoutRaStatusObjNestedInput;
};
export type RencanaAksiStatusCreateManyInput = {
    id: number;
    desc: string;
};
export type RencanaAksiStatusUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RencanaAksiStatusUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RencanaAksiStatusScalarRelationFilter = {
    is?: Prisma.RencanaAksiStatusWhereInput;
    isNot?: Prisma.RencanaAksiStatusWhereInput;
};
export type RencanaAksiStatusCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
};
export type RencanaAksiStatusAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type RencanaAksiStatusMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
};
export type RencanaAksiStatusMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
};
export type RencanaAksiStatusSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type RencanaAksiStatusCreateNestedOneWithoutRencanaAksiInput = {
    create?: Prisma.XOR<Prisma.RencanaAksiStatusCreateWithoutRencanaAksiInput, Prisma.RencanaAksiStatusUncheckedCreateWithoutRencanaAksiInput>;
    connectOrCreate?: Prisma.RencanaAksiStatusCreateOrConnectWithoutRencanaAksiInput;
    connect?: Prisma.RencanaAksiStatusWhereUniqueInput;
};
export type RencanaAksiStatusUpdateOneRequiredWithoutRencanaAksiNestedInput = {
    create?: Prisma.XOR<Prisma.RencanaAksiStatusCreateWithoutRencanaAksiInput, Prisma.RencanaAksiStatusUncheckedCreateWithoutRencanaAksiInput>;
    connectOrCreate?: Prisma.RencanaAksiStatusCreateOrConnectWithoutRencanaAksiInput;
    upsert?: Prisma.RencanaAksiStatusUpsertWithoutRencanaAksiInput;
    connect?: Prisma.RencanaAksiStatusWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RencanaAksiStatusUpdateToOneWithWhereWithoutRencanaAksiInput, Prisma.RencanaAksiStatusUpdateWithoutRencanaAksiInput>, Prisma.RencanaAksiStatusUncheckedUpdateWithoutRencanaAksiInput>;
};
export type RencanaAksiStatusCreateWithoutRencanaAksiInput = {
    id: number;
    desc: string;
};
export type RencanaAksiStatusUncheckedCreateWithoutRencanaAksiInput = {
    id: number;
    desc: string;
};
export type RencanaAksiStatusCreateOrConnectWithoutRencanaAksiInput = {
    where: Prisma.RencanaAksiStatusWhereUniqueInput;
    create: Prisma.XOR<Prisma.RencanaAksiStatusCreateWithoutRencanaAksiInput, Prisma.RencanaAksiStatusUncheckedCreateWithoutRencanaAksiInput>;
};
export type RencanaAksiStatusUpsertWithoutRencanaAksiInput = {
    update: Prisma.XOR<Prisma.RencanaAksiStatusUpdateWithoutRencanaAksiInput, Prisma.RencanaAksiStatusUncheckedUpdateWithoutRencanaAksiInput>;
    create: Prisma.XOR<Prisma.RencanaAksiStatusCreateWithoutRencanaAksiInput, Prisma.RencanaAksiStatusUncheckedCreateWithoutRencanaAksiInput>;
    where?: Prisma.RencanaAksiStatusWhereInput;
};
export type RencanaAksiStatusUpdateToOneWithWhereWithoutRencanaAksiInput = {
    where?: Prisma.RencanaAksiStatusWhereInput;
    data: Prisma.XOR<Prisma.RencanaAksiStatusUpdateWithoutRencanaAksiInput, Prisma.RencanaAksiStatusUncheckedUpdateWithoutRencanaAksiInput>;
};
export type RencanaAksiStatusUpdateWithoutRencanaAksiInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RencanaAksiStatusUncheckedUpdateWithoutRencanaAksiInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type RencanaAksiStatusCountOutputType
 */
export type RencanaAksiStatusCountOutputType = {
    rencanaAksi: number;
};
export type RencanaAksiStatusCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rencanaAksi?: boolean | RencanaAksiStatusCountOutputTypeCountRencanaAksiArgs;
};
/**
 * RencanaAksiStatusCountOutputType without action
 */
export type RencanaAksiStatusCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RencanaAksiStatusCountOutputType
     */
    select?: Prisma.RencanaAksiStatusCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * RencanaAksiStatusCountOutputType without action
 */
export type RencanaAksiStatusCountOutputTypeCountRencanaAksiArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RencanaAksiWhereInput;
};
export type RencanaAksiStatusSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    desc?: boolean;
    rencanaAksi?: boolean | Prisma.RencanaAksiStatus$rencanaAksiArgs<ExtArgs>;
    _count?: boolean | Prisma.RencanaAksiStatusCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rencanaAksiStatus"]>;
export type RencanaAksiStatusSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    desc?: boolean;
}, ExtArgs["result"]["rencanaAksiStatus"]>;
export type RencanaAksiStatusSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    desc?: boolean;
}, ExtArgs["result"]["rencanaAksiStatus"]>;
export type RencanaAksiStatusSelectScalar = {
    id?: boolean;
    desc?: boolean;
};
export type RencanaAksiStatusOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "desc", ExtArgs["result"]["rencanaAksiStatus"]>;
export type RencanaAksiStatusInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rencanaAksi?: boolean | Prisma.RencanaAksiStatus$rencanaAksiArgs<ExtArgs>;
    _count?: boolean | Prisma.RencanaAksiStatusCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RencanaAksiStatusIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type RencanaAksiStatusIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $RencanaAksiStatusPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RencanaAksiStatus";
    objects: {
        rencanaAksi: Prisma.$RencanaAksiPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        desc: string;
    }, ExtArgs["result"]["rencanaAksiStatus"]>;
    composites: {};
};
export type RencanaAksiStatusGetPayload<S extends boolean | null | undefined | RencanaAksiStatusDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RencanaAksiStatusPayload, S>;
export type RencanaAksiStatusCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RencanaAksiStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RencanaAksiStatusCountAggregateInputType | true;
};
export interface RencanaAksiStatusDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RencanaAksiStatus'];
        meta: {
            name: 'RencanaAksiStatus';
        };
    };
    /**
     * Find zero or one RencanaAksiStatus that matches the filter.
     * @param {RencanaAksiStatusFindUniqueArgs} args - Arguments to find a RencanaAksiStatus
     * @example
     * // Get one RencanaAksiStatus
     * const rencanaAksiStatus = await prisma.rencanaAksiStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RencanaAksiStatusFindUniqueArgs>(args: Prisma.SelectSubset<T, RencanaAksiStatusFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RencanaAksiStatusClient<runtime.Types.Result.GetResult<Prisma.$RencanaAksiStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one RencanaAksiStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RencanaAksiStatusFindUniqueOrThrowArgs} args - Arguments to find a RencanaAksiStatus
     * @example
     * // Get one RencanaAksiStatus
     * const rencanaAksiStatus = await prisma.rencanaAksiStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RencanaAksiStatusFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RencanaAksiStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RencanaAksiStatusClient<runtime.Types.Result.GetResult<Prisma.$RencanaAksiStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RencanaAksiStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RencanaAksiStatusFindFirstArgs} args - Arguments to find a RencanaAksiStatus
     * @example
     * // Get one RencanaAksiStatus
     * const rencanaAksiStatus = await prisma.rencanaAksiStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RencanaAksiStatusFindFirstArgs>(args?: Prisma.SelectSubset<T, RencanaAksiStatusFindFirstArgs<ExtArgs>>): Prisma.Prisma__RencanaAksiStatusClient<runtime.Types.Result.GetResult<Prisma.$RencanaAksiStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RencanaAksiStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RencanaAksiStatusFindFirstOrThrowArgs} args - Arguments to find a RencanaAksiStatus
     * @example
     * // Get one RencanaAksiStatus
     * const rencanaAksiStatus = await prisma.rencanaAksiStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RencanaAksiStatusFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RencanaAksiStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RencanaAksiStatusClient<runtime.Types.Result.GetResult<Prisma.$RencanaAksiStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more RencanaAksiStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RencanaAksiStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RencanaAksiStatuses
     * const rencanaAksiStatuses = await prisma.rencanaAksiStatus.findMany()
     *
     * // Get first 10 RencanaAksiStatuses
     * const rencanaAksiStatuses = await prisma.rencanaAksiStatus.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const rencanaAksiStatusWithIdOnly = await prisma.rencanaAksiStatus.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RencanaAksiStatusFindManyArgs>(args?: Prisma.SelectSubset<T, RencanaAksiStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RencanaAksiStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a RencanaAksiStatus.
     * @param {RencanaAksiStatusCreateArgs} args - Arguments to create a RencanaAksiStatus.
     * @example
     * // Create one RencanaAksiStatus
     * const RencanaAksiStatus = await prisma.rencanaAksiStatus.create({
     *   data: {
     *     // ... data to create a RencanaAksiStatus
     *   }
     * })
     *
     */
    create<T extends RencanaAksiStatusCreateArgs>(args: Prisma.SelectSubset<T, RencanaAksiStatusCreateArgs<ExtArgs>>): Prisma.Prisma__RencanaAksiStatusClient<runtime.Types.Result.GetResult<Prisma.$RencanaAksiStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many RencanaAksiStatuses.
     * @param {RencanaAksiStatusCreateManyArgs} args - Arguments to create many RencanaAksiStatuses.
     * @example
     * // Create many RencanaAksiStatuses
     * const rencanaAksiStatus = await prisma.rencanaAksiStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RencanaAksiStatusCreateManyArgs>(args?: Prisma.SelectSubset<T, RencanaAksiStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many RencanaAksiStatuses and returns the data saved in the database.
     * @param {RencanaAksiStatusCreateManyAndReturnArgs} args - Arguments to create many RencanaAksiStatuses.
     * @example
     * // Create many RencanaAksiStatuses
     * const rencanaAksiStatus = await prisma.rencanaAksiStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many RencanaAksiStatuses and only return the `id`
     * const rencanaAksiStatusWithIdOnly = await prisma.rencanaAksiStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RencanaAksiStatusCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RencanaAksiStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RencanaAksiStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a RencanaAksiStatus.
     * @param {RencanaAksiStatusDeleteArgs} args - Arguments to delete one RencanaAksiStatus.
     * @example
     * // Delete one RencanaAksiStatus
     * const RencanaAksiStatus = await prisma.rencanaAksiStatus.delete({
     *   where: {
     *     // ... filter to delete one RencanaAksiStatus
     *   }
     * })
     *
     */
    delete<T extends RencanaAksiStatusDeleteArgs>(args: Prisma.SelectSubset<T, RencanaAksiStatusDeleteArgs<ExtArgs>>): Prisma.Prisma__RencanaAksiStatusClient<runtime.Types.Result.GetResult<Prisma.$RencanaAksiStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one RencanaAksiStatus.
     * @param {RencanaAksiStatusUpdateArgs} args - Arguments to update one RencanaAksiStatus.
     * @example
     * // Update one RencanaAksiStatus
     * const rencanaAksiStatus = await prisma.rencanaAksiStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RencanaAksiStatusUpdateArgs>(args: Prisma.SelectSubset<T, RencanaAksiStatusUpdateArgs<ExtArgs>>): Prisma.Prisma__RencanaAksiStatusClient<runtime.Types.Result.GetResult<Prisma.$RencanaAksiStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more RencanaAksiStatuses.
     * @param {RencanaAksiStatusDeleteManyArgs} args - Arguments to filter RencanaAksiStatuses to delete.
     * @example
     * // Delete a few RencanaAksiStatuses
     * const { count } = await prisma.rencanaAksiStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RencanaAksiStatusDeleteManyArgs>(args?: Prisma.SelectSubset<T, RencanaAksiStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RencanaAksiStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RencanaAksiStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RencanaAksiStatuses
     * const rencanaAksiStatus = await prisma.rencanaAksiStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RencanaAksiStatusUpdateManyArgs>(args: Prisma.SelectSubset<T, RencanaAksiStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RencanaAksiStatuses and returns the data updated in the database.
     * @param {RencanaAksiStatusUpdateManyAndReturnArgs} args - Arguments to update many RencanaAksiStatuses.
     * @example
     * // Update many RencanaAksiStatuses
     * const rencanaAksiStatus = await prisma.rencanaAksiStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more RencanaAksiStatuses and only return the `id`
     * const rencanaAksiStatusWithIdOnly = await prisma.rencanaAksiStatus.updateManyAndReturn({
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
    updateManyAndReturn<T extends RencanaAksiStatusUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RencanaAksiStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RencanaAksiStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one RencanaAksiStatus.
     * @param {RencanaAksiStatusUpsertArgs} args - Arguments to update or create a RencanaAksiStatus.
     * @example
     * // Update or create a RencanaAksiStatus
     * const rencanaAksiStatus = await prisma.rencanaAksiStatus.upsert({
     *   create: {
     *     // ... data to create a RencanaAksiStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RencanaAksiStatus we want to update
     *   }
     * })
     */
    upsert<T extends RencanaAksiStatusUpsertArgs>(args: Prisma.SelectSubset<T, RencanaAksiStatusUpsertArgs<ExtArgs>>): Prisma.Prisma__RencanaAksiStatusClient<runtime.Types.Result.GetResult<Prisma.$RencanaAksiStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of RencanaAksiStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RencanaAksiStatusCountArgs} args - Arguments to filter RencanaAksiStatuses to count.
     * @example
     * // Count the number of RencanaAksiStatuses
     * const count = await prisma.rencanaAksiStatus.count({
     *   where: {
     *     // ... the filter for the RencanaAksiStatuses we want to count
     *   }
     * })
    **/
    count<T extends RencanaAksiStatusCountArgs>(args?: Prisma.Subset<T, RencanaAksiStatusCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RencanaAksiStatusCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a RencanaAksiStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RencanaAksiStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RencanaAksiStatusAggregateArgs>(args: Prisma.Subset<T, RencanaAksiStatusAggregateArgs>): Prisma.PrismaPromise<GetRencanaAksiStatusAggregateType<T>>;
    /**
     * Group by RencanaAksiStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RencanaAksiStatusGroupByArgs} args - Group by arguments.
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
    groupBy<T extends RencanaAksiStatusGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RencanaAksiStatusGroupByArgs['orderBy'];
    } : {
        orderBy?: RencanaAksiStatusGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RencanaAksiStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRencanaAksiStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the RencanaAksiStatus model
     */
    readonly fields: RencanaAksiStatusFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for RencanaAksiStatus.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__RencanaAksiStatusClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rencanaAksi<T extends Prisma.RencanaAksiStatus$rencanaAksiArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RencanaAksiStatus$rencanaAksiArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RencanaAksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the RencanaAksiStatus model
 */
export interface RencanaAksiStatusFieldRefs {
    readonly id: Prisma.FieldRef<"RencanaAksiStatus", 'Int'>;
    readonly desc: Prisma.FieldRef<"RencanaAksiStatus", 'String'>;
}
/**
 * RencanaAksiStatus findUnique
 */
export type RencanaAksiStatusFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RencanaAksiStatus
     */
    select?: Prisma.RencanaAksiStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RencanaAksiStatus
     */
    omit?: Prisma.RencanaAksiStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RencanaAksiStatusInclude<ExtArgs> | null;
    /**
     * Filter, which RencanaAksiStatus to fetch.
     */
    where: Prisma.RencanaAksiStatusWhereUniqueInput;
};
/**
 * RencanaAksiStatus findUniqueOrThrow
 */
export type RencanaAksiStatusFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RencanaAksiStatus
     */
    select?: Prisma.RencanaAksiStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RencanaAksiStatus
     */
    omit?: Prisma.RencanaAksiStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RencanaAksiStatusInclude<ExtArgs> | null;
    /**
     * Filter, which RencanaAksiStatus to fetch.
     */
    where: Prisma.RencanaAksiStatusWhereUniqueInput;
};
/**
 * RencanaAksiStatus findFirst
 */
export type RencanaAksiStatusFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RencanaAksiStatus
     */
    select?: Prisma.RencanaAksiStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RencanaAksiStatus
     */
    omit?: Prisma.RencanaAksiStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RencanaAksiStatusInclude<ExtArgs> | null;
    /**
     * Filter, which RencanaAksiStatus to fetch.
     */
    where?: Prisma.RencanaAksiStatusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RencanaAksiStatuses to fetch.
     */
    orderBy?: Prisma.RencanaAksiStatusOrderByWithRelationInput | Prisma.RencanaAksiStatusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RencanaAksiStatuses.
     */
    cursor?: Prisma.RencanaAksiStatusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RencanaAksiStatuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RencanaAksiStatuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RencanaAksiStatuses.
     */
    distinct?: Prisma.RencanaAksiStatusScalarFieldEnum | Prisma.RencanaAksiStatusScalarFieldEnum[];
};
/**
 * RencanaAksiStatus findFirstOrThrow
 */
export type RencanaAksiStatusFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RencanaAksiStatus
     */
    select?: Prisma.RencanaAksiStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RencanaAksiStatus
     */
    omit?: Prisma.RencanaAksiStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RencanaAksiStatusInclude<ExtArgs> | null;
    /**
     * Filter, which RencanaAksiStatus to fetch.
     */
    where?: Prisma.RencanaAksiStatusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RencanaAksiStatuses to fetch.
     */
    orderBy?: Prisma.RencanaAksiStatusOrderByWithRelationInput | Prisma.RencanaAksiStatusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RencanaAksiStatuses.
     */
    cursor?: Prisma.RencanaAksiStatusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RencanaAksiStatuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RencanaAksiStatuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RencanaAksiStatuses.
     */
    distinct?: Prisma.RencanaAksiStatusScalarFieldEnum | Prisma.RencanaAksiStatusScalarFieldEnum[];
};
/**
 * RencanaAksiStatus findMany
 */
export type RencanaAksiStatusFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RencanaAksiStatus
     */
    select?: Prisma.RencanaAksiStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RencanaAksiStatus
     */
    omit?: Prisma.RencanaAksiStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RencanaAksiStatusInclude<ExtArgs> | null;
    /**
     * Filter, which RencanaAksiStatuses to fetch.
     */
    where?: Prisma.RencanaAksiStatusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RencanaAksiStatuses to fetch.
     */
    orderBy?: Prisma.RencanaAksiStatusOrderByWithRelationInput | Prisma.RencanaAksiStatusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RencanaAksiStatuses.
     */
    cursor?: Prisma.RencanaAksiStatusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RencanaAksiStatuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RencanaAksiStatuses.
     */
    skip?: number;
    distinct?: Prisma.RencanaAksiStatusScalarFieldEnum | Prisma.RencanaAksiStatusScalarFieldEnum[];
};
/**
 * RencanaAksiStatus create
 */
export type RencanaAksiStatusCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RencanaAksiStatus
     */
    select?: Prisma.RencanaAksiStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RencanaAksiStatus
     */
    omit?: Prisma.RencanaAksiStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RencanaAksiStatusInclude<ExtArgs> | null;
    /**
     * The data needed to create a RencanaAksiStatus.
     */
    data: Prisma.XOR<Prisma.RencanaAksiStatusCreateInput, Prisma.RencanaAksiStatusUncheckedCreateInput>;
};
/**
 * RencanaAksiStatus createMany
 */
export type RencanaAksiStatusCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many RencanaAksiStatuses.
     */
    data: Prisma.RencanaAksiStatusCreateManyInput | Prisma.RencanaAksiStatusCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * RencanaAksiStatus createManyAndReturn
 */
export type RencanaAksiStatusCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RencanaAksiStatus
     */
    select?: Prisma.RencanaAksiStatusSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RencanaAksiStatus
     */
    omit?: Prisma.RencanaAksiStatusOmit<ExtArgs> | null;
    /**
     * The data used to create many RencanaAksiStatuses.
     */
    data: Prisma.RencanaAksiStatusCreateManyInput | Prisma.RencanaAksiStatusCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * RencanaAksiStatus update
 */
export type RencanaAksiStatusUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RencanaAksiStatus
     */
    select?: Prisma.RencanaAksiStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RencanaAksiStatus
     */
    omit?: Prisma.RencanaAksiStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RencanaAksiStatusInclude<ExtArgs> | null;
    /**
     * The data needed to update a RencanaAksiStatus.
     */
    data: Prisma.XOR<Prisma.RencanaAksiStatusUpdateInput, Prisma.RencanaAksiStatusUncheckedUpdateInput>;
    /**
     * Choose, which RencanaAksiStatus to update.
     */
    where: Prisma.RencanaAksiStatusWhereUniqueInput;
};
/**
 * RencanaAksiStatus updateMany
 */
export type RencanaAksiStatusUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update RencanaAksiStatuses.
     */
    data: Prisma.XOR<Prisma.RencanaAksiStatusUpdateManyMutationInput, Prisma.RencanaAksiStatusUncheckedUpdateManyInput>;
    /**
     * Filter which RencanaAksiStatuses to update
     */
    where?: Prisma.RencanaAksiStatusWhereInput;
    /**
     * Limit how many RencanaAksiStatuses to update.
     */
    limit?: number;
};
/**
 * RencanaAksiStatus updateManyAndReturn
 */
export type RencanaAksiStatusUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RencanaAksiStatus
     */
    select?: Prisma.RencanaAksiStatusSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RencanaAksiStatus
     */
    omit?: Prisma.RencanaAksiStatusOmit<ExtArgs> | null;
    /**
     * The data used to update RencanaAksiStatuses.
     */
    data: Prisma.XOR<Prisma.RencanaAksiStatusUpdateManyMutationInput, Prisma.RencanaAksiStatusUncheckedUpdateManyInput>;
    /**
     * Filter which RencanaAksiStatuses to update
     */
    where?: Prisma.RencanaAksiStatusWhereInput;
    /**
     * Limit how many RencanaAksiStatuses to update.
     */
    limit?: number;
};
/**
 * RencanaAksiStatus upsert
 */
export type RencanaAksiStatusUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RencanaAksiStatus
     */
    select?: Prisma.RencanaAksiStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RencanaAksiStatus
     */
    omit?: Prisma.RencanaAksiStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RencanaAksiStatusInclude<ExtArgs> | null;
    /**
     * The filter to search for the RencanaAksiStatus to update in case it exists.
     */
    where: Prisma.RencanaAksiStatusWhereUniqueInput;
    /**
     * In case the RencanaAksiStatus found by the `where` argument doesn't exist, create a new RencanaAksiStatus with this data.
     */
    create: Prisma.XOR<Prisma.RencanaAksiStatusCreateInput, Prisma.RencanaAksiStatusUncheckedCreateInput>;
    /**
     * In case the RencanaAksiStatus was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.RencanaAksiStatusUpdateInput, Prisma.RencanaAksiStatusUncheckedUpdateInput>;
};
/**
 * RencanaAksiStatus delete
 */
export type RencanaAksiStatusDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RencanaAksiStatus
     */
    select?: Prisma.RencanaAksiStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RencanaAksiStatus
     */
    omit?: Prisma.RencanaAksiStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RencanaAksiStatusInclude<ExtArgs> | null;
    /**
     * Filter which RencanaAksiStatus to delete.
     */
    where: Prisma.RencanaAksiStatusWhereUniqueInput;
};
/**
 * RencanaAksiStatus deleteMany
 */
export type RencanaAksiStatusDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RencanaAksiStatuses to delete
     */
    where?: Prisma.RencanaAksiStatusWhereInput;
    /**
     * Limit how many RencanaAksiStatuses to delete.
     */
    limit?: number;
};
/**
 * RencanaAksiStatus.rencanaAksi
 */
export type RencanaAksiStatus$rencanaAksiArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * RencanaAksiStatus without action
 */
export type RencanaAksiStatusDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RencanaAksiStatus
     */
    select?: Prisma.RencanaAksiStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RencanaAksiStatus
     */
    omit?: Prisma.RencanaAksiStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RencanaAksiStatusInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=RencanaAksiStatus.d.ts.map