import { useState, useEffect } from "react";
import Axios from "axios";
import "./style.css";

const Homepage = () => {
  const [Image, setImage] = useState([]);
  const count = 1;

  useEffect(() => {
    Axios.get(
      "https://api.unsplash.com/photos?client_id=Oao6keF4wun5THuxZD4REm-dENk6g-AClOvwhp-eet4&per_page=30&pages=3"
    ).then((data) => {
      setImage(data.data);
      console.log(data);
    });
  }, [count]);

  return (
    <section className="main-card--cointainer">
      {Image.map((item) => {
        return (
          <>
            <div className="card-container" key={item.id}>
              <div className="card ">
                <img
                  src={item.urls.small}
                  alt="images"
                  className="card-media"
                />
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default Homepage;
