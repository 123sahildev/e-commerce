import { createSlice } from '@reduxjs/toolkit'
import { initialRender } from '../thunks/initialRender.jsx'
import { changeCategory } from '../thunks/changeCategory.jsx';

let initialState = { allProducts : [], cartProducts : [], loader : false, login : false, register : { status : false, message : '' }, profile : '', login : { message : '', status : false}}

const slicer = createSlice({
    name : "contents",
    initialState,
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
        },

        changeProfile (state, action) {
            state.profile = action.payload.username;

        },

        registerPass (state) {
            state.register.status = true;
            state.register.message = "Register sucessfull!";
        },

        registerFail (state) {
            state.register.status = true;
            state.register.message = "Email already exist";
        },
        
        loginPass (state) {
            state.register.status = true;
            state.register.message = 'Login sucessfull!'
        },

        loginFail (state) {
            state.register.status = true;
            state.register.message = "Incorrect email or password";
        },

        hidewarning (state) {
            state.register.status = false;
        }
        
    },

    extraReducers : (builder) => {
        builder.addCase(initialRender.pending, (state, action) => {
            state.loader = true;
        });
        builder.addCase(initialRender.fulfilled, (state, action) => {
            state.allProducts = action.payload;
            console.log('fulfilled');
            state.loader = false;

        });
        builder.addCase(initialRender.rejected, (state, action) => {
        });

        builder.addCase(changeCategory.pending, (state) => {
            state.loader = true;

        })
        builder.addCase(changeCategory.fulfilled, (state, action) => {
            state.allProducts = action.payload;
            state.loader = false;

        });
        builder.addCase(changeCategory.rejected, (state) => {
        });
    }
});


export const { productAction, registerPass, registerFail, loginPass, loginFail, hidewarning, changeProfile } = slicer.actions
export default slicer.reducer