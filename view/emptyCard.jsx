const React = require('react');

module.exports = function emptyCard () {
  return (
    <div  className="addForm cardAnimal m-3 p-3">
      <div className="card-body">
        <form id='addForm' action='/animals' method='POST'>
        <h5 className="card-title animalName">name</h5>
        <input name='name' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <h5 className="card-text animalDescribe">describe</h5>
      <textarea name='describe' type="text" class="form-control" id="exampleFormControlTextarea1" rows="17" />
      <button className="btn btn-primary addBtn" type='submit'>add</button>
        </form>
      </div>
    </div>
  );
}
