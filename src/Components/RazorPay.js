
import React from 'react';
import { useState } from 'react';
const RazorPay = () => {
    const[amount,setamount]=useState("");

    const handlesubmit=(e)=>{
        e.preventDefault();
        if(amount==""){
            alert("Plese enter valid amount");
        }
        else{
            var options={
                key:"",
                key_secet:"",
                amount:amount*100,
                currency:"INR",
                name:"anbu",
                description:"for testing purpose",
                handler:function(response){
                    alert(response.razorpay_payment_id);
                },
                prefill:{
                    name:"anbarasan",
                    email:"ajithkumar161105@gmail.com",
                    contact:"8056901611",

                },
                notes:{
                    address:"razorpay corporate office"
                },
                theme:{
                    color:"#3399cc"
                }
                
            };
            var pay=new window.Razorpay(options);
            pay.open();
        }
    }
  return (
    <div>
      <h1>Razor Pay Integration</h1>
      <h1>hii</h1>
      <input type="text" placeholder='Enter Amount' value={amount} onChange={(e)=>setamount(e.target.value)}/>
    <br/>
    <br/>
    <button onClick={handlesubmit}>Proceed To Payment</button>
    </div>
  );
};

export default RazorPay;
