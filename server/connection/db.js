import mongoose from 'mongoose';
mongoose.set('strictQuery', true);

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-oahlwkq-shard-00-00.ya0sy4g.mongodb.net:27017,ac-oahlwkq-shard-00-01.ya0sy4g.mongodb.net:27017,ac-oahlwkq-shard-00-02.ya0sy4g.mongodb.net:27017/INSHORTS-CLONE?ssl=true&replicaSet=atlas-zun4rn-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {    
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;

/*`mongodb://${username}:${password}@clone-inshort-shard-00-00.deivq.mongodb.net:27017,clone-inshort-shard-00-01.deivq.mongodb.net:27017,clone-inshort-shard-00-02.deivq.mongodb.net:27017/INSHORTS-CLONE?ssl=true&replicaSet=atlas-ytsxi5-shard-0&authSource=admin&retryWrites=true&w=majority`*/ 