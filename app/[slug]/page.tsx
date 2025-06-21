import { sampleData } from "@/sampleData";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import "./style.scss";
 import { MenuInfo } from "@/components/MenuInfo";

const getPageData = (slug: string) => {
  return sampleData.find((sample) => sample.slug === slug);
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const data = getPageData(slug);
  if (!data) return notFound();
  return (
    <>
      <section>
        <div className="container mt-52">
          <div className=" flex flex-col">
            <h1 className="title uppercase">{data.title}</h1>
            <div className=" flex flex-col gap-4 sm:gap-12 md:gap-42">
              <div className=" flex justify-center items-center">
                <div className=" relative w-[100vw] max-w-[1400px] aspect-[6/5]">
                  <Image
                    src={data.url}
                    alt="img"
                    fill
                    className=" object-cover"
                  />
                </div>
              </div>
              <div className=" flex items-center justify-center">
                <div className=" relative w-[100vw] max-w-[1400px]  sm:w-[50vw] sm:max-w-[600px] aspect-[5/5]">
                  <Image
                    src={data.images[0]}
                    alt="img"
                    fill
                    className=" object-cover"
                  />
                </div>
              </div>
              <div className=" flex items-center justify-center">
                <div className=" relative w-[100vw] max-w-[1400px]  sm:w-[80vw] sm:max-w-[1000px] aspect-[6/5]">
                  <Image
                    src={data.images[1]}
                    alt="img"
                    fill
                    className=" object-cover"
                  />
                </div>
              </div>
              <div className=" flex items-center justify-center">
                <div className=" relative w-[100vw] max-w-[1400px]  sm:w-[50vw] sm:max-w-[600px] aspect-[5/5]">
                  <Image
                    src={data.images[2]}
                    alt="img"
                    fill
                    className=" object-cover"
                  />
                </div>
              </div>

              <div className=" max-sm:hidden flex  items-center justify-between">
                <div className=" relative w-[100vw] max-w-[1400px]  sm:w-[25vw] sm:max-w-[600px] aspect-[4/5]">
                  <Image
                    src={data.images[3]}
                    alt="img"
                    fill
                    className=" object-cover"
                  />
                </div>
                <div className=" relative w-[100vw] max-w-[1400px]  sm:w-[50vw] sm:max-w-[600px] aspect-[5/5]">
                  <Image
                    src={data.images[4]}
                    alt="img"
                    fill
                    className=" object-cover"
                  />
                </div>
              </div>

              <div className=" hidden md:flex items-center justify-center">
                <div className=" relative w-[100vw] max-w-[1400px] aspect-[5/5]">
                  <Image
                    src={data.images[3]}
                    alt="img"
                    fill
                    className=" object-cover"
                  />
                </div>
              </div>
              <div className=" hidden md:flex items-center justify-center">
                <div className=" relative w-[100vw] max-w-[1400px] aspect-[5/5]">
                  <Image
                    src={data.images[4]}
                    alt="img"
                    fill
                    className=" object-cover"
                  />
                </div>
              </div>

              <div className=" flex justify-center items-center">
                <div className=" relative w-[100vw] max-w-[1400px] aspect-[6/5]">
                  <Image
                    src={data.images[0]}
                    alt="img"
                    fill
                    className=" object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MenuInfo data={data} />
    </>
  );
};

export default Page;
