import { ReactNode } from "react";

type Props = {
  title: string;
  image: string | ReactNode;
  preimage?: string; // Optional prop for the 'alt' attribute of the image
};

function FeaturedMenuSatu({ title, image, preimage }: Props) {
  return (
    <div className="w-[276px] h-[263px] bg-soft-yellow border border-white rounded-[40px] shadow-md ">
      <div className="relative max-w-full w-[200px] h-[200px] xl:w-[250px] xl:h-[200px] overflow-hidden rounded-[40px]">
        {typeof image === "string" ? (
          <img
            src={image}
            alt={preimage}
            className="w-[200px] h-[180px] object-cover rounded-br-[180px] rounded-tr-[180px] rounded-bl-[180px] "
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

export default FeaturedMenuSatu;
