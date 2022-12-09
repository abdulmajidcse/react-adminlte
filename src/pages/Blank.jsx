import { useDispatch } from "react-redux";
import { updateLoading } from "./../features/loading/loadingSlice";
import { useEffect } from "react";

export default function Blank() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateLoading({ is: false }));
    return () => {
      dispatch(updateLoading({ is: true }));
    };
  }, [dispatch]);

  return (
    <>
      <h2>Blank Page</h2>
    </>
  );
}
