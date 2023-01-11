import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
// import { client } from "../../client";
import styled from "styled-components";
import { images } from '../data/HomeSlider';
import NextIcon from "../assets/svg/NextIcon";
import PrevIcon from "../assets/svg/PrevIcon";
// import RightNavIcon from "../assets/svg/RightNavIcon";
import ArrowNavigation from "./ArrowNavigation";
import PointerNav from "./PointerNav";

const SliderWrapper = styled(motion.div)`
  height: 0;
  .carousel {
    bottom: 400px;
  }   
  .heading {
    bottom: 500px;
  }
  .svg-focus:hover {
    svg > path {
      fill: #ffffff;
    }
    span:hover {
      color: #ffffff;
    }
  }
  @media (min-width: 1024px) {
    .carousel {
      bottom: 420px;
    }
  }
`;

const Slider = (props) => {
  const [index, setIndex] = useState(0);
  const [isActive, setIsActive] = useState(true);
//   const [images, setImages] = useState([]);

  //framer variant
  const HoverVariant = {
    rest: {
      x: "100",
      transition: {
        duration: 1,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      x: 0,
      transition: {
        duration: 1,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  const ContentVaraint = {
    rest: {
      y: 160,
      opacity: 0,
    },

    hover: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        type: "tween",
        ease: "easeOut",
        duration: 1.5,
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
        delay: 1.8,
        type: "tween",
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  const TitleVariant = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 3,
        staggerChildren: 0.2,
      },
    },
  };
  const TextVariant = {
    hidden: {
      opacity: 0,
      y: "100vh",
    },
    visible: { 
      opacity: 1,
      y: 0,
    },
  };

  const slideRight = () => {
    setIndex((index + 1) % images.length); // increases index by 1
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1); // returns last index of images array if index is less than 0
    } else {
      setIndex(nextIndex);
    }
  };

//   useEffect(() => {
//     client
//       .fetch(
//         `*[_type == "homeslider"]{
// 				_id,
// 				headerContent,
// 				descContent,
// 				img{
// 				  asset->{
// 					_id,
// 					url
// 				  },
// 				},
// 			  }`
//       )
//       .then((data) => setImages(data))
//       .catch(console.error);
//   }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      slideRight();
    }, 8000);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images, index]);

  //   console.log(images);

  return (
    <SliderWrapper initial='rest' animate='hover'>
      <section
        className='overflow-hidden absolute h-screen top-0 w-full bg-black'
        {...props}
      >
        <PointerNav />
        <ArrowNavigation to='contact' />
          <AnimatePresence>
            <motion.img
              // src={sliderData[index]?.img?.asset?.url}
              src={images[index].img}
              className='z-10 relative top-0 h-screen w-full object-cover'
              alt='slider image'
              // variants={HoverVariant}
              // initial='rest'
              // key={images[index].img}
              // animate='hover'
              // exit={
              // 	visibility: 'hidden',
              // }}
            />
          </AnimatePresence>
        )}
      </section>
      <div className='flex flex-row justify-center'>
        <div className='w-full 2xl:w-8/12 h-auto'>
          <AnimatePresence>
            <motion.header
              initial='rest'
              animate='hover'
              variants={ContentVaraint}
              // key={sliderData[index]?.headerContent}
              key={images[index].headerContent}
              exit={{ opacity: 0 }}
              className='absolute z-30 top-1/3 flex lg:w-3/5 2xl:w-2/5  flex-col px-4 py-2 lg:px-16'
            >
              <span className='bg-brand-yellow flex justify-center items-center w-24 h-8 italic text-sm capitalize text-white mb-4'>
               Who am I?
              </span>
              <div className='bg-black bg-opacity-50 p-2 lg:p-4 rounded-xl'>
                <motion.h1
                  initial='hidden'
                  animate='visible'
                  variants={TitleVariant}
                  className='text-white text-3xl font-bold lg:text-5xl mb-4'
                >
                  <motion.span
                    variants={TextVariant}
                    exit={{ opacity: 0 }}
                  ></motion.span>
                  {images[index]?.headerContent.split("").map((char, i) => (
                    <motion.span
                      variants={TextVariant}
                      key={char + "-" + i}
                      exit={{ opacity: 0 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.h1>
                <section className='flex justify-center items-center 2xl:w-8/12'>
                  <div className='flex  w-3/4'>
                    <motion.div
                      initial='borderRest'
                      animate='borderAnimate'
                      variants={ContentVaraint}
                      className='border-brand-yellow border-l mr-2'
                    ></motion.div>

                    <div className=''>
                      <p className='text-white text-base font-medium mb-2'>
                        {/* {sliderData[index]?.descContent} */}
                        {images[index].descContent}
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </motion.header>
          </AnimatePresence>
          {/* Carousel Control */}
          <section className='absolute bottom-0 px-4 py-2 lg:px-16 w-4/6 lg:w-80 z-30'>
            <div className='flex items-end mb-2'>
              {/* <span className='text-white mr-1 '>
								{index + 1}
							</span>
							<span className='text-white mr-1'>/</span>
							<span className='text-white text-sm'>
								{sliderData.length}
							</span> */}
            </div>
            <div className='flex w-full mb-2'>
              {images.map((image, i) => (
                <motion.span
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={`inline-block w-full h-0.5 ${
                    index === i ? "bg-white" : "bg-gray-400"
                  }`}
                ></motion.span>
              ))}
            </div>
            <div className='flex w-full justify-between'>
              <a
                className='flex items-center svg-focus cursor-pointer'
                onClick={() => {
                  slideLeft();
                  setIsActive(false);
                }}
              >
                <PrevIcon color='#9CA3AF' className='mr-2' />
                <span className='capitalize text-gray-400 text-sm'>prev</span>
              </a>
              <a
                className='flex items-center svg-focus cursor-pointer'
                onClick={() => {
                  slideRight();
                  setIsActive(true);
                }}
              >
                <span className='capitalize text-gray-400 text-sm'>next</span>
                <NextIcon color='#9CA3AF' className='ml-2' />
              </a>
            </div>
          </section>
        </div>
      </div>
    </SliderWrapper>
  );
};

export default Slider;
