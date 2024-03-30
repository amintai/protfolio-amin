"use client";

import { Button } from "./ui/button";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import { Home, Briefcase, Mail, Presentation } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [{pathName},setState] = useState({
    pathName: '/'
  });

  function navigateTo(path: string) {
    setState((state) => ({
      ...state,
      pathName: path
    }))
    router.push(path);
  }


  return (
    <div className="border bg-card text-card-foreground p-3 shadow-sm md:rounded-lg flex justify-between items-center top-0 sticky z-50">
      <Logo onClick={() => navigateTo("/")} />
      {/* Navigation Menus */}
      <div className="space-x-3 items-center">
        <Button
          onClick={() => navigateTo("/")}
          variant="outline"
          size="sm"
          className={`ml-auto h-8 ${pathName === '/' ? 'bg-black text-white' : ''} `}
        >
          <Home className=" h-4 w-4" />
          <span className="hidden md:block ml-2">Home</span>
        </Button>
        <Button
          onClick={() => navigateTo("/#projects")}
          variant="outline"
          size="sm"
          className={`ml-auto h-8 ${pathName === '/#projects' ? 'bg-black text-white' : ''} `}
        >
          <Presentation className=" h-4 w-4" />
          <span className="hidden md:block ml-2">Projects</span>
        </Button>
        <Button
          onClick={() => navigateTo("/#work")}
          variant="outline"
          size="sm"
          className={`ml-auto h-8 ${pathName === '/#work' ? 'bg-black text-white' : ''} `}
        >
          <Briefcase className=" h-4 w-4" />
          <span className="hidden md:block ml-2">Work</span>
        </Button>
        <Button
          onClick={() => navigateTo("/#contact")}
          variant="outline"
          size="sm"
          className={`ml-auto h-8 ${pathName === '/#contact' ? 'bg-black text-white' : ''} `}
        >
          <Mail className=" h-4 w-4" />
          <span className="hidden md:block ml-2">Contact</span>
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}
