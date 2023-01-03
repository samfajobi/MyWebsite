import { AnimatePresence, motion } from "framer-motion";
import { data } from "../data/About";
// import OpenLinkIcon from "../../assets/svg/OpenLinkIcon";
// import TwitterIcon from "../../assets/svg/TwitterIcon";
import { useEffect, useState } from "react";
import FaderWrap from "./FaderWrap";
import NextIcon from "../assets/svg/NextIcon";
// import { client } from "../../client";
import NewsWrapper from "./style/aboutStyle";





const NewsSlider = (props) => {
  const [newsIndex, setNewsIndex] = useState(0);
  const [socialIndex, setSocialIndex] = useState(0);
  const [isScroll, setIsScroll] = useState(true);
  const [isTweetScroll, setIsTweetScroll] = useState(true);

  // const [tweets, isError, isLoading] = useTwitter();

  const [news, setNews] = useState([ ]);

  const ContentVaraint = {
    rest: {
      x: isScroll ? 300 : -300,
    },

    hover: {
      x: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.8,
      },
    },

    rest2: {
      x: isTweetScroll ? 300 : -300,
    },

    hover2: {
      x: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.8,
      },
    },

    borderRest: {
      y: 50,
      opacity: 0,
    },

    borderAnimate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        type: "tween",
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  // useEffect(() => {
  //   if (news.length === 0) {
  //     client
  //       .fetch(
  //         `*[_type == "globalnews"]{
  //         _id,
  //         altText,
  //         descText,
  //         details,
  //         headerText,
  //         img{
  //           asset->{
  //             _id,
  //             url
  //           },
  //         },
  //         images,
  //       }`
  //       )
  //       .then((data) => setNews(data))
  //       .catch(console.error);
  //   }
  // }, [news.length]);

  //news slider control
  const slideNewsRight = () => {
    setNewsIndex((newsIndex + 1) % data.length); // increases index by 1
    // setSocialIndex((socialIndex + 1) % [0, 1, 2].length);
  };
  const slideSocials = () => {
    setSocialIndex((socialIndex + 1) % [0, 1, 2].length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setNewsIndex((newsIndex + 1) % data.length);
    }, 6000);
    const indexTimer = setTimeout(() => {
      setSocialIndex((socialIndex + 1) % [0, 1, 2].length);
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearTimeout(indexTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsIndex, socialIndex, data.length]);


  //  useEffect(() => {
  //   client
  //     .fetch(
  //       `*[_type == "globalnews"]{
  //         _id,
  //         altText,
  //         descText,
  //         details,
  //         headerText,
  //         img{
  //           asset->{
  //             _id,
  //             url
  //           },
  //         },
  //         images,
  //       }`
  //     )
  //     .then((data) => setNews(data))
  //     .catch(console.error);
  // }, []);

  

  return (
    <FaderWrap>
      <NewsWrapper className='px-4 py-2 lg:px-16 relative mb-10' {...props}>
        {data.length > 0 && (
          <div className='relative flex justify-center'>
            <ol className='flex w-10 justify-between h-2 mini-caurosel lg:ml-56 absolute z-10'>
              <li
                className={`cursor-pointer inline-block w-1/5 border border-white ${
                  newsIndex === 0 ? "bg-white" : ""
                }`}
                onClick={() => {
                  setNewsIndex(0);
                  setIsScroll(false);
                }}
              ></li>
              <li
                className={`cursor-pointer inline-block w-1/5 border border-white ${
                  newsIndex === 1 ? "bg-white" : ""
                }`}
                onClick={() => {
                  setNewsIndex(1);
                  if (newsIndex > 1) {
                    setIsScroll(false);
                  } else {
                    setIsScroll(true);
                  }
                }}
              ></li>
              <li
                className={`cursor-pointer inline-block w-1/5 border border-white ${
                  newsIndex === 2 ? "bg-white" : ""
                }`}
                onClick={() => {
                  setNewsIndex(2);
                  setIsScroll(true);
                }}
              ></li>
            </ol>
            <div className='lg:justify-center lg:flex-row relative 2xl:w-8/12 '>
              <div className='flex flex-col lg:justify-center lg:flex-row overflow-hidden relative'>
                <div className='relative overflow-hidden section-1 w-screen bg-blue-400 ' >
                  <AnimatePresence>
                    <motion.section
                      className='flex flex-col lg:flex-row relative'
                      initial='rest'
                      animate='hover'
                      variants={ContentVaraint}
                      key={news[newsIndex]?._id}
                      exit={{ visibility: "hidden" }}
                    >
                      <div className=' w-full lg:w-10/12 cont-height'>
                        <img
                          src={data.img}
                          alt={news[newsIndex]?.altText}
                          className='h-full object-cover w-full'
                        />
                      </div>
                      <div className='bg-white w-full lg:w-10/12 arrow px-4 py-8'>
                        <p className='uppercase text-xs text-blue-500 mb-14'>
                          press release
                        </p>
                        <motion.header className='relative flex flex-col'>
                          <h1 className='text-gray-700 text-xl font-bold mb-6'>
                            {data.headerText}
                          </h1>
                          <section className='flex justify-center items-center'>
                            <div className='flex w-3/4 h-auto'>
                              <motion.div
                                initial='borderRest'
                                animate='borderAnimate'
                                variants={ContentVaraint}
                                className='border-brand-yellow border-l mr-2'
                              ></motion.div>
                              <div className=''>
                                <p className='text-gray-600 text-sm font-medium mb-2'>
                                  {data.descText}
                                </p>
                                <a
                                  href={`articles/${newsIndex}`}
                                  className='flex items-center justify-end'
                                >
                                  <span className='mr-2 text-brand-blue font-bold'>
                                    Learn More
                                  </span>
                                  <NextIcon color='#2659A2' />
                                </a>
                              </div>
                            </div>
                          </section>
                        </motion.header>
                      </div>
                    </motion.section>
                  </AnimatePresence>
                </div>
              </div>
              <h2 className='font-bold capitalize text-3xl inline-block text-gray-600 absolute lg:ml-52 z-10 pl-32'>
               About Medffffffffffffffffffffffffffffff
              </h2>
            </div>
          </div>
        )}
      </NewsWrapper>
    </FaderWrap>
  );
};

export default NewsSlider;
