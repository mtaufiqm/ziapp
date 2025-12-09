import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ProgressStatus
 *
 */
export type ProgressStatusModel = runtime.Types.Result.DefaultSelection<Prisma.$ProgressStatusPayload>;
export type AggregateProgressStatus = {
    _count: ProgressStatusCountAggregateOutputType | null;
    _avg: ProgressStatusAvgAggregateOutputType | null;
    _sum: ProgressStatusSumAggregateOutputType | null;
    _min: ProgressStatusMinAggregateOutputType | null;
    _max: ProgressStatusMaxAggregateOutputType | null;
};
export type ProgressStatusAvgAggregateOutputType = {
    id: number | null;
};
export type ProgressStatusSumAggregateOutputType = {
    id: number | null;
};
export type ProgressStatusMinAggregateOutputType = {
    id: number | null;
    desc: string | null;
};
export type ProgressStatusMaxAggregateOutputType = {
    id: number | null;
    desc: string | null;
};
export type ProgressStatusCountAggregateOutputType = {
    id: number;
    desc: number;
    _all: number;
};
export type ProgressStatusAvgAggregateInputType = {
    id?: true;
};
export type ProgressStatusSumAggregateInputType = {
    id?: true;
};
export type ProgressStatusMinAggregateInputType = {
    id?: true;
    desc?: true;
};
export type ProgressStatusMaxAggregateInputType = {
    id?: true;
    desc?: true;
};
export type ProgressStatusCountAggregateInputType = {
    id?: true;
    desc?: true;
    _all?: true;
};
export type ProgressStatusAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressStatus to aggregate.
     */
    where?: Prisma.ProgressStatusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProgressStatuses to fetch.
     */
    orderBy?: Prisma.ProgressStatusOrderByWithRelationInput | Prisma.ProgressStatusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProgressStatusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProgressStatuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProgressStatuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProgressStatuses
    **/
    _count?: true | ProgressStatusCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ProgressStatusAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ProgressStatusSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProgressStatusMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProgressStatusMaxAggregateInputType;
};
export type GetProgressStatusAggregateType<T extends ProgressStatusAggregateArgs> = {
    [P in keyof T & keyof AggregateProgressStatus]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProgressStatus[P]> : Prisma.GetScalarType<T[P], AggregateProgressStatus[P]>;
};
export type ProgressStatusGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgressStatusWhereInput;
    orderBy?: Prisma.ProgressStatusOrderByWithAggregationInput | Prisma.ProgressStatusOrderByWithAggregationInput[];
    by: Prisma.ProgressStatusScalarFieldEnum[] | Prisma.ProgressStatusScalarFieldEnum;
    having?: Prisma.ProgressStatusScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProgressStatusCountAggregateInputType | true;
    _avg?: ProgressStatusAvgAggregateInputType;
    _sum?: ProgressStatusSumAggregateInputType;
    _min?: ProgressStatusMinAggregateInputType;
    _max?: ProgressStatusMaxAggregateInputType;
};
export type ProgressStatusGroupByOutputType = {
    id: number;
    desc: string;
    _count: ProgressStatusCountAggregateOutputType | null;
    _avg: ProgressStatusAvgAggregateOutputType | null;
    _sum: ProgressStatusSumAggregateOutputType | null;
    _min: ProgressStatusMinAggregateOutputType | null;
    _max: ProgressStatusMaxAggregateOutputType | null;
};
type GetProgressStatusGroupByPayload<T extends ProgressStatusGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProgressStatusGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProgressStatusGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProgressStatusGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProgressStatusGroupByOutputType[P]>;
}>>;
export type ProgressStatusWhereInput = {
    AND?: Prisma.ProgressStatusWhereInput | Prisma.ProgressStatusWhereInput[];
    OR?: Prisma.ProgressStatusWhereInput[];
    NOT?: Prisma.ProgressStatusWhereInput | Prisma.ProgressStatusWhereInput[];
    id?: Prisma.IntFilter<"ProgressStatus"> | number;
    desc?: Prisma.StringFilter<"ProgressStatus"> | string;
    listOfProgress?: Prisma.ProgressRencanaAksiListRelationFilter;
};
export type ProgressStatusOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    listOfProgress?: Prisma.ProgressRencanaAksiOrderByRelationAggregateInput;
};
export type ProgressStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ProgressStatusWhereInput | Prisma.ProgressStatusWhereInput[];
    OR?: Prisma.ProgressStatusWhereInput[];
    NOT?: Prisma.ProgressStatusWhereInput | Prisma.ProgressStatusWhereInput[];
    desc?: Prisma.StringFilter<"ProgressStatus"> | string;
    listOfProgress?: Prisma.ProgressRencanaAksiListRelationFilter;
}, "id">;
export type ProgressStatusOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    _count?: Prisma.ProgressStatusCountOrderByAggregateInput;
    _avg?: Prisma.ProgressStatusAvgOrderByAggregateInput;
    _max?: Prisma.ProgressStatusMaxOrderByAggregateInput;
    _min?: Prisma.ProgressStatusMinOrderByAggregateInput;
    _sum?: Prisma.ProgressStatusSumOrderByAggregateInput;
};
export type ProgressStatusScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProgressStatusScalarWhereWithAggregatesInput | Prisma.ProgressStatusScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProgressStatusScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProgressStatusScalarWhereWithAggregatesInput | Prisma.ProgressStatusScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ProgressStatus"> | number;
    desc?: Prisma.StringWithAggregatesFilter<"ProgressStatus"> | string;
};
export type ProgressStatusCreateInput = {
    id: number;
    desc: string;
    listOfProgress?: Prisma.ProgressRencanaAksiCreateNestedManyWithoutStatusObjInput;
};
export type ProgressStatusUncheckedCreateInput = {
    id: number;
    desc: string;
    listOfProgress?: Prisma.ProgressRencanaAksiUncheckedCreateNestedManyWithoutStatusObjInput;
};
export type ProgressStatusUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    listOfProgress?: Prisma.ProgressRencanaAksiUpdateManyWithoutStatusObjNestedInput;
};
export type ProgressStatusUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    listOfProgress?: Prisma.ProgressRencanaAksiUncheckedUpdateManyWithoutStatusObjNestedInput;
};
export type ProgressStatusCreateManyInput = {
    id: number;
    desc: string;
};
export type ProgressStatusUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProgressStatusUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProgressStatusScalarRelationFilter = {
    is?: Prisma.ProgressStatusWhereInput;
    isNot?: Prisma.ProgressStatusWhereInput;
};
export type ProgressStatusCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
};
export type ProgressStatusAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ProgressStatusMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
};
export type ProgressStatusMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
};
export type ProgressStatusSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ProgressStatusCreateNestedOneWithoutListOfProgressInput = {
    create?: Prisma.XOR<Prisma.ProgressStatusCreateWithoutListOfProgressInput, Prisma.ProgressStatusUncheckedCreateWithoutListOfProgressInput>;
    connectOrCreate?: Prisma.ProgressStatusCreateOrConnectWithoutListOfProgressInput;
    connect?: Prisma.ProgressStatusWhereUniqueInput;
};
export type ProgressStatusUpdateOneRequiredWithoutListOfProgressNestedInput = {
    create?: Prisma.XOR<Prisma.ProgressStatusCreateWithoutListOfProgressInput, Prisma.ProgressStatusUncheckedCreateWithoutListOfProgressInput>;
    connectOrCreate?: Prisma.ProgressStatusCreateOrConnectWithoutListOfProgressInput;
    upsert?: Prisma.ProgressStatusUpsertWithoutListOfProgressInput;
    connect?: Prisma.ProgressStatusWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProgressStatusUpdateToOneWithWhereWithoutListOfProgressInput, Prisma.ProgressStatusUpdateWithoutListOfProgressInput>, Prisma.ProgressStatusUncheckedUpdateWithoutListOfProgressInput>;
};
export type ProgressStatusCreateWithoutListOfProgressInput = {
    id: number;
    desc: string;
};
export type ProgressStatusUncheckedCreateWithoutListOfProgressInput = {
    id: number;
    desc: string;
};
export type ProgressStatusCreateOrConnectWithoutListOfProgressInput = {
    where: Prisma.ProgressStatusWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProgressStatusCreateWithoutListOfProgressInput, Prisma.ProgressStatusUncheckedCreateWithoutListOfProgressInput>;
};
export type ProgressStatusUpsertWithoutListOfProgressInput = {
    update: Prisma.XOR<Prisma.ProgressStatusUpdateWithoutListOfProgressInput, Prisma.ProgressStatusUncheckedUpdateWithoutListOfProgressInput>;
    create: Prisma.XOR<Prisma.ProgressStatusCreateWithoutListOfProgressInput, Prisma.ProgressStatusUncheckedCreateWithoutListOfProgressInput>;
    where?: Prisma.ProgressStatusWhereInput;
};
export type ProgressStatusUpdateToOneWithWhereWithoutListOfProgressInput = {
    where?: Prisma.ProgressStatusWhereInput;
    data: Prisma.XOR<Prisma.ProgressStatusUpdateWithoutListOfProgressInput, Prisma.ProgressStatusUncheckedUpdateWithoutListOfProgressInput>;
};
export type ProgressStatusUpdateWithoutListOfProgressInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ProgressStatusUncheckedUpdateWithoutListOfProgressInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type ProgressStatusCountOutputType
 */
