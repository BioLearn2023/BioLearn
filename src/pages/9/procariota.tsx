/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import Image from 'next/image'
import React from "react"
export default function Procariota() {
    const router = useRouter();
    return(
        <>
        <div
       className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
       aria-hidden="true"
   >
       <div
           className="relative left-[calc(50%-20rem)] aspect-[1155/678] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-green-500 to-green-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
           style={{
               clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
           }} />
       </div><div
           className="absolute inset-x-0 -top-70 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-100"
           aria-hidden="true"
   >
           <div
               className="relative left-[calc(50%-11rem)] aspect-[650/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-300 to-green-900 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
               style={{
                   clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
               }} />
       </div><div
           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
           aria-hidden="true"
       >
           <div
               className="relative right-[calc(0%+11rem)] aspect-[600/600] w-[36.125rem] -translate-x-1/2  rotate-[30deg] bg-gradient-to-tr from-lime-600 to-emerald-950 opacity-30 sm:left-[calc(50%+15rem)] sm:w-[72.1875rem]"
               style={{
                   clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
               }} />
       </div>
       <div
       className="absolute inset-x-0 mt-[69rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
       aria-hidden="true"
   >
       <div
           className="relative left-[calc(50%-20rem)] aspect-[1200/1000] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-lime-300 to-green-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
           style={{
               clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 12.1%, 80.7% 52%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
           }} />
       </div>
 
        <div className=" py-24 sm:py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-2">
                <div className="mx-auto max-w-7xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center text-emerald-900">Prokaryotic Cell</h2>
                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>
                       <div className="mt-0 text-lg text-grey-600">
                           <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Composition: </span> <br/>
                           - cell wall <br/>
                           - cell membrane <br/>
                           - mesosome <br/>
                           - nucleoid <br/>
                           - cytoplasm <br/>
                           - ribosomes <br/>
                           - photosynthetic apparatus <br/>
                           - vascular system <br/>
                           <div className="flex justify-center -mt-64 ml-[55%]">
                           <img src="/images/celula-procariota.png" width={350} height={350} alt="Picture of the author" className="rounded-lg"/>
                           </div>
                       </div>
 
                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>
 
                    <div className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">CELL WALL</span> <br/>
                        - Found in bacteria and cyanobacteria. <br/>
                        - Very widespread. <br/>
                        - Have a more intense metabolism than eukaryotic cells. <br/>
                        - Located on the outside and serves a protective role. <br/>
                        - In cyanobacteria it is covered by a gelatinous sheath, a capsule equipped with cilia and flagella for locomotion. <br/>
                        - Chemically composed of murein. <br/>
                    </div>
 
                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>
 
                    <div className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">CELL MEMBRANE</span> <br/>
                        - Separates the cell wall from the cytoplasm. <br/>
                        - Chemically it is of lipoprotein nature. <br/>
                        <div className="flex justify-end -mt-24">
                           <img src="/images/membrana.png" width={450} height={450} alt="Picture of the author" className="rounded-lg"/>
                       </div>
                    </div>
 
                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>
 
                    <div className="mt-0 text-lg text-grey-600 text-right">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">MESOSOME</span> <br/>
                        - It is an invagination of the cell membrane. <br/>
                        - Plays a role in respiration and nucleoid anchoring. <br/>
                        <div className="flex justify-start -mt-24">
                           <img src="/images/mezozom.jpg" width={350} height={350} alt="Picture of the author" className="rounded-lg"/>
                       </div>
                    </div>
                    
                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>
 
                    <p className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">NUCLEOID</span> <br/>
                        - Found in the cytoplasm. <br/>
                        - Attached to the mesosome. <br/>
                        - Represented by a single circular DNA molecule (a single bacterial chromosome). <br/>
                        <span className="underline decoration-dotted">Role:</span> <br/>
                        - holds and transmits genetic information <br/>
                        - cell growth and development <br/>
                    </p>
                </div>
            </div>
        </div>
        
       <div className="flex justify-center">
       <span onClick={()=> void router.push('/9/celula')} className="inline-flex items-center px-4 py-2 mr-3 mb-8 text-sm font-medium text-lime-500 bg-white border border-lime-500 rounded-lg hover:bg-lime-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
       <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
       Previous Lesson
       </span>
       <span onClick={()=> void router.push('/9/eucariota')} className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-lime-500 bg-white border border-lime-500 rounded-lg hover:bg-lime-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
       Next Lesson
       <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
       </span>
       </div>
 
        </>
    )
}
