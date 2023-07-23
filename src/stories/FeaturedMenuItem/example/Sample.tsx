import React from "react";
import FeaturedMenuItem from "../../../components/moleculs/FeaturedMenuItem";
import Desa from "../../../assets/images/desa.jpg";
import Publik from "../../../assets/images/publik.jpg";
import Goverment from "../../../assets/images/goverment.jpg";
import Galeri from "../../../assets/images/galeri.jpg";
function Sample() {
  return (
    <div className="my-20 flex flex-wrap justify-center gap-x-6 gap-y-6 ">
      <div className="my-2">
        <FeaturedMenuItem
          title="Layanan Publik"
          image={Publik}
          preimage="image-1"
        />
      </div>
      <div className="my-2">
        <FeaturedMenuItem
          title="Potensi Desa"
          image={Desa}
          preimage="image-2"
        />
      </div>
      <div className="my-2">
        <FeaturedMenuItem
          title="Pemerintahan"
          image={Goverment}
          preimage="image-3"
        />
      </div>
      <div className="my-2">
        <FeaturedMenuItem title="Galeri" image={Galeri} preimage="image-4" />
      </div>
    </div>
  );
}

export default Sample;
