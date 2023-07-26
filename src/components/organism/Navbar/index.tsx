import { Children, ReactNode, useState } from "react";
import Brand from "../../atom/Brand";
type Props = {
  children: ReactNode;
  cta: ReactNode;
  pathname: string;
  className: {
    active: string;
    idle: string;
  };
  title: string;
  image: string | ReactNode;
};

function Navbar({ children, cta, pathname, className, image, title }: Props) {
  const [isMenuActive, setMenuActive] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30">
      <nav className="bg-opacity-30">
        <div className="px-6 container mx-auto flex justify-between items-center py-8">
          <Brand className="w-16 h-10 mr-12 flex items-center" />

          <button
            className="relative z-30 w-7 h-7 flex lg:hidden flex-col items-center justify-center transition-all gap-y-1 hover:gap-y-2"
            onClick={() => setMenuActive((prev) => !prev)}
          >
            <span
              className={[
                "w-7 h-1 bg-yellow transition-all",
                isMenuActive ? "absolute top-3 rotate-45" : "rotate-0",
              ].join(" ")}
            ></span>
            <span
              className={[
                "w-7 h-1 bg-yellow transition-all",
                isMenuActive ? "absolute top-3 rotate-45" : "rotate-0",
              ].join(" ")}
            ></span>
            <span
              className={[
                "w-7 h-1 bg-yellow transition-all",
                isMenuActive ? "absolute top-3 -rotate-45" : "rotate-0",
              ].join(" ")}
            ></span>
          </button>

          <div
            className={[
              "bg-white z-20 gap-y-8 flex w-full flex-col  lg:flex-row items-center justify-center lg:justify-between backdrop-filter backdrop-blur-lg bg-opacity-30",
              isMenuActive ? "flex fixed inset-0" : "relative hidden md:flex",
            ].join(" ")}
          >
            <ul
              className={[
                "flex lg:flex flex-col items-center gap-y-8 ml-auto lg:ml-0 mr-auto gap-x-8",
                isMenuActive ? "flex" : "md:hidden md:flex-row",
              ].join(" ")}
            >
              {Children.toArray(children).map((menu: any, i: number) => {
                return (
                  <li className="" key={i}>
                    {
                      <menu.type
                        {...menu.props}
                        className={
                          pathname === menu.props.href
                            ? className.active
                            : className.idle
                        }
                      >
                        {
                          <menu.props.children.type
                            className={[
                              ...(menu?.props?.children?.props?.className ??
                                ""),
                              pathname === menu.props.href
                                ? className.active
                                : className.idle,
                            ].join(" ")}
                          >
                            {menu.props.children.props.children}
                          </menu.props.children.type>
                        }
                      </menu.type>
                    }
                  </li>
                );
              })}
            </ul>

            <div
              className={[
                "flex flex-col gap-y-8 gap-x-4 mr-auto ml-auto",
                isMenuActive ? "lg:flex-row lg:mr-0" : "md:flex-row md:mr-0",
              ].join(" ")}
            >
              {cta}
            </div>
          </div>
        </div>
      </nav>
      <div className="relative">
        {typeof image === "string" ? (
          <img
            src={image}
            alt={title}
            className="w-full bg-cover bg-center h-[33rem]"
          />
        ) : (
          image
        )}

        <div className="absolute inset-0 flex items-center justify-start">
          <div className="text-center p-32">
            <h1 className="text-white text-3xl font-bold uppercase md:text-6xl">
              Desa Bandung
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
