import $ from "jquery";

export default function Theme() {
  // theme style switch
  function switchThemeStyles(theme) {
    $("body").removeClass("dark-mode");
    $(".main-sidebar").removeClass("sidebar-dark-primary sidebar-light-indigo");
    $(".main-header").removeClass("navbar-dark navbar-light");

    if (theme === "dark") {
      $("body").addClass("dark-mode");
      $(".main-sidebar").addClass("sidebar-dark-primary");
      $(".main-header").addClass("navbar-dark");
    } else {
      $(".main-sidebar").addClass("sidebar-light-indigo");
      $(".main-header").addClass("navbar-light");
    }
  }

  // set theme
  function setTheme(theme) {
    if (theme) {
      localStorage.setItem("theme", theme);
    } else if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "os");
    }

    $(".theme-icon").addClass("d-none");

    if (localStorage.getItem("theme") === "os") {
      $("#switch_to_dark_theme").removeClass("d-none");

      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        switchThemeStyles("dark");
      } else {
        switchThemeStyles("light");
      }
    } else if (localStorage.getItem("theme") === "dark") {
      $("#switch_to_light_theme").removeClass("d-none");
      switchThemeStyles("dark");
    } else {
      $("#switch_to_os_theme").removeClass("d-none");
      switchThemeStyles("light");
    }
  }

  $(function () {
    setTheme();
  });

  return (
    <>
      <span className="nav-link">
        <i
          className="fas fa-adjust theme-icon"
          id="switch_to_dark_theme"
          title="Switch to dark mode"
          role="button"
          onClick={() => setTheme("dark")}
        />
        <i
          className="fas fa-sun theme-icon"
          id="switch_to_os_theme"
          title="Switch to system mode"
          role="button"
          onClick={() => setTheme("os")}
        />
        <i
          className="fas fa-moon theme-icon"
          id="switch_to_light_theme"
          title="Switch to light mode"
          role="button"
          onClick={() => setTheme("light")}
        />
      </span>
    </>
  );
}
