import React from 'react'
import { motion } from 'framer-motion';


function AnimatedText({text}) {
    const words = text.split(' '); // split text into words
    console.log(words);
    return (
        <motion.div>
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    initial={{ x: -50, y: -20, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                >
                    {word}&nbsp;
                </motion.span>
            ))}
        </motion.div>
    );
}


export default AnimatedText