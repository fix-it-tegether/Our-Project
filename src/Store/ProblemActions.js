import axios from 'axios'

//Action Types


export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";



    export const LoginUser = (userLogin) => (dispatch) => {

        // console.log("LoginUser", LoginUser)
        axios
          .post("https://fixittogether.herokuapp.com/api/auth/login", userLogin)
          .then((res) => {
            // console.log(res)
            localStorage.setItem("token", res.data.token)
                // const token = localStorage. getItem("token");
               const token = localStorage.getItem( "token", res.data.token);
              
            
            

            dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
          })
          .catch((error) =>
          
            dispatch({ type: USER_LOGIN_FAIL, payload: error.message })
          );
      };

