const express = require('express');
const router = express.Router();

// Conroller
const { addMember, getMembers } = require('../controller/Member');
const { addBook, getBooks } = require('../controller/Books');
const { addPetugas, getPetugas } = require('../controller/Petugas');
const { addPeminjaman, getAllPeminjaman } = require('../controller/Peminjaman');
const { addPengembalian } = require('../controller/Pengembalian');
// Route
router.post('/add', addMember);
router.get('/show-members', getMembers);

router.post('/add-book', addBook);
router.get('/show-books', getBooks);

router.post('/add-petugas', addPetugas);
router.get('/show-petugas', getPetugas);

router.post('/add-pinjam', addPeminjaman);
router.get('/show-peminjaman', getAllPeminjaman);

router.post('/add_pengembalian', addPengembalian);

module.exports = router;
