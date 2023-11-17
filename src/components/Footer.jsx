import React from 'react'

function Footer() {
  return (
    <div className='w-full mt-10 h-64 border border-headerColor'>
      <div class="bg-gray-100 pt-5">
          <div class="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
            <div class="p-5">
              <h3 class="font-bold text-xl text-indigo-600">Componentity</h3>
            </div>
            <div class="p-5">
              <div class="text-sm uppercase text-indigo-600 font-bold">Resources</div>
              <a class="my-3 block" href="/#">Documentation <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Tutorials <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Support <span class="text-teal-600 text-xs p-1">New</span></a> 
            </div>
            <div class="p-5">
              <div class="text-sm uppercase text-indigo-600 font-bold">Support</div>
              <a class="my-3 block" href="/#">Help Center <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Privacy Policy <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Conditions <span class="text-teal-600 text-xs p-1"></span></a> 
            </div>
            <div class="p-5">
              <div class="text-sm uppercase text-indigo-600 font-bold">Contact us</div>
              <a class="my-3 block" href="/#">XXX XXXX, Floor 4 San Francisco, CA <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">contact@company.com <span class="text-teal-600 text-xs p-1"></span></a> 
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer