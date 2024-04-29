const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const configURL = require('./config/config');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// app.use('/', (req,res)=>{
//     // res.send("Welocome to the prodect page")
// });
app.use('/api/products', productRoutes);

mongoose.connect(configURL.DB_URL)
.then(() => {
    console.log("Mongodb connected...");
    // Start the server after the database connection is established
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit with error
});
