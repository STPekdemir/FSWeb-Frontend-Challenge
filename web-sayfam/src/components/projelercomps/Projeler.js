import React, { useEffect, useState } from "react";
import "../../App.css";
import axios from "axios";
import Proje from "./Proje";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projeler() {
  const [data, setData] = useState(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  useEffect(() => {
    axios
      .get(
        "https://api.github.com/users/STPekdemir/repos?page=${page}&per_page=100"
      )
      .then((res) => {
        const newData = res.data;

        const filteredData = newData.filter(
          (project) => project.homepage && project.homepage.trim() !== ""
        );
        setData(filteredData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="projelerDivDiv">
      <div className="projelerDiv">
        <h1 className="projelerh1">Projects</h1>
        <Slider {...settings}>
          {data &&
            data.map((project) => <Proje key={project.id} project={project} />)}
        </Slider>
      </div>
    </div>
  );
}
export default Projeler;
