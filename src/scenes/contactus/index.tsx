import { SelectedPage } from '@/shared/type'
import {motion} from "framer-motion"
import { useForm } from 'react-hook-form';
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HTexex from '@/shared/HTexex';
import {useState} from 'react';
type Props = {
    setSelectedPage: (value: SelectedPage) => void;

}




const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles = `mb-2 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [description,setDescription] = useState('');
    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
            
            
        }
        else {
            setName('');
            setEmail('');
            setDescription('');
        }
    
    }

  return (
      <section id='contactus' className='mx-auto w-5/6 pt-24 pb-32'>
          <motion.div
              onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
          >
              {/* HEADER */}
              <motion.div
                  className='md:w-3/5'
                  initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.5 }}
                      transition={{delay:0.2, duration: 0.5 }}
                      variants={{
                          hidden: { opacity: 0 ,x:-50,y:100},
                          visible: {  opacity: 1 ,x:0,y:0},
                      }}
              >
                  <HTexex>
                      <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
                  </HTexex>
                  <p className='my-5'>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel optio in consectetur veniam assumenda ullam placeat dolore, deleniti harum itaque. Odit ab obcaecati libero perferendis vitae! Eaque est officiis assumenda.
                  </p>
              </motion.div>
              {/* FORM AND IMAGE */}
              <div className='mt-10 justify-between gap-8 md:flex'>
                  <motion.div
                      className='mt-10 basis-3/5 md:mt-0'
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.5 }}
                      transition={{delay:0.2, duration: 0.5 }}
                      variants={{
                          hidden: { opacity: 0 ,y:50},
                          visible: { opacity: 1 ,y:0},
                      }}
                  >
                      <form
                          name='form-container'
                          action='https://formsubmit.co/cc33c448fa823c774a40ee16eabb0b79'
                          target='_blank'
                          onSubmit={onSubmit}
                          method= 'POST'
                      >
                          {errors.name && (
                              <p className='mb-1 text-primary-500'>
                                  {errors.name.type === "required" && "Please enter your name"}
                                  {errors.name.type === "maxLength" && "Your name must be 100 characters or less"}
                            </p>
                            )}
                          <input
                              className={`${inputStyles}`}
                              type='text'
                              value={name}
                              placeholder='NAME'
                              {...register('name', {
                                  required: true,
                                  maxLength: 100,
                                  onChange(event) {
                                    setName(event.target.value);
                                  },
                              })}
                          />
                          
                          {errors.email && (
                              <p className='mb-1 text-primary-500'>
                                  {errors.email.type === "required" && "Please enter your email"}
                                  {errors.email.type === "pattern" && "Please enter a valid email address"}
                            </p>
                          )}
                          <input
                              className={`${inputStyles}`}
                              type='text'
                              value={email}
                              placeholder='EMAIL'
                              {...register('email', {
                                  required: true,
                                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  onChange(event) {
                                      setEmail(event.target.value);
                                  },
                              })}
                          />
                          
                          {errors.message && (
                              <p className=' mb-1 text-primary-500'>
                                  {errors.message.type === "required" && "Please enter message"}
                                  {errors.message.type === "maxLength" && "Your name must be 2000 characters or less"}
                            </p>
                          )}
                            <textarea
                              className={`${inputStyles}`}
                              rows={4}
                              cols={50}
                              value={description}
                              placeholder='MESSAGE'
                              {...register('message', {
                                  required: true,
                                  maxLength: 2000,
                                  onChange(event) {
                                      setDescription(event.target.value);
                                  },
                              })}
                          />
                          
                          
                          <button
                              type='submit'
                              className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
                          >
                              SUBMIT
                          </button>
                          
                      </form>
                      </motion.div>
                        <motion.div
                            className='relative mt-16 basis-2/5 md:mt-0'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{delay:0.2, duration: 0.5 }}
                            variants={{
                            hidden: { opacity: 0 ,x:50},
                            visible: { opacity: 1 ,x:0},
                      }}
                        
                      >
                         <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
                  </motion.div>
              </div>
              
          </motion.div>
    </section >
  )
}

export default ContactUs