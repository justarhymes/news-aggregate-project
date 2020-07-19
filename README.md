Fullstack Vue, Node, GraphQL, MongoDB. 2 apps for FE and BE, that use NewsAPI ([https://newsapi.org/](https://newsapi.org/)) to allow users to see, visit and save links to current headlines.

### CLI Setup

Set up instructions needed to run project if not already installed.

Example using brew:

```zsh
## Install brew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
brew doctor

## Install Yarn / Node
brew install yarn

## Install git
brew install git
```

### Project Setup

CD into a the directory you want the project to be, and clone the repository.

```zsh
git clone https://github.com/justarhymes/news-aggregate-project.git
```

#### Backend

After that has finished, we'll first setup the server

```zsh
cd server

## install yarn packages
yarn

## Create .env file
touch .env
```

Open up the .env file in your code editor, and set the needed variables

Right now PORT is manually entered on the FE, So unless you change that, keep it as `8000` for now. I recommend using [mongodb.com](https://www.mongodb.com/) for the mongodb uri, as each project gets one free cluster.

Register for an API key on [NewsAPI](https://newsapi.org/).

Example:

```
NODE_ENV=development
PORT=8000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.hnp0w.mongodb.net/<dbname>?retryWrites=true&w=majority
NEWSAPI_KEY=<newsapikey>
```

Start up the server

```zsh
yarn dev
```

The GraphQL playground can be accessed at `http://localhost:8000`

#### Frontend

Next, we'll set up the client. Open up a new tab, so the server will keep on running.

Setup is the same as the server.

```zsh
cd ../client

## install yarn packages
yarn
```

There's no env vars to set up at the moment, so you can start up the client.

```zsh
yarn serve
```

The client app can be reached at `http://localhost:8080`.

## Notes

- I wanted to go with a GraphQL based system on this, because of how nicely it can pull together APIs from different sources into one.
- Apollo is a very well kept and popular library, so it made sense to use that to tie everything together on both the BE and FE.
- I selected MongoDB just because I know it better than most other DB providers. Postgres was an option too, but I'm not as familiar setting that up with Node.
- I made use of Express too, even though I didn't quite need it for how this is set up, but I think it works nicely with Apollo, and would be even better if there were other routing options coming from the server (such as if this was a monolith web app).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
