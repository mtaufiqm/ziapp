export type Paging = {
    size: number;
    total_page: number;
    current_page: number;
};
export type Pageable<T> = {
    data: T[];
    paging: Paging;
};
//# sourceMappingURL=page_model.d.ts.map