import { SapphireClient, container } from "@sapphire/framework";
import { GatewayIntentBits } from "discord.js";
import config from "./config.json";
import { Controller } from "./controllers/Controller";
import axios from "axios";

// Create the controller object
container.controller = new Controller();

// Set axios defaults
axios.defaults.headers.common["Authorization"] = config.clickupToken;
axios.defaults.baseURL = config.clickupEndpoint;

// Initiate the Sapphire client
const client = new SapphireClient({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildVoiceStates],
});

// Login the bot
client.login(config.token);
