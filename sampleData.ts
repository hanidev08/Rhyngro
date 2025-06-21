export type SampleDataItem = {
  id: number;
  slug: string;
  url: string;
  title: string;
  desc: string;
  location: string;
  year: string;
  area: string;
  team: string;
  images: string[];
};

export type SampleDataType = SampleDataItem[];

export const sampleData: SampleDataType = [
  {
    id: 1,
    slug: "Elegant",
    url: "/assets/images/Elegant0.jpeg",
    title: "New York Penthouse",
    desc: "desc",
    location: "New York, USA",
    year: "2023",
    area: "4500 m2",
    team: "Anastasia Voropaeva",
    images: [
      "/assets/images/Elegant1.jpeg",
      "/assets/images/Elegant2.jpeg",
      "/assets/images/Elegant3.jpeg",
      "/assets/images/Elegant4.jpeg",
      "/assets/images/Elegant5.jpeg",
    ],
  },
  {
    id: 2,
    slug: "Desert",
    url: "/assets/images/Desert1.jpeg",
    title: "Long  Island",
    desc: "desc",
    location: "Island, IS",
    year: "2023",
    area: "4500 m2",
    team: "Anastasia Voropaeva",
    images: [
      "/assets/images/Desert0.jpeg",
      "/assets/images/Desert2.jpeg",
      "/assets/images/Desert3.jpeg",
      "/assets/images/Desert4.jpeg",
      "/assets/images/Desert5.jpeg",
    ],
  },
];
