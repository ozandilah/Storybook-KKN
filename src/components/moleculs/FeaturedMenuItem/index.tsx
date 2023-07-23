import { ReactNode } from "react";

type Props = {
  title: string;
  image: string | ReactNode;
  preimage?: string; // Optional prop for the 'alt' attribute of the image
};

function FeaturedMenuItem({ title, image, preimage }: Props) {
  return (
    <div className="relative w-[276px] h-[263px]  flex flex-col rounded-xl bg-soft-yellow bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-40 sm:h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        {typeof image === "string" ? (
          <img
            src={image}
            alt={preimage}
            className="w-full h-full object-cover"
          />
        ) : (
          image
        )}
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center">
          {title}
        </h5>
      </div>
    </div>
  );
}

export default FeaturedMenuItem;
