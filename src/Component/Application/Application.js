const Application = () => {
    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
            </div>
            <div>
                <label htmlFor="bio">Bio</label>
                <textarea  id="bio" name='bio' />
            </div>
            <div>
                <label htmlFor="job-location">Job Location</label>
                <select id="job-location">
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AF">Afghanistan</option>
                    <option value="CA">Canada</option>
                    <option value="IN">India</option>
                    <option value="AU">Australia</option>
                </select>
            </div>
            <div>
                <label>
                    <input type="checkbox" id="terms" />I agree to the terms of Conditions
                </label>
            </div>
            <button>Submit</button>
        </form>
    );
};

export default Application;