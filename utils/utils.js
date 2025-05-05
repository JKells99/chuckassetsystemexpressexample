import {agentPool, missions} from "./data.js";


const getAgents = () => {
    return agentPool;
}

const getAgentById = (id) => {
    return agentPool.find(agent => agent.id === id);
}
const getAgentByCodename = (codename) => {
    return agentPool.find(agent => agent.codename === codename);
}
const getMissions = () => {
    return missions;
}
const getMissionById = (id) => {
    return missions.find(mission => mission.id === id);
}
const getMissionByName = (name) => {
    return missions.find(mission => mission.name === name);
}

const addRandomNumberOfAgentsToAMissionForAllMisisons = () => {
    const randomNumberOfAgents = Math.floor(Math.random() * agentPool.length);
    const randomAgents = [];
    for (let i = 0; i < randomNumberOfAgents; i++) {
        const randomIndex = Math.floor(Math.random() * agentPool.length);
        const randomAgent = agentPool[randomIndex];
        if (!randomAgents.includes(randomAgent)) {
            randomAgents.push(randomAgent);
        }
    }
    missions.forEach(mission => {
        mission.agents = randomAgents;
    });
}
const getFeaturedAgentAtRandom = () => {
    const randomIndex = Math.floor(Math.random() * agentPool.length);
    return agentPool[randomIndex];
}

const setANewFeaturedMissionAtRandom = () => {
    const randomIndex = Math.floor(Math.random() * missions.length);
    const randomMission = missions[randomIndex];
    randomMission.featured = true;
    return randomMission;
}

const setHighPriorityAgentAtRandom = () => {
    // Peudo code to set a high priority agent at random
    // I want to loop through all the missions
    // Then I want to look and see which agents are in the mission
    // Then I want to keep a count of how many times each agent is in a mission
    // Then I want to set the agent with the highest count as the high priority agent
    // Then I want to return the agent

    const agentCount = {};
    missions.forEach(mission => {
        mission.agents.forEach(agent => {
            if (agentCount[agent.codename]) {
                agentCount[agent.codename]++;
            } else {
                agentCount[agent.codename] = 1;
            }
        });
    });
    const highPriorityAgent = Object.keys(agentCount).reduce((a, b) => agentCount[a] > agentCount[b] ? a : b);
    const agent = agentPool.find(agent => agent.codename === highPriorityAgent);
    console.log("Beewoop "+ agent.codename);
    return {
        agent: agent.codename,
        count: agentCount[highPriorityAgent]
    };



}
export {
    getAgents,
    getAgentById,
    getAgentByCodename,
    getMissions,
    getMissionById,
    getMissionByName,
    addRandomNumberOfAgentsToAMissionForAllMisisons,
    setANewFeaturedMissionAtRandom,
    getFeaturedAgentAtRandom,
    setHighPriorityAgentAtRandom
}


