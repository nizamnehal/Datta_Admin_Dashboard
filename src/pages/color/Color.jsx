import Breadcrumb from "../../components/common/Breadcrumb";
import ThemeColors from "./ThemeColors";

const Color = () => {
  return (
    <>

      <div>
        <Breadcrumb dashboard="Basic Ui" page="Color" />
        <div className="mb-6">

          <ThemeColors />

        </div>
        
        <div className="">

          <ThemeColors />

        </div>

      </div>

    </>
  )
}

export default Color
