/* eslint-disable jsx-a11y/anchor-is-valid */
import { useSelector, useDispatch } from "react-redux";
import { updateLoading } from "./../features/loading/loadingSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AuthCard from "../components/auth/AuthCard";
import Breadcrumb from "../components/auth/Breadcrumb";
import Theme from "./../features/theme/Theme";
import { themeTypes } from "../features/theme/themeSlice";
import $ from "jquery";

export default function NotFound({ isNotFound = false }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    $(function () {
      if (theme.mode === themeTypes.dark) {
        $("body").addClass("dark-mode");
      } else {
        $("body").removeClass("dark-mode");
      }
    });

    dispatch(updateLoading({ is: false }));
    return () => {
      dispatch(updateLoading({ is: true }));
    };
  }, [dispatch, theme]);

  return (
    <>
      {isNotFound && (
        <Theme style={{ position: "fixed", top: "20px", right: "30px" }} />
      )}
      <AuthCard
        leftHeader={!isNotFound && <h1 className="m-0">404 Error Page</h1>}
        rightHeader={
          !isNotFound && (
            <Breadcrumb
              items={[
                { text: "Home", path: "/auth" },
                { text: "404 Error Page", active: true },
              ]}
            />
          )
        }
      >
        <div className="error-page">
          <h2 className="headline text-warning"> 404</h2>
          <div className="error-content">
            <h3>
              <i className="fas fa-exclamation-triangle text-warning" /> Oops!
              Page not found.
            </h3>
            <p>
              We could not find the page you were looking for. Meanwhile, you
              may <Link to="/auth">return to dashboard</Link> or try using the
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
                    className="btn btn-warning"
                  >
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
              {/* /.input-group */}
            </form>
          </div>
          {/* /.error-content */}
        </div>
      </AuthCard>
    </>
  );
}
