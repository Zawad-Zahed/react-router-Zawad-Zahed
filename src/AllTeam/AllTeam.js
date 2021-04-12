import React, { useEffect, useState } from "react";
// import Header from "../Header/Header";
import Team from "../Team/Team";

const AllTeam = () => {
  const [teams, setTeams] = useState([]);
  const allTeams = teams.slice(0, 12);
  // const leagueTwelve = leagues.slice(0,12);
  console.log(allTeams);
  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTeams(data.teams));
  }, []);
  return (
    <div className="row md-2">
      {allTeams.map((team) => (
        <Team key={team.idTeam} team={team}></Team>
      ))}
    </div>
  );
};

export default AllTeam;
