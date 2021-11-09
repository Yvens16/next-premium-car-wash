import Image from 'next/image'
import Link from 'next/link'

export default function Footer () {
  return (
    <footer>
      <div className="pt-16">
            <div className="w-full bg-white py-12">
                <div className="container mx-auto xl:flex lg:flex text-center xl:text-left lg:text-left">
                    <div className="xl:w-3/6 lg:w-3/6 sm:w-full text-center xl:text-left mb-6 xl:mb-0 lg:mb-0">
                        <p className="text-gray-800">2020 Premium Car Wash. Tous droits réservés</p>
                    </div>
                    <div className="xl:w-3/6 lg:w-3/6 sm:w-full">
                        <ul className="xl:flex lg:flex md:flex sm:flex justify-around">
                            <li className="text-gray-800 hover:text-gray-900 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                                <a href="javascript:void(0)">Terms of service</a>
                            </li>
                            <li className="text-gray-800 hover:text-gray-900 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                                <a href="javascript:void(0)">Politique de confidentialité</a>
                            </li>
                            <li className="text-gray-800 hover:text-gray-900 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                                <a href="javascript:void(0)">Sitemap</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
