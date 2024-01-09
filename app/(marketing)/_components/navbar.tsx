import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed w-full h-14 px-4 flex items-center border-b shadow-sm bg-white">
      <div className="md:max-w-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="flex justify-between items-center space-x-4 w-full md:block md:w-auto">
          <Button variant="outline" size="sm" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/sign-up">Get Taskify Free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
