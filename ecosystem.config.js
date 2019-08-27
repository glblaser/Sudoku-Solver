module.exports = {
  apps: [{
    name: 'Cart',
    script: './server/server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-14-236-144.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/Zbay.pem',
      ref: 'origin/master',
      repo: 'https://github.com/glblaser/Sudoku-Solver',
      path: '/home/ubuntu/Sudoku',
      'post-deploy': 'npm install && npm run build && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
