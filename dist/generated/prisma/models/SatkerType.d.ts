import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model SatkerType
 *
 */
export type SatkerTypeModel = runtime.Types.Result.DefaultSelection<Prisma.$SatkerTypePayload>;
export type AggregateSatkerType = {
    _count: SatkerTypeCountAggregateOutputType | null;
    _avg: SatkerTypeAvgAggregateOutputType | null;
    _sum: SatkerTypeSumAggregateOutputType | null;
    _min: SatkerTypeMinAggregateOutputType | null;
    _max: SatkerTypeMaxAggregateOutputType | null;
};
export type SatkerTypeAvgAggregateOutputType = {
    id: number | null;
};
export type SatkerTypeSumAggregateOutputType = {
    id: number | null;
};
export type SatkerTypeMinAggregateOutputType = {
    id: number | null;
    desc: string | null;
};
export type SatkerTypeMaxAggregateOutputType = {
    id: number | null;
    desc: string | null;
};
export type SatkerTypeCountAggregateOutputType = {
    id: number;
    desc: number;
    _all: number;
};
export type SatkerTypeAvgAggregateInputType = {
    id?: true;
};
export type SatkerTypeSumAggregateInputType = {
    id?: true;
};
export type SatkerTypeMinAggregateInputType = {
    id?: true;
    desc?: true;
};
export type SatkerTypeMaxAggregateInputType = {
    id?: true;
    desc?: true;
};
export type SatkerTypeCountAggregateInputType = {
    id?: true;
    desc?: true;
    _all?: true;
};
export type SatkerTypeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SatkerType to aggregate.
     */
    where?: Prisma.SatkerTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SatkerTypes to fetch.
     */
    orderBy?: Prisma.SatkerTypeOrderByWithRelationInput | Prisma.SatkerTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SatkerTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SatkerTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SatkerTypes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SatkerTypes
    **/
    _count?: true | SatkerTypeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SatkerTypeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SatkerTypeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SatkerTypeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SatkerTypeMaxAggregateInputType;
};
export type GetSatkerTypeAggregateType<T extends SatkerTypeAggregateArgs> = {
    [P in keyof T & keyof AggregateSatkerType]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSatkerType[P]> : Prisma.GetScalarType<T[P], AggregateSatkerType[P]>;
};
export type SatkerTypeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SatkerTypeWhereInput;
    orderBy?: Prisma.SatkerTypeOrderByWithAggregationInput | Prisma.SatkerTypeOrderByWithAggregationInput[];
    by: Prisma.SatkerTypeScalarFieldEnum[] | Prisma.SatkerTypeScalarFieldEnum;
    having?: Prisma.SatkerTypeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SatkerTypeCountAggregateInputType | true;
    _avg?: SatkerTypeAvgAggregateInputType;
    _sum?: SatkerTypeSumAggregateInputType;
    _min?: SatkerTypeMinAggregateInputType;
    _max?: SatkerTypeMaxAggregateInputType;
};
export type SatkerTypeGroupByOutputType = {
    id: number;
    desc: string;
    _count: SatkerTypeCountAggregateOutputType | null;
    _avg: SatkerTypeAvgAggregateOutputType | null;
    _sum: SatkerTypeSumAggregateOutputType | null;
    _min: SatkerTypeMinAggregateOutputType | null;
    _max: SatkerTypeMaxAggregateOutputType | null;
};
type GetSatkerTypeGroupByPayload<T extends SatkerTypeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SatkerTypeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SatkerTypeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SatkerTypeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SatkerTypeGroupByOutputType[P]>;
}>>;
export type SatkerTypeWhereInput = {
    AND?: Prisma.SatkerTypeWhereInput | Prisma.SatkerTypeWhereInput[];
    OR?: Prisma.SatkerTypeWhereInput[];
    NOT?: Prisma.SatkerTypeWhereInput | Prisma.SatkerTypeWhereInput[];
    id?: Prisma.IntFilter<"SatkerType"> | number;
    desc?: Prisma.StringFilter<"SatkerType"> | string;
    satker?: Prisma.SatkerListRelationFilter;
};
export type SatkerTypeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    satker?: Prisma.SatkerOrderByRelationAggregateInput;
};
export type SatkerTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.SatkerTypeWhereInput | Prisma.SatkerTypeWhereInput[];
    OR?: Prisma.SatkerTypeWhereInput[];
    NOT?: Prisma.SatkerTypeWhereInput | Prisma.SatkerTypeWhereInput[];
    desc?: Prisma.StringFilter<"SatkerType"> | string;
    satker?: Prisma.SatkerListRelationFilter;
}, "id">;
export type SatkerTypeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
    _count?: Prisma.SatkerTypeCountOrderByAggregateInput;
    _avg?: Prisma.SatkerTypeAvgOrderByAggregateInput;
    _max?: Prisma.SatkerTypeMaxOrderByAggregateInput;
    _min?: Prisma.SatkerTypeMinOrderByAggregateInput;
    _sum?: Prisma.SatkerTypeSumOrderByAggregateInput;
};
export type SatkerTypeScalarWhereWithAggregatesInput = {
    AND?: Prisma.SatkerTypeScalarWhereWithAggregatesInput | Prisma.SatkerTypeScalarWhereWithAggregatesInput[];
    OR?: Prisma.SatkerTypeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SatkerTypeScalarWhereWithAggregatesInput | Prisma.SatkerTypeScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"SatkerType"> | number;
    desc?: Prisma.StringWithAggregatesFilter<"SatkerType"> | string;
};
export type SatkerTypeCreateInput = {
    id: number;
    desc: string;
    satker?: Prisma.SatkerCreateNestedManyWithoutSatkertypeInput;
};
export type SatkerTypeUncheckedCreateInput = {
    id: number;
    desc: string;
    satker?: Prisma.SatkerUncheckedCreateNestedManyWithoutSatkertypeInput;
};
export type SatkerTypeUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    satker?: Prisma.SatkerUpdateManyWithoutSatkertypeNestedInput;
};
export type SatkerTypeUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
    satker?: Prisma.SatkerUncheckedUpdateManyWithoutSatkertypeNestedInput;
};
export type SatkerTypeCreateManyInput = {
    id: number;
    desc: string;
};
export type SatkerTypeUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SatkerTypeUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SatkerTypeScalarRelationFilter = {
    is?: Prisma.SatkerTypeWhereInput;
    isNot?: Prisma.SatkerTypeWhereInput;
};
export type SatkerTypeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
};
export type SatkerTypeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type SatkerTypeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
};
export type SatkerTypeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    desc?: Prisma.SortOrder;
};
export type SatkerTypeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type SatkerTypeCreateNestedOneWithoutSatkerInput = {
    create?: Prisma.XOR<Prisma.SatkerTypeCreateWithoutSatkerInput, Prisma.SatkerTypeUncheckedCreateWithoutSatkerInput>;
    connectOrCreate?: Prisma.SatkerTypeCreateOrConnectWithoutSatkerInput;
    connect?: Prisma.SatkerTypeWhereUniqueInput;
};
export type SatkerTypeUpdateOneRequiredWithoutSatkerNestedInput = {
    create?: Prisma.XOR<Prisma.SatkerTypeCreateWithoutSatkerInput, Prisma.SatkerTypeUncheckedCreateWithoutSatkerInput>;
    connectOrCreate?: Prisma.SatkerTypeCreateOrConnectWithoutSatkerInput;
    upsert?: Prisma.SatkerTypeUpsertWithoutSatkerInput;
    connect?: Prisma.SatkerTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SatkerTypeUpdateToOneWithWhereWithoutSatkerInput, Prisma.SatkerTypeUpdateWithoutSatkerInput>, Prisma.SatkerTypeUncheckedUpdateWithoutSatkerInput>;
};
export type SatkerTypeCreateWithoutSatkerInput = {
    id: number;
    desc: string;
};
export type SatkerTypeUncheckedCreateWithoutSatkerInput = {
    id: number;
    desc: string;
};
export type SatkerTypeCreateOrConnectWithoutSatkerInput = {
    where: Prisma.SatkerTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.SatkerTypeCreateWithoutSatkerInput, Prisma.SatkerTypeUncheckedCreateWithoutSatkerInput>;
};
export type SatkerTypeUpsertWithoutSatkerInput = {
    update: Prisma.XOR<Prisma.SatkerTypeUpdateWithoutSatkerInput, Prisma.SatkerTypeUncheckedUpdateWithoutSatkerInput>;
    create: Prisma.XOR<Prisma.SatkerTypeCreateWithoutSatkerInput, Prisma.SatkerTypeUncheckedCreateWithoutSatkerInput>;
    where?: Prisma.SatkerTypeWhereInput;
};
export type SatkerTypeUpdateToOneWithWhereWithoutSatkerInput = {
    where?: Prisma.SatkerTypeWhereInput;
    data: Prisma.XOR<Prisma.SatkerTypeUpdateWithoutSatkerInput, Prisma.SatkerTypeUncheckedUpdateWithoutSatkerInput>;
};
export type SatkerTypeUpdateWithoutSatkerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SatkerTypeUncheckedUpdateWithoutSatkerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    desc?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type SatkerTypeCountOutputType
 */
