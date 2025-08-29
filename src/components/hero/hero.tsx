export const Hero = () => {
  return (
    // <section className="mx-5 my-5 h-[800px] bg-contain bg-top w-full bg-[url('/src/components/hero/images/heroImage.png')] mobile:h-[500px] mobile:px-0 mobile:pt-0">
    <section className="mx-5 my-5 h-[800px] bg-[url('/src/components/hero/images/heroImage.png')] bg-cover bg-no-repeat mobile:mx-0 mobile:my-0 mobile:h-[500px] mobile:px-0 mobile:pt-0">
      <div className="flex justify-between px-56 py-36">
        <div>
          <p>SUMMER SALE GEt 30% OFF On all dress.</p>
          <button className="border-2 border-black">SHOP NOW</button>
        </div>
      </div>
    </section>
  );
};
