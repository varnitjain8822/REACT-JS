import React from "react";
import './PersonalInfoForm.css';

const PersonalInfoForm = () => {
  return (
    <div className="form-container">
      <form className="form-box">
        <fieldset className="fieldset">
          <legend>Personal Information</legend>

          <label>Name:</label>
          <input type="text" placeholder="Enter your name" />

          <label>Date of Birth:</label>
          <input type="date" />

          <label>Gender:</label>
          <div className="gender-group">
            <label>
              <input type="radio" name="gender" value="male" /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="other" /> Other
            </label>
          </div>

          <label>Favourite Car:</label>
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>

          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />

          <label>Phone:</label>
          <input type="tel" placeholder="Enter your phone number" />

          <label>Address:</label>
          <textarea placeholder="Enter your address"></textarea>

          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
