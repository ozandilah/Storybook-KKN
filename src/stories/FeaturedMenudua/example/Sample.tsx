import React from "react";
import FeaturedMenuDua from "../../../components/moleculs/FeaturedMenudua";
import Desa from "../../../assets/images/desa.jpg";
import Publik from "../../../assets/images/publik.jpg";
import Goverment from "../../../assets/images/goverment.jpg";
import Galeri from "../../../assets/images/galeri.jpg";
function Sample() {
  return (
    <div className="my-20 gap-x-6 flex flex-row">
      <div className="ml-auto">
        <FeaturedMenuDua
          title="Layanan Publik"
          image={Publik}
          preimage="image-1"
        />
      </div>
      <div className="ml-auto">
        <FeaturedMenuDua title="Potensi Desa" image={Desa} preimage="image-2" />
      </div>
      <div className="ml-auto">
        <FeaturedMenuDua
          title="Pemerintahan"
          image={Goverment}
          preimage="image-3"
        />
      </div>
      <div className="ml-auto">
        <FeaturedMenuDua title="Galeri" image={Galeri} preimage="image-4" />
      </div>
    </div>
  );
}

export default Sample;
