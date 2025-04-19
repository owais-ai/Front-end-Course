import { client } from "@/sanity/lib/client"; 
import Image from "next/image";

export default async function Home() {
  const storeData = await client.fetch(`*[_type == "watch"]{title, color, price, image{asset->}}`);
  

  // console.log("Store Data:",storeData);
// console.log("imagedata:", storeData.image.asset.url)


  return (
    <div className="p-6">
      <div className="grid grid-cols-4 gap-6">
    {
      storeData.map((watch:any, index:number)=>{
        return(
          <div key={index} className="border p-4 text-green-600 max-w-max">
            <div>
              <Image src={watch.image.asset.url} alt={watch.title} height={100} width={100} className="w-50"/>
            </div>
              <h1>{watch.title}</h1>
              <h1>{watch.color}</h1>
              <h1>{watch.price}</h1>
          </div>
        )
      })
    }
      </div>


    </div>
  );
}

// const getWatch = async ()=> {
//   const watch = await client.fetch(`*[_type == "watch"]{title, color, price, image{asset->}}`);
//   return watch;    
// }