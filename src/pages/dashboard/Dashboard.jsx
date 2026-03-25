import Breadcrumb from "../../components/common/Breadcrumb";

import SalesCard from "./SalesCard";
import SocialCard from "./SocialCard";
import RatingCard from "./RatingCard";
import RecentUsers from "./RecentUsers";

function Dashboard() {
  return (
    <>

      <div>
        <Breadcrumb dashboard="Dashboard" page="Default" />

        {/* Sales Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

          <SalesCard
            title="Daily Sales"
            price="$249.95"
            percent="67%"
            color="bg-teal-400"
          />

          <SalesCard
            title="Monthly Sales"
            price="$2,942.32"
            percent="36%"
            color="bg-purple-400"
          />

          <SalesCard
            title="Yearly Sales"
            price="$8,638.32"
            percent="80%"
            color="bg-teal-400"
          />

        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <SocialCard icon="📘" likes="12,281" percent="+7.2%" />
          <SocialCard icon="🐦" likes="11,200" percent="+6.2%" />
          <SocialCard icon="🟥" likes="10,500" percent="+5.9%" />

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

          <RatingCard />

          <div className="lg:col-span-2">
            <RecentUsers />
          </div>

        </div>

      </div>

    </>
  );
}

export default Dashboard;