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
              🏆 {playerData.trophies} / {playerData.bestTrophies}{" "}
            </p>
            <p>🏟️ {playerData.arena?.name}</p>
            <p>
              🎮 {playerData.battleCount} ✅ {playerData.wins} ❌{" "}
              {playerData.losses}
            </p>
            {playerData?.clan ? (
              <p>
                🛡️ {playerData?.clan?.name || "Not have clan"} |{" "}
                {playerData.role}
              </p>
            ) : (
              <p>🛡️ Not have clan</p>
            )}
          </div>
        </div>
      </>
    ) : (
      <>
        <p className="mt-4 mb-4">Faça uma busca</p>
      </>
    );
  }
}

export default Cabecalho;
