import "./LabelInputs.scss";

export const LabelInputs = ({ label, type, onChange, image }) => {
  return (
    <label>
      <h5>{label}</h5>
      <input
        type={type}
        {...(image && { accept: "image/*" })}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};
