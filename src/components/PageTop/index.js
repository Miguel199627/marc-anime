import logo from '../../img/logo.png'

export default function PageTop() {
  return (
    <nav className="navbar navbar-light bg-warning">
      <div className="container">
        <a className="navbar-brand text-center" href="#">
          <img src={logo} alt="logo" />
          <h6 className="fst-italic">MarcAnime</h6>
        </a>
      </div>
    </nav>
  );
}
