import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Intro() {
  return (
    <div id="section3" className="h-fit w-full mt-24 p-[100px] flex justify-between shadow-2xl">
      <div className="w-6/12">
        <p className="text-[2vw] font-bold">Liên hệ</p>
        <p>
          Lần cuối cùng bạn thử điều gì đó mới mẻ với thương hiệu của mình là
          khi nào? Hãy giữ liên lạc, chúng ta có thể cùng nhau suy nghĩ và xây
          dựng.
        </p>
      </div>
        <Button  className="filling-cta flex mt-20">
            <Link href="">Tiếp theo</Link>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

    </div>
  );
}
