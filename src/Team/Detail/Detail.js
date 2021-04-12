import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Detail.css";
import malePhoto from "../../Images/Photo/male.png";
import femalePhoto from "../../Images/Photo/female.png";
import facebook from "../../Images/Icon/Facebook.png";
import youtube from "../../Images/Icon/YouTube.png";
import twitter from "../../Images/Icon/Twitter.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { farCountry } from "@fortawesome/free-solid-svg-icons";
const Detail = () => {
  let { id } = useParams();
  console.log(id);

  const [detail, setDetail] = useState({});

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDetail(data.teams[0]));
  }, [id]);
  const {
    strTeam,
    intFormedYear,
    strSport,
    strTeamBadge,
    strDescriptionEN,
    strGender,
    strCountry,
    strFacebook,
    strTwitter,
    strYoutube,
  } = detail;
  const imageByGender = strGender === "Male" ? malePhoto : femalePhoto;
  //   console.log(strTeam);

  return (
    <div>
      <div className="head-container">
        <img src={strTeamBadge} className="top-logo img-fluid" alt="" />
      </div>
      <div className="body-container">
        <div className="container p-4">
          <div className="team-detail row d-flex justify-content-between rounded p-3">
            <div className="col-md-6 font-weight-bold text-left p-2 ">
              <h1>{strTeam} </h1>
              <h5>
                <i class="fas fa-calendar-alt"></i> Founded : {intFormedYear}{" "}
              </h5>
              <h5>
                <i className="far fa-flag"></i>Country: {strCountry}{" "}
              </h5>
              <h5>
                <i class="far fa-futbol"></i> Sport type: {strSport}{" "}
              </h5>
              <h5>
                <i className="fas fa-mars"></i> Gender: {strGender}{" "}
              </h5>
            </div>
            <div className="col-md-6">
              <img
                src={imageByGender}
                height="200px"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="description text-start mt-4">
            <p> {strDescriptionEN} </p>
            <br />
            <p> {strDescriptionEN} </p>
          </div>
        </div>
        <div className="footer-icon d-flex justify-content-center ">
          <a
            href={`https://${strYoutube} `}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={youtube} alt="youtube" />{" "}
          </a>
          <a
            href={`https://${strFacebook} `}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={facebook} alt="youtube" />{" "}
          </a>
          <a
            href={`https://${strTwitter} `}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img src={twitter} alt="youtube" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Detail;
