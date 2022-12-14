const React = require('react');

module.exports = function Modal({ animal }) {
  return (

    <div id="myModal" className="modal">
   
    <div className="modal-content">
      <span className="close">&times;</span>
      <form id='editForm' action={`animal/${animal.id}`} method='PUT'>
      <p>Загрузите файл с картинкой</p>
          <input type="file" name="pic"  />
        <p>имя</p>
      <input className="form-control" name='name' defaultValue={animal.name} type="text" />
      <p>описание</p>
      <textarea name='describe' defaultValue={animal.describe} type="text" className="form-control" id="exampleFormControlTextarea1" rows="3" />
      <button className="btn btn-primary saveBtn" type='submit'>save</button>
      </form>
    </div>
  </div>
  )
};
