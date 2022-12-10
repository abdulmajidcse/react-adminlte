export default function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer className="main-footer">
        {/* To the right */}
        <div class="float-right d-none d-sm-block">
          <b>Version</b> 3.2.0
        </div>
        {/* Default to the left */}
        <strong>
          Copyright © 2014-2021
          <a href="https://adminlte.io">AdminLTE.io</a>.
        </strong>
        All rights reserved.
      </footer>
    </>
  );
}