export type ProgressStatusCountOutputType = {
    listOfProgress: number;
};
export type ProgressStatusCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listOfProgress?: boolean | ProgressStatusCountOutputTypeCountListOfProgressArgs;
};
/**
 * ProgressStatusCountOutputType without action
 */
export type ProgressStatusCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStatusCountOutputType
     */
    select?: Prisma.ProgressStatusCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ProgressStatusCountOutputType without action
 */
export type ProgressStatusCountOutputTypeCountListOfProgressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProgressRencanaAksiWhereInput;
};
export type ProgressStatusSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    desc?: boolean;
    listOfProgress?: boolean | Prisma.ProgressStatus$listOfProgressArgs<ExtArgs>;
    _count?: boolean | Prisma.ProgressStatusCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["progressStatus"]>;
export type ProgressStatusSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    desc?: boolean;
}, ExtArgs["result"]["progressStatus"]>;
export type ProgressStatusSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    desc?: boolean;
}, ExtArgs["result"]["progressStatus"]>;
export type ProgressStatusSelectScalar = {
    id?: boolean;
    desc?: boolean;
};
export type ProgressStatusOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "desc", ExtArgs["result"]["progressStatus"]>;
export type ProgressStatusInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listOfProgress?: boolean | Prisma.ProgressStatus$listOfProgressArgs<ExtArgs>;
    _count?: boolean | Prisma.ProgressStatusCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProgressStatusIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ProgressStatusIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ProgressStatusPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProgressStatus";
    objects: {
        listOfProgress: Prisma.$ProgressRencanaAksiPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        desc: string;
    }, ExtArgs["result"]["progressStatus"]>;
    composites: {};
};
export type ProgressStatusGetPayload<S extends boolean | null | undefined | ProgressStatusDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProgressStatusPayload, S>;
export type ProgressStatusCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProgressStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProgressStatusCountAggregateInputType | true;
};
export interface ProgressStatusDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProgressStatus'];
        meta: {
            name: 'ProgressStatus';
        };
    };
    /**
     * Find zero or one ProgressStatus that matches the filter.
     * @param {ProgressStatusFindUniqueArgs} args - Arguments to find a ProgressStatus
     * @example
     * // Get one ProgressStatus
     * const progressStatus = await prisma.progressStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgressStatusFindUniqueArgs>(args: Prisma.SelectSubset<T, ProgressStatusFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProgressStatusClient<runtime.Types.Result.GetResult<Prisma.$ProgressStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProgressStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgressStatusFindUniqueOrThrowArgs} args - Arguments to find a ProgressStatus
     * @example
     * // Get one ProgressStatus
     * const progressStatus = await prisma.progressStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgressStatusFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProgressStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProgressStatusClient<runtime.Types.Result.GetResult<Prisma.$ProgressStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProgressStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressStatusFindFirstArgs} args - Arguments to find a ProgressStatus
     * @example
     * // Get one ProgressStatus
     * const progressStatus = await prisma.progressStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgressStatusFindFirstArgs>(args?: Prisma.SelectSubset<T, ProgressStatusFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProgressStatusClient<runtime.Types.Result.GetResult<Prisma.$ProgressStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProgressStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressStatusFindFirstOrThrowArgs} args - Arguments to find a ProgressStatus
     * @example
     * // Get one ProgressStatus
     * const progressStatus = await prisma.progressStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgressStatusFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProgressStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProgressStatusClient<runtime.Types.Result.GetResult<Prisma.$ProgressStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProgressStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgressStatuses
     * const progressStatuses = await prisma.progressStatus.findMany()
     *
     * // Get first 10 ProgressStatuses
     * const progressStatuses = await prisma.progressStatus.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const progressStatusWithIdOnly = await prisma.progressStatus.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProgressStatusFindManyArgs>(args?: Prisma.SelectSubset<T, ProgressStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgressStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProgressStatus.
     * @param {ProgressStatusCreateArgs} args - Arguments to create a ProgressStatus.
     * @example
     * // Create one ProgressStatus
     * const ProgressStatus = await prisma.progressStatus.create({
     *   data: {
     *     // ... data to create a ProgressStatus
     *   }
     * })
     *
     */
    create<T extends ProgressStatusCreateArgs>(args: Prisma.SelectSubset<T, ProgressStatusCreateArgs<ExtArgs>>): Prisma.Prisma__ProgressStatusClient<runtime.Types.Result.GetResult<Prisma.$ProgressStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProgressStatuses.
     * @param {ProgressStatusCreateManyArgs} args - Arguments to create many ProgressStatuses.
     * @example
     * // Create many ProgressStatuses
     * const progressStatus = await prisma.progressStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProgressStatusCreateManyArgs>(args?: Prisma.SelectSubset<T, ProgressStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ProgressStatuses and returns the data saved in the database.
     * @param {ProgressStatusCreateManyAndReturnArgs} args - Arguments to create many ProgressStatuses.
     * @example
     * // Create many ProgressStatuses
     * const progressStatus = await prisma.progressStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProgressStatuses and only return the `id`
     * const progressStatusWithIdOnly = await prisma.progressStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProgressStatusCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProgressStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgressStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ProgressStatus.
     * @param {ProgressStatusDeleteArgs} args - Arguments to delete one ProgressStatus.
     * @example
     * // Delete one ProgressStatus
     * const ProgressStatus = await prisma.progressStatus.delete({
     *   where: {
     *     // ... filter to delete one ProgressStatus
     *   }
     * })
     *
     */
    delete<T extends ProgressStatusDeleteArgs>(args: Prisma.SelectSubset<T, ProgressStatusDeleteArgs<ExtArgs>>): Prisma.Prisma__ProgressStatusClient<runtime.Types.Result.GetResult<Prisma.$ProgressStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProgressStatus.
     * @param {ProgressStatusUpdateArgs} args - Arguments to update one ProgressStatus.
     * @example
     * // Update one ProgressStatus
     * const progressStatus = await prisma.progressStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProgressStatusUpdateArgs>(args: Prisma.SelectSubset<T, ProgressStatusUpdateArgs<ExtArgs>>): Prisma.Prisma__ProgressStatusClient<runtime.Types.Result.GetResult<Prisma.$ProgressStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProgressStatuses.
     * @param {ProgressStatusDeleteManyArgs} args - Arguments to filter ProgressStatuses to delete.
     * @example
     * // Delete a few ProgressStatuses
     * const { count } = await prisma.progressStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProgressStatusDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProgressStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProgressStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgressStatuses
     * const progressStatus = await prisma.progressStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProgressStatusUpdateManyArgs>(args: Prisma.SelectSubset<T, ProgressStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProgressStatuses and returns the data updated in the database.
     * @param {ProgressStatusUpdateManyAndReturnArgs} args - Arguments to update many ProgressStatuses.
     * @example
     * // Update many ProgressStatuses
     * const progressStatus = await prisma.progressStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProgressStatuses and only return the `id`
     * const progressStatusWithIdOnly = await prisma.progressStatus.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProgressStatusUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProgressStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgressStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ProgressStatus.
     * @param {ProgressStatusUpsertArgs} args - Arguments to update or create a ProgressStatus.
     * @example
     * // Update or create a ProgressStatus
     * const progressStatus = await prisma.progressStatus.upsert({
     *   create: {
     *     // ... data to create a ProgressStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgressStatus we want to update
     *   }
     * })
     */
    upsert<T extends ProgressStatusUpsertArgs>(args: Prisma.SelectSubset<T, ProgressStatusUpsertArgs<ExtArgs>>): Prisma.Prisma__ProgressStatusClient<runtime.Types.Result.GetResult<Prisma.$ProgressStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ProgressStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressStatusCountArgs} args - Arguments to filter ProgressStatuses to count.
     * @example
     * // Count the number of ProgressStatuses
     * const count = await prisma.progressStatus.count({
     *   where: {
     *     // ... the filter for the ProgressStatuses we want to count
     *   }
     * })
    **/
    count<T extends ProgressStatusCountArgs>(args?: Prisma.Subset<T, ProgressStatusCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProgressStatusCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProgressStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgressStatusAggregateArgs>(args: Prisma.Subset<T, ProgressStatusAggregateArgs>): Prisma.PrismaPromise<GetProgressStatusAggregateType<T>>;
    /**
     * Group by ProgressStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressStatusGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProgressStatusGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProgressStatusGroupByArgs['orderBy'];
    } : {
        orderBy?: ProgressStatusGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProgressStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProgressStatus model
     */
    readonly fields: ProgressStatusFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProgressStatus.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProgressStatusClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    listOfProgress<T extends Prisma.ProgressStatus$listOfProgressArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProgressStatus$listOfProgressArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProgressRencanaAksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the ProgressStatus model
 */
export interface ProgressStatusFieldRefs {
    readonly id: Prisma.FieldRef<"ProgressStatus", 'Int'>;
    readonly desc: Prisma.FieldRef<"ProgressStatus", 'String'>;
}
/**
 * ProgressStatus findUnique
 */
export type ProgressStatusFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStatus
     */
    select?: Prisma.ProgressStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgressStatus
     */
    omit?: Prisma.ProgressStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgressStatusInclude<ExtArgs> | null;
    /**
     * Filter, which ProgressStatus to fetch.
     */
    where: Prisma.ProgressStatusWhereUniqueInput;
};
/**
 * ProgressStatus findUniqueOrThrow
 */
export type ProgressStatusFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStatus
     */
    select?: Prisma.ProgressStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgressStatus
     */
    omit?: Prisma.ProgressStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgressStatusInclude<ExtArgs> | null;
    /**
     * Filter, which ProgressStatus to fetch.
     */
    where: Prisma.ProgressStatusWhereUniqueInput;
};
/**
 * ProgressStatus findFirst
 */
