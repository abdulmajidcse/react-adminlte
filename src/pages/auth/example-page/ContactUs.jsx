/* eslint-disable jsx-a11y/anchor-is-valid */
import AuthCard from "../../../components/auth/AuthCard";
import Breadcrumb from "../../../components/auth/Breadcrumb";
import { useDispatch } from "react-redux";
import { updateLoading } from "../../../features/loading/loadingSlice";
import { useEffect } from "react";

export default function ContactUs() {
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
        leftHeader={<h1 className="m-0">Contact us</h1>}
        rightHeader={
          <Breadcrumb
            items={[
              { text: "Home", path: "/auth" },
              { text: "Contact us", active: true },
            ]}
          />
        }
      >
        <div className="card">
          <div className="card-body row">
            <div className="col-5 text-center d-flex align-items-center justify-content-center">
              <div className>
                <h2>
                  Admin<strong>LTE</strong>
                </h2>
                <p className="lead mb-5">
                  123 Testing Ave, Testtown, 9876 NA
                  <br />
                  Phone: +1 234 56789012
                </p>
              </div>
            </div>
            <div className="col-7">
              <div className="form-group">
                <label htmlFor="inputName">Name</label>
                <input type="text" id="inputName" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="inputEmail">E-Mail</label>
                <input type="email" id="inputEmail" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="inputSubject">Subject</label>
                <input type="text" id="inputSubject" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="inputMessage">Message</label>
                <textarea
                  id="inputMessage"
                  className="form-control"
                  rows={4}
                  defaultValue={""}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  className="btn btn-primary"
                  defaultValue="Send message"
                />
              </div>
            </div>
          </div>
        </div>
      </AuthCard>
    </>
  );
}
