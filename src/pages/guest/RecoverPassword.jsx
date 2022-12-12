/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch } from "react-redux";
import { updateLoading } from "../../features/loading/loadingSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function RecoverPassword() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateLoading({ is: false }));
    return () => {
      dispatch(updateLoading({ is: true }));
    };
  }, [dispatch]);

  return (
    <>
      <div>
        <p className="login-box-msg">
          You are only one step a way from your new password, recover your
          password now.
        </p>
        <form action="#" method="post">
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button type="submit" className="btn btn-primary btn-block">
                Change password
              </button>
            </div>
            {/* /.col */}
          </div>
        </form>
        <p className="mt-3 mb-1">
          <Link to="/auth/login">Login</Link>
        </p>
      </div>
    </>
  );
}
