
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Home/Provider/AuthProvider";
import AxiosPublic from "../../Hooks/AxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialSite = () => {
  const { googleWorkService } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = AxiosPublic(); // Corrected typo here

  const handleGoogleLogin = () => {
    googleWorkService()
      .then(result => {
        console.log("Google Login Result:", result);
        const userInfoGoogle = {
          email: result.user.email,
          name: result.user.displayName,
        };

        axiosPublic.post("/users", userInfoGoogle)
          .then(res => {
            console.log("User saved:", res.data);
            navigate("/");
          })
          .catch(error => {
            console.error("Error posting to /users:", error);
          });
      })
      .catch(error => {
        console.error("Google login error:", error);
      });
  };

  return (
    <div>
      <div>
        <button onClick={handleGoogleLogin} className="btn btn-active btn-neutral">
          Google <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialSite;
