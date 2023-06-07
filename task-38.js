//mongosh

// Design database for Zen class programme

//use task-38-Zen-class-programme

//show collections

// users
db.users.insertMany([
  { _id: 1, name: "Naveen", email: "nav123@gmail.com", batch: "b38wd Tamil" },
  { _id: 2, name: "Deepa", email: "deepa123@gmail.com", batch: "b38wd Tamil" },
  { _id: 3, name: "Sathish", email: "sath123@gmail.com", batch: "b40wd Tamil" },
  { _id: 4, name: "Aadvik", email: "aadh123@gmail.com", batch: "b41wd Tamil" },
  { _id: 5, name: "Vidun", email: "vid123@gmail.com", batch: "b42wd Tamil" },
]);

// codekata
db.codekata.insertMany([
  { _id: 1, name: "Naveen", codekata_solved: 78, batch: "b38wd Tamil" },
  { _id: 2, name: "Deepa", codekata_solved: 103, batch: "b38wd Tamil" },
  { _id: 3, name: "Sathish", codekata_solved: 123, batch: "b40wd Tamil" },
  { _id: 4, name: "Aadvik", codekata_solved: 137, batch: "b41wd Tamil" },
  { _id: 5, name: "Vidun", codekata_solved: 200, batch: "b42wd Tamil" },
]);

// attendance
db.attendance.insertMany([
  { _id: 1, name: "Naveen", atten: 97, batch: "b38wd Tamil" },
  { _id: 2, name: "Deepa", atten: 100, batch: "b38wd Tamil" },
  { _id: 3, name: "Sathish", atten: 95, batch: "b40wd Tamil" },
  { _id: 4, name: "Aadvik", atten: 100, batch: "b41wd Tamil" },
  { _id: 5, name: "Vidun", atten: 80, batch: "b42wd Tamil" },
]);

// topics
db.topics.insertMany([
  { class: "React.js", month: "october" },
  {
    class: "MongoDB",
    month: "october",
  },
  {
    class: "Node.js",
    month: "october",
  },
  { class: "Datastructure & Algorithm", month: "october" },
  { class: "AWS", month: "october" },
]);

// tasks
db.tasks.insertMany([
  {
    _id: 1,
    name: "Naveen",
    task_percentage: "78%",
    batch: "b38wd Tamil",
    month: "october",
  },
  {
    _id: 2,
    name: "Deepa",
    task_percentage: "60%",
    batch: "b38wd Tamil",
    month: "october",
  },
  {
    _id: 3,
    name: "Sathish",
    task_percentage: "60%",
    batch: "b40wd Tamil",
    month: "october",
  },
  {
    _id: 4,
    name: "Aadvik",
    task_percentage: "100%",
    batch: "b41wd Tamil",
    month: "october",
  },
  {
    _id: 5,
    name: "Vidun",
    task_percentage: "53%",
    batch: "b42wd Tamil",
    month: "october",
  },
]);

// company_drives
db.company_drives.insertMany([
  {
    company_name: "Meta",
  },
  {
    company_name: "Apple",
  },
  {
    company_name: "Netflix",
  },
  {
    company_name: "Google",
  },
  {
    company_name: "Zoho",
  },
  {
    company_name: "TATA",
  },
]);

// mentors
db.mentors.insertMany([
  { mentor_name: "Sathish", mentee_count: 200 },
  { mentor_name: "Ruban", mentee_count: 100 },
  { mentor_name: "RagavKumar", mentee_count: 400 },
]);

// Find all the topics and tasks which are thought in the month of October
db.topics.find({ month: "october" });
db.tasks.find({ month: "october" });

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.company_drives.find({});

// Find all the company drives and students who are appeared for the placement.
db.company_drives.find({});

// Find the number of problems solved by the user in codekata
db.codekata.find({});
// Find all the mentors with who has the mentee's count more than 15
db.mentors.find({ mentee_count: { $gt: 15 } });
// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.attendance.find({ atten: { $lt: 90 } });
