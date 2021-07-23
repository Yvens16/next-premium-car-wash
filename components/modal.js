/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { QuestionMarkCircleIcon } from '@heroicons/react/outline'
import emailjs from 'emailjs-com';

export default function Modal ({ isOpen, setOpen }) {
  const cancelButtonRef = useRef(null)
  function sendEmail(e) {
    e.preventDefault();

    const serviceId= process.env.NEXT_PUBLIC_EMAILJS_SERVICE
    const templateId= process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID
    const userId= process.env.NEXT_PUBLIC_EMAILJS_USERID

    emailjs.sendForm(serviceId, templateId, e.target, userId)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        static
        className='fixed z-10 inset-0 overflow-y-auto'
        initialFocus={cancelButtonRef}
        open={isOpen}
        onClose={setOpen}
      >
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
              <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <div className='sm:flex sm:items-start'>
                  <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10'>
                    <QuestionMarkCircleIcon
                      className='h-6 w-6 text-blue-600'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                    <Dialog.Title
                      as='h3'
                      className='text-lg leading-6 font-medium text-gray-900'
                    >
                      Comment puis-je rendre l'offre plus intéressante pour vous ?
                    </Dialog.Title>
                    <div className='mt-2'>
                      <p className='text-sm text-gray-500'>
                        Que puis-je faire pour vous aider à réserver ?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <form className="contact-form" onSubmit={sendEmail}>
                <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-col'>
                  <label
                    htmlFor='from_name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Nom complet
                  </label>
                  <input
                    type='text'
                    name='from_name'
                    id='first-name'
                    autoComplete='given-name'
                    className='mt-1 focus:ring-indigo-500 text-black focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                  />
                  <label
                    htmlFor='contact_number'
                    className='pt-4 block text-sm font-medium text-gray-700'
                  >
                    Être rappeler pour avoir une offre
                  </label>
                  <input
                    type="tel"
                    name='contact_number'
                    id='tel'
                    placeholder="06276545..."
                    autoComplete='tel'
                    className='mt-1 text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                  />
                </div>
                <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                  <textarea
                    id='about'
                    name='message'
                    rows={3}
                    className='p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md text-black'
                    placeholder="J'aimerai bien que..."
                    defaultValue={''}
                  />
                </div>
                <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                  {/* <button
                    type='button'
                    className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'
                    onClick={() => setOpen(false)}
                  >
                    Deactivate
                  </button> */}
                  <button
                    type="submit" value="Send"
                    className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Envoyer
                  </button>
                </div>

              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
