/* eslint-disable jsx-a11y/anchor-is-valid */
export default function FrontendCard({
  leftHeader = "",
  rightHeader = "",
  children,
}) {
  return (
    <>
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container">
          <div className="row mb-2">
            <div className="col-sm-6">{leftHeader}</div>
            {/* /.col */}
            <div className="col-sm-6">{rightHeader}</div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content-header */}
      {/* Main content */}
      <section className="content">
        <div className="container">{children}</div>
        {/*/. container-fluid */}
      </section>
      {/* /.content */}
    </>
  );
}
