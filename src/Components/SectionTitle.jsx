const SectionTitle = ({ heading }) => {
  return (
    <div>
      <h2
        style={{ color: "var{--section-title}" }}
        className="text-4xl text-center"
      >
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
