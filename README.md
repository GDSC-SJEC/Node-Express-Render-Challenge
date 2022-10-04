# Node Express Render Challenge

A challenge to deploy a NodeJS Express app on [render](https://render.com/) for Hacktoberfest 2022!<br /><br />
<img src="https://img.shields.io/badge/DIFFICULTY-Easy-228B22?style=for-the-badge&logo=OpenProject" />

## ❇️ What is Hacktoberfest and how do I get started?

Hacktoberfest is a month-long celebration of open source, organised by Digital Ocean. ([More details here](https://hacktoberfest.com/participation/))

If you've never made a pull request before, or participated in an open-source project, we recommend taking a look at these resources:

- [Firstcontributions](https://github.com/firstcontributions/first-contributions)
- [Digitalocean's guide to creating your first pull request](https://www.youtube.com/watch?v=nkuYH40cjo4)

These two resources have everything you need to learn about open-source, with a step-by-step guide to making your very first PR. Once you've got your feet wet, you're ready to come back and dive into Hacktoberfest fun!

## ❇️ Rules

- Deploy the Express app in the repo to [render](https://render.com/)

## ❇️ How to contribute

1. First up you need to fork (make a copy) of this repo to your Github account.

2. Clone (download) your fork to your computer.

3. Set your streams so you can sync your clone with the original repo (get the latest updates).

   - `git remote add upstream https://github.com/GDSC-SJEC/Node-Express-Render-Challenge.git`
   - `git pull upstream main`
   - The above 2 commands will synchronize your forked version of the project with the actual repository.

4. Create a branch.

5. Deploy the app in the fork to [render](https://render.com/)

   - You can follow the steps for deploying a NodeJS app [here](https://render.com/docs/deploy-node-express-app)
   - **Make sure you select the Ohio(US East) region while deploying the app**
   - Note the url of the deployed app.

6. Modify the contribs.json file to include details about your github username and the deployed url of the app.

   - The modification should should follow the following format:
   <br/><br/>
   ```
   [
      ... ,
      {
        "github_username": "your-github-username",
        "render_deploy_url": "your-app-deploy-url"
      }
   ]
   ```

7. Open the file `CONTRIBUTORS.md` and add your name with your github URL.
   <br />Note: The format is `- [Your Name](https://github.com/yourgithubusername)`


8. Pull from the upstream again, like we did in step 3. This is to ensure we still have the latest code.

    - `git pull upstream main`

9. Commit and push the code to your fork.

10. Create a pull request to have the changes merged from your fork into the origin.

> Congratulations! You are now one pull request closer to getting that free t-shirt. Repeat these steps until you have made at least 4 qualifying pull requests. You can check how many qualifying pull requests you have made at <https://hacktoberfest.com/profile/> Have fun and Happy coding!

**Stuck? No problem! You can come talk to us in our discord server and we're here to help you!**