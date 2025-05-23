 /* eslint-disable @next/next/no-img-element */
 import React from "react"
 import { useRouter } from "next/router";
 export default function Ereditatea() {
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
            className="relative left-[calc(50%-20rem)] aspect-[1200/550] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-lime-300 to-green-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 12.1%, 80.7% 52%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }} />
        </div>
 
         <div className=" py-24 sm:py-12">
             <div className="mx-auto max-w-7xl px-6 lg:px-2">
                 <div className="mx-auto max-w-7xl lg:mx-0">
                     <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center text-emerald-900">The Heredity of the Living World</h2>
                     <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>
 
                     <p className="mt-0 text-lg text-grey-600">
                         <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Laws of heredity</span> <br/>
                        1. Law of gamete purity <br/>
                        2. Law of independent segregation of character pairs <br/>
                        - Formulated by Gregor Mendel following hybridization experiments in peas. <br />
                        - He showed that the transmission of hereditary traits is carried out through hereditary factors (genes), which are paired in body cells and single in gametes. <br />
                     </p>
 
                     <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>
 
                     <p className="mt-0 text-lg text-grey-600">
                         <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Monohybrid Cross</span> <br/>
                        - Crossing organisms differing by a single pair of hereditary traits. <br />
                            Mendel crossed two pea varieties: <br />
                            - smooth pea (AA) x wrinkled pea (aa) <br />
                            - Smooth trait = Dominant (AA) <br />
                            - Wrinkled trait = Recessive (aa) <br />
                            Organisms with identical hereditary factors in every pair are genetically pure (HOMOZYGOUS). <br />
                            Organisms with different hereditary factors in at least one pair are genetically impure (HETEROZYGOUS). <br />
                            By <span className="underline">self-pollinating</span> the hybrid (heterozygous) plants - Aa from F1, in F2 resulted in 75% smooth peas and 25% wrinkled peas. <br />
                            Phenotypic segregation ratio was 3:1 (75%:25%) =&gt; smooth peas:wrinkled peas. <br />
                            According to the first law, the law of purity of gametes, gametes are always pure, containing only one of the paired hereditary factors. <br />
                            <span className="underline decoration-wavy text-green-700">Genotype</span> = the entirety of hereditary factors that make up the genetic structure of an organism <br />
                            <span className="underline decoration-wavy text-green-700">Phenotype</span> = the entirety of morphological, physiological, biochemical and behavioral traits resulting from the interaction between genotype and environment. <br />
                     </p>
 
                     <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>
 
                     <p className="mt-0 text-lg text-grey-600">
                         <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Dihybrid Cross</span> <br/>
                        Involves crossing two organisms differing by two pairs of hereditary traits. <br />
                            Mendel crossed two pea varieties differing by two pairs of hereditary traits. <br />
                            - smooth and yellow pea (AABB) x wrinkled and green pea (aabb) <br />
                            - Hybrid organisms (heterozygotes) produce four categories of gametes: AB, Ab, aB, ab, both female and male, <br />
                            whose combinations yield 16 categories of individuals. <br />
                            F2 phenotypic segregation = 9:3:3:1 <br />
                            - 9/16 DD (dominant dominant) - smooth, yellow <br />
                            - 3/16 DR (dominant recessive) - smooth, green <br />
                            - 3/16 RD (recessive dominant) - wrinkled, yellow <br />
                            - 1/16 RR (recessive recessive) - wrinkled, green <br />
                            - According to the second law, the law of independent assortment of other pairs of hereditary factors, in F2,
                            the phenotypic segregation ratio for one pair is 3:1, and for two pairs is 9:3:3:1. <br />
                     </p>
 
                     <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>
 
                     <p className="mt-0 text-lg text-grey-600">
                         <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Deviations from Mendelian Laws</span> <br/>
                         <span className="underline decoration-wavy text-green-700">Codominance</span> = interaction between two distinct genes, both of which together result in a new phenotype: blood group AB(IV).
                     </p>
                     
                     
                 </div>
             </div>
         </div>
         
        <div className="flex justify-center">
        <span onClick={()=> void router.push('/9/meioza')} className="inline-flex items-center px-4 py-2 mr-3 mb-8 text-sm font-medium text-lime-500 bg-white border border-lime-500 rounded-lg hover:bg-lime-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
        Previous lesson
        </span>
        <span onClick={()=> void router.push('/9/grupe-de-sange')} className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-lime-500 bg-white border border-lime-500 rounded-lg hover:bg-lime-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Next lesson
        <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </span>
        </div>
                    
 
         </>
     )
 }
 
 