export type ProgressStatusFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStatus
     */
    select?: Prisma.ProgressStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgressStatus
     */
    omit?: Prisma.ProgressStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgressStatusInclude<ExtArgs> | null;
    /**
     * Filter, which ProgressStatus to fetch.
     */
    where?: Prisma.ProgressStatusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProgressStatuses to fetch.
     */
    orderBy?: Prisma.ProgressStatusOrderByWithRelationInput | Prisma.ProgressStatusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProgressStatuses.
     */
    cursor?: Prisma.ProgressStatusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProgressStatuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProgressStatuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProgressStatuses.
     */
    distinct?: Prisma.ProgressStatusScalarFieldEnum | Prisma.ProgressStatusScalarFieldEnum[];
};
/**
 * ProgressStatus findFirstOrThrow
 */
export type ProgressStatusFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStatus
     */
    select?: Prisma.ProgressStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgressStatus
     */
    omit?: Prisma.ProgressStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgressStatusInclude<ExtArgs> | null;
    /**
     * Filter, which ProgressStatus to fetch.
     */
    where?: Prisma.ProgressStatusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProgressStatuses to fetch.
     */
    orderBy?: Prisma.ProgressStatusOrderByWithRelationInput | Prisma.ProgressStatusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProgressStatuses.
     */
    cursor?: Prisma.ProgressStatusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProgressStatuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProgressStatuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProgressStatuses.
     */
    distinct?: Prisma.ProgressStatusScalarFieldEnum | Prisma.ProgressStatusScalarFieldEnum[];
};
/**
 * ProgressStatus findMany
 */
