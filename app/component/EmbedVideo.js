export default function EmbedVideo(){
    return(
        <div className="flex gap-10">
            <iframe src="https://www.youtube.com/embed/SJwDq0aPBGI?si=ifc9CSY-3hVSuq6O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="w-[480px] h-[270px]" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/PDXxmaWPt8I?si=N3N9byurxLt5A2qa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="w-[480px] h-[270px]" allowfullscreen></iframe>
        </div>
    )
}