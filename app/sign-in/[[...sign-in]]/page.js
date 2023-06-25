import { SignIn } from "@clerk/nextjs";
import { AuthWarper } from "@components";

export const metadata = {
  title: "AirCnC || Sign in",
};
export default function Page() {
  return (
    <AuthWarper>
      <SignIn afterSignInUrl="/host/home" redirectUrl="/host/home" />
    </AuthWarper>
  );
}
