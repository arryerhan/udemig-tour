import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItemToCart: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                // If the item already exists, increase its quantity
                state.items[itemIndex].quantity += 1;
            } else {
                // Otherwise, add it with quantity 1
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItemFromCart: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            if (itemIndex >= 0) {
                state.items.splice(itemIndex, 1);
            }
        },
        increaseQuantity: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            if (itemIndex >= 0 && state.items[itemIndex].quantity > 1) {
                state.items[itemIndex].quantity -= 1;
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItemToCart, removeItemFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
