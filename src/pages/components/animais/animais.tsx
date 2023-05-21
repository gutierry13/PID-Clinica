import {motion} from 'framer-motion'
export function Animais(){
  return (
    <motion.div
    initial={{ x: -50 , opacity: 0}}
    animate={{ x: 0,opacity: 1}}
    transition={{ duration: 0.2 }}
    exit={{ x:-50,opacity: 0}}
    >
  <h1>Animais</h1>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dolore cumque quos voluptate animi, suscipit voluptatem nisi officia, consectetur fuga voluptates alias minus natus veritatis, cum ab inventore nemo voluptas?</p>
    </motion.div>
  )
}