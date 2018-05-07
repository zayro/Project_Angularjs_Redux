import actions from '../redux/actions/action.http';

export default class ReduxController {
  constructor($ngRedux, $scope) {

    console.log($ngRedux);

    this.ngRedux = $ngRedux;

    this.todo = 'texto de arranque';
    this.unsubscribe = $ngRedux.connect(this.mapStateToThis, actions)(this);
    $scope.$on('$destroy', this.unsubscribe);
  }

  submitTodo(data){
    this.todo = data;
    console.log('ingreso a controler redux', data);
    this.testing(this.todo);
  }

  $onDestroy(){
    this.unsubscribe();
  }

  dispathTesting(data, $ngRedux) {

    console.log(this.ngRedux.getState());

    this.ngRedux.dispatch({type: 'TESTING', Test: data });
  }

  mapStateToThis(state) {
      return {
        test: state.testing
      };
  }
}

ReduxController.$inject = ["$ngRedux", "$scope"];
