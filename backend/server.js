import express from "express";
import pg from 'pg'
import cors from "cors"
const { Client } = pg
 


const app = express();


/*
{
    code: ""
}

*/
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.post("/getproducts", async (req, res) => {
    var body = req.body;

    let searchText = body.searchText;
    let count = body.count;
    let category = body.category; 
    let size = body.size;
    let orderBy = body.orderBy;



    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'hnmmidtermdatabase',
        user: 'postgres',
        password: 'tamuro174',
      });

      await client.connect()

      let query = "select * from product " 
      + (((searchText != undefined && searchText != "") || (category != undefined && category != "") || (size != undefined && size != "")) ? " where " : "" )
      + (searchText != undefined && searchText != "" ? " productname like '%" + searchText +"%' and " : "" )
      + (category != undefined && category != "" ? " category = '"+ category + "' and " : "" )
      + (size != undefined && size != "" ? " sizes like '%."+ size +".%'" : "")
      + (orderBy != undefined ? " order by price " + orderBy : "")
      + " limit " + count
      + ";";

      console.log(query);
    let queryResult = await client.query(query);

    res.send(queryResult.rows);
});

app.post("/getproduct", async (req, res) => {
    var body = req.body;
    var productId = body.productId;
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'hnmmidtermdatabase',
        user: 'postgres',
        password: 'tamuro174',
      });

      await client.connect()

      let query = "select * from product where id =" + productId + " ;"


    let queryResult = await client.query(query);

    res.send(queryResult.rows[0]);
});



app.post("/getcategories", async (req, res) => {
    
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'hnmmidtermdatabase',
        user: 'postgres',
        password: 'tamuro174',
      });

      await client.connect()
    let queryResult = await client.query("select distinct category from product;"
    );

    res.send(queryResult.rows);
});

app.listen(777);