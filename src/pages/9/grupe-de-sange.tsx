/* eslint-disable @next/next/no-img-element */
import React from "react"
import Image from "next/image"
import { useRouter } from "next/router";
export default function Sange() {
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
                   clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
               }} />
       </div>
       <div
       className="absolute inset-x-0 mt-[69rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
       aria-hidden="true"
   >
       <div
           className="relative left-[calc(50%-20rem)] aspect-[1400/1400] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-lime-300 to-green-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
           style={{
               clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 12.1%, 80.7% 52%, 72.5% 32.5%, 60.2% 62.4, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
           }} />
       </div>

        <div className=" py-24 sm:py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-2">
                <div className="mx-auto max-w-7xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center text-emerald-900">Blood groups. Chromosomal determination of sexes. Environmental influence on heredity</h2>
                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <div className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Blood groups </span>  <br/>
                           - There are 4 blood groups, determined by the presence or absence of antigens A and B on the surface of red blood cells. <br/>
                           - In plasma, there are antibodies for these antigens, anti-A antibodies, and anti-B antibodies. <br/>
                           - Antibodies must not come into contact with the antigen because they cause the destruction of the red blood cell (which can be fatal). That is why it is very important to know the blood group for a possible transfusion. <br/>
                       <div className="flex justify-center mt-10">
                           <img src="/images/sange.png" width={350} height={350} alt="Picture of the author" className="rounded-lg"/>
                           <img src="/images/sange2.jpg" width={350} height={350} alt="Picture of the author" className="rounded-lg"/>
                       </div>
                    </div>

                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <p className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Immunity</span> <br/>
                           Immunity represents the body's ability to recognize and neutralize (destroy) pathogens, foreign cells, or modified self-cells. These contain antigens on their surface, which trigger leukocytes to synthesize specific antibodies. <br/>
                           Leukocytes have memory—they will synthesize the same type of antibody even after a long time upon contact with the respective antigen. <br/>
                           Immunity can be acquired:<br/>
                           - naturally — through the body's contact with the antigen. <br/>
                           - artificially — through vaccines that contain dead/inactive viruses or serums that contain antibodies for the virus.<br/>
                    </p>

                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <p className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Chromosomal determination of sexes</span> <br/>
                        - Chromosomes identical in both sexes are called autosomes, and those that are different are called heterosomes. <br/>
                        *They determine the genes that determine sex. <br/>
                           - There are two types of chromosomal sex determination: <br/>
                           <span className="underline decoration-wavy text-green-700">1. Drosophila Type</span> found in insects, all mammals (including humans) <br/>
                           - Sex chromosomes = HETEROSOMES -X -Y <br/>
                           In Drosophila melanogaster: <br/>
                           - female has: 6 autosomes - chromosomes identical in both sexes; 2 identical heterosomes XX <br/>
                           - male has: 6 autosomes; 2 different heterosomes XY <br/>
                           Females are homogametic, having XX sex chromosomes, and males are heterogametic, having XY sex chromosomes. <br/>
                           <span className="underline decoration-wavy text-green-700">2. Abrazas Type</span> (bird): found in the silkworm, all birds, reptiles, some amphibians. <br/>
                           - Females are heterogametic, and males are homogametic. <br/>

                    </p>

                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <p className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Environmental influence on heredity</span> <br/>
                        <span className="underline decoration-wavy text-green-700">Mutagenesis</span> = the process of mutation occurrence<br/>
                        <span className="underline decoration-wavy text-green-700">Mutant</span> = the individual carrying mutations<br/>
                        <span className="underline decoration-wavy text-green-700">Genetic mutation</span> = any change in the structure and function of genetic material, which is not a consequence of genetic recombination <br/>
                    </p>

                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <p className="mt-0 text-lg text-grey-600">
                       <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Classification of mutations</span> <br/>
                       a. According to the affected cells: somatic, gametic <br/>
                       b. According to the affected chromosomes: autosomal, heterosomal <br/>
                       c. According to the amount of affected genetic material <br/>
                       d. According to the effect on the organism: neutral, harmful, beneficial <br/>
                       e. According to the mode of occurrence: natural, artificial <br/>
                       According to the amount of affected genetic material, we find: <br/>
                       <span className="underline decoration-wavy text-green-700">1. Genic</span> <br/>
                       - modifies the structure and function of the gene <br/>
                       - the smallest genetic mutation is the point mutation (affects a single pair of nucleotides) <br/>
                       <span className="underline decoration-wavy text-green-700">2. Chromosomal</span> <br/>
                       - affects the structure of chromosomes <br/>
                       - causes chromosomal breaks: deletion, inversion, duplication, translocation <br/>
                       <span className="underline decoration-wavy text-green-700">3. Genomic</span> <br/>
                       - affects the entire amount of genetic material <br/>
                       - can be polyploidy (autopolyploid or allopolyploid), aneuploidy (the number of chromosomes in the genome is changed) <br/>
                    </p>

                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <p className="mt-0 text-lg text-grey-600">
                       <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Mutagenic factors</span> <br/>
                       - physical: non-ionizing radiation, ionizing radiation <br/>
                       - chemical: antibiotics, pesticides, dyes, nitrous acid, caffeine <br/>
                       - biological: viruses
                    </p> 
                </div>
            </div>
        </div>
        
       <div className="flex justify-center">
       <span onClick={()=> void router.push('/9/ereditatea')} className="inline-flex items-center px-4 py-2 mr-3 mb-8 text-sm font-medium text-lime-500 bg-white border border-lime-500 rounded-lg hover:bg-lime-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
       <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
       Previous lesson
       </span>
       <span onClick={()=> void router.push('/9/genetica')} className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-lime-500 bg-white border border-lime-500 rounded-lg hover:bg-lime-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
       Next lesson
       <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
       </span>
       </div>      

        </>
    )
}