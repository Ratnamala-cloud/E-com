import './App.css'


function App() {
  
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="nn" href="#">E-COMMERESE</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">New Launches</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Wishlist</a>
          </li>
          
</ul>

      </div>
      
    </div>
    <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

  </nav>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    
    <div class="carousel-item active">
    
      <img src="50%.jpg" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>50%Off On Top Brands</h5>
        <p>Pepe Jeans,Raymond,Aurelia,Fab India.....</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="img3.webp" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Style Your Outfits</h5>
        <p>Adidas,Zara,Guchhi.....</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="img4.jfif" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Trendy Outfits</h5>
        <p>Try Your Favorite Outfits...</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

<div id='main'>
<div className='card1'>
  <img src='img1.jfif'></img>
  <div className='card-body'>
    <h5>Starting From 19999/- Only</h5>
    <p>Lowest price since launch</p>
   <a href='#'className='btn btn-primary'>Add To Cart</a>
  </div>
</div>
<div className='card2'>
  <img src='img5.jfif'></img>
  <div className='card-body'>
    <h5>Trending Tops</h5>
    <p>Create your own style</p>
   <a href='#'className='btn btn-primary'>Add To Cart</a>
  </div>
</div>
<div className='card3'>
  <img src='img6.jfif'></img>
  <div className='card-body'>
    <h5>Trending Kurthas</h5>
    <p>Choose Your Comfort</p>
   <a href='#'className='btn btn-primary'>Add To Cart</a>
  </div>
</div>
<div className='card4'>
  <img src='img7.jfif'></img>
  <div className='card-body'>
    <h5>Mens Collection</h5>
    <p>Starting From 199/- Only</p>
   <a href='#'className='btn btn-primary'>Add To Cart</a>
  </div>
</div>
<div className='card5'>
  <img src='img8.jfif'></img>
  <div className='card-body'>
    <h5>Night wear</h5>
    <p>Starting From 200/-</p>
   <a href='#'className='btn btn-primary'>Add To Cart</a>
  </div>
</div>
<div className='card6'>
  <img src='img9.jfif'></img>
  <div className='card-body'>
    <h5>Suits for Men</h5>
    <p>Starting From 16666/- Only</p>
   <a href='#'className='btn btn-primary'>Add To Cart</a>
  </div>
</div>









</div>

           
      
        
    </>
  )
}

export default App
