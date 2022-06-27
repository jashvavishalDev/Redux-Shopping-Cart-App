import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { fetchData, sendCartData } from "./store/cart-actions";
// import { uiActions } from "./store/ui-slice";

let isFirstRender =true;
function App() {
  const dispatch= useDispatch();
  const notification= useSelector(state=>state.ui.notification);
  const cart= useSelector(state=> state.cart);

  const isLoggedIn= useSelector((state)=> state.auth.isLoggedIn);

   useEffect(()=>{
      dispatch(fetchData());
   },[dispatch])

  useEffect(()=>{

    if(isFirstRender){
      isFirstRender=false;
      return;
    }
    if(cart.changed){
         dispatch(sendCartData(cart));

    }

    // const sendRequest= async ()=>{
    //   //Send State as Sending Request
    //   dispatch(uiActions.showNotification({
    //     open: true,
    //     message: "Sending Request",
    //     type: 'warning'
    //   }))
    //   const res=  await fetch('https://redux-http-1ade3-default-rtdb.firebaseio.com/cartItems.json',{
    //     method: "PUT",
    //     body: JSON.stringify(cart)
    //    });
    //    const data= await res.json();
    //    //Send State as Request is succesful
    //    dispatch(uiActions.showNotification({
    //     open: true,
    //     message: "Sent Request to DaaBase succesfully",
    //     type: 'success'
    //   }))
    // };
    //  sendRequest().catch(err=>{
        //Send state as Error
        // dispatch(uiActions.showNotification({
        //   open: true,
        //   message: "Sending Request failed",
        //   type: 'error'
        // }))
    //  });
   },[cart, dispatch]);

  return (
    <div className="App">
     {notification && <Notification type={notification.type} message={notification.message}/>}
      { !isLoggedIn && <Auth />}
      { isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
