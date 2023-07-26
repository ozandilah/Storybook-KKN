import { ReactNode } from "react";

type Props = {
  content: {
    preheading: string;
    paragraph: string;
  };

  button: ReactNode;
  title: string;
  image: string | ReactNode;
};

function SectionDua({ content, image, title, button }: Props) {
  return (
    <div className="container mx-auto px-4 group">
      <div className="flex flex-col md:flex-row items-center justify-center gap-y-20 md:gap-y-0 gap-x-16 md:gap-x-28 xl:gap-x-36">
        <div className="w-full md:w-4/12 2xl:w-3/12 md:group-odd:order-2 md:group-even:order-1">
          <h3 className="text-[#FFDE32] uppercase font-bold mb-3 text-4xl">
            {content.preheading || "Pre Heading"}
          </h3>
          <h3 className="text-black leading-8 mb-8">
            {content.paragraph || "Paragraph"}
          </h3>
          <div>{button}</div>
        </div>
        <div className="relative md:group-odd:order-1 md:group-even:order-2">
          <div
            className="relative max-w-full w-[270px] h-[245px]  sm:w-[306px] sm:h-[299px]xl:w-[460px] md:h-[449px]
            md:w-[460px] xl:h-[449px] rounded-tr-[59px] rounded-bl-[59px] rounded-tl-3xl rounded-br-3xl overflow-hidden"
          >
            {typeof image === "string" ? (
              <img src={image} alt={title} />
            ) : (
              image
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionDua;
