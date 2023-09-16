import React from 'react'

export default function Question(props) {
  return (
        <div className='container-fluid'>
            <div className='col-md-5 m-auto'>
                <div className='mt-3'>
                    <div className='card text-left'>
                        <div className='card-body'>
                            <form className='' onSubmit={props.submit}>
                                <div className='form-group'>
                                    <label htmlFor="form-group">
                                        {" "}
                                        <b>3.</b> what are you currently doing
                                    </label>
                                    <br />
                                    <input 
                                        type="radio"
                                        id="teacher"
                                        name="q1"
                                        value="Teaching"
                                        autoComplete='off'
                                    />
                                    <label htmlFor="teacher">  Teaching</label>
                                    <input 
                                        type="radio"
                                        id="student"
                                        name="q1"
                                        value="Student"
                                        autoComplete='off'
                                    />
                                    <label htmlFor='student'>Student</label>
                                    <input 
                                        type="radio"
                                        id="programmer"
                                        name="q1"
                                        value="Programming"
                                        autoComplete="off"
                                    />
                                    <label htmlFor='programmer'>programmer</label>
                                    <input type='radio' id="other"  value="other" name="q1" autoComplete='off' />
                                    <label htmlFor='other'>Other</label>
                                    <br />
                                    <input 
                                    type='text' 
                                    className='form-control'
                                    name='otherf'
                                    disabled
                                    autoComplete='off'
                                    placeholder='Type her if not listed. '
                                    />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor=''>
                                        {" "}
                                        <b>4.</b> Please rate  our course.
                                    </label>
                                    <br />
                                    <input type='radio' id='poor' value="Poor" name="q2" autoComplete='off' />
                                    <label htmlFor='poor'>Poor</label>
                                    <input type='radio' id='good' value="Good" name="q2" autoComplete='off' />
                                    <label htmlFor='good'>Good</label>
                                    <input type='radio' id='execellent' value="Execellent" name="q2" autoComplete='off' />
                                    <label htmlFor='excellent'>Excellent</label>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor=''> <b>5.</b> Write your review here. </label>
                                    <textarea className='form-control' name='q3'></textarea>
                                </div>
                                <button type="submit" className='btn btn-primary'>Save</button>
                            </form>
                            <center>
                                <span className='badge badge-pill disabled'>1</span>
                                <span className='badge badge-pill badge-primary'>2</span>
                            </center>


                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
