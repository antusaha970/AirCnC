import { SignUp } from "@clerk/nextjs";
import { AuthWarper } from "@components";

export default function Page() {
  return (
    <AuthWarper>
      <SignUp
        afterSignUpUrl="/host/view/profile"
        redirectUrl="/host/view/profile"
      />
    </AuthWarper>
  );
}
