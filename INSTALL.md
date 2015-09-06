# Installation

## Dependencies

- Cocos >= v2.2.8
- Cocos2d-js >= v3.6.1
- Apache Ant >= v1.9.4

> Note: this project doesn't strictly tied to the versions above -- they are just proved working.

## Setup environment

### Clone project

You will need to use Git to clone this project. Please run the command as follow: 

```sh
git clone https://github.com/jasson15/crazy-fruit-market.git
```

### Cocos

Cocos eases the pain when designing scenes, sprites and nodes. Without Cocos, you will have to hard code each position of the nodes, build the project and finally run it to see the results.

Currently, Cocos can be runned on Mac OS X and Windows. You can download it from [here][cocos].

After the installation, you can open the project by selelecting `CrazyFruitMarket.ccs`.

### cocos2d-js

You will need to use Cocos2d-js to build and run the project.

You can try a direct download link from the official site [here][cocos2d-js 3.6.1]. If this doesn't work, there are still 2 ways to download it -- [Official site] or [GitHub repository][Cocos2d-js GitHub]. For the GitHub solution, if you need to stick to v3.6.1, please do the following:

```sh
$ git clone https://github.com/cocos2d/cocos2d-js.git
$ cd cocos2d-js
$ git checkout Cocos2d-JS-v3.6.1
# after that you have to follow the installation guide in its README.md ...
```

Notice, *DO NOT* donwload the lite version if you go the official site solution, because that's not what I use during the development.

Once you finish the cocos2d-js environment setup, you have to copy (or make a symbolic link) the `frameworks` folder at the root of this project folder.

```sh
$ cp -r /path/to/cocos2d-js/frameworks /path/to/crazy-fruit-market/frameworks
# or
$ ln -s /path/to/cocos2d-js/frameworks /path/to/crazy-fruit-market/frameworks
```

### Cocos CLI

Once you finish the environment setup, you could use the following command to start the game:

```sh
$ cocos run -p web # run the game during development
# or
$ cocos compile -p web -m release # build the game
```

### Docker

Docker eases the pain of environment setup. To build and run up the game from scratch, you could build it as following:

```sh
$ docker build -t crazy-fruit-market .
$ docker run -d -p 8000:8000 crazy-fruit-market
```

[cocos]: http://www.cocos2d-x.org/download
[cocos2d-js 3.6.1]: http://www.cocos2d-x.org/filedown/cocos2d-js-v3.6.1.zip
[Official site]: http://www.cocos2d-x.org
[Cocos2d-js GitHub]: https://github.com/cocos2d/cocos2d-js
