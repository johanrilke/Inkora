
'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Nav from "@/components/Nav/Nav";
import Display from "@/components/Display/Display";


export default function Home() {

  // const [preloaderFinished, setPreloaderFinished] = useState(false);

	// const handlePreloaderFinish = () => {
	// 	setPreloaderFinished(true);
	// };

  return (
    // <>
		// 	{!preloaderFinished && <Preloader onFinish={handlePreloaderFinish} />}
		// 	{preloaderFinished && (
				<>
					{
						 <>
             <Nav />
             <Display />
           </>
					}
				</>
		// 	)}
    // </>
  )
}
