module.exports = {
  apps: [
    {
      name: 'pkm',
      script: 'serve src -n -p 1000', // Path to the compiled main.js file
      instances: 1, // Number of instances to run
      autorestart: true, // Automatically restart the app if it crashes
      watch: false, // Set to true to enable file watching and automatic restart on file changes
      max_memory_restart: '1G', // Maximum memory usage before app restart
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
