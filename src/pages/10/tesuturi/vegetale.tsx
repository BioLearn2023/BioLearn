/* eslint-disable @next/next/no-img-element */
import React from "react"
import Image from 'next/image'
import { useRouter } from "next/router";
export default function Vegetale() {
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
       className="absolute inset-x-0 mt-[80rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
       aria-hidden="true"
   >
       <div
           className="relative left-[calc(50%-20rem)] aspect-[1200/1100] w-[27.125rem] -translate-x-1 rotate-[75deg] bg-gradient-to-tr from-lime-300 to-green-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
           style={{
               clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 12.1%, 80.7% 52%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
           }} />
       </div>
 
        <div className=" py-24 sm:py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-2">
                <div className="mx-auto max-w-7xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center text-emerald-900">Plant tissues</h2>
                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>
 
                    <div className="mt-0 text-lg text-grey-600">
                       <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Embryonic (meristematic) tissues</span> <br/>
                       - cells continuously divide <br/>
                       - cells are small, with thin walls, without spaces between them <br/>          
                       <span className="underline decoration-wavy text-green-700">Classification:</span> <br/>
                       <span className="underline decoration-wavy text-green-700">1. Primary apical meristems </span> <br/>
                       - at the tips of roots and stems <br/>
                       - ensure growth in height <br/>
                       <span className="underline decoration-wavy text-green-700">2. Primary intercalary meristems (above nodes)</span> <br/>
                       - ensure growth in length <br/>
                       <span className="underline decoration-wavy text-green-700">3. Secondary (lateral) meristems</span> <br/>
                       - cork cambium (phellogen) <br/>
                       - vascular cambium (cambium) <br/>
                       - ensure secondary thickening of root and stem <br/>
                       <div className="flex justify-end -mt-64">
                           <img src="/images2/embrionare.jpg" width={400} height={300} alt="tesuturi" className="rounded-lg"/>
                       </div>
                   </div>

                   <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                   <div className="mt-0 text-lg text-grey-600">
                       <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Definitive tissues</span> <br/>
                       - originate from embryonic tissue cells <br/>
                       - cells do not divide <br/>
                       <span className="underline decoration-wavy text-green-700">Classification:</span> <br/>
                       1. Protective <br/>
                       2. Fundamental <br/>
                       3. Conductive <br/>
                       4. Secretory <br/>
                       5. Mechanical <br/>
                       <div className="flex justify-end -mt-64">
                           <img src="/images2/definitive.png" width={400} height={300} alt="tesuturi" className="rounded-lg"/>
                       </div>
                   </div>

                   <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                   <p className="mt-0 text-lg text-grey-600">
                       <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Protective tissues</span> <br/>
                       - primary: epidermis, exodermis, endodermis <br/>
                       - secondary: cork, phelloderm <br/>
                   </p>

                   <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                   <p className="mt-0 text-lg text-grey-600">
                       <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Fundamental tissues</span> <br/>
                       a) storage <br/>
                       b) assimilative <br/>
                       - palisade tissue (elongated cells with much chlorophyll) <br/>
                       - spongy tissue (cells with spaces between and less chlorophyll) <br/>
                       c) aquiferous (stores water in desert plants) <br/>
                       d) aeriferous (stores air in aquatic plants) <br/>
                   </p>

                   <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                   <p className="mt-0 text-lg text-grey-600">
                       <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Conductive tissues</span> <br/>
                       - xylem vessels (conduct raw sap, dead cells) <br/>
                       - phloem vessels (conduct elaborated sap, living cells) <br/>
                   </p>

                   <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                   <p className="mt-0 text-lg text-grey-600">
                       <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Secretory tissues</span> <br/>
                       - cells produce and release various substances: resin, nectar, latex, aromas <br/>
                   </p>

                   <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                   <p className="mt-0 text-lg text-grey-600">
                       <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Mechanical tissues (supportive)</span> <br/>
                       - give organs strength <br/>
                       - consist of cells with thickened walls <br/>
                   </p>
                </div>
            </div>
        </div>


       <div className="flex justify-center">
       <span onClick={()=> void router.push('/10/tesuturi/animale')} className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-lime-500 bg-white border border-lime-500 rounded-lg hover:bg-lime-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
       Next lesson
       <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
       </span>
       </div>
        </>
    )
}
