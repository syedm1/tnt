import {
  CloseSVGIcon,
  CopySVGIcon,
  RefreshSVGIcon,
  GreenSVGTick
} from "components/SVGIcons";
import Head from "next/head";
import { useState } from "react";
import { removeNewLines } from "core-functions/RemoveWhiteSpaces";

export default function Home() {
  const [rawData, setRawData] = useState("");
  const [clearData, setClearData] = useState("");
  const [displayToast, setDisplayToast] = useState(false);

  const handleConversion = () => {
    setClearData(removeNewLines(rawData));
  };

  const handleCopy = () => {
    console.log("in copy");
    navigator.clipboard.writeText(clearData);
    setDisplayToast(true);
    setTimeout(() => {
      setDisplayToast(false);
    }, 90000);
  };

  const toastSuccess = (displayToast: boolean) => {
    return displayToast ? (
      <div
        id="toast-success"
        className="flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
        role="alert"
        style={{ bottom: 0, position: "fixed" }}
      >
        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
          {GreenSVGTick()}
          <span className="sr-only">Check icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">
          Copied text to clipboard successfully
        </div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-success"
          aria-label="Close"
          onClick={(e) => setDisplayToast(false)}
        >
          <span className="sr-only">Close</span>
          {CloseSVGIcon()}
        </button>
      </div>
    ) : (
      <></>
    );
  };

  const filters = () => {
    return (
      <>
        <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
          Filters
        </h3>
        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="w-full dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="laravel-checkbox-list"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <span>Remove tabspaces</span>
            </div>
          </li>
          <li className="w-full dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="laravel-checkbox-list"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <span>Remove tabspaces</span>
            </div>
          </li>
          <li className="w-full dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="laravel-checkbox-list"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <span>Remove tabspaces</span>
            </div>
          </li>
          <li className="w-full dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="laravel-checkbox-list"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <span>Remove tabspaces</span>
            </div>
          </li>
        </ul>
      </>
    );
  };

  return (
    <div className="px-8 py-0" style={{ background: "#ee81a9" }}>
      <Head>
        <title>TNT - Nextjs boilerplate Super-Power</title>
        <meta
          name="description"
          content="nextjs boilerplate created by Arvin Mostafaei"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center flex-grow min-h-screen px-0 py-16">
        <h1 className="m-0 text-6xl" style={{ color: "#fff000" }}>
          Get rid of whitespaces with custom filters
        </h1>

        <p
          className="mx-0 my-10 mt-4 text-3xl leading-normal"
          style={{ color: "#ffffff" }}
        >
          yes that includes options to select "\n" and "\t"s
        </p>

        <div>{filters()}</div>
        <div className="flex flex-wrap items-center justify-center max-w-[800px] mt-10">
          <textarea
            style={{
              minWidth: "40vh",
              minHeight: "40vh",
              backgroundColor: "#ff7a64",
              border: "white  1px solid",
              color: "#fff000"
            }}
            value={rawData}
            onChange={(e) => setRawData(e.target.value)}
          ></textarea>
          <textarea
            style={{
              minWidth: "40vh",
              minHeight: "40vh",
              backgroundColor: "#ffeb33",
              border: "white 1px solid"
            }}
            disabled={true}
            value={clearData}
            onChange={(e) => setRawData(e.target.value)}
          ></textarea>
          <div
            className="flex flex-nowrap"
            style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}
          >
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              style={{ marginLeft: "120px" }}
              onClick={(e) => handleConversion()}
            >
              {RefreshSVGIcon()}
              <span>Convert</span>
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-  flex items-center"
              style={{ marginLeft: "190px", marginRight: "80px" }}
              onClick={(e) => {
                handleCopy();
              }}
            >
              {CopySVGIcon()}
              <span>Copy to clipboard</span>
            </button>
          </div>
        </div>
        {toastSuccess(displayToast)}
      </main>
    </div>
  );
}
