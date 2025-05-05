const missions = [
    {
        id: "op-zephyr",
        name: "Operation Zephyr",
        location: "Zurich, Switzerland",
        featured: true,
        agents: []
    },
    {
        id: "prague-retrieval",
        name: "Asset Retrieval: Prague",
        location: "Prague, Czech Republic",
        featured: false,
        agents: []
    },
    {
        id: "ring-infiltration",
        name: "Infiltrate The Ring",
        location: "Los Angeles, USA",
        featured: false,
        agents: []
    },
    {
        id: "nightfall",
        name: "Project Nightfall",
        location: "Seoul, South Korea",
        featured: false,
        agents: []
    },
    {
        id: "ghost-train",
        name: "Ghost Train Protocol",
        location: "Tokyo, Japan",
        featured: false,
        agents: []
    }
];

const agentPool = [
    {
        codename: "Agent Frostbite",
        specialty: "Infiltration"
    },
    {
        codename: "Shadow Fox",
        specialty: "Hacking"
    },
    {
        codename: "Echo Viper",
        specialty: "Combat"
    },
    {
        codename: "Whisper",
        specialty: "Surveillance"
    },
    {
        codename: "Nova Blaze",
        specialty: "Deception"
    },
    {
        codename: "Cipher Ghost",
        specialty: "Cryptography"
    },
    {
        codename: "Blitzkrieg",
        specialty: "Demolitions"
    },
    {
        codename: "Drift Falcon",
        specialty: "Flight Ops"
    },
    {
        codename: "Pixel Phantom",
        specialty: "Digital Espionage"
    },
    {
        codename: "Zero Mist",
        specialty: "Stealth"
    }
];

module.exports = { missions, agentPool };
