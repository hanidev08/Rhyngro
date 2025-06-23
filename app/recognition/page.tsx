import "./style.scss";

const page = () => {
  return (
    <section>
      <div className="container mt-72 md:mt-32">
        <div className=" hidden md:flex items-start w-full">
          <h1 className="mb-3 w-1/3">Awards</h1>
          <table className="w-full">
            <tbody className="w-full">
              <tr>
                <td className="text-[10px] py-2 px-4 font-semibold">Year</td>
                <td className="text-[10px] py-2 px-4 font-semibold">Project</td>
                <td className="text-[10px] py-2 px-4 font-semibold">Award</td>
              </tr>
              <tr>
                <td className="py-2 px-4">2025</td>
                <td className="py-2 px-4">Haruka Residence</td>
                <td className="py-2 px-4">
                  Finalist – World Architecture Festival, Residential –
                  Completed Buildings
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4">2024</td>
                <td className="py-2 px-4">Kyabin Apartment</td>
                <td className="py-2 px-4">
                  Winner – Interior Design Excellence Awards, Multi-Residential
                  Interior
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4">2023</td>
                <td className="py-2 px-4">Shibui House</td>
                <td className="py-2 px-4">
                  Commendation – Houses Awards, New House under 200m²
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4">2022</td>
                <td className="py-2 px-4">Inala Apartment</td>
                <td className="py-2 px-4">
                  Winner – Houses Awards, Apartment or Townhouse
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4">2021</td>
                <td className="py-2 px-4">Tsuru Loft</td>
                <td className="py-2 px-4">
                  Shortlisted – Dezeen Awards, Interior Design (Residential)
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4">2020</td>
                <td className="py-2 px-4">Mizu Apartment</td>
                <td className="py-2 px-4">
                  Commendation – Australian Interior Design Awards, Residential
                  Design
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4">2019</td>
                <td className="py-2 px-4">Hikari Studio</td>
                <td className="py-2 px-4">
                  Winner – IDEA Awards, Small Residential Project
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4">2018</td>
                <td className="py-2 px-4">Boneca Apartment</td>
                <td className="py-2 px-4">
                  Winner – Australian Interior Design Awards, Emerging Practice
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4">2017</td>
                <td className="py-2 px-4">Practice Award</td>
                <td className="py-2 px-4">
                  Finalist – AIA NSW Awards, Small Project Architecture
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4">2016</td>
                <td className="py-2 px-4">Zenith Flat</td>
                <td className="py-2 px-4">
                  Winner – Inside Festival, Residential Interior
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4">2015</td>
                <td className="py-2 px-4">Darlinghurst Apartment</td>
                <td className="py-2 px-4">
                  Winner – Houses Awards, Apartment Unit or Townhouse
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="md:hidden flex flex-col gap-2 w-full">
          <h1 className="parghrapRecognition">Awards</h1>
          <hr className="" />
          <div className="flex flex-col gap-3">
            {[
              {
                year: "2025",
                project: "Haruka Residence",
                award:
                  "Finalist – World Architecture Festival, Residential – Completed Buildings",
              },
              {
                year: "2024",
                project: "Kyabin Apartment",
                award:
                  "Winner – Interior Design Excellence Awards, Multi-Residential Interior",
              },
              {
                year: "2023",
                project: "Shibui House",
                award: "Commendation – Houses Awards, New House under 200m²",
              },
              {
                year: "2022",
                project: "Inala Apartment",
                award: "Winner – Houses Awards, Apartment or Townhouse",
              },
              {
                year: "2021",
                project: "Tsuru Loft",
                award:
                  "Shortlisted – Dezeen Awards, Interior Design (Residential)",
              },
              {
                year: "2020",
                project: "Mizu Apartment",
                award:
                  "Commendation – Australian Interior Design Awards, Residential Design",
              },
              {
                year: "2019",
                project: "Hikari Studio",
                award: "Winner – IDEA Awards, Small Residential Project",
              },
              {
                year: "2018",
                project: "Boneca Apartment",
                award:
                  "Winner – Australian Interior Design Awards, Emerging Practice",
              },
              {
                year: "2017",
                project: "Practice Award",
                award: "Finalist – AIA NSW Awards, Small Project Architecture",
              },
              {
                year: "2016",
                project: "Zenith Flat",
                award: "Winner – Inside Festival, Residential Interior",
              },
              {
                year: "2015",
                project: "Darlinghurst Apartment",
                award: "Winner – Houses Awards, Apartment Unit or Townhouse",
              },
            ].map((item, index) => (
              <div className="flex justify-between w-full" key={index}>
                <div className="w-1/3 parghrapRecognition">{item.year}</div>
                <div className="flex flex-col w-2/3">
                  <span className="parghrapRecognition">{item.project}</span>
                  <span className="parghrapRecognition">{item.award}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
