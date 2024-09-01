import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, detachBot, deleteBot }) {
  const enlistedClasses = [];

  const handleEnlist = (bot) => {
    if (!enlistedClasses.includes(bot.bot_class)) {
      enlistedClasses.push(bot.bot_class);
      detachBot(bot);
    }
  };

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots.length > 0 ? (
            bots.map(bot => (
              <BotCard
                key={bot.id}
                bot={bot}
                clickEvent={() => detachBot(bot)}
                deleteBot={() => deleteBot(bot)}
                onEnlist={() => handleEnlist(bot)}
              />
            ))
          ) : (
            <div className="column">No bots in your army</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;