export type SatkerTypeCountOutputType = {
    satker: number;
};
export type SatkerTypeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    satker?: boolean | SatkerTypeCountOutputTypeCountSatkerArgs;
};
/**
 * SatkerTypeCountOutputType without action
 */
export type SatkerTypeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatkerTypeCountOutputType
     */
    select?: Prisma.SatkerTypeCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * SatkerTypeCountOutputType without action
 */
export type SatkerTypeCountOutputTypeCountSatkerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SatkerWhereInput;
};
export type SatkerTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    desc?: boolean;
    satker?: boolean | Prisma.SatkerType$satkerArgs<ExtArgs>;
    _count?: boolean | Prisma.SatkerTypeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["satkerType"]>;
export type SatkerTypeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    desc?: boolean;
}, ExtArgs["result"]["satkerType"]>;
export type SatkerTypeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    desc?: boolean;
}, ExtArgs["result"]["satkerType"]>;
export type SatkerTypeSelectScalar = {
    id?: boolean;
    desc?: boolean;
};
export type SatkerTypeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "desc", ExtArgs["result"]["satkerType"]>;
export type SatkerTypeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    satker?: boolean | Prisma.SatkerType$satkerArgs<ExtArgs>;
    _count?: boolean | Prisma.SatkerTypeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SatkerTypeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type SatkerTypeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $SatkerTypePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SatkerType";
    objects: {
        satker: Prisma.$SatkerPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        desc: string;
    }, ExtArgs["result"]["satkerType"]>;
    composites: {};
};
export type SatkerTypeGetPayload<S extends boolean | null | undefined | SatkerTypeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SatkerTypePayload, S>;
export type SatkerTypeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SatkerTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SatkerTypeCountAggregateInputType | true;
};
export interface SatkerTypeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SatkerType'];
        meta: {
            name: 'SatkerType';
        };
    };
    /**
     * Find zero or one SatkerType that matches the filter.
     * @param {SatkerTypeFindUniqueArgs} args - Arguments to find a SatkerType
     * @example
     * // Get one SatkerType
     * const satkerType = await prisma.satkerType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SatkerTypeFindUniqueArgs>(args: Prisma.SelectSubset<T, SatkerTypeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SatkerTypeClient<runtime.Types.Result.GetResult<Prisma.$SatkerTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SatkerType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SatkerTypeFindUniqueOrThrowArgs} args - Arguments to find a SatkerType
     * @example
     * // Get one SatkerType
     * const satkerType = await prisma.satkerType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SatkerTypeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SatkerTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SatkerTypeClient<runtime.Types.Result.GetResult<Prisma.$SatkerTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SatkerType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatkerTypeFindFirstArgs} args - Arguments to find a SatkerType
     * @example
     * // Get one SatkerType
     * const satkerType = await prisma.satkerType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SatkerTypeFindFirstArgs>(args?: Prisma.SelectSubset<T, SatkerTypeFindFirstArgs<ExtArgs>>): Prisma.Prisma__SatkerTypeClient<runtime.Types.Result.GetResult<Prisma.$SatkerTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SatkerType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatkerTypeFindFirstOrThrowArgs} args - Arguments to find a SatkerType
     * @example
     * // Get one SatkerType
     * const satkerType = await prisma.satkerType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SatkerTypeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SatkerTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SatkerTypeClient<runtime.Types.Result.GetResult<Prisma.$SatkerTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SatkerTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatkerTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SatkerTypes
     * const satkerTypes = await prisma.satkerType.findMany()
     *
     * // Get first 10 SatkerTypes
     * const satkerTypes = await prisma.satkerType.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const satkerTypeWithIdOnly = await prisma.satkerType.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SatkerTypeFindManyArgs>(args?: Prisma.SelectSubset<T, SatkerTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SatkerTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SatkerType.
     * @param {SatkerTypeCreateArgs} args - Arguments to create a SatkerType.
     * @example
     * // Create one SatkerType
     * const SatkerType = await prisma.satkerType.create({
     *   data: {
     *     // ... data to create a SatkerType
     *   }
     * })
     *
     */
    create<T extends SatkerTypeCreateArgs>(args: Prisma.SelectSubset<T, SatkerTypeCreateArgs<ExtArgs>>): Prisma.Prisma__SatkerTypeClient<runtime.Types.Result.GetResult<Prisma.$SatkerTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SatkerTypes.
     * @param {SatkerTypeCreateManyArgs} args - Arguments to create many SatkerTypes.
     * @example
     * // Create many SatkerTypes
     * const satkerType = await prisma.satkerType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SatkerTypeCreateManyArgs>(args?: Prisma.SelectSubset<T, SatkerTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SatkerTypes and returns the data saved in the database.
     * @param {SatkerTypeCreateManyAndReturnArgs} args - Arguments to create many SatkerTypes.
     * @example
     * // Create many SatkerTypes
     * const satkerType = await prisma.satkerType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SatkerTypes and only return the `id`
     * const satkerTypeWithIdOnly = await prisma.satkerType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SatkerTypeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SatkerTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SatkerTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SatkerType.
     * @param {SatkerTypeDeleteArgs} args - Arguments to delete one SatkerType.
     * @example
     * // Delete one SatkerType
     * const SatkerType = await prisma.satkerType.delete({
     *   where: {
     *     // ... filter to delete one SatkerType
     *   }
     * })
     *
     */
    delete<T extends SatkerTypeDeleteArgs>(args: Prisma.SelectSubset<T, SatkerTypeDeleteArgs<ExtArgs>>): Prisma.Prisma__SatkerTypeClient<runtime.Types.Result.GetResult<Prisma.$SatkerTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SatkerType.
     * @param {SatkerTypeUpdateArgs} args - Arguments to update one SatkerType.
     * @example
     * // Update one SatkerType
     * const satkerType = await prisma.satkerType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SatkerTypeUpdateArgs>(args: Prisma.SelectSubset<T, SatkerTypeUpdateArgs<ExtArgs>>): Prisma.Prisma__SatkerTypeClient<runtime.Types.Result.GetResult<Prisma.$SatkerTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SatkerTypes.
     * @param {SatkerTypeDeleteManyArgs} args - Arguments to filter SatkerTypes to delete.
     * @example
     * // Delete a few SatkerTypes
     * const { count } = await prisma.satkerType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SatkerTypeDeleteManyArgs>(args?: Prisma.SelectSubset<T, SatkerTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SatkerTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatkerTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SatkerTypes
     * const satkerType = await prisma.satkerType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SatkerTypeUpdateManyArgs>(args: Prisma.SelectSubset<T, SatkerTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SatkerTypes and returns the data updated in the database.
     * @param {SatkerTypeUpdateManyAndReturnArgs} args - Arguments to update many SatkerTypes.
     * @example
     * // Update many SatkerTypes
     * const satkerType = await prisma.satkerType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SatkerTypes and only return the `id`
     * const satkerTypeWithIdOnly = await prisma.satkerType.updateManyAndReturn({
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
    updateManyAndReturn<T extends SatkerTypeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SatkerTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SatkerTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SatkerType.
     * @param {SatkerTypeUpsertArgs} args - Arguments to update or create a SatkerType.
     * @example
     * // Update or create a SatkerType
     * const satkerType = await prisma.satkerType.upsert({
     *   create: {
     *     // ... data to create a SatkerType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SatkerType we want to update
     *   }
     * })
     */
    upsert<T extends SatkerTypeUpsertArgs>(args: Prisma.SelectSubset<T, SatkerTypeUpsertArgs<ExtArgs>>): Prisma.Prisma__SatkerTypeClient<runtime.Types.Result.GetResult<Prisma.$SatkerTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SatkerTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatkerTypeCountArgs} args - Arguments to filter SatkerTypes to count.
     * @example
     * // Count the number of SatkerTypes
     * const count = await prisma.satkerType.count({
     *   where: {
     *     // ... the filter for the SatkerTypes we want to count
     *   }
     * })
    **/
    count<T extends SatkerTypeCountArgs>(args?: Prisma.Subset<T, SatkerTypeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SatkerTypeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SatkerType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatkerTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SatkerTypeAggregateArgs>(args: Prisma.Subset<T, SatkerTypeAggregateArgs>): Prisma.PrismaPromise<GetSatkerTypeAggregateType<T>>;
    /**
     * Group by SatkerType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SatkerTypeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SatkerTypeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SatkerTypeGroupByArgs['orderBy'];
    } : {
        orderBy?: SatkerTypeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SatkerTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSatkerTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SatkerType model
     */
    readonly fields: SatkerTypeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SatkerType.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SatkerTypeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    satker<T extends Prisma.SatkerType$satkerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SatkerType$satkerArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SatkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the SatkerType model
 */
export interface SatkerTypeFieldRefs {
    readonly id: Prisma.FieldRef<"SatkerType", 'Int'>;
    readonly desc: Prisma.FieldRef<"SatkerType", 'String'>;
}
/**
 * SatkerType findUnique
 */
export type SatkerTypeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatkerType
     */
    select?: Prisma.SatkerTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SatkerType
     */
    omit?: Prisma.SatkerTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SatkerTypeInclude<ExtArgs> | null;
    /**
     * Filter, which SatkerType to fetch.
     */
    where: Prisma.SatkerTypeWhereUniqueInput;
};
/**
 * SatkerType findUniqueOrThrow
 */
export type SatkerTypeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatkerType
     */
    select?: Prisma.SatkerTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SatkerType
     */
    omit?: Prisma.SatkerTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SatkerTypeInclude<ExtArgs> | null;
    /**
     * Filter, which SatkerType to fetch.
     */
    where: Prisma.SatkerTypeWhereUniqueInput;
};
/**
 * SatkerType findFirst
 */
export type SatkerTypeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatkerType
     */
    select?: Prisma.SatkerTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SatkerType
     */
    omit?: Prisma.SatkerTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SatkerTypeInclude<ExtArgs> | null;
    /**
     * Filter, which SatkerType to fetch.
     */
    where?: Prisma.SatkerTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SatkerTypes to fetch.
     */
    orderBy?: Prisma.SatkerTypeOrderByWithRelationInput | Prisma.SatkerTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SatkerTypes.
     */
    cursor?: Prisma.SatkerTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SatkerTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SatkerTypes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SatkerTypes.
     */
    distinct?: Prisma.SatkerTypeScalarFieldEnum | Prisma.SatkerTypeScalarFieldEnum[];
};
/**
 * SatkerType findFirstOrThrow
 */
export type SatkerTypeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatkerType
     */
    select?: Prisma.SatkerTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SatkerType
     */
    omit?: Prisma.SatkerTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SatkerTypeInclude<ExtArgs> | null;
    /**
     * Filter, which SatkerType to fetch.
     */
    where?: Prisma.SatkerTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SatkerTypes to fetch.
     */
    orderBy?: Prisma.SatkerTypeOrderByWithRelationInput | Prisma.SatkerTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SatkerTypes.
     */
    cursor?: Prisma.SatkerTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SatkerTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SatkerTypes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SatkerTypes.
     */
    distinct?: Prisma.SatkerTypeScalarFieldEnum | Prisma.SatkerTypeScalarFieldEnum[];
};
/**
 * SatkerType findMany
 */
export type SatkerTypeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatkerType
     */
    select?: Prisma.SatkerTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SatkerType
     */
    omit?: Prisma.SatkerTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SatkerTypeInclude<ExtArgs> | null;
    /**
     * Filter, which SatkerTypes to fetch.
     */
    where?: Prisma.SatkerTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SatkerTypes to fetch.
     */
    orderBy?: Prisma.SatkerTypeOrderByWithRelationInput | Prisma.SatkerTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SatkerTypes.
     */
    cursor?: Prisma.SatkerTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SatkerTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SatkerTypes.
     */
    skip?: number;
    distinct?: Prisma.SatkerTypeScalarFieldEnum | Prisma.SatkerTypeScalarFieldEnum[];
};
/**
 * SatkerType create
 */
