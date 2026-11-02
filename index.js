const mineflayer = require('mineflayer')

const config = {
    host: 'thelostmc2-0.mcsh.gg',     // Your server's exact IP address
    port: 25565,                     // Default Minecraft network port
    username: 'ServerKeeper247',     // The custom bot username
};

function createBot() {
    console.log(`[Bot] Connecting to ${config.host}:${config.port} as ${config.username}...`);
    
    const bot = mineflayer.createBot({
        host: config.host,
        port: config.port,
        username: config.username,
        version: config.version,
        auth: 'offline' // Crucial for cracked servers
    });

    bot.once('spawn', () => {
        console.log('[Bot] Inside the server! Standing still for the water contraption.');
    });

    // Auto-Reconnect System
    bot.on('end', () => {
        console.log('[Bot] Disconnected from server. Attempting reconnection in 15 seconds...');
        setTimeout(createBot, 15000);
    });

    bot.on('error', (err) => {
        console.error('[Bot] Network Error encountered:', err);
    });
}

createBot();
