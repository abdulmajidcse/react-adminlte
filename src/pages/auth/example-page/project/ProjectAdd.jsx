/* eslint-disable jsx-a11y/anchor-is-valid */
import AuthCard from "./../../../../components/auth/AuthCard";
import Breadcrumb from "./../../../../components/auth/Breadcrumb";
import { useDispatch } from "react-redux";
import { updateLoading } from "./../../../../features/loading/loadingSlice";
import { useEffect } from "react";

export default function ProjectAdd() {
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
        leftHeader={<h1 className="m-0">Project Add</h1>}
        rightHeader={
          <Breadcrumb
            items={[
              { text: "Home", path: "/auth" },
              { text: "Project Add", active: true },
            ]}
          />
        }
      >
        <div>
          <div className="row">
            <div className="col-md-6">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">General</h3>
                  <div className="card-tools">
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="collapse"
                      title="Collapse"
                    >
                      <i className="fas fa-minus" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="inputName">Project Name</label>
                    <input
                      type="text"
                      id="inputName"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputDescription">
                      Project Description
                    </label>
                    <textarea
                      id="inputDescription"
                      className="form-control"
                      rows={4}
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputStatus">Status</label>
                    <select
                      id="inputStatus"
                      className="form-control custom-select"
                    >
                      <option selected disabled>
                        Select one
                      </option>
                      <option>On Hold</option>
                      <option>Canceled</option>
                      <option>Success</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputClientCompany">Client Company</label>
                    <input
                      type="text"
                      id="inputClientCompany"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputProjectLeader">Project Leader</label>
                    <input
                      type="text"
                      id="inputProjectLeader"
                      className="form-control"
                    />
                  </div>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
            <div className="col-md-6">
              <div className="card card-secondary">
                <div className="card-header">
                  <h3 className="card-title">Budget</h3>
                  <div className="card-tools">
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="collapse"
                      title="Collapse"
                    >
                      <i className="fas fa-minus" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="inputEstimatedBudget">
                      Estimated budget
                    </label>
                    <input
                      type="number"
                      id="inputEstimatedBudget"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputSpentBudget">Total amount spent</label>
                    <input
                      type="number"
                      id="inputSpentBudget"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputEstimatedDuration">
                      Estimated project duration
                    </label>
                    <input
                      type="number"
                      id="inputEstimatedDuration"
                      className="form-control"
                    />
                  </div>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <a href="#" className="btn btn-secondary">
                Cancel
              </a>
              <input
                type="submit"
                defaultValue="Create new Project"
                className="btn btn-success float-right"
              />
            </div>
          </div>
        </div>
      </AuthCard>
    </>
  );
}
