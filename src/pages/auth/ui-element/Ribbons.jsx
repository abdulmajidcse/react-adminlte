/* eslint-disable jsx-a11y/anchor-is-valid */
import AuthCard from "../../../components/auth/AuthCard";
import Breadcrumb from "../../../components/auth/Breadcrumb";
import { useDispatch } from "react-redux";
import { updateLoading } from "../../../features/loading/loadingSlice";
import { useEffect } from "react";

export default function Ribbons() {
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
        leftHeader={<h1 className="m-0">Ribbons</h1>}
        rightHeader={
          <Breadcrumb
            items={[
              { text: "Home", path: "/auth" },
              { text: "Ribbons", active: true },
            ]}
          />
        }
      >
        <div className="row">
          <div className="col-12">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Ribbons</h3>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-4">
                    <div
                      className="position-relative p-3 bg-gray"
                      style={{ height: 180 }}
                    >
                      <div className="ribbon-wrapper">
                        <div className="ribbon bg-primary">Ribbon</div>
                      </div>
                      Ribbon Default <br />
                      <small>.ribbon-wrapper.ribbon-lg .ribbon</small>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div
                      className="position-relative p-3 bg-gray"
                      style={{ height: 180 }}
                    >
                      <div className="ribbon-wrapper ribbon-lg">
                        <div className="ribbon bg-info">Ribbon Large</div>
                      </div>
                      Ribbon Large <br />
                      <small>.ribbon-wrapper.ribbon-lg .ribbon</small>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div
                      className="position-relative p-3 bg-gray"
                      style={{ height: 180 }}
                    >
                      <div className="ribbon-wrapper ribbon-xl">
                        <div className="ribbon bg-secondary">
                          Ribbon Extra Large
                        </div>
                      </div>
                      Ribbon Extra Large <br />
                      <small>.ribbon-wrapper.ribbon-xl .ribbon</small>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-sm-4">
                    <div
                      className="position-relative p-3 bg-gray"
                      style={{ height: 180 }}
                    >
                      <div className="ribbon-wrapper ribbon-lg">
                        <div className="ribbon bg-success text-lg">Ribbon</div>
                      </div>
                      Ribbon Large <br /> with Large Text <br />
                      <small>.ribbon-wrapper.ribbon-lg .ribbon.text-lg</small>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div
                      className="position-relative p-3 bg-gray"
                      style={{ height: 180 }}
                    >
                      <div className="ribbon-wrapper ribbon-xl">
                        <div className="ribbon bg-warning text-lg">Ribbon</div>
                      </div>
                      Ribbon Extra Large <br /> with Large Text <br />
                      <small>.ribbon-wrapper.ribbon-xl .ribbon.text-lg</small>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div
                      className="position-relative p-3 bg-gray"
                      style={{ height: 180 }}
                    >
                      <div className="ribbon-wrapper ribbon-xl">
                        <div className="ribbon bg-danger text-xl">Ribbon</div>
                      </div>
                      Ribbon Extra Large <br /> with Extra Large Text <br />
                      <small>.ribbon-wrapper.ribbon-xl .ribbon.text-xl</small>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-sm-4">
                    <div className="position-relative">
                      <img
                        src={require("./../../../assets/dist/img/photo1.png")}
                        alt="1"
                        className="img-fluid"
                      />
                      <div className="ribbon-wrapper ribbon-lg">
                        <div className="ribbon bg-success text-lg">Ribbon</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="position-relative">
                      <img
                        src={require("./../../../assets/dist/img/photo2.png")}
                        alt="2"
                        className="img-fluid"
                      />
                      <div className="ribbon-wrapper ribbon-xl">
                        <div className="ribbon bg-warning text-lg">Ribbon</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div
                      className="position-relative"
                      style={{ minHeight: 180 }}
                    >
                      <img
                        src={require("./../../../assets/dist/img/photo4.jpg")}
                        alt="3"
                        className="img-fluid"
                      />
                      <div className="ribbon-wrapper ribbon-xl">
                        <div className="ribbon bg-danger text-xl">Ribbon</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
        </div>
      </AuthCard>
    </>
  );
}
