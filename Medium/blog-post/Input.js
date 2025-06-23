function Input({ title, setTitle, description, setDescription }) {
  return (
    <div className="layout-column justify-content-center align-items-center">
      <input
        className="w-100"
        type="text"
        placeholder="Enter Title"
        value={title}
        data-testid="title-input"
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        className="mt-10 w-100"
        placeholder="Enter Description"
        value={description}
        data-testid="description-input"
        onChange={(event) => setDescription(event.target.value)}
      />
    </div>
  );
}

export default Input;
