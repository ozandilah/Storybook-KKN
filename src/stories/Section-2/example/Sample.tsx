import React from "react";
import SectionDua from "../../../components/moleculs/Section-2";

import SectionDuaImage from "../../../assets/images/section-2.png";
import Button from "../../../components/atom/Button";
function Sample() {
  return (
    <div className="my-20 gap-y-28 flex flex-col">
      <SectionDua
        content={{
          preheading: "Profil Desa",
          paragraph:
            "Desa Bandung, Wonosegoro, Boyolali terletak di Kecamatan Wonosegoro, Kabupaten Boyolali, Provinsi Jawa Tengah, Indonesia. Desa ini terletak di bagian utara Kecamatan Wonosegoro, sekitar 10 kilometer dari pusat kota Boyolali. ",
        }}
        image={SectionDuaImage}
        title="image"
        button={
          <Button state="primary">
            <a href="">Learn More</a>
          </Button>
        }
      />
    </div>
  );
}

export default Sample;
