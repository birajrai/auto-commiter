# GitHub Auto Commiter

Does your GitHub Graph looks like a noob with a few number of Commits and Push? Do you want to have your contribution graph with lots of commit like pro. This project can helps you!

## Introduction

The project generates random commit at random past days, months, years. uses [Moment](https://www.npmjs.com/package/moment), a JavaScript date library for parsing, validating, manipulating, and formatting dates. It allows you to make a commit on past date done by subtracting the years from given date and make commits over a period of regular days. Also you can do alot with this code.

## Installation

### Clone or fork the repository

```sh
# Clone method
$ git clone https://github.com/birajrai/auto-commiter.git
$ cd auto-commiter

# If you forked this repo
$ git clone https://github.com/your-username/auto-commiter.git
$ cd auto-commiter
```

### Install Required Dependencies

```sh
# Yarn
$ yarn install
```

### Run the project to see the magic of moment package

```sh
# Yarn
$ yarn start
# dum
$ dum start
```

Boom! You can see the commit date in terminal.

## Scripts

Available scripts at [package.json](./package.json)

| Name  | Script       | Description              |
| ----- | ------------ | ------------------------ |
| Start | `yarn start` | Compile & Run the script |
| Lint  | `yarn lint`  | Lint checking            |

## Commits

By Default, While you running `yarn start`, It will generates `700` GitHub Commits in `1.1` Past Year.

### You can change how many value, or year, days as you wants.

```js
subtract(year, "y");
```

Year here represents the year to start the commits. Greater the value of year, more dense the graph along main axis. Example: `subtract(2,'y')`

```js
add(days, "d");
```

Difference of commits between timestamps. Less the value of days, more dense the contributon graph will be. Example: `add(4,'d')`

```js
makeCommit(700);
```

At the end line of `index.js`, You'll see this. This is how many you want to make GitHub Commits. By Default, It's set to `700`. You can change the value to `1000`, higher, or more less.

## License

This Project is Licensed Under [MIT License](./LICENSE)
