import { CustomFilter, Hero, MarCard, SearchBar } from "@/components";
import Image from "next/image";


{/* export default async function Home() */}
export default function Home({searchParams}) {
  const allData = 
  [{
      "saxeoba": "მარმარილო",
      "feri": "თეთრი",
      "skami": "სკამი",
      "skamisfasi": 1200,
      "magida": "მაგიდა",
      "magidisfasi": 1500,
      "jerko": "ჯერკო",
      "jerkosfasi": 5000,
      "skamisfoto": "/skami.jpg",
      "magidissfoto": "/magida.jpg",
      "jerkosfoto": "/jerko.jpg"
  },
  {
    "saxeoba": "მარმარილო",
    "feri": "ყვითელი",
    "skami": "სკამი",
    "skamisfasi": 1200,
    "magida": "მაგიდა",
    "magidisfasi": 1500,
    "jerko": "ჯერკო",
    "jerkosfasi": 5000,
    "skamisfoto": "/skami.jpg",
    "magidissfoto": "/magida.jpg",
    "jerkosfoto": "/jerko.jpg"
  },
  {
  "saxeoba": "მარმარილო",
  "feri": "მწვანე",
  "skami": "სკამი",
  "skamisfasi": 1200,
  "magida": "მაგიდა",
  "magidisfasi": 1500,
  "jerko": "ჯერკო",
  "jerkosfasi": 5000,
  "skamisfoto": "/skami.jpg",
  "magidissfoto": "/magida.jpg",
  "jerkosfoto": "/jerko.jpg"
  },
  {
    "saxeoba": "მარმარილო",
    "feri": "შავი",
    "skami": "სკამი",
    "skamisfasi": 1200,
    "magida": "მაგიდა",
    "magidisfasi": 1500,
    "jerko": "ჯერკო",
    "jerkosfasi": 5000,
    "skamisfoto": "/skami.jpg",
    "magidissfoto": "/magida.jpg",
    "jerkosfoto": "/jerko.jpg"
  },
  {
    "saxeoba": "გრანიტი",
    "feri": "შავი",
    "skami": "სკამი",
    "skamisfasi": 1200,
    "magida": "მაგიდა",
    "magidisfasi": 1500,
    "jerko": "ჯერკო",
    "jerkosfasi": 5000,
    "skamisfoto": "/skami.jpg",
    "magidissfoto": "/magida.jpg",
    "jerkosfoto": "/jerko.jpg"
  },
  {
    "saxeoba": "გრანიტი",
    "feri": "ნაცრისფერი",
    "skami": "სკამი",
    "skamisfasi": 1200,
    "magida": "მაგიდა",
    "magidisfasi": 1500,
    "jerko": "ჯერკო",
    "jerkosfasi": 5000,
    "skamisfoto": "/skami.jpg",
    "magidissfoto": "/magida.jpg",
    "jerkosfoto": "/jerko.jpg"
  },
  {
    "saxeoba": "გრანიტი",
    "feri": "ყავისფერი",
    "skami": "სკამი",
    "skamisfasi": 1200,
    "magida": "მაგიდა",
    "magidisfasi": 1500,
    "jerko": "ჯერკო",
    "jerkosfasi": 5000,
    "skamisfoto": "/skami.jpg",
    "magidissfoto": "/magida.jpg",
    "jerkosfoto": "/jerko.jpg"
  },
  {
    "saxeoba": "გრანიტი",
    "feri": "წითელი",
    "skami": "სკამი",
    "skamisfasi": 1200,
    "magida": "მაგიდა",
    "magidisfasi": 1500,
    "jerko": "ჯერკო",
    "jerkosfasi": 5000,
    "skamisfoto": "/skami.jpg",
    "magidissfoto": "/magida.jpg",
    "jerkosfoto": "/jerko.jpg"
  },
  {
    "saxeoba": "დიაბაზი",
    "feri": "მწვანე",
    "skami": "სკამი",
    "skamisfasi": 1200,
    "magida": "მაგიდა",
    "magidisfasi": 1500,
    "jerko": "ჯერკო",
    "jerkosfasi": 5000,
    "skamisfoto": "/skami.jpg",
    "magidissfoto": "/magida.jpg",
    "jerkosfoto": "/jerko.jpg"
  },
  {
    "saxeoba": "ბაზალტი",
    "feri": "",
    "skami": "სკამი",
    "skamisfasi": 1200,
    "magida": "მაგიდა",
    "magidisfasi": 1500,
    "jerko": "ჯერკო",
    "jerkosfasi": 5000,
    "skamisfoto": "/skami.jpg",
    "magidissfoto": "/magida.jpg",
    "jerkosfoto": "/jerko.jpg"
  }
]

  const isDataEmpty = !Array.isArray(allData) || allData.length < 1 || !allData;
  
  {/*console.log(searchParams.manufacturer)*/}
  let res;
  if(searchParams.manufacturer){
    res = allData.filter((item) => {
      return item.saxeoba == searchParams.manufacturer; 
    })
  }else{
    res = allData;
  }

  
  {/*console.log(res)*/}
  
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">marmaladebis katalogi</h1>
          <p>agmoachine marmaladebis uxvi gansxvaveba da teqstura mhhhhh</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="feri"/>
            <CustomFilter title="fasi"/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__mar-wrapper">
              {res?.map((mar) => (
              <MarCard mar={mar} />
              ))}
            </div>
          </section>
        ): (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">shecdoma</h2>
          </div>
        )}

      </div>
    </main>
  );
}