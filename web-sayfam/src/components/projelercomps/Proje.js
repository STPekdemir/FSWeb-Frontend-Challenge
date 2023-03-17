import React from "react";
import { nanoid } from "nanoid";
import "../../App.css";
import s6C from "../../resimler/s6chal.jpeg";
import s6g2 from "../../resimler/s6g2.PNG";
import s6g3 from "../../resimler/s6g3.PNG";
import s9g1 from "../../resimler/s9g1.PNG";
import s9g2 from "../../resimler/s9g2.PNG";
import s10C from "../../resimler/s10challenge.PNG";
import s10g1 from "../../resimler/s10g1.PNG";
import s10g2 from "../../resimler/s10g2.PNG";
import s10g3 from "../../resimler/s10g3.PNG";
import s10g4 from "../../resimler/s10g4.PNG";
import s11g1 from "../../resimler/s11g1.PNG";

function Projele({ project }) {
  const topics = project.topics;

  const projectId = project.id;

  const imgData = [
    { id: 607659412, img: s10g1 },
    { id: 607845367, img: s10g2 },
    { id: 608165363, img: s10g3 },
    { id: 609205225, img: s10g4 },
    { id: 613907533, img: s11g1 },
    { id: 586687555, img: s6C },
    { id: 584708023, img: s6g2 },
    { id: 585531751, img: s6g3 },
    { id: 604099022, img: s9g1 },
    { id: 612279185, img: s9g2 },
    { id: 609941847, img: s10C },
  ];
  const imgSource = imgData.find((data) => data.id === projectId);

  return (
    <div>
      <div className="projediv">
        <h2 className="projeİsmi">{project.name}</h2>
        <p className="acıklama">{project.description}</p>
        <div className="topicsDiv">
          {topics.map((topic) => (
            <p key={nanoid()} className="topic">
              {topic}
            </p>
          ))}
        </div>
        <div className="links">
          <a
            href={`${project["html_url"]}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github'da Görüntüle
          </a>
          <a
            href={`${project.homepage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to App
          </a>
        </div>
      </div>
      <div className="laptop">
        <img src={imgSource.img} alt="projeresmi" className="projeresmi" />
      </div>
    </div>
  );
}
export default Projele;
