interface CartProduct{  /**interface for each product in cart */
    "item_id": number
    "cart": {
        "cart_id": 8,
        "user": string
        "created_at": string
    },
    "product": {
        
        "product_id": 14,
        "name": string
        "description": string
        "price": "20000"
        "quantity_in_stock": number
        "category": {
            "category_id": number
            "name": string
        },
        "image": string
    },
    "quantity": number
}

interface CartItems { /**interfce for cart items of a user */
    current_page: number;
    total_pages: number;
    query_results: QueryResult[];
}

interface QueryResult {
    item_id: number;
    cart: {
        cart_id: number;
        user: string;
        created_at: string;
    };
    product: {
        product_id: number;
        name: string;
        description: string;
        price: string;
        quantity_in_stock: number;
        category: {
        category_id: number;
        name: string;
        };
        image: string;
    };
    quantity: number;
}

interface ProductInterface{  /**structure of product returned from backend */
    "product_id": number
    "name": string
    "description": string
    "price": string | number
    "quantity_in_stock": number
    "category": {
        "category_id": number
        "name": string
    },
    "image": string
}



export {type CartProduct, type CartItems, type ProductInterface}