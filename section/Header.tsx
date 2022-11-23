import * as React from 'react';

const Header = () => {
  return (
    <section id="home">
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h3 className="text-info">Web Developer</h3>
            <h1 className="display-1 fw-bold">
              FIRIAPU Tau
              <br />
              25 ans
            </h1>
            <h4 className="text-info">
              Souriant, dynamique et motivé
              <br />
              Je serais très heureux de vous rejoindre et de mettre a profit mon
              savoir faire au service de votre entreprise.
            </h4>
            <div className="buttons my-4">
              <button className="btn btn-outline-info px-4 py-2">
                Embauche moi
              </button>
              <a
                className="btn btn-info text-white px-4 py-2"
                href="https://maru23ata97.github.io/mf-Blog/"
                target="_blank"
              >
                Mon blog
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div
              id="myCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://mail.google.com/mail/u/0?ui=2&ik=c7b13c9ea3&attid=0.1.1&permmsgid=msg-f:1749723992536317277&th=184844b3661afd5d&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_-JfUyzgJj-HiSfkPxvG8hYzm3h33ozS53WBThxWVJ3fNM1GjV3AftVXsQP8jKgne7QNd8jxbhVXgmRSAtkD0Ir0VCZTN857VbFI594YE9wXDNBcC3sG2DY4o&disp=emb"
                    className="d-block w-100 img-fluid"
                    alt="..."
                    height="550px"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://mail.google.com/mail/u/0?ui=2&ik=c7b13c9ea3&attid=0.1.1&permmsgid=msg-f:1749711053999726985&th=184838eee93a6189&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-n0eonOS7mhCRa6rB5ETKhlqRAwMsJHPn7eFBDqEuINNGe0BV-K8C0MiEfShKQO5_2eWrXcnoS3b6-pIDiD-cQeXhZBMTHcUR71ylxttzqM-tCnBrkZ_LUyw4&disp=emb"
                    className="d-block w-100 img-fluid"
                    alt="..."
                    height="600px"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://mail.google.com/mail/u/0?ui=2&ik=c7b13c9ea3&attid=0.1&permmsgid=msg-a:r5232490401249852178&th=1848441fdf608797&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_NSHe7gTk1ISAJe8NOm5eKd0RIMLrYEJL6-_7o9JVSbA3MNX7cyx6DDhKtVgJHP-6iWXQ2gdJc46PdnO3kFd5AROnwW4o6v_oY3z3pMsra3EShrejuv0ofbLc&disp=emb&realattid=1848441c5364afdbc41"
                    className="d-block w-100 img-fluid"
                    alt="..."
                    height="600px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
