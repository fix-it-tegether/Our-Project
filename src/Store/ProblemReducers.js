//Import Action Types
import { date } from "yup"
import { ADD_NEW_POST, FETCH_DATA_START,FETCH_DATA_SUCCESS,FETCH_DATA_FAIL } from "./ProblemActions"

const initialState = {
    loading:false,
    posts:[],
    error:""
}

export const ProblemReducer = (state = initialState, action)=> {
    console.log("HelloReducer", action.payload)
  switch(action.type){
    case ADD_NEW_POST:
      return{
        // ...state,
        // posts:[
        //   ...state.posts,
        //   {
        //   username:action.payload.username,
        //   creator_id:date.now(),
        //   title:action.payload.title,
        //   desc:action.payload.desc,
        //   resolved:action.payload.resolved,
        //   upvotes:action.payload.upvotes,
        //   downvotes:action.payload.downvotes,
        //   zipcode:action.payload.zipcode,
        //   city:action.payload.city,
        //   state:action.payload.state
        //  }
        // ]
      }
      case FETCH_DATA_START:
          return{
              ...state,
            loading:true
          }
          case FETCH_DATA_SUCCESS:
              return{
                  loading:false,
                  posts:action.payload,
                  error:""
              }
              case FETCH_DATA_FAIL:
                  return{
                    loading:false,
                    posts:[],
                    error:action.payload
                  }
  }

       
        return{

        }

}