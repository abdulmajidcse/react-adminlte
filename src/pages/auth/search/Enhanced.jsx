/* eslint-disable jsx-a11y/anchor-is-valid */
import AuthCard from "../../../components/auth/AuthCard";
import Breadcrumb from "../../../components/auth/Breadcrumb";
import { useDispatch } from "react-redux";
import { updateLoading } from "../../../features/loading/loadingSlice";
import { useEffect } from "react";

export default function Enhanced() {
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
        leftHeader={<h1 className="m-0">Enhanced</h1>}
        rightHeader={
          <Breadcrumb
            items={[
              { text: "Home", path: "/auth" },
              { text: "Enhanced", active: true },
            ]}
          />
        }
      >
        <div>
          <h2 className="text-center display-4">Enhanced Search</h2>
          <form action="#">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label>Result Type:</label>
                      <select
                        className="select2"
                        multiple="multiple"
                        data-placeholder="Any"
                        style={{ width: "100%" }}
                      >
                        <option value="text-only">Text only</option>
                        <option value="images">Images</option>
                        <option value="video">Video</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="form-group">
                      <label>Sort Order:</label>
                      <select className="select2" style={{ width: "100%" }}>
                        <option value="asc">ASC</option>
                        <option value="desc">DESC</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="form-group">
                      <label>Order By:</label>
                      <select className="select2" style={{ width: "100%" }}>
                        <option value="title">Title</option>
                        <option value="date">Date</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group input-group-lg">
                    <input
                      type="search"
                      className="form-control form-control-lg"
                      placeholder="Type your keywords here"
                      defaultValue="Lorem ipsum"
                    />
                    <div className="input-group-append">
                      <button type="submit" className="btn btn-lg btn-default">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </AuthCard>
    </>
  );
}
