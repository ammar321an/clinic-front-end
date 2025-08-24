"use client";
  
import React from "react"; 

const FeedbackForm: React.FC = () => {
  return (
    <>
      <div className="footer-feedback">
        <h3>Feedback</h3>

        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Name" />
          </div>

          <div className="form-group">
            <input type="text" className="form-control" placeholder="Phone" />
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              id="your_message"
              rows={3}
              placeholder="Message"
            ></textarea>
          </div>
          
          <div className="text-left">
            <button type="submit" className="btn feedback-btn">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FeedbackForm;
