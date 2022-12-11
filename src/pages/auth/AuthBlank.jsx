/* eslint-disable jsx-a11y/anchor-is-valid */
import AuthCard from "../../components/auth/AuthCard";
import Breadcrumb from "../../components/auth/Breadcrumb";
import { useDispatch } from "react-redux";
import { updateLoading } from "../../features/loading/loadingSlice";
import { useEffect } from "react";

export default function AuthBlank() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateLoading({ is: false }));
    return () => {
      dispatch(updateLoading({ is: true }));
    };
  }, [dispatch]);

  return (
    <>
      <AuthCard
        leftHeader={<h1 className="m-0">Blank</h1>}
        rightHeader={
          <Breadcrumb
            items={[
              { text: "Home", path: "/auth" },
              { text: "Blank", active: true },
            ]}
          />
        }
      >
        Put your content here...
      </AuthCard>
    </>
  );
}
