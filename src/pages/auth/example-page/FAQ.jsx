/* eslint-disable jsx-a11y/anchor-is-valid */
import AuthCard from "../../../components/auth/AuthCard";
import Breadcrumb from "../../../components/auth/Breadcrumb";
import { useDispatch } from "react-redux";
import { updateLoading } from "../../../features/loading/loadingSlice";
import { useEffect } from "react";

export default function FAQ() {
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
        leftHeader={<h1 className="m-0">FAQ</h1>}
        rightHeader={
          <Breadcrumb
            items={[
              { text: "Home", path: "/auth" },
              { text: "FAQ", active: true },
            ]}
          />
        }
      >
        <div>
          <div className="row">
            <div className="col-12" id="accordion">
              <div className="card card-primary card-outline">
                <a
                  className="d-block w-100"
                  data-toggle="collapse"
                  href="#collapseOne"
                >
                  <div className="card-header">
                    <h4 className="card-title w-100">
                      1. Lorem ipsum dolor sit amet
                    </h4>
                  </div>
                </a>
                <div
                  id="collapseOne"
                  className="collapse show"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                  </div>
                </div>
              </div>
              <div className="card card-primary card-outline">
                <a
                  className="d-block w-100"
                  data-toggle="collapse"
                  href="#collapseTwo"
                >
                  <div className="card-header">
                    <h4 className="card-title w-100">2. Aenean massa</h4>
                  </div>
                </a>
                <div
                  id="collapseTwo"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Aenean massa. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus.
                  </div>
                </div>
              </div>
              <div className="card card-primary card-outline">
                <a
                  className="d-block w-100"
                  data-toggle="collapse"
                  href="#collapseThree"
                >
                  <div className="card-header">
                    <h4 className="card-title w-100">3. Donec quam felis</h4>
                  </div>
                </a>
                <div
                  id="collapseThree"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim.
                  </div>
                </div>
              </div>
              <div className="card card-warning card-outline">
                <a
                  className="d-block w-100"
                  data-toggle="collapse"
                  href="#collapseFour"
                >
                  <div className="card-header">
                    <h4 className="card-title w-100">4. Donec pede justo</h4>
                  </div>
                </a>
                <div
                  id="collapseFour"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu.
                  </div>
                </div>
              </div>
              <div className="card card-warning card-outline">
                <a
                  className="d-block w-100"
                  data-toggle="collapse"
                  href="#collapseFive"
                >
                  <div className="card-header">
                    <h4 className="card-title w-100">5. In enim justo</h4>
                  </div>
                </a>
                <div
                  id="collapseFive"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium.
                  </div>
                </div>
              </div>
              <div className="card card-warning card-outline">
                <a
                  className="d-block w-100"
                  data-toggle="collapse"
                  href="#collapseSix"
                >
                  <div className="card-header">
                    <h4 className="card-title w-100">6. Integer tincidunt</h4>
                  </div>
                </a>
                <div
                  id="collapseSix"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Integer tincidunt. Cras dapibus. Vivamus elementum semper
                    nisi. Aenean vulputate eleifend tellus.
                  </div>
                </div>
              </div>
              <div className="card card-danger card-outline">
                <a
                  className="d-block w-100"
                  data-toggle="collapse"
                  href="#collapseSeven"
                >
                  <div className="card-header">
                    <h4 className="card-title w-100">7. Aenean leo ligula</h4>
                  </div>
                </a>
                <div
                  id="collapseSeven"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                    ac, enim.
                  </div>
                </div>
              </div>
              <div className="card card-danger card-outline">
                <a
                  className="d-block w-100"
                  data-toggle="collapse"
                  href="#collapseEight"
                >
                  <div className="card-header">
                    <h4 className="card-title w-100">8. Aliquam lorem ante</h4>
                  </div>
                </a>
                <div
                  id="collapseEight"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                    tellus. Phasellus viverra nulla ut metus varius laoreet.
                  </div>
                </div>
              </div>
              <div className="card card-danger card-outline">
                <a
                  className="d-block w-100"
                  data-toggle="collapse"
                  href="#collapseNine"
                >
                  <div className="card-header">
                    <h4 className="card-title w-100">9. Quisque rutrum</h4>
                  </div>
                </a>
                <div
                  id="collapseNine"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                    augue. Curabitur ullamcorper ultricies nisi.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-3 text-center">
              <p className="lead">
                <a href="#">Contact us</a>, if you found not the right anwser or
                you have a other question?
                <br />
              </p>
            </div>
          </div>
        </div>
      </AuthCard>
    </>
  );
}
