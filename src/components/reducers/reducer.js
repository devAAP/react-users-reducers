

const initialState = {
    users: [
        { 
            name: 'Ahmed zaky',
            email: 'ahmedzaky@gmail.com',
            gen: 12,
            id: "skiell9376",
          },
          {
            name: 'Ricardo Brandt',
            email: 'ricardo@gmail.com',
            gen: 1,
            id: "uis023ksq" , 
          },
          { 
            name: 'Adwoa Comfort',
            email: 'adwoa@gmail.com',
            gen: 15,
            id: "23789dkaiw",
          }
    ],

    students: [],
    number: 0,
    isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
       
      case "ADD_USER":
  return { ...state, users: [...state.users, action.payload] };      
        
        case "EDIT_USER":
const users = state.users.map((user) => {
            if (user.id === action.payload.id) return action.payload.newDetails;
            return user;
          });

          return { ...state, users: users };
       
          case "DELETE_USER":
 const filteredUsers = state.users.filter((user) => {
            if (user.id !== action.payload) return user;
          });

          return { ...state, users: filteredUsers };

            default: 

            return state;
    }
    
};

export default reducer;