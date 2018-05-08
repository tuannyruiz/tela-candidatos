const faker = require('faker');

function randomFakerArray(fakerFunction, count = 3) {
  const skills = [];
  const quantity = Math.floor(Math.random() * count + 1);

  for (let i = 0; i < quantity; i++) {
    skills[i] = fakerFunction();
  }

  return skills;
}

function randomImage() {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3t6G9F-_qMdD6gzo2SSN8UcRVLRvDZ0ecTy9Gfc6G1eOGl1k2g',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWfkA6fPozy8qlbL8q282B2jWo10s-UK2bYFLv1b_v32r5TAF',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0neKRQyuf7odPm_wdWiix_fY9XJzGJ0X0qIBfqotD7hxrpoWf',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5h2mHQQvzoS8DMiNkKScClhMB-kHPqfQ20qATaxmNkyydpIIc',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Q9v1R_EyzZChUImnSLYPB5GqjrlIqKJt1ALA-uCgVupa4My5MQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhQathS57B9Us3k_Q7cXO8bLlY2WNVQypTuoSbTP5KgEqtAR8Vyw',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmEY24VfmZUwPiFt2tQdUTHuRZ-PTMtBL3B53SvmexSiy6P7V0ew',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTmX8h2yJooPnz1lLnianY7j68kX3kpCAlYQd4W70OJ1hOual',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxH70ng_wq4hbp-xT5XDSqCVIVgh7dpB_zb9Swssav4vOOeglA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxBEGXeDuRWw78tYdmWZGknmgYW4mpbha47kIxh3Y700J7TDcjmw',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdOhFVsKLS_kFQfj92b4WHp5-8Riq4Splod0AsJvZaSqYf-6DBg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQO-gwRdIhrSGtI6e-AAy_S4YvMtVhKouMwE3sgwEFXJ82EnBDSA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ_j2Rf4KrdM1VxZasaeKScN6_zGkZkxKFda_lmHYtwyWTWyeDYw',
  ];

  return images[Math.floor(Math.random() * images.length)];
}

module.exports = () => {
  const data = { candidates: [] };

  for (let i = 0; i < 15; i++) {
    data.candidates.push({
      id: i,
      imageUrl: randomImage(),
      name: faker.name.findName(),
      newThisWeek: Math.random() >= 0.7,
      career: faker.name.jobTitle(),
      lastCompanies: randomFakerArray(faker.company.companyName),
      university: faker.address.state(),
      cities: randomFakerArray(faker.address.city, 10),
      mainSkills: randomFakerArray(faker.name.jobArea),
    });
  }

  return data;
};
