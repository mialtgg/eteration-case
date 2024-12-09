// src/redux/actions/productActions.js
import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from '../types';

// API'ye ürünleri getirme isteği
export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

// Başarıyla ürün verileri geldiyse
export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

// Hata durumunda
export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});
