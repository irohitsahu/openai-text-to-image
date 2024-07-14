import LoadingIcon from "./icons/LoadingIcon";
import PlaceholderIcon from "./icons/PlaceholderIcon";

type ImageDisplayProps = {
  imageURL: string;
  loading: boolean;
  error: null | string;
};

export default function ImageDisplay({
  imageURL,
  loading,
  error,
}: ImageDisplayProps) {
  return (
    <div className="flex flex-col items-center gap-6 w-full min-h-60 bg-[#393E46] rounded-md border border-[#EEEEEE]">
      {loading && (
        <>
          <p>Your image is being generated...</p>
          <LoadingIcon />
        </>
      )}

      {imageURL && !loading && (
        <>
          <p>Here is your imagination on a picture</p>
          <img
            className="rounded-sm"
            src={imageURL}
            width={512}
            height={512}
            alt="Generated Image"
          />
        </>
      )}

      {!imageURL && !loading && (
        <>
          <p>Your imagination will appear below</p>
          <PlaceholderIcon />
        </>
      )}

      {error && (
        <div className="text-center w-1/2 mx-auto bg-red-500 mt-2 rounded border border-red-800">
          {error}
        </div>
      )}
    </div>
  );
}
