const React = require('react');

module.exports = function Modal({ animal }) {
  return (
    <div id="myModal" class="modal">
    {/* <!-- Modal content --> */}
    <div class="modal-content">
      <span class="close">&times;</span>
      <form id='editForm' action={`animal/${animal.id}`} method='PUT'>
      <input class="form-control" name='name' defaultValue={animal.name} type="text" />
      <textarea name='describe' defaultValue={animal.describe} type="text" class="form-control" id="exampleFormControlTextarea1" rows="3" />
      <button className="btn btn-primary saveBtn" type='submit'>save</button>
      </form>
    </div>
  
  </div>
  )
};
