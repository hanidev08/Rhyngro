import "./style.scss";
import { sampleData } from "@/sampleData";

import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section>
      <div className="container mt-36">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        lg:grid-cols-4 gap-10 place-items-center"
        >
          {sampleData.map(({ url, title, id, slug }) => {
            return (
              <Link href={slug} key={id} className="flex flex-col gap-2">
                <span className="title">0{id}</span>
                <div className="relative w-[90vw] max-w-[600px] sm:max-w-[300px] aspect-[7/5]">
                  <Image src={url} fill alt={title} className="object-cover" />
                </div>
                <span className="title">{title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default page;
