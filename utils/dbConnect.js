import mongoose from mongoose;

async function dbConnect() {

    if (mongoose.connection.readyState >= 1) {
        return;
    }

    return mongoose.connect('mongodb://localhost:27017/yelp-camp',
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        }
    );
}


export default dbConnect;