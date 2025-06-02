import React from "react";

function Card () {
    return (
        <div className="container my-5">
        <div className="row text-center">
          {[1, 2, 3, 4].map((_, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="card h-100">
                <img src="https://picsum.photos/500/325" className="card-img-top" alt="Imagen aleatoria" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



    )
}

export default Card;