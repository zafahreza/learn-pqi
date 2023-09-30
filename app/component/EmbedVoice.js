export default function EmbedVoice(){

    const PDFName = "MateriHukumMimSukun";
    const AudioName = "HukumMimSukun";

    return(
        <div className="flex justify-between gap-7">
            <div className="w-[349px] h-[100px] border-[1px] rounded-[10px] border-black border-opacity-40 flex justify-start pl-[17px] items-center gap-3">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.75 12.5H32.5V15H23.75V12.5ZM23.75 18.75H32.5V21.25H23.75V18.75ZM23.75 25H32.5V27.5H23.75V25ZM7.5 12.5H16.25V15H7.5V12.5ZM7.5 18.75H16.25V21.25H7.5V18.75ZM7.5 25H16.25V27.5H7.5V25Z" fill="black"/>
                    <path d="M35 6.25H5C4.33716 6.25066 3.70166 6.51427 3.23296 6.98296C2.76427 7.45166 2.50066 8.08716 2.5 8.75V31.25C2.50066 31.9128 2.76427 32.5483 3.23296 33.017C3.70166 33.4857 4.33716 33.7493 5 33.75H35C35.6628 33.7493 36.2983 33.4857 36.767 33.017C37.2357 32.5483 37.4993 31.9128 37.5 31.25V8.75C37.4993 8.08716 37.2357 7.45166 36.767 6.98296C36.2983 6.51427 35.6628 6.25066 35 6.25ZM5 8.75H18.75V31.25H5V8.75ZM21.25 31.25V8.75H35V31.25H21.25Z" fill="black"/>
                </svg>
                <a href={`/assets/${PDFName}.pdf`}>{PDFName}.pdf</a>
            </div>
            <div className="w-[349px] h-[100px] border-[1px] rounded-[10px] border-black border-opacity-40 justify-center flex flex-col">
                <p className="pl-6">{AudioName}.mp3</p>
                <audio controls="true" className="pl-3">
                    <source src={`/assets/${AudioName}.mp3`} type="audio/mpeg"/>
                </audio>
            </div>
        </div>
    )
}