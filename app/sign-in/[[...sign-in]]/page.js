import { SignIn } from "@clerk/nextjs";
import { AuthWarper } from "@components";

export const metadata = {
  title: "AirCnC || Sign in",
};
export default function Page() {
  return (
    <AuthWarper>
      <SignIn
        afterSignInUrl="/host/view/profile"
        redirectUrl="/host/view/profile"
      />
    </AuthWarper>
  );
}
