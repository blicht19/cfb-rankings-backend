const app = require("express")();
const axios = require("axios");
require("express");
require("dotenv").config();

const PORT = 8080;
const API_KEY = process.env.API_KEY;

app.listen(PORT, () => console.log(`It's alive on http://localhost:${PORT}`));

app.get("/advanced-stats", async (req, res) => {
  const exclude = req.query.excludeGarbageTime?.trim()?.toLowerCase();
  if (exclude !== "true" && exclude !== "false") {
    return res
      .status(400)
      .send({ message: "excludeGarbageTime must be specified" });
  }
  axios
    .get(
      `https://api.collegefootballdata.com/stats/season/advanced?year=2023&excludeGarbageTime=${exclude}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    )
    .then((response) => {
      if (response.status === 200) {
        const stats = [];
        response.data.map((team) => {
          stats.push({
            id: team.team,
            teamName: team.team,
            offensivePPA: team.offense.ppa,
            offensiveSuccessRate: team.offense.successRate,
            offensiveExplosiveness: team.offense.explosiveness,
            offensivePowerSuccess: team.offense.powerSuccess,
            offensiveStuffRate: team.offense.stuffRate,
            offensiveLineYards: team.offense.lineYards,
            offensiveSecondLevelYards: team.offense.secondLevelYards,
            offensiveOpenFieldYards: team.offense.openFieldYards,
            offensivePointsPerOpportunity: team.offense.pointsPerOpportunity,
            offensiveHavoc: team.offense.havoc.total,
            offensiveRushingPPA: team.offense.rushingPlays.ppa,
            offensiveRushingSuccessRate: team.offense.rushingPlays.successRate,
            offensiveRushingExplosiveness:
              team.offense.rushingPlays.explosiveness,
            offensivePassingPPA: team.offense.passingPlays.ppa,
            offensivePassingSuccessRate: team.offense.passingPlays.successRate,
            offensivePassingExplosiveness:
              team.offense.passingPlays.explosiveness,
            defensivePPA: team.defense.ppa,
            defensiveSuccessRate: team.defense.successRate,
            defensiveExplosiveness: team.defense.explosiveness,
            defensivePowerSuccess: team.defense.powerSuccess,
            defensiveStuffRate: team.defense.stuffRate,
            defensiveLineYards: team.defense.lineYards,
            defensiveSecondLevelYards: team.defense.secondLevelYards,
            defensiveOpenFieldYards: team.defense.openFieldYards,
            defensivePointsPerOpportunity: team.defense.pointsPerOpportunity,
            defensiveHavoc: team.defense.havoc.total,
            defensiveRushingPPA: team.defense.rushingPlays.ppa,
            defensiveRushingSuccessRate: team.defense.rushingPlays.successRate,
            defensiveRushingExplosiveness:
              team.defense.rushingPlays.explosiveness,
            defensivePassingPPA: team.defense.passingPlays.ppa,
            defensivePassingSuccessRate: team.defense.passingPlays.successRate,
            defensivePassingExplosiveness:
              team.defense.passingPlays.explosiveness,
          });
        });
        res.status(200).send(stats);
      } else {
        response
          .status(404)
          .send({ message: "Request to CFB Data api has failed" });
      }
    });
});
