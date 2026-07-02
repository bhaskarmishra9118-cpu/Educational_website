import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  questions : [ ],
  Error: null,
  isLoading: false
}

const Questionslice= createSlice(
  initialState,
  name = "question",
  reducers= {
    fetchQuestionStart = (state, action) => {
      isLoading= true,
      state.Error= null
    },
    fetchQuestionSuccess = (state, action)=>{
      isLoading=false,
      state.questions=action.payload

      
    },
    fetchFailure=(state, action)=>{
      isError= true, 
      isLoading= false,
      state.Error = action.payload

    },
    addQuestion=(state, action)=>{
      state.questions.push(action.payload)
    },
    updateQuestion=(state, action)=>{
      const index = state.questions.findIndex((question) =>{
        return question.id === action.payload.id

      })
      if(index!== -1){
        state.questions[index] = action.payload
      }
    }

  }
)
export const {fetchQuestionStart, fetchQuestionSuccess, fetchFailure, addQuestion,updateQuestion}= Questionslice.actions
export default Questionslice.reducer