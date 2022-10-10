import  express  from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts  from './routers/posts.js';
import {mongoose} from 'mongoose';


const app= express();
const PORT =process.env.port || 5000;
const URI='mongodb+srv://admin:12345@cluster0.nayzxit.mongodb.net/demo?retryWrites=true&w=majority'

app.use(cors());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));

app.use('/posts',posts);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('err', err);
  });



