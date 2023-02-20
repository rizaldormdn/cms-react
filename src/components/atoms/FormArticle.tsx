import React from 'react'

const FormArticle = () => {
    return (
        <div>
            <div className="">
                <label className="label">
                    Title</label>
                <div className="control">
                    <input className="px-2 py-2 border border-gray-800 focus:border-gray-400 lg:w-full md:w-full rounded-md" type="text" placeholder="Text input" />
                </div>
            </div>
            <div className="field">
                <label className="label">Username</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input is-success" type="text" placeholder="Text input" value="bulma" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                    </span>
                </div>
                <p className="help is-success">This username is available</p>
                <textarea className="w-full border h-full" placeholder="Compose an epic.."></textarea>
            </div>
            <div className="flex flex-col">
            <label className="">Tags</label>
                <div className='flex'>
                <input className="px-2 py-2 border border-gray-800 focus:border-gray-400 lg:w-full md:w-full rounded-md" placeholder="tutorial, review, ..." />
                <input className="px-2 py-2 border border-gray-800 focus:border-gray-400 lg:w-full md:w-full rounded-md" placeholder="Email input" />
                </div>
                <div className="control has-icons-left has-icons-right">
                    
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
            </div>
            <div className="field">
                <label className="label">Subject</label>
                <div className="control">
                    <div className="select">
                        <select>
                            <option>Select dropdown</option>
                            <option>With options</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <textarea className="textarea" placeholder="Textarea"></textarea>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <label className="checkbox">
                        <input type="checkbox" />
                        I agree to the <a href="#">terms and conditions</a>
                    </label>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <label className="radio">
                        <input type="radio" name="question" />
                        Yes
                    </label>
                    <label className="radio">
                        <input type="radio" name="question" />
                        No
                    </label>
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
                <div className="control">
                    <button className="button is-text">Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default FormArticle

