const mongoose = require('mongoose');
async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/mqtt_dev', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('MongoDB Connect Successfully!');
  } catch (error) {
    console.log('MongoDB Connect Failure!');
  }
}

module.exports = { connect };
