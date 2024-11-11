const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('students').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
      const result = await mongodb
        .getDb()
        .db()
        .collection('students')
        .find({ _id: req.params.id });
      result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
      });
    };
const postCreate = async (req, res, next) => {
        //   const userId = new ObjectId(req.params.id);
    console.log(req.body)
const student = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    number: req.body.number
}
    const result = await mongodb
    .getDb()
    .db()
    .collection('students')
    .insertOne(student);
    if (result.acknowledged) {
        res.status(201).json(result);
    } else {
        res.status(500).json(result.error || `Some Error Occured When Inserting.`)
    }
        
};

const updateSingle = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    console.log(req.body)
  const student = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    number: req.body.number
  }
    const result = await mongodb
      .getDb()
      .db()
      .collection('students')
      .replaceOne({_id: userId}, student);
      if (result.modifiedCount > 0) {
        res.status(204).send();
      } else {
        res.status(500).json(result.error || `Some Error Occured When Updating.`)
      }
  
  };

  const deleteSingle = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    console.log(req.body)
    const result = await mongodb
      .getDb()
      .db()
      .collection('students')
      .deleteOne({_id: userId});
      if (result.deletedCount > 0) {
        res.status(204).send();
      } else {
        res.status(500).json(result.error || `Some Error Occured When Deleting.`)
      }
  
  };

module.exports = { getAll, getSingle, postCreate, updateSingle, deleteSingle };