export type ProgressStatusFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStatus
     */
    select?: Prisma.ProgressStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgressStatus
     */
    omit?: Prisma.ProgressStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgressStatusInclude<ExtArgs> | null;
    /**
     * Filter, which ProgressStatuses to fetch.
     */
    where?: Prisma.ProgressStatusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProgressStatuses to fetch.
     */
    orderBy?: Prisma.ProgressStatusOrderByWithRelationInput | Prisma.ProgressStatusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProgressStatuses.
     */
    cursor?: Prisma.ProgressStatusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProgressStatuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProgressStatuses.
     */
    skip?: number;
    distinct?: Prisma.ProgressStatusScalarFieldEnum | Prisma.ProgressStatusScalarFieldEnum[];
};
/**
 * ProgressStatus create
 */
export type ProgressStatusCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStatus
     */
    select?: Prisma.ProgressStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgressStatus
     */
    omit?: Prisma.ProgressStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgressStatusInclude<ExtArgs> | null;
    /**
     * The data needed to create a ProgressStatus.
     */
    data: Prisma.XOR<Prisma.ProgressStatusCreateInput, Prisma.ProgressStatusUncheckedCreateInput>;
};
/**
 * ProgressStatus createMany
 */
export type ProgressStatusCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgressStatuses.
     */
    data: Prisma.ProgressStatusCreateManyInput | Prisma.ProgressStatusCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProgressStatus createManyAndReturn
 */
