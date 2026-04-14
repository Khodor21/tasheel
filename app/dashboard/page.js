import { redirect } from "next/navigation";
import { getProfile } from "../../lib/auth";
import DashboardClient from "../../components/dashboard/DashboardClient";

export const metadata = {
  title: "لوحة التحكم — تسهيل القرآن",
};

export default async function DashboardPage() {
  const profile = await getProfile();

  if (!profile) {
    redirect("/auth/login");
  }

  return <DashboardClient profile={profile} />;
}
