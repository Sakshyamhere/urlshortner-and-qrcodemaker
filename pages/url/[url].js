import Error from "@/components/Error";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Urlfromslug() {
  const router = useRouter();
  const [redirect, setRedirect] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!router.query.url) {
      return;
    } else {
      getURL();
    }
  }, [router.query.url]);
  const getURL = async () => {
    try {
      const getdata = await axios.get(
        `/api/getURL?url=${router.query.url}`
      );
      const urldata = await getdata.data;
      setRedirect(await urldata.map((items) => items.url));
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <div>
      <div className="m-5"></div>
      <div>
        {redirect.length != 0 ? (
          <div className="my-5 flex justify-center">
            <div className="flex justify-center flex-col m-5">
              <div className="flex justify-center mb-5">
                 <a href="https://github.com/Sakshyamhere">
                <FaGithub className="text-5xl m-2" />
              </a>
              <a href="https://www.linkedin.com/in/sakshyam-aryal-587603262/">
              <FaLinkedinIn className="text-5xl m-2" />
            </a>
              </div>
             
              <button
                className="p-2 rounded-sm bg-gray-500 mx-2 font-normal text-md md:text-xl lg:text-2xl xl:text-3xl mb-[5px]"
                onClick={() => router.push(`${redirect}`)}
              >
                Go to the link
              </button>
              <p className="mt-5 text-lg md:text-xl lg:text-2xl xl:text-3xl">
               <b>Only open the link if it is from a trusted source.</b> 
              </p>
            </div>
          </div>
        ) : (
          <Error />
        )}
      </div>
    </div>
  );
}

export default Urlfromslug;
