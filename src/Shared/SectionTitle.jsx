const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center my-8">
      <h2 className="text-4xl">{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
