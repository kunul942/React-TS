import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { PersonState, Person } from '../../interfaces/interfaces';

const initialState:PersonState={
    persons:[],
}

export const PersonSlice = createSlice({
    name:'true',
    initialState,
    reducers:{
        addPerson:( state, action:PayloadAction<{ name:string }> )=>{
            state.persons.push({
                id:state.persons.length,
                name:action.payload.name,
            })
        },
        removePerson:( state, action:PayloadAction<Person> )=>{
            // state.persons.splice( state.persons.findIndex(( el ) => el.id === action.payload.id ) )                
            state.persons = state.persons.filter( ( el ) => el.id === action.payload.id )                
        }
    }
})

export const { addPerson, removePerson } = PersonSlice.actions