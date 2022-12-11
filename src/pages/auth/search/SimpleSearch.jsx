/* eslint-disable jsx-a11y/anchor-is-valid */
import AuthCard from "../../../components/auth/AuthCard";
import Breadcrumb from "../../../components/auth/Breadcrumb";
import { useDispatch } from "react-redux";
import { updateLoading } from "../../../features/loading/loadingSlice";
import { useEffect } from "react";

export default function SimpleSearch() {
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
        leftHeader={<h1 className="m-0">Simple Search</h1>}
        rightHeader={
          <Breadcrumb
            items={[
              { text: "Home", path: "/auth" },
              { text: "Simple Search", active: true },
            ]}
          />
        }
      >
        <div>
          <h2 className="text-center display-4">Search</h2>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form action="#">
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control form-control-lg"
                    placeholder="Type your keywords here"
                  />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-lg btn-default">
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </AuthCard>
    </>
  );
}
