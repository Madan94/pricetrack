import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import HeroCarousel from "@/components/HeroCarousel";


const Home=()=>{
  return(
    <>
      <section className="px-6 md:px-20 py-12">
          <div className="flex max-xl:flex-col gap-16">
            <div className="flex flex-col justify-center">
              <p className="small-text">
                Smart Shopping Starts here
                <Image 
                src="assets/icons/arrow-right.svg"
                width={20}
                height={20}
                alt="right-arrow"
                />
              </p>
              <h1 className="head-text">Unleash the Power of <span className="text-primary">PriceTrack</span></h1>
              <p className="mt-6">All you Ecommerce Shopping Products at Lowest Prices ever in the history. Shop with us and Grab your Prices Tdy!</p>
              <SearchBar/>
            </div>
            <HeroCarousel/>
          </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {['Apple Iphone',"Sneakers","Watches"].map((product)=>(
            <p key={product}>{product}</p>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home;
