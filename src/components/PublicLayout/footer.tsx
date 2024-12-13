import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
      <footer className=" text-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex md:flex-row flex-col sm:space-y-0 space-y-4 items-center justify-between w-full">

            <div className="flex shrink-0 items-center">
              <Link href={'/'}>
                <Image
                    alt="Axess"
                    src={'/axess_logo.webp'}
                    height={80}
                    width={120}
                  />
              </Link>
            </div>
  
            <nav className="flex flex-wrap justify-center space-x-4 text-sm leading-loose">
              <a href="#" className="hover:underline whitespace-nowrap">
                Terms of Use
              </a>
              <span>|</span>
              <a href="#" className="hover:underline whitespace-nowrap">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:underline whitespace-nowrap">
                Refund and Returns Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:underline whitespace-nowrap">
                Contact Us
              </a>
            </nav>

            <div className="flex items-center space-x-4">
                <a href="#" className="hover:opacity-75">
                <Image
                    alt="Instagram"
                    src={'/home/insta.png'}
                    height={24}
                    width={24}
                  />
                </a>
                <a href="#" className="hover:opacity-75">
                <Image
                    alt="Twitter"
                    src={'/home/twitter.png'}
                    height={24}
                    width={24}
                  />
                </a>
                <a href="#" className="hover:opacity-75">
                <Image
                    alt="Facebook"
                    src={'/home/facebook.png'}
                    height={24}
                    width={24}
                  />
                </a>
            </div>
          </div>          
        </div>
  
        <div className="mt-4 text-center text-sm">
          © 2024 Your Company Inc. All rights reserved.
        </div>
      </footer>
    );
  }
  