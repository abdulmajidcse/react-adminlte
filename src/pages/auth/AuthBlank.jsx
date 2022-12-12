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
        leftHeader={<h1 className="m-0">Blank Page</h1>}
        rightHeader={
          <Breadcrumb
            items={[
              { text: "Home", path: "/auth" },
              { text: "Blank Page", active: true },
            ]}
          />
        }
      >
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Title</h3>
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="collapse"
                title="Collapse"
              >
                <i className="fas fa-minus" />
              </button>
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="remove"
                title="Remove"
              >
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
          <div className="card-body">
            Start creating your amazing application!
          </div>
          {/* /.card-body */}
          <div className="card-footer">Footer</div>
          {/* /.card-footer*/}
        </div>
      </AuthCard>
    </>
  );
}
