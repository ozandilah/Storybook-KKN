import React from "react";
import FeaturedMenuDua from "../../../components/moleculs/FeaturedMenudua";
import Desa from "../../../assets/images/desa.jpg";
import Publik from "../../../assets/images/publik.jpg";
import Goverment from "../../../assets/images/goverment.jpg";
import Galeri from "../../../assets/images/galeri.jpg";
import Button from "../../../components/atom/Button";
function Sample() {
  return (
    <div className="my-20 gap-x-6 flex flex-row">
      <div className="ml-auto">
        <FeaturedMenuDua image={Publik} button={<a>Layanan Publik</a>} />
      </div>
    </div>
  );
}

export default Sample;
