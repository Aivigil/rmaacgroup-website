module.exports = {
  apps: [
    {
      name: 'rmaacgroup-website',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      cwd: '/root/rmaac-new/rmacc-website/frontend',
      instances: 'max', // Use all available CPU cores
      exec_mode: 'cluster', // Enable cluster mode for load balancing
      watch: false,
      max_memory_restart: '1G', // Restart if memory exceeds 1GB
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: '/var/log/pm2/rmaacgroup-error.log',
      out_file: '/var/log/pm2/rmaacgroup-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      listen_timeout: 10000,
      kill_timeout: 5000,
    },
  ],
};
