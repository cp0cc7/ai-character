"use client";

import qs from"query-string"
import {AiOutlineSearch} from "react-icons/ai"
import {Input} from "@/components/ui/input"
import { useRouter,useSearchParams } from "next/navigation";
import{ ChangeEvent, useEffect, useState} from "react";
import { useDebounce } from "@/hooks/use-debounce";
import {ChangeEventHandler} from "react"

export const SearchInput = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const catergoryId= searchParams.get("categoryId");
    const name = searchParams.get("name");

    const [value, setValue] = useState(name || "");
    const debouncedValue = useDebounce<string>(value,500);

    const onChange: ChangeEventHandler<HTMLInputElement> =(e) =>{
        setValue(e.target.value);
    }

    useEffect(() => {
        const query = {
            name: debouncedValue,
            catergoryId: catergoryId,
        };

        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        }, {skipEmptyString: true, skipNull: true});


        router.push(url);

    },[debouncedValue, router,catergoryId]);

    return(
        <div className="relative">
            <AiOutlineSearch className="absolute h-4 w-4 top-3 left-4 text-muted-foreground"/>
        <Input
        onChange={onChange}
        value={value}
        placeholder="Search..."
        className="pl-10 bg-primary/10" />
        </div>
    )
}