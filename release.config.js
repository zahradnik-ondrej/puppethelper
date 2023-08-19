module.exports = {
    branches: ['master'],
    repositoryUrl: 'https://github.com/zahradnik-ondrej/puppethelper.git',
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/npm',
        [
            '@semantic-release/github',
            {
                githubToken: process.env.GH_PAT
            }
        ]
    ]
};
