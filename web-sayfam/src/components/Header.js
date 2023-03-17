import image from "../images/profile.jpg";
const Header = () => {
  return (
    <div className="  Header">
      <div className=" headerSecondDiv ">
        <h3 className=" headerH3">Hi!👋</h3>

        <h2 className=" headerAbout">
          Ben Selahattin Tolga.Full-stack developer olma yolunda ilerlemekteyim.
          Kariyerimin bu noktasında react ile kulanılabilir projeler
          üretebilmekteyim.
        </h2>
        <link
          type="image/png"
          sizes="16x16"
          rel="icon"
          href=".../icons8-linkedin-2-16.png"
        ></link>
      </div>

      <img className=" headerİMG " src={image} alt="benimresim" />
    </div>
  );
};
export default Header;
