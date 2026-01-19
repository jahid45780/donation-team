import { Navigate } from "react-router-dom";
import type { JSX } from "react";
import { useAppSelector } from "@/app/hooks";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = useAppSelector((state) => state.auth.token);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
