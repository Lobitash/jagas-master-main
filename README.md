# JAGAS

# Flight Digital Starter Template

This starter template contains the Flight Digital best practise setup for a Gatsby + Sanity build. Clone this repo to your local machine, create a new github project in the Flight Digital github account and then change the remotes.

# Cloning the repo

1. Run `$ git clone` on the current repo to clone it locally
2. Create a new repository inside of the Flight Digital Github account
3. Run `$ git remote -v` to get a list of the current remotes

```shell
$ git remote -v
> origin  git@github.com:USERNAME/REPOSITORY.git (fetch)
> origin  git@github.com:USERNAME/REPOSITORY.git (push)
```

4. Set the remote to the URL of the newly created repository

```shell
$ git remote set-url origin [NEWURL]
```

5. Verify that the origin has changed by running `$ git remote -v` again

# 🌿 Branches

Most up to date: `development`
Production: `master`

# 🚀 Getting started

Create a new project in Sanity

## Sanity:

```shell
  cd sanity
  sanity init
  yarn install
  sanity start
```

## Gatsby:

1. Create `.env.development` file in `./gatsby` directory with these credentials

```shell
  GATSBY_NODE_ENV=development | uat | production
  SANITY_DATASET=development | production
  SANITY_PROJECT_ID=
  SANITY_TOKEN=
  GATSBY_BASE_URL=
```

2. Run in terminal

```shell
  cd gatsby
  yarn install
  gatsby develop
```

Your site is now running at `http://localhost:8000`!

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._
