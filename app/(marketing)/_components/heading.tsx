"use client";
import { ArrowRight } from "lucide-react";
import {Button} from "../../../components/ui/button"
import { useConvexAuth } from "convex/react";
export const Heading = () => {
  const {isAuthenticated, isLoading} = useConvexAuth();
  return( 
  <div className="max-w-3xl space-y-4">
    <h1 className="text-3xl sm:text5xl md:text-6xl font-bold"> 
        Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline">Jotion</span>
    </h1>
    <h3 className="text-base sm:text-xl md:text-2xl font-medium">Jotion is the connected workspace where <br/> better faster, work happens </h3>
    {
    <Button> Enter Jotion <ArrowRight className="h-4 w-4 ml-2"/> </Button>
  }
    </div>
)};
export default Heading;