import axios from 'axios';
import {URL} from '../../utils/constant';
import {set_loading, set_signup_failure, set_signup_success, set_user_failure, set_user_success} from './type';

export function login(data) {
  return dispatch => {
    dispatch({type:set_loading,payload:true})
  
    return axios.post(URL.Url + 'login/', data).then(res => {
      console.log(res.data);
      dispatch({type: set_user_success, payload: res.data});
    }).catch(error=>{
      dispatch({type: set_user_failure, payload: error});
   
    })
  };
}

export function signup(data) {
  return dispatch => {
    dispatch({type:set_loading,payload:true})
    return axios.post(URL.Url + 'register/', data).then(res => {
      console.log("Success",res.data);
      dispatch({type: set_signup_success, payload: res.data});
    }).catch((error)=>{
      dispatch({type: set_signup_failure, payload: error});
      
      console.log("Failed",error);
    })
  };
  
}

// export async function Post_Bid(data) {
//   console.log(data);
//   return async dispatch => {
//     dispatch({type:set_loading,payload:true})
//     try {
//       console.log(data);
//       var formdata = new FormData();
//       formdata.append('listing', data.listing);
//       formdata.append('user', data.user);
//       formdata.append('bid_price', data.bid_price);
//       console.log(formdata);
//       // var config = {
//       //   method: 'post',
//       //   url: URL.Url + 'Bid/',
//       //   data: formdata,
//       // };
//       // console.log(config);
//       // const response = await axios(config);
//       // if (response) {
//       //   alert('Bid Placed');
//       //   dispatch({type:set_loading,payload:false})
   
//       // }
//     } catch (error) {
//       alert(error?.message);
//       dispatch({type:set_loading,payload:false})
   
//     } 
//      };

// }