"use client";

import { useRouter, usePathname } from "next/navigation";
import Spinner from "./Spinner";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";


// export default function Search({placeholder}: {placeholder: string}) {
//   const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const { replace } = useRouter();
//   function handleSearch(product: string) {
//     const params = new URLSearchParams(searchParams);
//     if(product) {
//       params.set('query', product);
//     } else {
//       params.delete('query');
//     }
//     replace(`${pathname}?${params.toString()}`);
//   }
//   return (
//     <div className="relative flex flex-1 flex-shrink-0">
//       <label htmlFor="search" className="sr-only"></label>
//       <input className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm"
//       placeholder={placeholder}
//       onChange={(e) => {handleSearch(e.target.value);
//       }}
//       defaultValue={searchParams.get('query')?.toString()}
//       />
//     </div>
//   )
// }
const fetchPosts = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

const SearchPage = () => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const router = useRouter();

  const encodedSearchQuery = encodeURI(searchQuery || "");

  const { data, isLoading } = useSWR(
    `/home/api/search?q=${encodedSearchQuery}`,
    fetchPosts,
    { revalidateOnFocus: false }
  );

  if (!encodedSearchQuery) {
    router.push("/");
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (!data?.posts) {
    return null;
  }

  return (
    <>
      <span className="text-xl">
        Showing results for:{" "}
        <span className="font-semibold">{searchQuery}</span>
      </span>
    </>
  );
};

export default SearchPage;