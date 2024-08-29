/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/features/auth/AuthSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { ReactNode, useEffect } from "react";

type TProtectRoute = {
  children: ReactNode;
};
const ProtectedRoute = ({ children }: TProtectRoute) => {
  const { token } = useAppSelector((state) => state?.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      dispatch(logout());
      navigate("/login");
    }
  }, [token, dispatch, navigate]);

  if (!token) {
    dispatch(logout());
    navigate("/login");
  }

  return children;
};

export default ProtectedRoute;
