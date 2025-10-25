import { Button } from "@workspace/ui/components/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { Github, Moon } from "lucide-react";
import ModeToggle from "./theme-mode-toggle";

const Navbar01Page = () => {
    return (
        <div className="bg-muted">
            <nav className="h-16 bg-background border-b">
                <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
                    <h1>Natiq shadcn registery</h1>

                    <div className="flex items-center gap-3">
                        <Button
                            variant="outline"
                            className="hidden sm:inline-flex"
                        >
                            <Github />
                        </Button>
                        <ModeToggle />

                        {/* Mobile Menu */}
                        <div className="md:hidden">
                            <NavigationSheet />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar01Page;
