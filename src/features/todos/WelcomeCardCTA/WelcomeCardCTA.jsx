import CreateTodoItem from '../CreateTodoItem/CreateTodoItem';

const WelcomeCardCTA = () => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-auto">
        <div className="card text-center border border-0">
          <div className="card-body">
            <h5 className="card-title">Welcome!</h5>
            <p className="card-text">
              To get started, add some items to your list:
            </p>
            <div className="container-fluid">
              <div className="row">
                <div className="mx-auto">
                  <CreateTodoItem />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WelcomeCardCTA;
