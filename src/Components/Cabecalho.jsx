import React from "react";

class Cabecalho extends React.Component {
  render() {
    const { playerData } = this.props;

    return playerData ? (
      <>
        <div className="card mt-4">
          <div className="card-body">
            <h5>{playerData.name}</h5>
            <p>
              ๐ {playerData.trophies} / {playerData.bestTrophies}{" "}
            </p>
            <p>๐๏ธ {playerData.arena?.name}</p>
            <p>
              ๐ฎ {playerData.battleCount} โ {playerData.wins} โ{" "}
              {playerData.losses}
            </p>
            {playerData?.clan ? (
              <p>
                ๐ก๏ธ {playerData?.clan?.name || "Not have clan"} |{" "}
                {playerData.role}
              </p>
            ) : (
              <p>๐ก๏ธ Not have clan</p>
            )}
          </div>
        </div>
      </>
    ) : (
      <>
        <p className="mt-4 mb-4">Faรงa uma busca</p>
      </>
    );
  }
}

export default Cabecalho;
