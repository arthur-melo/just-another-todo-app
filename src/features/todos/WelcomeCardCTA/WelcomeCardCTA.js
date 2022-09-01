import CreateTodoItem from '../CreateTodoItem/CreateTodoItem';

const WelcomeCardCTA = () => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-md-9 col-lg-7 col-xl-6">
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Welcome!</h5>
            <p className="card-text">
              To get started, add some items to your list:
            </p>
            <div className="d-inline-block">
              <CreateTodoItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WelcomeCardCTA;
