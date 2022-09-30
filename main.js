const simpleGit = require("simple-git");
const jsonfile = require("jsonfile");
const random = require("random");
const moment = require("moment");
const FILE_PATH = "./data.json";

const makeCommit = (n) => {
  if (n === 0) return simpleGit().push();
  console.log(`\n├─ Commit ${n}\n│`);
  const x = random.int(0, 54);
  const y = random.int(0, 6);
  const DATE = moment()
    .subtract(0.6, "y")
    .add(0, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

  const formattedDate = moment(DATE).format("L");

  const data = {
    date: formattedDate,
  };

  console.log(`└─ Creating commit at : ${formattedDate}...`);

  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit()
      .add([FILE_PATH])
      .commit(
        `ahhh: create commit at ${formattedDate}`,
        { "--date": DATE },
        makeCommit.bind(this, --n)
      )
      .push();
  });
};

makeCommit(4700);
