"use client"
import{Doc} from "@/convex/_generated/dataModel";

interface ToolbarProps{
    initialData: Doc<"documents">;
    preview?:boolean;
}

export const Toolbar =({
    initialData,
    preview
}:ToolbarProps)=>{
    <div>
        Toolbar
    </div>
}
