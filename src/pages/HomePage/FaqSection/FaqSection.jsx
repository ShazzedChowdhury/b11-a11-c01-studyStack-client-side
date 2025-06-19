import React, { use, useEffect, useState } from 'react';
import Loading from '../../../components/Loading/Loading';
import {motion} from "motion/react";

const FaqSection = () => {
  const [ faq, setFaq ] = useState(null);
    const [openIndex, setOpneIndex] = useState(null)

  useEffect(() => {
    fetch('./faq.json')
    .then(res => res.json())
    .then(data => setFaq(data.section))
  }, [])

  const toggle = (index) => {
    setOpneIndex(openIndex === index ? null : index);
   
  }


  if(!faq){ return <Loading />}
  return (
    <motion.section
        initial={{ opacity: 0, y:-50}}
        whileInView={{ opacity:1, y:0}}
        transition={{ duration: 1, delay:0.5 }}
     className="max-w-7xl mx-auto px-5 md:px-10 py-10">
      <h1 className="text-3xl font-bold text-center pb-10">{faq.title}</h1>

      <div>
        {faq?.questions.map((question, index) => {
          return (
            <motion.div
                initial={{opacity:0, x:-100}}
                animate={{opacity:1, x:0}}
                transition={{duration: 2, delay:index+1}}
                viewport={{once:true}}
              onClick={() => toggle(index)}
              className="shadow-sm mb-4 p-5 rounded-lg bg-base-100"
            >
              <div className='flex justify-between text-lg font-semibold mb-5'>
                <h2>{question?.question}</h2>
                <span>{openIndex === index ? "-" : "+"}</span>
              </div>
              {openIndex === index && <p className='text-sm font-semibold'>{question?.answer}</p>}
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default FaqSection;