module.exports = {
  apps: [
    {
      name: 'rmaacgroup-website-dev',
      script: 'node_modules/next/dist/bin/next',
      args: 'dev',
      cwd: '/root/rmaac-new/rmacc-website/frontend',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
      error_file: '/var/log/pm2/rmaacgroup-dev-error.log',
      out_file: '/var/log/pm2/rmaacgroup-dev-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
    },
  ],
};
