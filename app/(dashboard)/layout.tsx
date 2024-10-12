import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "./auth/[...nextauth]"
import ENDPOINT from "../../config/appConfig";
export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  try {
    const session = await getServerSession();

    console.log("getServerSession-------", session);
    if (!session) {
      redirect("/");
    }

    const email = session?.user?.email;
    if (!email) {
      throw new Error("Email not found in session");
    }

    const res = await fetch(`${ENDPOINT.BASE_URL}/api/users/email/${email}`);
    const data = await res.json();
    // redirecting user to the home page if not admin
    if (data.role === "user") {
      redirect("/");
    }
  } catch (error) {
    console.log("getServerSession error-------", error);
    redirect("/");

  }

  return <>{children}</>;
}
