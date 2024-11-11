const router = require('express').Router();
const studentsController = require("../controllers/studentsController");

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Get a list of students
 *     description: Retrieve a list of students from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of students.
 */
router.get('/', studentsController.getAll);

/**
 * @swagger
 * /students/{id}:
 *   get:
 *     summary: Get a list of students
 *     parameters:
 *        - in: path
 *          name: id
 *          type: string
 *          required: true
 *     description: Retrieve a list of students from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of students.
 */
router.get('/:id', studentsController.getSingle);

/**
 * @swagger
 * /students:
 *   post:
 *     summary: Create a student.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: The students first name.
 *                 example: Leanne 
 *               lastName:
 *                 type: string
 *                 description: The students last name.
 *                 example: Graham
 *               email:
 *                 type: string
 *                 description: The students email.
 *                 example: leanneg@gmail.com
 *               number:
 *                 type: int
 *                 description: Number
 *                 example: 22
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               
*/
router.post('/', studentsController.postCreate);

/**
 * @swagger
 * /students/{id}:
 *   put:
 *     summary: Update a student.
 *     parameters:
 *        - in: path
 *          name: id
 *          type: string
 *          required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: The students first name.
 *                 example: Leanne 
 *               lastName:
 *                 type: string
 *                 description: The students last name.
 *                 example: Graham
 *               email:
 *                 type: string
 *                 description: The students email.
 *                 example: leanneg@gmail.com
 *               number:
 *                 type: int
 *                 description: Number
 *                 example: 22
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               
*/
router.put('/:id', studentsController.updateSingle);

/**
 * @swagger
 * /students/{id}:
 *   delete:
 *     summary: Delete a list off students
 *     parameters:
 *        - in: path
 *          name: id
 *          type: string
 *          required: true
 *     description: Retrieve a list of students from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of students.
 */
router.delete('/:id', studentsController.deleteSingle);

module.exports = router;