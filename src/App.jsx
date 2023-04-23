import { Box, Button, FormControl, FormLabel, Text, Textarea } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Atrayee from './assets/atrayee.jpg'
import './App.css'


function App() {
  const textareaRef = useRef();

  const sendToSpamFilterMessage = () => {
    new Audio('./assets/click.wav').play();
    toast(textareaRef.current.value);
    toBeSerialized = { message: textareaRef.current.value }
    fetch('http://localhost:5000/spamcheck', {
      method: "POST",
      body: JSON.stringify(toBeSerialized),
    }).then(res => res.json())
      .then(data => {
        toast(data?.ServerMessage);
      });
  };

  return (
    <>
      <Toaster toastOptions={{
        style: {
          textAlign: 'center',
          fontWeight: '900',
          color: 'black',
        }
      }} />
      <Box h={'100vh'} w={'full'} id='container'>
        <motion.div
          id='first-container'
          className='element-div'
          initial={{ x: -1500 }}
          animate={{ x: 0 }}>
          <motion.p
            initial={{ x: -155, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: 'all 1s' }}>
            <h1 style={{ fontSize: '5.5em', fontWeight: '900' }}>Hi! I am Somtirtha</h1>
            <motion.span>
              Currently pursuing MCA from Heritage Institute of Technology.
              I contributed in the backend model of filtering process and data training
              of this project.
            </motion.span>
          </motion.p>
          <motion.img
            transition={{ type: 'spring' }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            src={'https://www.pngitem.com/pimgs/m/394-3947057_circular-profile-picture-png-transparent-png.png'}
            alt={'profile'} />
        </motion.div>

        <motion.div
          id={'second-container'}
          className={'element-div'}
          initial={{ x: 1500 }}
          animate={{ x: 0 }}>
          <motion.p
            style={{ textAlign: window.innerWidth < 1200 ? 'center' : 'right' }}
            initial={{ x: 175, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: 'all 1s' }}>
            <h1 style={{ fontSize: '5.5em', fontWeight: '900' }}>Hi! I am Atrayee</h1>
            <motion.span>
              Currently pursuing MCA from Heritage Institute of Technology.
              My Contribution is in the UI/UX designing of the project. This is a simple
              application of Multinomial NB & SVM to predict whether the email is spam or ligitimate
            </motion.span>
          </motion.p>
          <motion.img
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            src={Atrayee}
            alt={'profile'} />
        </motion.div>
        <motion.div id={'third-container'} initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} className='element-div' >
          <FormControl style={{ display: 'flex' }} flexDir={'column'} alignItems={'center'}>
            <FormLabel color={'white'} fontWeight={900}>Spam DETECTOR</FormLabel>
            <Textarea resize={'none'} bg={'white'} w={window.innerWidth > 1200 ? '50vw' : '85vw'}
              h={'40vh'} placeholder='ENTER TEXT TO CHECK SPAM' ref={textareaRef} fontWeight={600} />
            <Button type='submit' variant={'solid'} bg={'blue.400'}
              onClick={sendToSpamFilterMessage}
              mt={window.innerWidth > 1200 ? '15%' : '50%'} boxShadow={'0px 0px 15px -5px white'} color={'white'} >CHECK</Button>
          </FormControl>
        </motion.div>
      </Box></>
  )
}

export default App
