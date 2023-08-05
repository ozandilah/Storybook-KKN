import { ReactNode } from "react";

type Props = {
  image: string | ReactNode;
  button: ReactNode;
};

function FeaturedMenuDua({ image, button }: Props) {
  return (
    <div className="max-w-sm bg-soft-yellow border border-white rounded-[40px] shadow-md ">
      <div>
        <div className="relative max-w-full w-[220px] h-[150px] overflow-hidden rounded-[40px]">
          {typeof image === "string" ? (
            <img
              src={image}
              alt="image"
              className="w-full h-full object-cover rounded-br-[100%]"
            />
          ) : (
            image
          )}
        </div>

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black text-center">
            {button}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default FeaturedMenuDua;
