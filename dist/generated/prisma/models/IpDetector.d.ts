import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model IpDetector
 *
 */
export type IpDetectorModel = runtime.Types.Result.DefaultSelection<Prisma.$IpDetectorPayload>;
export type AggregateIpDetector = {
    _count: IpDetectorCountAggregateOutputType | null;
    _min: IpDetectorMinAggregateOutputType | null;
    _max: IpDetectorMaxAggregateOutputType | null;
};
export type IpDetectorMinAggregateOutputType = {
    uuid: string | null;
    ip: string | null;
    ips: string | null;
    path: string | null;
    created_at: Date | null;
    last_updated: Date | null;
};
export type IpDetectorMaxAggregateOutputType = {
    uuid: string | null;
    ip: string | null;
    ips: string | null;
    path: string | null;
    created_at: Date | null;
    last_updated: Date | null;
};
export type IpDetectorCountAggregateOutputType = {
    uuid: number;
    ip: number;
    ips: number;
    path: number;
    created_at: number;
    last_updated: number;
    _all: number;
};
export type IpDetectorMinAggregateInputType = {
    uuid?: true;
    ip?: true;
    ips?: true;
    path?: true;
    created_at?: true;
    last_updated?: true;
};
export type IpDetectorMaxAggregateInputType = {
    uuid?: true;
    ip?: true;
    ips?: true;
    path?: true;
    created_at?: true;
    last_updated?: true;
};
export type IpDetectorCountAggregateInputType = {
    uuid?: true;
    ip?: true;
    ips?: true;
    path?: true;
    created_at?: true;
    last_updated?: true;
    _all?: true;
};
export type IpDetectorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which IpDetector to aggregate.
     */
    where?: Prisma.IpDetectorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of IpDetectors to fetch.
     */
    orderBy?: Prisma.IpDetectorOrderByWithRelationInput | Prisma.IpDetectorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.IpDetectorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` IpDetectors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` IpDetectors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned IpDetectors
    **/
    _count?: true | IpDetectorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: IpDetectorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: IpDetectorMaxAggregateInputType;
};
export type GetIpDetectorAggregateType<T extends IpDetectorAggregateArgs> = {
    [P in keyof T & keyof AggregateIpDetector]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIpDetector[P]> : Prisma.GetScalarType<T[P], AggregateIpDetector[P]>;
};
export type IpDetectorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IpDetectorWhereInput;
    orderBy?: Prisma.IpDetectorOrderByWithAggregationInput | Prisma.IpDetectorOrderByWithAggregationInput[];
    by: Prisma.IpDetectorScalarFieldEnum[] | Prisma.IpDetectorScalarFieldEnum;
    having?: Prisma.IpDetectorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IpDetectorCountAggregateInputType | true;
    _min?: IpDetectorMinAggregateInputType;
    _max?: IpDetectorMaxAggregateInputType;
};
export type IpDetectorGroupByOutputType = {
    uuid: string;
    ip: string;
    ips: string;
    path: string;
    created_at: Date;
    last_updated: Date;
    _count: IpDetectorCountAggregateOutputType | null;
    _min: IpDetectorMinAggregateOutputType | null;
    _max: IpDetectorMaxAggregateOutputType | null;
};
type GetIpDetectorGroupByPayload<T extends IpDetectorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IpDetectorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IpDetectorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IpDetectorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IpDetectorGroupByOutputType[P]>;
}>>;
export type IpDetectorWhereInput = {
    AND?: Prisma.IpDetectorWhereInput | Prisma.IpDetectorWhereInput[];
    OR?: Prisma.IpDetectorWhereInput[];
    NOT?: Prisma.IpDetectorWhereInput | Prisma.IpDetectorWhereInput[];
    uuid?: Prisma.StringFilter<"IpDetector"> | string;
    ip?: Prisma.StringFilter<"IpDetector"> | string;
    ips?: Prisma.StringFilter<"IpDetector"> | string;
    path?: Prisma.StringFilter<"IpDetector"> | string;
    created_at?: Prisma.DateTimeFilter<"IpDetector"> | Date | string;
    last_updated?: Prisma.DateTimeFilter<"IpDetector"> | Date | string;
};
export type IpDetectorOrderByWithRelationInput = {
    uuid?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    ips?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type IpDetectorWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string;
    ip?: string;
    AND?: Prisma.IpDetectorWhereInput | Prisma.IpDetectorWhereInput[];
    OR?: Prisma.IpDetectorWhereInput[];
    NOT?: Prisma.IpDetectorWhereInput | Prisma.IpDetectorWhereInput[];
    ips?: Prisma.StringFilter<"IpDetector"> | string;
    path?: Prisma.StringFilter<"IpDetector"> | string;
    created_at?: Prisma.DateTimeFilter<"IpDetector"> | Date | string;
    last_updated?: Prisma.DateTimeFilter<"IpDetector"> | Date | string;
}, "uuid" | "ip">;
export type IpDetectorOrderByWithAggregationInput = {
    uuid?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    ips?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
    _count?: Prisma.IpDetectorCountOrderByAggregateInput;
    _max?: Prisma.IpDetectorMaxOrderByAggregateInput;
    _min?: Prisma.IpDetectorMinOrderByAggregateInput;
};
export type IpDetectorScalarWhereWithAggregatesInput = {
    AND?: Prisma.IpDetectorScalarWhereWithAggregatesInput | Prisma.IpDetectorScalarWhereWithAggregatesInput[];
    OR?: Prisma.IpDetectorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.IpDetectorScalarWhereWithAggregatesInput | Prisma.IpDetectorScalarWhereWithAggregatesInput[];
    uuid?: Prisma.StringWithAggregatesFilter<"IpDetector"> | string;
    ip?: Prisma.StringWithAggregatesFilter<"IpDetector"> | string;
    ips?: Prisma.StringWithAggregatesFilter<"IpDetector"> | string;
    path?: Prisma.StringWithAggregatesFilter<"IpDetector"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"IpDetector"> | Date | string;
    last_updated?: Prisma.DateTimeWithAggregatesFilter<"IpDetector"> | Date | string;
};
export type IpDetectorCreateInput = {
    uuid?: string;
    ip: string;
    ips: string;
    path: string;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type IpDetectorUncheckedCreateInput = {
    uuid?: string;
    ip: string;
    ips: string;
    path: string;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type IpDetectorUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    ips?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IpDetectorUncheckedUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    ips?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IpDetectorCreateManyInput = {
    uuid?: string;
    ip: string;
    ips: string;
    path: string;
    created_at?: Date | string;
    last_updated?: Date | string;
};
export type IpDetectorUpdateManyMutationInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    ips?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IpDetectorUncheckedUpdateManyInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    ip?: Prisma.StringFieldUpdateOperationsInput | string;
    ips?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    last_updated?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IpDetectorCountOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    ips?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type IpDetectorMaxOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    ips?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type IpDetectorMinOrderByAggregateInput = {
    uuid?: Prisma.SortOrder;
    ip?: Prisma.SortOrder;
    ips?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    last_updated?: Prisma.SortOrder;
};
export type IpDetectorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    ip?: boolean;
    ips?: boolean;
    path?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
}, ExtArgs["result"]["ipDetector"]>;
export type IpDetectorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    ip?: boolean;
    ips?: boolean;
    path?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
}, ExtArgs["result"]["ipDetector"]>;
export type IpDetectorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean;
    ip?: boolean;
    ips?: boolean;
    path?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
}, ExtArgs["result"]["ipDetector"]>;
export type IpDetectorSelectScalar = {
    uuid?: boolean;
    ip?: boolean;
    ips?: boolean;
    path?: boolean;
    created_at?: boolean;
    last_updated?: boolean;
};
export type IpDetectorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"uuid" | "ip" | "ips" | "path" | "created_at" | "last_updated", ExtArgs["result"]["ipDetector"]>;
export type $IpDetectorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "IpDetector";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        uuid: string;
        ip: string;
        ips: string;
        path: string;
        created_at: Date;
        last_updated: Date;
    }, ExtArgs["result"]["ipDetector"]>;
    composites: {};
};
export type IpDetectorGetPayload<S extends boolean | null | undefined | IpDetectorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IpDetectorPayload, S>;
export type IpDetectorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<IpDetectorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IpDetectorCountAggregateInputType | true;
};
export interface IpDetectorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['IpDetector'];
        meta: {
            name: 'IpDetector';
        };
    };
    /**
     * Find zero or one IpDetector that matches the filter.
     * @param {IpDetectorFindUniqueArgs} args - Arguments to find a IpDetector
     * @example
     * // Get one IpDetector
     * const ipDetector = await prisma.ipDetector.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IpDetectorFindUniqueArgs>(args: Prisma.SelectSubset<T, IpDetectorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IpDetectorClient<runtime.Types.Result.GetResult<Prisma.$IpDetectorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one IpDetector that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IpDetectorFindUniqueOrThrowArgs} args - Arguments to find a IpDetector
     * @example
     * // Get one IpDetector
     * const ipDetector = await prisma.ipDetector.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IpDetectorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IpDetectorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IpDetectorClient<runtime.Types.Result.GetResult<Prisma.$IpDetectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first IpDetector that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpDetectorFindFirstArgs} args - Arguments to find a IpDetector
     * @example
     * // Get one IpDetector
     * const ipDetector = await prisma.ipDetector.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IpDetectorFindFirstArgs>(args?: Prisma.SelectSubset<T, IpDetectorFindFirstArgs<ExtArgs>>): Prisma.Prisma__IpDetectorClient<runtime.Types.Result.GetResult<Prisma.$IpDetectorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first IpDetector that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpDetectorFindFirstOrThrowArgs} args - Arguments to find a IpDetector
     * @example
     * // Get one IpDetector
     * const ipDetector = await prisma.ipDetector.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IpDetectorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IpDetectorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IpDetectorClient<runtime.Types.Result.GetResult<Prisma.$IpDetectorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more IpDetectors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpDetectorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IpDetectors
     * const ipDetectors = await prisma.ipDetector.findMany()
     *
     * // Get first 10 IpDetectors
     * const ipDetectors = await prisma.ipDetector.findMany({ take: 10 })
     *
     * // Only select the `uuid`
     * const ipDetectorWithUuidOnly = await prisma.ipDetector.findMany({ select: { uuid: true } })
     *
     */
    findMany<T extends IpDetectorFindManyArgs>(args?: Prisma.SelectSubset<T, IpDetectorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IpDetectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a IpDetector.
     * @param {IpDetectorCreateArgs} args - Arguments to create a IpDetector.
     * @example
     * // Create one IpDetector
     * const IpDetector = await prisma.ipDetector.create({
     *   data: {
     *     // ... data to create a IpDetector
     *   }
     * })
     *
     */
    create<T extends IpDetectorCreateArgs>(args: Prisma.SelectSubset<T, IpDetectorCreateArgs<ExtArgs>>): Prisma.Prisma__IpDetectorClient<runtime.Types.Result.GetResult<Prisma.$IpDetectorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many IpDetectors.
     * @param {IpDetectorCreateManyArgs} args - Arguments to create many IpDetectors.
     * @example
     * // Create many IpDetectors
     * const ipDetector = await prisma.ipDetector.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends IpDetectorCreateManyArgs>(args?: Prisma.SelectSubset<T, IpDetectorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many IpDetectors and returns the data saved in the database.
     * @param {IpDetectorCreateManyAndReturnArgs} args - Arguments to create many IpDetectors.
     * @example
     * // Create many IpDetectors
     * const ipDetector = await prisma.ipDetector.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many IpDetectors and only return the `uuid`
     * const ipDetectorWithUuidOnly = await prisma.ipDetector.createManyAndReturn({
     *   select: { uuid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends IpDetectorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, IpDetectorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IpDetectorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a IpDetector.
     * @param {IpDetectorDeleteArgs} args - Arguments to delete one IpDetector.
     * @example
     * // Delete one IpDetector
     * const IpDetector = await prisma.ipDetector.delete({
     *   where: {
     *     // ... filter to delete one IpDetector
     *   }
     * })
     *
     */
    delete<T extends IpDetectorDeleteArgs>(args: Prisma.SelectSubset<T, IpDetectorDeleteArgs<ExtArgs>>): Prisma.Prisma__IpDetectorClient<runtime.Types.Result.GetResult<Prisma.$IpDetectorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one IpDetector.
     * @param {IpDetectorUpdateArgs} args - Arguments to update one IpDetector.
     * @example
     * // Update one IpDetector
     * const ipDetector = await prisma.ipDetector.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends IpDetectorUpdateArgs>(args: Prisma.SelectSubset<T, IpDetectorUpdateArgs<ExtArgs>>): Prisma.Prisma__IpDetectorClient<runtime.Types.Result.GetResult<Prisma.$IpDetectorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more IpDetectors.
     * @param {IpDetectorDeleteManyArgs} args - Arguments to filter IpDetectors to delete.
     * @example
     * // Delete a few IpDetectors
     * const { count } = await prisma.ipDetector.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends IpDetectorDeleteManyArgs>(args?: Prisma.SelectSubset<T, IpDetectorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more IpDetectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpDetectorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IpDetectors
     * const ipDetector = await prisma.ipDetector.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends IpDetectorUpdateManyArgs>(args: Prisma.SelectSubset<T, IpDetectorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more IpDetectors and returns the data updated in the database.
     * @param {IpDetectorUpdateManyAndReturnArgs} args - Arguments to update many IpDetectors.
     * @example
     * // Update many IpDetectors
     * const ipDetector = await prisma.ipDetector.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more IpDetectors and only return the `uuid`
     * const ipDetectorWithUuidOnly = await prisma.ipDetector.updateManyAndReturn({
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
    updateManyAndReturn<T extends IpDetectorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, IpDetectorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IpDetectorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one IpDetector.
     * @param {IpDetectorUpsertArgs} args - Arguments to update or create a IpDetector.
     * @example
     * // Update or create a IpDetector
     * const ipDetector = await prisma.ipDetector.upsert({
     *   create: {
     *     // ... data to create a IpDetector
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IpDetector we want to update
     *   }
     * })
     */
    upsert<T extends IpDetectorUpsertArgs>(args: Prisma.SelectSubset<T, IpDetectorUpsertArgs<ExtArgs>>): Prisma.Prisma__IpDetectorClient<runtime.Types.Result.GetResult<Prisma.$IpDetectorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of IpDetectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpDetectorCountArgs} args - Arguments to filter IpDetectors to count.
     * @example
     * // Count the number of IpDetectors
     * const count = await prisma.ipDetector.count({
     *   where: {
     *     // ... the filter for the IpDetectors we want to count
     *   }
     * })
    **/
    count<T extends IpDetectorCountArgs>(args?: Prisma.Subset<T, IpDetectorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IpDetectorCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a IpDetector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpDetectorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IpDetectorAggregateArgs>(args: Prisma.Subset<T, IpDetectorAggregateArgs>): Prisma.PrismaPromise<GetIpDetectorAggregateType<T>>;
    /**
     * Group by IpDetector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpDetectorGroupByArgs} args - Group by arguments.
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
    groupBy<T extends IpDetectorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: IpDetectorGroupByArgs['orderBy'];
    } : {
        orderBy?: IpDetectorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, IpDetectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIpDetectorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the IpDetector model
     */
    readonly fields: IpDetectorFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for IpDetector.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__IpDetectorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the IpDetector model
 */
export interface IpDetectorFieldRefs {
    readonly uuid: Prisma.FieldRef<"IpDetector", 'String'>;
    readonly ip: Prisma.FieldRef<"IpDetector", 'String'>;
    readonly ips: Prisma.FieldRef<"IpDetector", 'String'>;
    readonly path: Prisma.FieldRef<"IpDetector", 'String'>;
    readonly created_at: Prisma.FieldRef<"IpDetector", 'DateTime'>;
    readonly last_updated: Prisma.FieldRef<"IpDetector", 'DateTime'>;
}
/**
 * IpDetector findUnique
 */
export type IpDetectorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpDetector
     */
    select?: Prisma.IpDetectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the IpDetector
     */
    omit?: Prisma.IpDetectorOmit<ExtArgs> | null;
    /**
     * Filter, which IpDetector to fetch.
     */
    where: Prisma.IpDetectorWhereUniqueInput;
};
/**
 * IpDetector findUniqueOrThrow
 */
export type IpDetectorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpDetector
     */
    select?: Prisma.IpDetectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the IpDetector
     */
    omit?: Prisma.IpDetectorOmit<ExtArgs> | null;
    /**
     * Filter, which IpDetector to fetch.
     */
    where: Prisma.IpDetectorWhereUniqueInput;
};
/**
 * IpDetector findFirst
 */
export type IpDetectorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpDetector
     */
    select?: Prisma.IpDetectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the IpDetector
     */
    omit?: Prisma.IpDetectorOmit<ExtArgs> | null;
    /**
     * Filter, which IpDetector to fetch.
     */
    where?: Prisma.IpDetectorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of IpDetectors to fetch.
     */
    orderBy?: Prisma.IpDetectorOrderByWithRelationInput | Prisma.IpDetectorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for IpDetectors.
     */
    cursor?: Prisma.IpDetectorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` IpDetectors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` IpDetectors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of IpDetectors.
     */
    distinct?: Prisma.IpDetectorScalarFieldEnum | Prisma.IpDetectorScalarFieldEnum[];
};
/**
 * IpDetector findFirstOrThrow
 */
export type IpDetectorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpDetector
     */
    select?: Prisma.IpDetectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the IpDetector
     */
    omit?: Prisma.IpDetectorOmit<ExtArgs> | null;
    /**
     * Filter, which IpDetector to fetch.
     */
    where?: Prisma.IpDetectorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of IpDetectors to fetch.
     */
    orderBy?: Prisma.IpDetectorOrderByWithRelationInput | Prisma.IpDetectorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for IpDetectors.
     */
    cursor?: Prisma.IpDetectorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` IpDetectors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` IpDetectors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of IpDetectors.
     */
    distinct?: Prisma.IpDetectorScalarFieldEnum | Prisma.IpDetectorScalarFieldEnum[];
};
/**
 * IpDetector findMany
 */
export type IpDetectorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpDetector
     */
    select?: Prisma.IpDetectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the IpDetector
     */
    omit?: Prisma.IpDetectorOmit<ExtArgs> | null;
    /**
     * Filter, which IpDetectors to fetch.
     */
    where?: Prisma.IpDetectorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of IpDetectors to fetch.
     */
    orderBy?: Prisma.IpDetectorOrderByWithRelationInput | Prisma.IpDetectorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing IpDetectors.
     */
    cursor?: Prisma.IpDetectorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` IpDetectors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` IpDetectors.
     */
    skip?: number;
    distinct?: Prisma.IpDetectorScalarFieldEnum | Prisma.IpDetectorScalarFieldEnum[];
};
/**
 * IpDetector create
 */
export type IpDetectorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpDetector
     */
    select?: Prisma.IpDetectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the IpDetector
     */
    omit?: Prisma.IpDetectorOmit<ExtArgs> | null;
    /**
     * The data needed to create a IpDetector.
     */
    data: Prisma.XOR<Prisma.IpDetectorCreateInput, Prisma.IpDetectorUncheckedCreateInput>;
};
/**
 * IpDetector createMany
 */
export type IpDetectorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many IpDetectors.
     */
    data: Prisma.IpDetectorCreateManyInput | Prisma.IpDetectorCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * IpDetector createManyAndReturn
 */
export type IpDetectorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpDetector
     */
    select?: Prisma.IpDetectorSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the IpDetector
     */
    omit?: Prisma.IpDetectorOmit<ExtArgs> | null;
    /**
     * The data used to create many IpDetectors.
     */
    data: Prisma.IpDetectorCreateManyInput | Prisma.IpDetectorCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * IpDetector update
 */
export type IpDetectorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpDetector
     */
    select?: Prisma.IpDetectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the IpDetector
     */
    omit?: Prisma.IpDetectorOmit<ExtArgs> | null;
    /**
     * The data needed to update a IpDetector.
     */
    data: Prisma.XOR<Prisma.IpDetectorUpdateInput, Prisma.IpDetectorUncheckedUpdateInput>;
    /**
     * Choose, which IpDetector to update.
     */
    where: Prisma.IpDetectorWhereUniqueInput;
};
/**
 * IpDetector updateMany
 */
export type IpDetectorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update IpDetectors.
     */
    data: Prisma.XOR<Prisma.IpDetectorUpdateManyMutationInput, Prisma.IpDetectorUncheckedUpdateManyInput>;
    /**
     * Filter which IpDetectors to update
     */
    where?: Prisma.IpDetectorWhereInput;
    /**
     * Limit how many IpDetectors to update.
     */
    limit?: number;
};
/**
 * IpDetector updateManyAndReturn
 */
export type IpDetectorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpDetector
     */
    select?: Prisma.IpDetectorSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the IpDetector
     */
    omit?: Prisma.IpDetectorOmit<ExtArgs> | null;
    /**
     * The data used to update IpDetectors.
     */
    data: Prisma.XOR<Prisma.IpDetectorUpdateManyMutationInput, Prisma.IpDetectorUncheckedUpdateManyInput>;
    /**
     * Filter which IpDetectors to update
     */
    where?: Prisma.IpDetectorWhereInput;
    /**
     * Limit how many IpDetectors to update.
     */
    limit?: number;
};
/**
 * IpDetector upsert
 */
