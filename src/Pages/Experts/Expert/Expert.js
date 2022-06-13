import React from 'react';

const Expert = ({ expert }) => {
    const { name, about, img } = expert;

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 g-3" >
            <div class="card w-100" style={{ width: "18rem" }}>
                <img style={{ height: "400px" }} src={img} class="img-fluid" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Name: {name}</h5>
                    <p class="card-text">About: {about}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Expert;