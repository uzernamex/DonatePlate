import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";


const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    if (user) {
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
    }

  }, [user]);
  return (
    isAuthenticated && (
      <article className="profile">
      </article>
    )
  );
};

export default Profile;
