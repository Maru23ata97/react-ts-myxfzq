import * as React from 'react';

const About = () => {
  return <section id="about">
  <div className="container my-5 py-5">
    <div className="row mb-5">
      <div className="col-12">
        <h1 className="w-bold text_center">En savoir plus</h1>
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 img-profil overflow-hidden">
        <img
          src="https://mail.google.com/mail/u/0?ui=2&ik=c7b13c9ea3&attid=0.1.1&permmsgid=msg-f:1749711053999726985&th=184838eee93a6189&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-n0eonOS7mhCRa6rB5ETKhlqRAwMsJHPn7eFBDqEuINNGe0BV-K8C0MiEfShKQO5_2eWrXcnoS3b6-pIDiD-cQeXhZBMTHcUR71ylxttzqM-tCnBrkZ_LUyw4&disp=emb"
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="col-md-6">
        <h1 className="fw-bold md-4">FIRIAPU Tau</h1>
        <h3 className="text-info md-8">WEB DEVELOPER</h3>
        <p className="lead mb-4">
          Passionné par la réalisation et le développement de projets web,
          je me suis tout naturellement tourné vers une carrière de
          développeur web. Aujourd'hui je souhaite intégrer une entreprise
          dynamique et jeune, aussi je serai ravi de rejoindre votre équipe
          en tant que développeur web.
        </p>
        <div className="buttons">
          <button className="btn btn-outline-info px-5 py-2">
            Télécharger CV
          </button>
          <button className="btn btn-info text-white color-black px-5 py-2">
            Contact
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

};

export default About;