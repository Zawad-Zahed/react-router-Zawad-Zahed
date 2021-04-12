import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Team = (props) => {
  const { idTeam, strTeam, strSport, strTeamBadge } = props.team;
  let history = useHistory();
  const handleClick = () => {
    const url = `/team/${idTeam}`;
    history.push(url);
  };

  return (
    <>
      <div className="body-container col-md-3 p-5 m-5">
        <div className="card m-3 p-3">
          <img src={strTeamBadge} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{strTeam}</h5>
            <p className="card-text">{strSport}</p>
            <Button
              onClick={() => handleClick()}
              type="button"
              className="btn btn-primary"
            >
              Explore <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