export type SatkerTypeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatkerType
     */
    select?: Prisma.SatkerTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SatkerType
     */
    omit?: Prisma.SatkerTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SatkerTypeInclude<ExtArgs> | null;
    /**
     * The data needed to create a SatkerType.
     */
    data: Prisma.XOR<Prisma.SatkerTypeCreateInput, Prisma.SatkerTypeUncheckedCreateInput>;
};
/**
 * SatkerType createMany
 */
export type SatkerTypeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SatkerTypes.
     */
    data: Prisma.SatkerTypeCreateManyInput | Prisma.SatkerTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SatkerType createManyAndReturn
 */
export type SatkerTypeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatkerType
     */
    select?: Prisma.SatkerTypeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SatkerType
     */
    omit?: Prisma.SatkerTypeOmit<ExtArgs> | null;
    /**
     * The data used to create many SatkerTypes.
     */
    data: Prisma.SatkerTypeCreateManyInput | Prisma.SatkerTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SatkerType update
 */
export type SatkerTypeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatkerType
     */
    select?: Prisma.SatkerTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SatkerType
     */
    omit?: Prisma.SatkerTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SatkerTypeInclude<ExtArgs> | null;
    /**
     * The data needed to update a SatkerType.
     */
    data: Prisma.XOR<Prisma.SatkerTypeUpdateInput, Prisma.SatkerTypeUncheckedUpdateInput>;
    /**
     * Choose, which SatkerType to update.
     */
    where: Prisma.SatkerTypeWhereUniqueInput;
};
/**
 * SatkerType updateMany
 */
