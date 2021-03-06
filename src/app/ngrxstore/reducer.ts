import { Action } from '@ngrx/store';
import { Product, listProduct } from '../products-list';

export function counterReducer(state: number = 0, action: Action) {
    if (action.type === 'INCREASE') {
        return state + 1;
    }
    if (action.type === 'DECREASE') {
        return state - 1;
    }
    if (action.type === 'RESET') {
        return 0;
    }
    return state;
}

// state: pure
export function productReducer(state: Array<Product> = listProduct, action: any) {
    if (action.type === 'ADD_PRODUCT') {
        // action.product
        return state.concat(action.product);
    }
    if (action.type === 'TOGGLE_WISHLIST') {
        // idProduct
        return state.map(product => {
            if (product.id === action.idProduct) {
                product.wishlist = !product.wishlist;
                return product;
            }
            return product;
        });
    }
    if (action.type === 'REMOVE_PRODUCT') {
        return state.filter(product => product.id !== action.idProduct);
    }
    return state;
}
export function toggleFormAddProduct(state: boolean = false, action: any) {
    if (action.type === 'TOGGLE_FORM') {
        return action.status; // status: boolean
    }
    return state;
}
export function productAPIReducer(state: Array<Product> = null, action: any) {
    if (action.type === 'INIT_PRODUCT_API') {
        return action.products;
    }
    if (action.type === 'ADD_PRODUCT_API') {
        return state.concat(action.product);
    }
    if (action.type === 'DELETE_PRODUCT_API') {
        return state.filter((product: any) => product._id !== action.idProduct);
    }
    return state;
}

/**
 * 1. dinh nghia reducer
 * 2. khai bao reducer App Module
 * 3. goi state default su dung o 1 component bat ki
 * 4. thay doi trang thai cua state o 1 component bat ki
 */
