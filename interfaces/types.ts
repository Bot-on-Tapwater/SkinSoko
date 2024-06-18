/**file containing all Interfaces */

export interface BrandInterface {
    brand_id: number;
    name: string;
}

export interface CategoriesInterface {
    main_category_id: number
    name: string
}

// export interface Subcategories {
//     category_name: [
//         sub_category_id: number,
//         main_category_id: number,
//         main_category_name: string,
//         name: string
//     ]
// }

interface MainCategory {
    sub_category_id: number;
    main_category_id: number;
    main_category_name: string;
    name: string;

}
export interface Subcategories {
    [key: string]: MainCategory[]
}
