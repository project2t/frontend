import {Button ,Card,Nav,Navbar,Form,FormControl } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup'
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const Cards = () => {

  return (
    <>
    <h1>JavaScript</h1>
  
    <CardGroup >
  <Card className="anim" style={{color:"red"},{margin: "13px"} }>
  <Card.Img  variant="top" src="https://www.freepdf-books.com/doc-images/14065.png" height="350" width="250" alt="no image" />
  <Card.Body>
  <Card.Title style={{color:"black"}}>
JavaScript Beginner To Expert With JavaScript Programming</Card.Title>
  <Card.Text style={{color:"black"}}>

  </Card.Text>
  <Button className="btn" style={{margin: "13px"}} variant="danger"></Button>
   <Button className="btn" variant='light'>  </Button>
  </Card.Body>
 
  </Card>
  
  
  <Card className="anim" style={{color:"red"},{margin: "13px"} }>
  <Card.Img variant="top" src="https://www.freepdf-books.com/doc-images/5320.png" height="350" width="250" alt="no image" />
  <Card.Body>
  <Card.Title style={{color:"black"}}>Pro JavaScript Development</Card.Title>
  <Card.Text style={{color:"black"}}>

  </Card.Text>
  <Button className="btn" style={{margin: "13px"}} variant="danger"></Button>
   <Button className="btn" variant='light'>  </Button>
  </Card.Body>
 
  </Card>


  <Card className="anim" style={{color:"red"},{margin: "13px"} }>
  <Card.Img variant="top" src="https://firebearstudio.com/blog/wp-content/uploads/2016/01/Pro-Express.js-by-Azat-Mardan-243x300.jpg" height="350" width="250" alt="no image" />
  <Card.Body>
  <Card.Title style={{color:"black"}}>Pro Express.js by Azat Mardan</Card.Title>
  <Card.Text style={{color:"black"}}>

  </Card.Text>
  <Button className="btn" style={{margin: "13px"}} variant="danger"></Button>
   <Button className="btn" variant='light'>  </Button>
  </Card.Body>
 
  </Card>


  <Card className="anim" style={{color:"red"},{margin: "13px"} }>
  <Card.Img  variant="top" src="https://images.isbndb.com/covers/27/44/9781785282744.jpg" height="350" width="250" alt="no image" />
  <Card.Body>
  <Card.Title style={{color:"black"}}>books</Card.Title>
  <Card.Text style={{color:"black"}}>

  </Card.Text>
  <Button className="btn" style={{margin: "13px"}} variant="danger"></Button>
   <Button className="btn" variant='light'>  </Button>
  </Card.Body>
 
  </Card>

</CardGroup>
 
  </>
 );
}
export default Cards;