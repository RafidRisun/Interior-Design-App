export default function Home() {
  return(
    <div>
      <div className="flex flex-col justify-center items-center">
      <div className="flex bg-slate-500 w-80 h-36 m-3">
        <div className="flex items-center pl-3 bg-custom-yellow m-2 w-28 h-6">
          Category1
        </div>
      </div>
      <div className="flex items-center w-80 h-36">
        <div className="flex bg-slate-500 w-32 h-36 mr-3">
          <div className="flex items-center pl-3 bg-custom-yellow m-2 w-24 h-6">
            Category2
          </div>
        </div>
        <div className="flex flex-grow items-center bg-white w-44 h-36 font-century text-lg"> 
          SEE THE<br/> CATEGORY <br/> THAT YOU ARE LOOKING FOR?
        </div>
      </div>
      <div className="flex bg-slate-500 w-80 h-36 m-3">
        <div className="flex items-center pl-3 bg-custom-yellow m-2 w-28 h-6">
          Category3
        </div>
      </div>
      <div className="flex w-80 h-36 space-x-3">
        <div className="flex w-1/2 bg-slate-500">
          <div className="flex items-center pl-3 bg-custom-yellow m-2 w-28 h-6">
            Category4
          </div>
        </div>
        <div className="flex w-1/2 bg-slate-500">
          <div className="flex items-center pl-3 bg-custom-yellow m-2 w-28 h-6">
            Category5
          </div>
        </div>
      </div>
      <div className="flex m-10 font-century text-m cursor-pointer"><u>All Categories</u></div>
      <div className="flex justify-center bg-slate-500 w-60 h-64 mt-3">
        Featured1
      </div>
      <div className="flex items-center justify-center font-century text-2xl bg-custom-yellow w-60 h-10">Title1</div>
      <div className="flex font-century text-xl m-2 w-60 h-10 mb-32">askhdas dhkasdhka sdgash kdj</div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col pl-32">
          <div className="flex justify-center bg-slate-500 w-60 h-64">Featured2</div>
          <div className="flex items-center justify-end pr-4 font-century text-2xl bg-custom-yellow w-60 h-10">Title2</div>
          <div className="flex font-century text-xl text-right p-2 w-60 h-10 mb-32">askhdas dhkasdhka sdgash kdj</div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col pr-32">
          <div className="flex justify-center bg-slate-500 w-60 h-64">Featured3</div>
          <div className="flex items-center pl-4 font-century text-2xl bg-custom-yellow w-60 h-10">Title3</div>
          <div className="flex font-century text-xl text-left p-2 w-60 h-10 mb-32">askhdas dhkasdhka sdgash kdj</div>
        </div>
      </div>
      <div className="flex justify-center m-10 mb-40 font-century text-m cursor-pointer"><u>See All</u></div>
      
      
    </div>
    
    
  );
}
