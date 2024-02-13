import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { login, logout } from "../loggedSlice";
import { useEffect, useReducer, useState } from "react";
//commit by omkar
export default function LoginPage() 
{
    const init = {
        user_name: {value:"",valid: false, touched: false, error:""},
        password: {value:"",valid: false, touched: false, error:""},
        formValid: false
    }

    const reducer = (state,action) => {
        switch(action.type)
        {
            case 'update':
                //object destructuring
                const {key,value,touched,valid,error,formValid} = action.data;
                return {...state,[key]:{value,touched,valid,error},formValid}
            case 'reset':
                return init;        
        }
    }

    const[user,dispatch1] = useReducer(reducer,init);
    const[msg,setMsg] = useState("xx");
    const[flag,setFlag]=useState(false);
    const[flag1,setFlag1]=useState(false);
    const[insertMsg, setInsertMsg] = useState("")

    const dispatch = useDispatch()
    const mystate = useSelector((state) => state.logged)
    let navigate = useNavigate();

    useEffect(()=>{
        setMsg(localStorage.getItem("msg"))
    },[]);


    const handleClick = (e) => {
        e.preventDefault();
        const reqOptions={
            method:"POST",
            headers:{'content-type':'application/json'},
            body: JSON.stringify({
            user_name:user.user_name.value,
            password:user.password.value,
        })
    }
    fetch("http://localhost:8080/login", reqOptions)
    .then(resp => resp.json())
    .then(data => {
        // Handle the response from the server
        console.log(data.role_id);
        if (data!==null) {
          // Redirect or perform other actions for successful login
          alert('Login successful');

            //to direct to individual home page
            dispatch(login());
            if( data.role_id == 1)
            {
                console.log(data.role_id);
                navigate("/admin_home")
            }
            else if(data.role_id==2)
            {
                console.log(data.role_id);
                navigate("/driver_home")
            }
            else if(data.role_id==3)
            {
                console.log(data.role_id);
                navigate("/passenger_home")
            }
          
         } 
        else {
            // Handle unsuccessful login
            //   throw new Error("error");
            alert('Incorrect password');
            dispatch1({ type: "update", data: { key: 'password', value: '', touched: true, valid: false, error: "Incorrect password", formValid: false } });
        
        }
      })
      .catch(error => {
        // Handle fetch errors here
        console.error('Fetch error:', error);
        // Optionally, you can display a generic error message to the user
        alert('Incorrect Password');
    });
    }

    const validateData = (key,val) => {
        let valid = true;
        let error = ""
        switch(key)
        {
            case 'user_name':
            //    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
               var pattern = /^[A-Za-z]+@\d+$/;
               if(!pattern.test(val))
               {
                  valid = false;
                  error = "Please Enter Valid Username"
               }

               break;
            case 'password': 
                var pattern = /^[A-Za-z0-9@_]{8,15}$/ 
                if(!pattern.test(val))
                {
                    valid = false;
                    error = "Password should have 8-15 charaters"
                }
                break;
        }
        return { valid: valid, error: error}
    }

    
    const handleChange = (key,value) => {
        //1. call validateData function
        const {valid, error} = validateData(key,value);

        //2. check the validity status of the form
        let formValid = true;
        for(let k in user)
        {
            //console.log(user[k].valid)
            if(user[k].valid === false && insertMsg=="false")
            {
                formValid = false;
                break;
            }
        }

        //3. call to dispatch - updating the state
        dispatch1({type: "update",data:{key,value,touched:true,valid,error,formValid}})
    }

    return (
        <div className="container d-flex justify-content-center ">
        <div className="shadow-lg p-4 m-5" style={{"width": '50rem'}}>
                <h1 className="d-flex justify-content-center text-success mb-3">Please Login!</h1>
            <form>
               Username :
                <input type="email" name="uid" 
                    value={user.user_name.value}
                    onChange={(e)=>{handleChange("user_name",e.target.value)}} 
                    onBlur={(e)=>{handleChange("user_name",e.target.value)}} className="form-control" placeholder="Enter your Username" required/>
                <br/>
                <div style={{ display: user.user_name.touched && !user.user_name.valid  ?"block":"none", color: "red"}}>
                    { user.user_name.error}
                </div>
                <br/>
                Password :
                <input type="password" name="pwd" 
                value={user.password.value}
                onChange={(e)=>{handleChange("password",e.target.value)}} 
                onBlur={(e)=>{handleChange("password",e.target.value)}} className="form-control" placeholder="Enter your password" required/>
                <br/>
                <div style={{ display: user.password.touched && !user.password.valid  ?"block":"none", color: "red"}}>
                    { user.password.error}
                </div>
                <div className="row g-3 align-items-center d-flex justify-content-center mb-3">
                        <div className="col-auto ">
                <input type="button" value="Login"  className="btn btn-success w-100 font-weight-bold mt-2"
                 disabled={!user.formValid}
                onClick={handleClick}/>
                </div>
                        <div className="col-auto">
                        <button type="button" className="btn btn-secondary w-100 font-weight-bold mt-2" >Cancel</button>
                        </div>
                    </div>
                    <div className="text-center mb-3">
                        <p>Not a member? <a href="/register">Register</a></p>
                    </div>
            </form>
            {/* <p> {JSON.stringify(user)} </p>
            <p> Logged in : {mystate.loggedIn.toString()} </p> */}
        </div>
        </div>
    )
}