import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
const page = () => {
  return (
    <div className="h-screen flex bg-gradient-to-r from-white to-purple-400">
      <div className="hidden w-1/2 lg:block bg-gray-100">
        <Image
          src="/images/meet_image.jpg"
          width={1080}
          height={1080}
          alt="Picture of the author"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold ">Welcome to Google Meet</h1>
          <p className="mb-8 text-gray-950 dark:text-gray-100 text-xl mt-3">
            Connect with your team anytime, anywhere. Join or start meetings
            with crystal-clear HD video and audio
          </p>
          <div className="flex flex-col space-y-4 ">
            <Button className="hover:bg-black hover:text-white " variant='outline'>
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Login with Google
            </Button>
            <h1>
              --------------------------------------------or-------------------------------------
            </h1>
                      <Button className="w-full bg-black text-white hover:bg-white hover:text-black" variant='ghost'>
                          <GitHubLogoIcon/>
                          Login with Github
                      </Button>
                      <p className="items-center justify-center flex">Don't have an account? <Link href='#' className="text-blue-400 hover:underline ml-2"> Create now</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
