
export default function ReviewForm({ review }) {
    return (
<form className="ReviewForm">
      <label>Review</label>
      <textarea className="ReviewForm > content"></textarea>
      <label>Rating</label>
      <select className="Rating > select">
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
        <option value="4"></option>
        <option value="5"></option>
      </select>
      <button className="ReviewForm > button">Add Review</button>
    </form>
     );
    }