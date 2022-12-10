import { useDispatch } from "react-redux";
import { updateLoading } from "./../../features/loading/loadingSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateLoading({ is: false }));
    return () => {
      dispatch(updateLoading({ is: true }));
    };
  }, [dispatch]);

  return (
    <>
      <Link to="/auth">Go to Dashboard</Link>
    </>
  );
}
