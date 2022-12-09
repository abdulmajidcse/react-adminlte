import { Link } from "react-router-dom";

export default function Breadcrumb({ items = [] }) {
  return (
    <>
      <ol className="breadcrumb float-sm-right">
        {items.map((item, index) => {
          if (item.active) {
            return (
              <li
                className="breadcrumb-item active"
                key={`breadcrumb-item-${index}`}
              >
                {item.text}
              </li>
            );
          } else {
            return (
              <li className="breadcrumb-item" key={`breadcrumb-item-${index}`}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            );
          }
        })}
      </ol>
    </>
  );
}
