"use client"

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import {Id} from "@/convex/_generated/dataModel";
import { Toolbar } from "@/app/(main)/_components/toolbar";

interface DocumentIdPageProps {
    params:{
        documentId: Id<"documents">;
    };
}

const DocumentIdPage=({params}:DocumentIdPageProps) =>{

    const document = useQuery(api.documents.getById,{
        documentId:params.documentId
    });

    if(document===undefined){
        return <p>Loading... </p>
    }
    if(document===null){
        return <div>Not found</div>
    }
    return (
        <div className ="pb-40">
            <div className ="md:max-w-3xl lg:max-w-4xl mx-auto">
                <Toolbar initialData ={document}/>
            </div>
        </div>
        );
}

export default DocumentIdPage;
  