export type IpDetectorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpDetector
     */
    select?: Prisma.IpDetectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the IpDetector
     */
    omit?: Prisma.IpDetectorOmit<ExtArgs> | null;
    /**
     * The filter to search for the IpDetector to update in case it exists.
     */
    where: Prisma.IpDetectorWhereUniqueInput;
    /**
     * In case the IpDetector found by the `where` argument doesn't exist, create a new IpDetector with this data.
     */
    create: Prisma.XOR<Prisma.IpDetectorCreateInput, Prisma.IpDetectorUncheckedCreateInput>;
    /**
     * In case the IpDetector was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.IpDetectorUpdateInput, Prisma.IpDetectorUncheckedUpdateInput>;
};
/**
 * IpDetector delete
 */
export type IpDetectorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpDetector
     */
    select?: Prisma.IpDetectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the IpDetector
     */
    omit?: Prisma.IpDetectorOmit<ExtArgs> | null;
    /**
     * Filter which IpDetector to delete.
     */
    where: Prisma.IpDetectorWhereUniqueInput;
};
/**
 * IpDetector deleteMany
 */
export type IpDetectorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which IpDetectors to delete
     */
    where?: Prisma.IpDetectorWhereInput;
    /**
     * Limit how many IpDetectors to delete.
     */
    limit?: number;
};
/**
 * IpDetector without action
 */
export type IpDetectorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpDetector
     */
    select?: Prisma.IpDetectorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the IpDetector
     */
    omit?: Prisma.IpDetectorOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=IpDetector.d.ts.map