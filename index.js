const express = require('express');
const path = require('path');

const {setANewFeaturedMissionAtRandom,getMissions,getAgents, getMissionById, getMissionByName,addRandomNumberOfAgentsToAMissionForAllMisisons,
    getFeaturedAgentAtRandom,
    getAgentByCodename,
    setHighPriorityAgentAtRandom
} = require("./utils/utils");
const {logger} = require("./utils/logger");

const port = 3000;
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
addRandomNumberOfAgentsToAMissionForAllMisisons()

const featuredMission = setANewFeaturedMissionAtRandom();
const featuredAgent = getFeaturedAgentAtRandom();
const highPriorityAgent = setHighPriorityAgentAtRandom()




app.get('/', function (req, res) {
    logger.log("info", "Home page loaded");
    res.render('home',{missions: getMissions , agents: getAgents, featuredMission: featuredMission, featuredAgent: featuredAgent, highPriorityAgent: highPriorityAgent.agent});
})

app.get('/missions/:missionId', function (req, res) {
    const missionId = req.params.missionId;
    const mission = getMissionById(missionId);
    if (!mission) {
        return res.status(404).send('Mission not found');
    }
    logger.log("info", `Mission page loaded for ${missionId}`);
    res.render('mission', { mission: mission, agents: getAgents() });
});
app.get('/agents/:codename', function (req, res) {
    const codename = req.params.codename;
    const agent = getAgentByCodename(codename);
    if (!agent) {
        return res.status(404).send('Agent not found');
    }
    res.render('agent', { agent: agent });
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})


