import { ReactNode } from "react";

type Props = {
  title: string;
  image: string | ReactNode;
  preimage?: string; // Optional prop for the 'alt' attribute of the image
};

function FeaturedMenuDua({ title, image, preimage }: Props) {
  return (
    <div className="max-w-sm bg-soft-yellow border border-white rounded-[40px] shadow-md ">
      <div className="relative max-w-full w-[240px] h-[200px] xl:w-[340px] xl:h-[200px] overflow-hidden rounded-[40px]">
        {typeof image === "string" ? (
          <img
            src={image}
            alt={preimage}
            className="w-full h-full object-cover rounded-br-[100%]"
          />
        ) : (
          image
        )}
      </div>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black text-center ">
          {title}
        </h5>
      </div>
    </div>
  );
}

export default FeaturedMenuDua;
