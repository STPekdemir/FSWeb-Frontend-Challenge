import React from "react";
import { profileData } from "../profileData";

export const Profile = () => {
  return (
    <>
      <section className="flex  justify-center   bg-[#F4F4F4]">
        <div className="flex rounded-xl bg-white m-24  shadow-lg shadow-cyan-500/50">
          <div className="w-1/2 p-7">
            <h1 className="text-[#EA2678] font-bold text-l  mb-1">
              Basic Information
            </h1>
            <div className="font-bold">
              <p>Doğum Tarihi</p>
              <p>İkamet Şehri</p>
              <p>Eğitim Durumu </p>

              <p>Tercih Ettiği Rol</p>
            </div>
          </div>
          <div className="w-1/2 p-4 mt-16 ">
            <p>{profileData.dogumTarihi}</p>
            <p>{profileData.ikamet}</p>
            <p>{profileData.egitim}</p>
            <p> {profileData.rol}</p>
          </div>
        </div>
        <div className="bg-[#F4F4F4] p-4 m-24 w-1/4">
          <h1
            className="font-
Playfair Display text-2xl mb-4"
          >
            About Me
          </h1>
          <p className="font-ınter">{profileData.hakkında}</p>
        </div>
      </section>
    </>
  );
};
export default Profile;
