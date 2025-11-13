const express = require("express");
const cors=require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config()

app.use(cors());
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.9g6vrgm.mongodb.net/?appName=Cluster0`;



const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });


app.get("/", (req, res) => {
  res.send("Hello World!");
});

async function run() {
  try {
         await client.connect();

         await client.db("admin").command({ ping: 1 });
         console.log(
           "Pinged your deployment. You successfully connected to MongoDB!"
         );
    
    const db=client.db("learning_db");

    const learningCollection=db.collection("learning");
    const userCollection=db.collection("user");
    const enrollCourseCollection=db.collection("enroll")

    app.get("/learning",async(req,res)=>{
      const cursor=learningCollection.find()
      const result=await cursor.toArray()
      res.send(result)
    })

    app.get("/learning/:id",async(req,res)=>{
      const id=req.params.id
      const query={_id:new ObjectId(id)}
      const course=await learningCollection.findOne(query)
      res.send(course)
    })
    
    app.post("/user",async(req,res)=>{
      const newUser=req.body;
      const result = await userCollection.insertOne(newUser);
      res.send(result)
    })

    
    app.get("/latest_learning",async(req,res)=>{
      const cursor= learningCollection.find().limit(8)
      const result = await cursor.toArray()
       res.send(result);
    });

    app.get("/mycourses/:email",async(req,res)=>{
      const email=req.params.email
      const cursor=learningCollection.find({owner_email:email})
      const result=await cursor.toArray()
      res.send(result)
    })

    //enroll
    app.post("/enroll",async(req,res)=>{
      const enrollCourse=req.body
      const result =await enrollCourseCollection.insertOne( enrollCourse)
      res.send(result)
    })
    app.get("/enrollCourse/:email",async(req,res)=>{
       const email = req.params.email;
       const result=await enrollCourseCollection.find({user_email:email}).toArray()
       res.send(result)
    })

    //post courses
    app.post("/learning", async(req, res) => {
      const newCourse = req.body;
      const result = await learningCollection.insertOne(newCourse);
      res.send(result)

    });
    
    //update product
    app.patch("/learning/:id",async(req,res)=>{
      const id=req.params.id;
      const updateCourse=req.body;
      const query={_id : new  ObjectId(id)}
      const update = {
        $set: {
          title: updateCourse.title,
          image: updateCourse.image,
          price: updateCourse.price,
          duration: updateCourse.duration,
          category: updateCourse.category,
          description: updateCourse.description,
          isFeatured: updateCourse.isFeatured,
        },
      };
      const result=await learningCollection.updateOne(query,update)
      res.send(result);
    });

    //delete product
    app.delete("/learning/:id",async(req,res)=>{
      const id=req.params.id;
    
      const query={_id : new ObjectId(id)}
      const result=await learningCollection.deleteOne(query)
      res.send(result);
    })

   
   
  } finally {
   
   
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