export type ProgressStatusCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStatus
     */
    select?: Prisma.ProgressStatusSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgressStatus
     */
    omit?: Prisma.ProgressStatusOmit<ExtArgs> | null;
    /**
     * The data used to create many ProgressStatuses.
     */
    data: Prisma.ProgressStatusCreateManyInput | Prisma.ProgressStatusCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProgressStatus update
 */
export type ProgressStatusUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStatus
     */
    select?: Prisma.ProgressStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgressStatus
     */
    omit?: Prisma.ProgressStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgressStatusInclude<ExtArgs> | null;
    /**
     * The data needed to update a ProgressStatus.
     */
    data: Prisma.XOR<Prisma.ProgressStatusUpdateInput, Prisma.ProgressStatusUncheckedUpdateInput>;
    /**
     * Choose, which ProgressStatus to update.
     */
    where: Prisma.ProgressStatusWhereUniqueInput;
};
/**
 * ProgressStatus updateMany
 */
export type ProgressStatusUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgressStatuses.
     */
    data: Prisma.XOR<Prisma.ProgressStatusUpdateManyMutationInput, Prisma.ProgressStatusUncheckedUpdateManyInput>;
    /**
     * Filter which ProgressStatuses to update
     */
    where?: Prisma.ProgressStatusWhereInput;
    /**
     * Limit how many ProgressStatuses to update.
     */
    limit?: number;
};
/**
 * ProgressStatus updateManyAndReturn
 */
