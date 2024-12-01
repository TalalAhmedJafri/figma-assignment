

export default function Home() {
  return (
    <div className="flex h-[80%]">
    <div className="w-1/2  flex flex-col justify-center items-start m-12">
      <h1 className="text-black text-[40px] font-[700] pr-[200] pl-[100]">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
      <p className="text-[147] w-[902] text-text pr-[400] pl-[100] mt-4">
        An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
        </p>
        <button className=" bg-header rounded-[10px] p-[10] mt-5 ml-[100] ">Explore Now</button>     
    </div>
    <div className="w-1/2 flex justify-center items-center m-12">
    <Image 
    src={"/images/rs-group-wrap.svg"} alt="Image" height={647} width={462}/>
</div>
    </div>	
  );
}
