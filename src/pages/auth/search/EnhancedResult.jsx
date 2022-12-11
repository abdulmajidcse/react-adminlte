/* eslint-disable jsx-a11y/anchor-is-valid */
import AuthCard from "../../../components/auth/AuthCard";
import Breadcrumb from "../../../components/auth/Breadcrumb";
import { useDispatch } from "react-redux";
import { updateLoading } from "../../../features/loading/loadingSlice";
import { useEffect } from "react";

export default function EnhancedResult() {
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
        leftHeader={<h1 className="m-0">Enhanced Result</h1>}
        rightHeader={
          <Breadcrumb
            items={[
              { text: "Home", path: "/auth" },
              { text: "Enhanced Result", active: true },
            ]}
          />
        }
      >
        <div>
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
                        <option>Text only</option>
                        <option>Images</option>
                        <option>Video</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="form-group">
                      <label>Sort Order:</label>
                      <select className="select2" style={{ width: "100%" }}>
                        <option>ASC</option>
                        <option>DESC</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="form-group">
                      <label>Order By:</label>
                      <select className="select2" style={{ width: "100%" }}>
                        <option>Title</option>
                        <option>Date</option>
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
          <div className="row mt-3">
            <div className="col-md-10 offset-md-1">
              <div className="list-group">
                <div className="list-group-item">
                  <div className="row">
                    <div className="col px-4">
                      <div>
                        <div className="float-right">2021-04-20 04:04pm</div>
                        <h3>Lorem ipsum dolor sit amet</h3>
                        <p className="mb-0">
                          consectetuer adipiscing elit. Aenean commodo ligula
                          eget dolor. Aenean massa. Cum sociis natoque penatibus
                          et magnis dis parturient montes, nascetur ridiculus
                          mus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <img
                        className="img-fluid"
                        src={require("./../../../assets/dist/img/photo1.png")}
                        alt="Search"
                        style={{ maxHeight: 160 }}
                      />
                    </div>
                    <div className="col px-4">
                      <div>
                        <div className="float-right">2021-04-20 10:14pm</div>
                        <h3>Lorem ipsum dolor sit amet</h3>
                        <p className="mb-0">
                          consectetuer adipiscing elit. Aenean commodo ligula
                          eget dolor. Aenean massa. Cum sociis natoque penatibus
                          et magnis dis parturient montes, nascetur ridiculus
                          mus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-group-item">
                  <div className="row">
                    <div className="col-auto">
                      <iframe
                        width="{240}"
                        height="{160}"
                        src="https://www.youtube.com/embed/iFY0WpGIYU4"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="col px-4">
                      <div>
                        <div className="float-right">2021-04-20 11:54pm</div>
                        <h3>Lorem ipsum dolor sit amet</h3>
                        <p className="mb-0">
                          consectetuer adipiscing elit. Aenean commodo ligula
                          eget dolor. Aenean massa. Cum sociis natoque penatibus
                          et magnis dis parturient montes, nascetur ridiculus
                          mus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AuthCard>
    </>
  );
}