export type ProgressStatusUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStatus
     */
    select?: Prisma.ProgressStatusSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgressStatus
     */
    omit?: Prisma.ProgressStatusOmit<ExtArgs> | null;
    /**
     * The data used to update ProgressStatuses.
     */
    data: Prisma.XOR<Prisma.ProgressStatusUpdateManyMutationInput, Prisma.ProgressStatusUncheckedUpdateManyInput>;
    /**
     * Filter which ProgressStatuses to update
     */
    where?: Prisma.ProgressStatusWhereInput;
    /**
     * Limit how many ProgressStatuses to update.
     */
    limit?: number;
};
/**
 * ProgressStatus upsert
 */
export type ProgressStatusUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStatus
     */
    select?: Prisma.ProgressStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgressStatus
     */
    omit?: Prisma.ProgressStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgressStatusInclude<ExtArgs> | null;
    /**
     * The filter to search for the ProgressStatus to update in case it exists.
     */
    where: Prisma.ProgressStatusWhereUniqueInput;
    /**
     * In case the ProgressStatus found by the `where` argument doesn't exist, create a new ProgressStatus with this data.
     */
    create: Prisma.XOR<Prisma.ProgressStatusCreateInput, Prisma.ProgressStatusUncheckedCreateInput>;
    /**
     * In case the ProgressStatus was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProgressStatusUpdateInput, Prisma.ProgressStatusUncheckedUpdateInput>;
};
/**
 * ProgressStatus delete
 */
export type ProgressStatusDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStatus
     */
    select?: Prisma.ProgressStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgressStatus
     */
    omit?: Prisma.ProgressStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgressStatusInclude<ExtArgs> | null;
    /**
     * Filter which ProgressStatus to delete.
     */
    where: Prisma.ProgressStatusWhereUniqueInput;
};
/**
 * ProgressStatus deleteMany
 */
export type ProgressStatusDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressStatuses to delete
     */
    where?: Prisma.ProgressStatusWhereInput;
    /**
     * Limit how many ProgressStatuses to delete.
     */
    limit?: number;
};
/**
 * ProgressStatus.listOfProgress
 */
export type ProgressStatus$listOfProgressArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ProgressStatus without action
 */
export type ProgressStatusDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressStatus
     */
    select?: Prisma.ProgressStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProgressStatus
     */
    omit?: Prisma.ProgressStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProgressStatusInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ProgressStatus.d.ts.map