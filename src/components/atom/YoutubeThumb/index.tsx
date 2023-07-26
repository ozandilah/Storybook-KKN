type Props = {
  url: string;
};

function YoutubeThumb({ url }: Props) {
  // Parse the video ID from the YouTube URL
  const videoId = url.split("v=")[1];

  if (videoId) {
    return (
      <div className="w-full h-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2">
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Embedded video"
            allowFullScreen
          />
        </div>
      </div>
    );
  } else {
    return <div>Invalid YouTube URL</div>;
  }
}

export default YoutubeThumb;
