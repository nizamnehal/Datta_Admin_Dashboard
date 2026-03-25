import { Link } from "react-router-dom";

function Breadcrumb({ dashboard, page }) {
  return (
    <div className="mb-6">

      <h2 className="text-xl">{page}</h2>

      <div className="text-sm text-gray-500 flex gap-2 ">

        <Link to="/" className="hover:text-[rgb(4,169,245)]">
          Home
        </Link>

        <span>›</span>

        <span className="cursor-pointer hover:text-[rgb(4,169,245)]">{dashboard}</span>

        <span>›</span>

        <span>{page}</span>

      </div>

    </div>
  );
}

export default Breadcrumb;