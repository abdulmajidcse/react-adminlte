/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch } from "react-redux";
import { updateLoading } from "./../features/loading/loadingSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AuthCard from "../components/auth/AuthCard";
import Breadcrumb from "../components/auth/Breadcrumb";

export default function ServerError() {
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
        leftHeader={<h1 className="m-0">500 Error Page</h1>}
        rightHeader={
          <Breadcrumb
            items={[
              { text: "Home", path: "/auth" },
              { text: "500 Error Page", active: true },
            ]}
          />
        }
      >
        <div className="error-page">
          <h2 className="headline text-danger">500</h2>
          <div className="error-content">
            <h3>
              <i className="fas fa-exclamation-triangle text-danger" /> Oops!
              Something went wrong.
            </h3>
            <p>
              We will work on fixing that right away. Meanwhile, you may{" "}
              <Link to="/auth">return to dashboard</Link> or try using the
              search form.
            </p>
            <form className="search-form">
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  className="form-control"
                  placeholder="Search"
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    name="submit"
                    className="btn btn-danger"
                  >
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
              {/* /.input-group */}
            </form>
          </div>
        </div>
      </AuthCard>
    </>
  );
}
