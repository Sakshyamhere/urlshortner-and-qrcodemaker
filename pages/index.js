import Footer from "@/components/Footer";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import {
  MdDevices,
  MdOutlineThumbUpOffAlt,
  MdOutlineLink,
  MdOutlineQrCode2,
} from "react-icons/md";
export default function Home() {
  const [givenUrl, setGivenUrl] = useState("");
  const [clientUrl, setClientUrl] = useState("");
  const [urlError, setUrlError] = useState(false);
  const [isDone, setIsDone] = useState(false)
  const handleShortenLink = async (e) => {
    e.preventDefault();
    if (!urlError) {
      let randomVal = "";
      const reg = process.env.REG;
      for (let i = 0; i < 10; i++) {
        const a = Math.ceil(Math.random() * 11) - 1;
        const element = reg[a];
        randomVal += element;
      }
      const ourUrl = `http://localhost:3000/url/${randomVal}`;
      setClientUrl(ourUrl);
      const body = { givenUrl, ourUrl };
      await axios
        .post("http://localhost:3000/api/postURL", { body })
        .then((response) => setIsDone(true));
    } else {
      setUrlError(false);
    }
  };
  return (
    <div>
      <p className="font-bold text-2xl text-center md:text-3xl lg:text-4xl xl:text-5xl my-10 text-gray-700">
        URL SHORTNER & QRCODE MAKER
      </p>
      <div>
        <div className="justify-center flex my-5">
          <div className="flex flex-col p-7 border shadow-lg w-full mx-5 md:w-[80%] lg:w-1/2">
            <p className="font-semibold text-lg text-center md:text-xl lg:text-2xl xl:text-3xl mb-[5px]">
              Paste that very boring url
            </p>
            <input
              type="url"
              name="url"
              id="url"
              placeholder="https://example.com"
              pattern="https://.*"
              className="p-4 border rounded-lg w-full my-5"
              onChange={(e) => {
                const theUrl = e.target.value;
                setGivenUrl(theUrl);
                const isValid = e.target.checkValidity();
                if (!isValid) {
                  setUrlError(true);
                } else {
                  setUrlError(false);
                }
              }}
              required
            />
            {urlError && (
              <p className="text-center text-xl bg-red-500 my-2 p-2">
                Check the url. I guess it is not an url.
              </p>
            )}

            <p className="text-center">
              <i> URL SHORTNER & QRCODE MAKER </i>is a free tool to shorten URLs
              and generate short links THis allows you to create a shortened
              link making it easy to share or get QR code for that link.
            </p>
          </div>
        </div>

        <div className="justify-center flex my-5">
          <div className="flex p-7 border shadow-lg w-full mx-5 md:w-[80%] lg:w-1/2 justify-center">
            {!isDone ? (
              <div>
                 <button className="p-3 rounded-sm bg-gray-500 mx-2 lg:mx-8 font-normal text-lg text-center md:text-xl lg:text-2xl xl:text-3xl mb-[5px]">
                 Generate QR
               </button>
               <button
                 className="p-3 rounded-sm bg-gray-500 mx-2 lg:mx-8 font-normal text-lg text-center md:text-xl lg:text-2xl xl:text-3xl mb-[5px]"
                 onClick={handleShortenLink}
               >
                 Shorten Link
               </button>
              </div>  
            ) : (
              <div>
                  <Link href={clientUrl} className="text-blue-700">
                  {clientUrl}
                  </Link>
              </div>
            ) }
           
          </div>
        </div>

        <div className="justify-center flex my-5 md:my-10">
          <div className="flex flex-col w-full mx-5 md:w-[80%] lg:w-1/2 justify-center">
            <p className="font-semibold text-left text-lg md:text-xl lg:text-2xl xl:text-3xl mb-[15px]">
              Simple and fast URL shortener!
            </p>
            <p>
              <i>URL SHORTNER & QRCODE MAKER</i>allows to shorten long links
              from Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp,
              TikTok, blogs and sites. Just paste the long URL and click the
              Shorten Link button or Generate QR button. Copy the shortened URL
              and share it on sites, chat and emails.
            </p>
          </div>
        </div>
        <div className="justify-center flex my-5">
          <div className="flex flex-col w-full mx-5 md:w-[80%] lg:w-1/2 justify-center">
            <div className="grid md:flex my-5 justify-center">
              <span>
                <MdOutlineLink className="text-[80px] mb-2" />
                <p className="mx-2">
                  Use any link, no matter what size,
                  <i>URL SHORTNER & QRCODE MAKER</i> always shortens a working
                  link
                </p>
              </span>
              <span>
                <MdOutlineQrCode2 className="text-[80px] mb-2" />
                <p className="mx-2">
                  Generate QR code of any link using your own
                  <i>URL SHORTNER & QRCODE MAKER</i> and share with friends
                </p>
              </span>
            </div>
            <div className="grid md:flex my-5 justify-center">
              <span>
                <MdDevices className="text-[80px] mb-2" />
                <p className="mx-2">
                  <i>URL SHORTNER & QRCODE MAKER</i> is Compatible with
                  smartphones, tablets and desktop and other devices
                </p>
              </span>
              <span>
                <MdOutlineThumbUpOffAlt className="text-[80px] mb-2" />
                <p className="mx-2">
                  <i>URL SHORTNER & QRCODE MAKER</i> is easy and fast, enter the
                  long link to get your shortened link
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
