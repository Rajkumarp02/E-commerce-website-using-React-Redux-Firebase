
    npm audit fix --force
    CardGroup className='justfy-content-center d-flex  m-3 p-2   '>
      <Card  width={300}bg="success">
        <Card.Img variant="top" src= width={800}  />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.id}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        {item.stock > 0 ? (
        <div> 
    <Button className='btn-btn-success'>Buynow</Button>
    
    <Button className='btn-btn-success'  onClick= {addToCart}>AddCart</Button>
   
    </div>
     //

       <Card bg="primary" text="variant.toLowerCase()"

              >

                <Card.Header >

                  <Card.Img variant="top" bg="info" src={props.image} />
                </Card.Header>

                <Card.Body  >
                  <Card.Title className="text-center"><b>{props.name}</b></Card.Title>
                  <Card.Text className="text-center"> 
                    <h2>{props.price}</h2>
                   </Card.Text>
                   /////



                      <div role="button" onClick={() => nav(`/productDetails/${props.id}`)}>
            <section className='py-4 container'>

     