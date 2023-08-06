const express = require("express");
const router = express.Router();
const {
  createRelation,
  getAllRelations,
  getRelationById,
  updateRelation,
  deleteRelation,
} = require("../Controllers/relationController");
const authenticateUser = require("../Middleware/auth");

// Create a new relation
router.post("/", authenticateUser, createRelation);

// Read all relations
router.get("/", authenticateUser, getAllRelations);

// Read a single relation by ID
router.get("/:id", authenticateUser, getRelationById);

// Update a relation by ID
router.put("/:id", authenticateUser, updateRelation);

// Delete a relation by ID
router.delete("/:id", authenticateUser, deleteRelation);

module.exports = router;
