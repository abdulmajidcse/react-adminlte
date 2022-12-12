/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch } from "react-redux";
import { updateLoading } from "../../features/loading/loadingSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
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
          You forgot your password? Here you can easily retrieve a new password.
        </p>
        <form action="recover-password.html" method="post">
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-envelope" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button type="submit" className="btn btn-primary btn-block">
                Request new password
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
