import {
    CloseSVGIcon,
    CopySVGIcon,
    RefreshSVGIcon,
    GreenSVGTick
} from "components/SVGIcons";
import { useState } from "react";
import { replaceBadWords } from "core-functions/RemoveBadWords";

const RemoveBadWords = () => {
    const [rawData, setRawData] = useState("");
    const [clearData, setClearData] = useState("");
    const [displayToast, setDisplayToast] = useState(false);

    const handleConversion = () => {
        setClearData(replaceBadWords(rawData));
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
    return (<div style={{
        height: "100vh",
        width: "100vw"
    }}>
        <div style={{ backgroundColor: "#D8D8D8", padding: "1em", marginTop: "6%", textAlign: "center" }}>
            <h1 style={{ fontSize: "2rem" }}>Remove bad words from your text.</h1>
            <h3>Try it out below!</h3>
        </div>
        <div style={{
            display: "flex",
            flex: 1,
            justifyContent: "space-around",
            margin: "2% 10%",
        }}>
            <textarea
                style={{
                    width: "35vw",
                    height: "50vh",
                    border: "0.1em solid #398AD7",
                    borderRadius: "1%"
                }}
                value={rawData}
                onChange={(e) => setRawData(e.target.value)}
            ></textarea>
            <textarea
                style={{
                    width: "35vw",
                    height: "50vh",
                    border: "0.1em solid #D8D8D8",
                    borderRadius: "1%"
                }}
                disabled={true}
                value={clearData}
                onChange={(e) => setRawData(e.target.value)}
            ></textarea>
        </div>
        <div style={{ padding: "1em", backgroundColor: "#D8D8D8" }}>
            <div style={{
                display: "flex",
                flex: 1,
                justifyContent: "space-around",
                margin: "0 25%",
            }}>
                <button
                    style={{
                        border: "1px solid #D8D8D8",
                        borderRadius: "5%",
                        padding: "2%",
                        background: "#378805",
                        color: "white"
                    }}
                    onClick={(e) => handleConversion()}
                >
                    <span style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>{RefreshSVGIcon()} &nbsp; Convert</span>
                </button>
                <button
                    style={{ border: "1px solid #D8D8D8", borderRadius: "5%", padding: "2%", background: "#187bcd", color: "white" }}
                    onClick={(e) => {
                        handleCopy();
                    }}
                >
                    <span style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>{CopySVGIcon()} &nbsp; Copy to clipboard</span>
                </button>
            </div>
        </div>
        {toastSuccess(displayToast)}
    </div>);
};


export default RemoveBadWords;