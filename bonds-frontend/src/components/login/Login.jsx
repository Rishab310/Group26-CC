import React from 'react'

export const Login = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-6 offset-3 mt-5 justify-content-center">
        <form>
            <div className='mb-2'>
        <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label className="form-check-label" for="inlineRadio1">Admin</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" for="inlineRadio2">Manager</label>
</div>
</div>



  <div classNameName="form-group mt-3">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group mt-3">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  
  <button type="submit" className="btn btn-primary mt-3">Submit</button>
</form>
</div>
</div>
    </div>
  )
}
