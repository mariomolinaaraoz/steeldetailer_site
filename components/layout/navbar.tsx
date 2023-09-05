import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/layout/LogoutButton";
import {Search} from "lucide-react";

export const dynamic = "force-dynamic";

export default async function Navbar() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
        <div className="flex justify-left items-center space-x-1">
          {/* <div className="flex w-full max-w-sm items-center space-x-2"> */}
            <Input type="email" placeholder="Search..." />
            <Button type="submit" variant="outline"><Search className="h-5 w-5"/></Button>
          {/* </div>           */}
        </div>
        <div>
          {user ? (
            <div className="flex items-center gap-4">
              Hey, {user.email}!
              <LogoutButton />
            </div>
          ) : (
            <Link
              href="/login"
              className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
            >
              <LoginButton />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
