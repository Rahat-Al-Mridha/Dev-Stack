<div className='grid grid-cols-1 gap-7 mt-6'>
      {
        selectedTechnologies.map((technology: Itechnologies) => {
          return (
            <div className='flex gap-2 justify-between items-center border-2 border-gray-200 rounded-3xl px-3 py-2'>
              <div className='flex gap-2 '>
                <img src={technology.icon} alt="" className='h-[40px] w-[40px]' />
                <div>
                  <h3 className='font-bold text-2xl'>{technology.name}</h3>
                  <p>{technology.category}</p>
                </div>
              </div>
              <span className='text-slate-400 font-bold'>
                <RxCross1 />
              </span>

            </div>
          );
        })
      }
    </div>
