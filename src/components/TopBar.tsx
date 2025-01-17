import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";

const TopBar = () => {
  return (
    <div className="h-16 border-b border-border bg-background flex items-center px-4">
      <SidebarTrigger>
        <Menu className="h-5 w-5" />
      </SidebarTrigger>
    </div>
  );
};

export default TopBar;