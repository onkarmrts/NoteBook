
//action = {
//           type:"ADD_NOTE",
//           payload:{}
// }

const initialState ={
          notes:[{
                    id:1,
                    date:"21/12/20",
                    isImportant:false,
                    note:"I am a note 1"
          },
          {
                    id:2,
                    date:"30/12/20",
                    isImportant:false,
                    note:"I am a note 2"
          }
]
}

const reducer = (previousState = initialState, action)=>{
    const {type, payload} = action;
    switch(type){
              case "ADD_NOTE":
                        return{
                              ...previousState,
                              notes: [...previousState.notes, payload]
                        }
                    default:
                        return previousState
    }
}

export default reducer;