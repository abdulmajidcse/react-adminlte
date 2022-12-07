/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          <Dashboard />
        </div>
        {/* /.content-wrapper */}
        {/* Main Footer */}
        <footer className="main-footer">
          {/* To the right */}
          <div className="float-right d-none d-sm-inline">
            Anything you want
          </div>
          {/* Default to the left */}
          <strong>
            Copyright © 2014-2021
            <a href="https://adminlte.io">AdminLTE.io</a>.
          </strong>
          All rights reserved.
        </footer>
      </div>
      {/* ./wrapper */}
    </>
  );
}

export default App;
