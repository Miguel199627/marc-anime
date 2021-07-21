import "./style.css";

export default function Search({ onSearch }) {
  const handleChange = (value) => {
    if (!value.length) onSearch("https://kitsu.io/api/edge/anime");
    else onSearch(`https://kitsu.io/api/edge/anime?filter[text]=${value}`);
  };

  return (
    <div className="input-group p-2">
      <input
        type="text"
        className="form-control"
        placeholder="Look for your favorite anime"
        aria-label="Look for your favorite anime"
        onChange={({ target: { value } }) => handleChange(value)}
      />
    </div>
  );
}
