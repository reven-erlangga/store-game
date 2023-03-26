import SideBar from "../../components/organisms/SideBar";
import OverviewContent from "../../components/organisms/OverviewContent";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <SideBar activeMenu="overview" />
      <OverviewContent />
    </section>
  );
}
