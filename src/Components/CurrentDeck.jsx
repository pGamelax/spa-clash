import React from "react";

class CurrentDeck extends React.Component {
  render() {
    const { playerData } = this.props;

    return playerData ? (
      <>
        <div className="card">
          <div className="card-body row text-center ">
            {playerData.currentDeck?.map((card) => (
              <div className="col-sm">
                <img src={card.iconUrls?.medium} width="120px" height="auto"></img>
                <p key={card.id}>{card.level+14-card.maxLevel}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    ) : (
      <></>
    );
  }
}

export default CurrentDeck;
