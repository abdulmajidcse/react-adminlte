/* eslint-disable jsx-a11y/anchor-is-valid */
import AuthCard from "../../../components/auth/AuthCard";
import Breadcrumb from "../../../components/auth/Breadcrumb";
import { useDispatch } from "react-redux";
import { updateLoading } from "../../../features/loading/loadingSlice";
import { useEffect } from "react";

export default function Contacts() {
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
        leftHeader={<h1 className="m-0">Contacts</h1>}
        rightHeader={
          <Breadcrumb
            items={[
              { text: "Home", path: "/auth" },
              { text: "Contacts", active: true },
            ]}
          />
        }
      >
        <div className="card card-solid">
          <div className="card-body pb-0">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                <div className="card bg-light d-flex flex-fill">
                  <div className="card-header text-muted border-bottom-0">
                    Digital Strategist
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="lead">
                          <b>Nicole Pearson</b>
                        </h2>
                        <p className="text-muted text-sm">
                          <b>About: </b> Web Designer / UX / Graphic Artist /
                          Coffee Lover{" "}
                        </p>
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                          <li className="small">
                            <span className="fa-li">
                              <i className="fas fa-lg fa-building" />
                            </span>{" "}
                            Address: Demo Street 123, Demo City 04312, NJ
                          </li>
                          <li className="small">
                            <span className="fa-li">
                              <i className="fas fa-lg fa-phone" />
                            </span>{" "}
                            Phone #: + 800 - 12 12 23 52
                          </li>
                        </ul>
                      </div>
                      <div className="col-5 text-center">
                        <img
                          src={require("./../../../assets/dist/img/user1-128x128.jpg")}
                          alt="user-avatar"
                          className="img-circle img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="text-right">
                      <a href="#" className="btn btn-sm bg-teal">
                        <i className="fas fa-comments" />
                      </a>
                      <a href="#" className="btn btn-sm btn-primary">
                        <i className="fas fa-user" /> View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                <div className="card bg-light d-flex flex-fill">
                  <div className="card-header text-muted border-bottom-0">
                    Digital Strategist
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="lead">
                          <b>Nicole Pearson</b>
                        </h2>
                        <p className="text-muted text-sm">
                          <b>About: </b> Web Designer / UX / Graphic Artist /
                          Coffee Lover{" "}
                        </p>
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                          <li className="small">
                            <span className="fa-li">
                              <i className="fas fa-lg fa-building" />
                            </span>{" "}
                            Address: Demo Street 123, Demo City 04312, NJ
                          </li>
                          <li className="small">
                            <span className="fa-li">
                              <i className="fas fa-lg fa-phone" />
                            </span>{" "}
                            Phone #: + 800 - 12 12 23 52
                          </li>
                        </ul>
                      </div>
                      <div className="col-5 text-center">
                        <img
                          src={require("./../../../assets/dist/img/user2-160x160.jpg")}
                          alt="user-avatar"
                          className="img-circle img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="text-right">
                      <a href="#" className="btn btn-sm bg-teal">
                        <i className="fas fa-comments" />
                      </a>
                      <a href="#" className="btn btn-sm btn-primary">
                        <i className="fas fa-user" /> View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                <div className="card bg-light d-flex flex-fill">
                  <div className="card-header text-muted border-bottom-0">
                    Digital Strategist
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="lead">
                          <b>Nicole Pearson</b>
                        </h2>
                        <p className="text-muted text-sm">
                          <b>About: </b> Web Designer / UX / Graphic Artist /
                          Coffee Lover{" "}
                        </p>
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                          <li className="small">
                            <span className="fa-li">
                              <i className="fas fa-lg fa-building" />
                            </span>{" "}
                            Address: Demo Street 123, Demo City 04312, NJ
                          </li>
                          <li className="small">
                            <span className="fa-li">
                              <i className="fas fa-lg fa-phone" />
                            </span>{" "}
                            Phone #: + 800 - 12 12 23 52
                          </li>
                        </ul>
                      </div>
                      <div className="col-5 text-center">
                        <img
                          src={require("./../../../assets/dist/img/user1-128x128.jpg")}
                          alt="user-avatar"
                          className="img-circle img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="text-right">
                      <a href="#" className="btn btn-sm bg-teal">
                        <i className="fas fa-comments" />
                      </a>
                      <a href="#" className="btn btn-sm btn-primary">
                        <i className="fas fa-user" /> View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                <div className="card bg-light d-flex flex-fill">
                  <div className="card-header text-muted border-bottom-0">
                    Digital Strategist
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="lead">
                          <b>Nicole Pearson</b>
                        </h2>
                        <p className="text-muted text-sm">
                          <b>About: </b> Web Designer / UX / Graphic Artist /
                          Coffee Lover{" "}
                        </p>
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                          <li className="small">
                            <span className="fa-li">
                              <i className="fas fa-lg fa-building" />
                            </span>{" "}
                            Address: Demo Street 123, Demo City 04312, NJ
                          </li>
                          <li className="small">
                            <span className="fa-li">
                              <i className="fas fa-lg fa-phone" />
                            </span>{" "}
                            Phone #: + 800 - 12 12 23 52
                          </li>
                        </ul>
                      </div>
                      <div className="col-5 text-center">
                        <img
                          src={require("./../../../assets/dist/img/user2-160x160.jpg")}
                          alt="user-avatar"
                          className="img-circle img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="text-right">
                      <a href="#" className="btn btn-sm bg-teal">
                        <i className="fas fa-comments" />
                      </a>
                      <a href="#" className="btn btn-sm btn-primary">
                        <i className="fas fa-user" /> View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                <div className="card bg-light d-flex flex-fill">
                  <div className="card-header text-muted border-bottom-0">
                    Digital Strategist
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="lead">
                          <b>Nicole Pearson</b>
                        </h2>
                        <p className="text-muted text-sm">
                          <b>About: </b> Web Designer / UX / Graphic Artist /
                          Coffee Lover{" "}
                        </p>
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                          <li className="small">
                            <span className="fa-li">
                              <i className="fas fa-lg fa-phone" />
                            </span>{" "}
                            Phone #: + 800 - 12 12 23 52
                          </li>
                        </ul>
                      </div>
                      <div className="col-5 text-center">
                        <img
                          src={require("./../../../assets/dist/img/user1-128x128.jpg")}
                          alt="user-avatar"
                          className="img-circle img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="text-right">
                      <a href="#" className="btn btn-sm bg-teal">
                        <i className="fas fa-comments" />
                      </a>
                      <a href="#" className="btn btn-sm btn-primary">
                        <i className="fas fa-user" /> View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                <div className="card bg-light d-flex flex-fill">
                  <div className="card-header text-muted border-bottom-0">
                    Digital Strategist
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="lead">
                          <b>Nicole Pearson</b>
                        </h2>
                        <p className="text-muted text-sm">
                          <b>About: </b> Web Designer / UX / Graphic Artist /
                          Coffee Lover{" "}
                        </p>
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                          <li className="small">
                            <span className="fa-li">
                              <i className="fas fa-lg fa-building" />
                            </span>{" "}
                            Address: Demo Street 123, Demo City 04312, NJ
                          </li>
                          <li className="small">
                            <span className="fa-li">
                              <i className="fas fa-lg fa-phone" />
                            </span>{" "}
                            Phone #: + 800 - 12 12 23 52
                          </li>
                        </ul>
                      </div>
                      <div className="col-5 text-center">
                        <img
                          src={require("./../../../assets/dist/img/user1-128x128.jpg")}
                          alt="user-avatar"
                          className="img-circle img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="text-right">
                      <a href="#" className="btn btn-sm bg-teal">
                        <i className="fas fa-comments" />
                      </a>
                      <a href="#" className="btn btn-sm btn-primary">
                        <i className="fas fa-user" /> View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                <div className="card bg-light d-flex flex-fill">
                  <div className="card-header text-muted border-bottom-0">
                    Digital Strategist
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="lead">
                          <b>Nicole Pearson</b>
                        </h2>
                        <p className="text-muted text-sm">
                          <b>About: </b> Web Designer / UX / Graphic Artist /
                          Coffee Lover{" "}
                        </p>
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                          <li className="small">
                            <span className="fa-li">
                              <i className="fas fa-lg fa-building" />
                            </span>{" "}
                            Address: Demo Street 123, Demo City 04312, NJ
                          </li>
                        </ul>
                      </div>
                      <div className="col-5 text-center">
                        <img
                          src={require("./../../../assets/dist/img/user1-128x128.jpg")}
                          alt="user-avatar"
                          className="img-circle img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="text-right">
                      <a href="#" className="btn btn-sm bg-teal">
                        <i className="fas fa-comments" />
                      </a>
                      <a href="#" className="btn btn-sm btn-primary">
                        <i className="fas fa-user" /> View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                <div className="card bg-light d-flex flex-fill">
                  <div className="card-header text-muted border-bottom-0">
                    Digital Strategist
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="lead">
                          <b>Nicole Pearson</b>
                        </h2>
                        <p className="text-muted text-sm">
                          <b>About: </b> Web Designer / UX / Graphic Artist /
                          Coffee Lover{" "}
                        </p>
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                          <li className="small">
                            <span className="fa-li">
                              <i className="fas fa-lg fa-building" />
                            </span>{" "}
                            Address: Demo Street 123, Demo City 04312, NJ
                          </li>
                          <li className="small">
                            <span className="fa-li">
                              <i className="fas fa-lg fa-phone" />
                            </span>{" "}
                            Phone #: + 800 - 12 12 23 52
                          </li>
                        </ul>
                      </div>
                      <div className="col-5 text-center">
                        <img
                          src={require("./../../../assets/dist/img/user1-128x128.jpg")}
                          alt="user-avatar"
                          className="img-circle img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="text-right">
                      <a href="#" className="btn btn-sm bg-teal">
                        <i className="fas fa-comments" />
                      </a>
                      <a href="#" className="btn btn-sm btn-primary">
                        <i className="fas fa-user" /> View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                <div className="card bg-light d-flex flex-fill">
                  <div className="card-header text-muted border-bottom-0">
                    Digital Strategist
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="lead">
                          <b>Nicole Pearson</b>
                        </h2>
                        <p className="text-muted text-sm">
                          <b>About: </b> Web Designer / UX / Graphic Artist /
                          Coffee Lover{" "}
                        </p>
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                          <li className="small">
                            <span className="fa-li">
                              <i className="fas fa-lg fa-building" />
                            </span>{" "}
                            Address: Demo Street 123, Demo City 04312, NJ
                          </li>
                          <li className="small">
                            <span className="fa-li">
                              <i className="fas fa-lg fa-phone" />
                            </span>{" "}
                            Phone #: + 800 - 12 12 23 52
                          </li>
                        </ul>
                      </div>
                      <div className="col-5 text-center">
                        <img
                          src={require("./../../../assets/dist/img/user2-160x160.jpg")}
                          alt="user-avatar"
                          className="img-circle img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="text-right">
                      <a href="#" className="btn btn-sm bg-teal">
                        <i className="fas fa-comments" />
                      </a>
                      <a href="#" className="btn btn-sm btn-primary">
                        <i className="fas fa-user" /> View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.card-body */}
          <div className="card-footer">
            <nav aria-label="Contacts Page Navigation">
              <ul className="pagination justify-content-center m-0">
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    6
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    7
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    8
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* /.card-footer */}
        </div>
      </AuthCard>
    </>
  );
}