export type SatkerTypeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SatkerTypes.
     */
    data: Prisma.XOR<Prisma.SatkerTypeUpdateManyMutationInput, Prisma.SatkerTypeUncheckedUpdateManyInput>;
    /**
     * Filter which SatkerTypes to update
     */
    where?: Prisma.SatkerTypeWhereInput;
    /**
     * Limit how many SatkerTypes to update.
     */
    limit?: number;
};
/**
 * SatkerType updateManyAndReturn
 */
export type SatkerTypeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatkerType
     */
    select?: Prisma.SatkerTypeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SatkerType
     */
    omit?: Prisma.SatkerTypeOmit<ExtArgs> | null;
    /**
     * The data used to update SatkerTypes.
     */
    data: Prisma.XOR<Prisma.SatkerTypeUpdateManyMutationInput, Prisma.SatkerTypeUncheckedUpdateManyInput>;
    /**
     * Filter which SatkerTypes to update
     */
    where?: Prisma.SatkerTypeWhereInput;
    /**
     * Limit how many SatkerTypes to update.
     */
    limit?: number;
};
/**
 * SatkerType upsert
 */
export type SatkerTypeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatkerType
     */
    select?: Prisma.SatkerTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SatkerType
     */
    omit?: Prisma.SatkerTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SatkerTypeInclude<ExtArgs> | null;
    /**
     * The filter to search for the SatkerType to update in case it exists.
     */
    where: Prisma.SatkerTypeWhereUniqueInput;
    /**
     * In case the SatkerType found by the `where` argument doesn't exist, create a new SatkerType with this data.
     */
    create: Prisma.XOR<Prisma.SatkerTypeCreateInput, Prisma.SatkerTypeUncheckedCreateInput>;
    /**
     * In case the SatkerType was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SatkerTypeUpdateInput, Prisma.SatkerTypeUncheckedUpdateInput>;
};
/**
 * SatkerType delete
 */
export type SatkerTypeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatkerType
     */
    select?: Prisma.SatkerTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SatkerType
     */
    omit?: Prisma.SatkerTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SatkerTypeInclude<ExtArgs> | null;
    /**
     * Filter which SatkerType to delete.
     */
    where: Prisma.SatkerTypeWhereUniqueInput;
};
/**
 * SatkerType deleteMany
 */
export type SatkerTypeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SatkerTypes to delete
     */
    where?: Prisma.SatkerTypeWhereInput;
    /**
     * Limit how many SatkerTypes to delete.
     */
    limit?: number;
};
/**
 * SatkerType.satker
 */
export type SatkerType$satkerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.SatkerWhereInput;
    orderBy?: Prisma.SatkerOrderByWithRelationInput | Prisma.SatkerOrderByWithRelationInput[];
    cursor?: Prisma.SatkerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SatkerScalarFieldEnum | Prisma.SatkerScalarFieldEnum[];
};
/**
 * SatkerType without action
 */
export type SatkerTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SatkerType
     */
    select?: Prisma.SatkerTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SatkerType
     */
    omit?: Prisma.SatkerTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SatkerTypeInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=SatkerType.d.ts.map