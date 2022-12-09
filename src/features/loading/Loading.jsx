import ReactLoading from "react-loading";
import { useSelector } from "react-redux";

const Loading = () => {
  const loading = useSelector((state) => state.loading);

  const loadingCss = {
    backgroundColor: loading.bgColor ?? "rgb(244 246 249 / 42%)",
    height: "100vh",
    width: "100%",
    transition: "height .2s linear",
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 9999,
  };

  if (!loading.is) return true;

  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={loadingCss}
      >
        <ReactLoading type="bars" color="red" />
      </div>
    </>
  );
};

export default Loading;
