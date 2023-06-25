import { SignUp } from "@clerk/nextjs";
import { AuthWarper } from "@components";

export default function Page() {
  return (
    <AuthWarper>
      <SignUp afterSignUpUrl="/host/home" redirectUrl="/host/home" />
    </AuthWarper>
  );
}
