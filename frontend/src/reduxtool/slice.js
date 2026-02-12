import { createSlice } from '@reduxjs/toolkit'
import { initialRender } from '../thunks/initialRender.jsx'
import { changeCategory } from '../thunks/changeCategory.jsx';
import { act } from 'react';

const slicer = createSlice({
    name : "contents",
    initialState : { allProducts : [], cartProducts : [], loader : false},
    reducers : {
        productAction (state, action) {
            if (action.payload.type === 'addtocart') {
                state.cartProducts.push(action.payload.product)
            }
            if (action.payload.type === 'removetocart') {
                state.cartProducts = state.cartProducts.filter(tr => tr.id.toString() != action.payload.id.toString()); 
            }
            if (action.payload.type === 'addallcards') {
                state.cartProducts = action.payload.cards;
            }
        }
    },

    extraReducers : (builder) => {
        builder.addCase(initialRender.pending, (state, action) => {
            console.log('pending');
            state.loader = true;
        });
        builder.addCase(initialRender.fulfilled, (state, action) => {
            state.allProducts = action.payload;
            console.log('fulfilled');
            state.loader = false;

        });
        builder.addCase(initialRender.rejected, (state, action) => {
            console.log('rejected');
        });

        builder.addCase(changeCategory.pending, (state) => {
            console.log('pending');
            state.loader = true;

        })
        builder.addCase(changeCategory.fulfilled, (state, action) => {
            state.allProducts = action.payload;
            console.log("fulfilled")
            state.loader = false;

        });
        builder.addCase(changeCategory.rejected, (state) => {
            console.log("rejected")
        })
    }
})


export const { productAction } = slicer.actions
export default slicer.reducer