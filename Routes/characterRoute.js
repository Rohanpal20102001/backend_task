const express = require("express");
const router = express.Router();
const {
  createCharacter,
  getAllCharacters,
  getCharacterById,
  updateCharacter,
  deleteCharacter,
} = require("../Controllers/characterController");
const authenticateUser = require("../Middleware/auth");

// Create a new character
router.post("/", authenticateUser, createCharacter);

// Read all characters
router.get("/", authenticateUser, getAllCharacters);

// Read a single character by ID
router.get("/:id", authenticateUser, getCharacterById);

// Update a character by ID
router.put("/:id", authenticateUser, updateCharacter);

// Delete a character by ID
router.delete("/:id", deleteCharacter);

module.exports = router;
