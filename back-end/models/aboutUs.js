// back-end/routes/aboutUs.js

const express = require('express');
const router = express.Router();

router.get('/about-us', (req, res) => {
  res.json({
    title: "About Us",
    content: "As a college student in the bustling heart of New York, Ethan balances the rigor of academia with the passion that comes from playing basketball, a sport that teaches teamwork and persistence. Whether it's the sound of a swishing net or the collective cheer of a winning play, these moments on the court are a cherished contrast to the quiet focus of drawing. Sketching brings a different kind of fulfillment, one stroke at a time, translating the world's vibrancy onto paper. Off the court and beyond the canvas, Ethan values the simple joys of camaraderie. Hanging out with friends isn’t just a pastime; it’s where memories are made and laughter is shared. Whether it's exploring the diverse neighborhoods of the city, trying out new eateries, or just kicking back to discuss the latest lecture, it’s these shared experiences that round out his life, bringing balance to the demanding life of a student.",
    imageUrl: "http://localhost:7002/images/about-me.png"
  });
});

module.exports = router;
