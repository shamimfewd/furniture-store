const SectionTitle = ({ heading }) => {
  return (
    <div>
      <h2
        style={{ color: "var{--section-title}" }}
        className="text-4xl text-center mt-10"
      >
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
