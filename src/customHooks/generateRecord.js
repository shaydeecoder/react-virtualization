import { faker } from "@faker-js/faker";
import { loremIpsum } from "lorem-ipsum";

const generateRecord = (count) => {
  let records = [];

  for (let i = 0; i < count; i++) {
    records.push({
      userId: faker.datatype.uuid(),
      avatar: faker.image.avatar(),
      // avatar: "http://via.placeholder.com/40",
      username: faker.internet.userName(),
      email: faker.internet.email(),
      bio: loremIpsum({
        count: 1,
        units: "sentences",
        sentenceLowerBound: 4,
        sentenceUpperBound: 8
      })
    });
  }

  return records;
};

export default generateRecord;
