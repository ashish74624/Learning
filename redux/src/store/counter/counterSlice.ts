import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface counterState {
    value:number
}

const initialState :counterState ={
    value:0
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment : (state)=>{
            state.value+=1;
        },
        decrement : (state)=>{
            state.value -= 1;
        },
        incrementByAmount:(state,action:PayloadAction<number>)=>{
            state.value+= action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(incrementAsync.pending,()=>{
            console.log("Increment async pending")
        })
        .addCase(incrementAsync.fulfilled,
            (state,action:PayloadAction<number>)=>{
                state.value+= action.payload;
            }
        )
    }
})

export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    async (amt:number) => {
        await new Promise((resolve)=>setTimeout(resolve,1000));
        return amt;
    }
)

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;