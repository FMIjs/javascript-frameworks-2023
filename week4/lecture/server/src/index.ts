import express from 'express';

const app = express();

app.listen(8080, () => {
  console.log('Server is listening on :8080');
})