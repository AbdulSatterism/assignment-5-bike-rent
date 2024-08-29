/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/features/auth/AuthSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { ReactNode, useEffect } from "react";

type TProtectRoute = {
  children: ReactNode;
};
const AdminProtected = ({ children }: TProtectRoute) => {
  const { token, user } = useAppSelector((state) => state?.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || user?.role !== "admin") {
      dispatch(logout());
      navigate("/login");
    }
  }, [token, dispatch, navigate, user?.role]);

  if (!token) {
    dispatch(logout());
    navigate("/login");
  }

  return children;
};

export default AdminProtected;
