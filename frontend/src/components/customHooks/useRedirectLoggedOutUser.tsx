import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../redux/slices/auth/authService";
import toast from "react-hot-toast";

interface useRedirectLoggedOutUserProps {
  path: string;
}

const useRedirectLoggedOutUser = ({ path }: useRedirectLoggedOutUserProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    let isLoggedIn: boolean;
    const redirectLoggedOutUser = async () => {
      try {
        isLoggedIn = await authService.loginStatus();
      } catch (error: any) {
        console.log(error.message);
      }

      if (!isLoggedIn) {
        toast.error("Session expired, please login to continue");
        navigate(path);
        return;
      }
    };
    redirectLoggedOutUser();
  }, [path, navigate]);
};

export default useRedirectLoggedOutUser;
