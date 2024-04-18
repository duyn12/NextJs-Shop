"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
interface iDefault {
  defaultValue: string | null
}

const SearchInput = () => {
  const search = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string | null>(
    search ? search.get("q") : ""
  );
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    if (typeof searchQuery !== "string") {
      return;
    }

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);
  };

  return (
    <form onSubmit={onSearch} >
        <div className="flex items-center px-3">
          <input
                value={searchQuery || ""}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="px-5 py-1  sm:py-3 flex-1 text-zinc-200 bg-zinc-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-green-700 placeholder:text-zinc-400"
                placeholder="What are you looking for?"
            />
        </div>
    </form>
  );
};

export default SearchInput;