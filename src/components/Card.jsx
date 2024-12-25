import React from 'react'

const data = [
  {
    title:"realme C75",
    disc: "Dhulai Horai Hai",
    img: "https://image01.realme.net/general/20241212/1733967866096fa2982967549485db8c3259a0f9a1fe7.png.webp",
    price: "Rs.49,999"
  },
  {
    title:"realme GT 6",
    disc: "Power meets Ai",
    img: "https://image01.realme.net/general/20240930/17276898714837028c74b7ec64f578595a0bec73bd213.png.webp",
    price: "Rs.149,999"
  },
  {
    title:"realme C61",
    disc: "Hard to break",
    img: "https://image01.realme.net/general/20240827/17247517057780f136750f9ab445193022ca17ab4b885.png.webp",
    price: "Rs.32,999"
  },
  {
    title:"realme C67",
    disc: "3 min charge, 60 min T20 Match",
    img: "https://image01.realme.net/general/20240105/1704419834105be51d94716d4469084d9ba9b1a904eb6.png.webp",
    price: "Rs.39,999"
  },
  {
    title:"realme 13 + 5G",
    disc: "Speed to victory",
    img: "https://image01.realme.net/general/20241108/1731062061605d960daec82634da8ae53a2b5bba2b081.png.webp",
    price: "Rs.89,999"
  },
  {
    title:"realme Note 60",
    disc: "champion Quality",
    img: "https://image01.realme.net/general/20240919/17267273214814cc35277c25042d580c622fec0dad738.png.webp",
    price: "Rs.26,999"
  },
  {
    title:"realme 12 + 5G",
    disc: "Power in Every Shot",
    img: "https://image01.realme.net/general/20240620/1718869504893402543bcb87c4708aedfe7ce612e8725.png.webp",
    price: "Rs.74,999"
  },
  {
    title:"realme Note 50",
    disc: "Long-lasting value beast",
    img: "https://image01.realme.net/general/20240221/170850139998146c2183ef4824e00ab6ed688ebc55037.png.webp",
    price: "Rs.24,999"
  },
]

const Card = () => {
  return (
    <>
    <h1 id='smartPhone'>SmartPhones</h1>
   <div className="cardSection">
    {/* ... */}
    {
      data.map((e,i) => {
        return(
          <div className="cardWraper">
      <div className="left">
        <div>

        <h1>{e.title}</h1>
        <p> {e.disc} </p>
        </div>
        <h2> {e.price} </h2>
      </div>
      <div className="right">
        <img src={e.img} alt="" />
      </div>
    </div>
        )
      })
    }
    {/* <div className="cardWraper">
      <div className="left">
        <div>

        <h1>smartpohne 13+5G</h1>
        <p>speed to victory</p>
        </div>
        <h2>Rs.26,999</h2>
      </div>
      <div className="right">
        <img src="https://image01.realme.net/general/20240930/17276898714837028c74b7ec64f578595a0bec73bd213.png.webp" alt="" />
      </div>
    </div> */}
    {/* ... */}
   </div>

    </>
  )
}

export default Card