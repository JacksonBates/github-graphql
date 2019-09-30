# Graphql and Hooks Demo, using Github graphql API

A simple app that queries the Github API for a username and returns a list of the first 100 followers for that user.

## Usage

The demo requires a Personal Access Token with read:user privileges to query the GitHub API. You can get a token here: [https://github.com/settings/tokens/new](github.com/settings/tokens/new)

From the web UI you can simply paste a read:user PAT from GitHub into the input field prompting you for it. This will write the token to your local storage. Clearing your cache will lose the tokem, so ensure you have a record of it. GitHub will not store a retrivable version of the token for you.

If you decide to run the app locally, you can add the token to a `.env` file.

Read the `.env.example` file for instructions on obtaining your token.

**Do not deploy your token in client bundles as is demonstrated in this repo (e.g. via GitHub pages) - this app is only intended for local demonstration purposes**
