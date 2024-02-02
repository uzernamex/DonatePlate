import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import axios from "axios";


const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    if(user){
      console.log("My User", user);
      fetch('http://localhost:8080/api/users/login', {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((body) => {
        return body.json();

      }).then(res => {
        window.sessionStorage.setItem("userId", res.id);
      }).catch(error => console.log(error));
      // axios.post('http://localhost:8080/api/users/login', user, { 
      //   headers: {
      //   'Content-Type': 'application/json',
      // }}).then((res)=>{
      //   console.log(res);
      // }).catch((error)=> {
      //   console.log("My Error",error);
  
      // })
    }
   
  }, [user]);
  return (
    isAuthenticated && (
      <article>
        {user?.picture && <img src={user.picture} alt={user?.name} />}
        <h2>{user?.name}</h2>
      </article>
    )
  );
};

export default Profile;
