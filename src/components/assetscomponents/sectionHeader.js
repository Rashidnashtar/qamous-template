const SectionHeader = ({ header, boldHeader, paragrah }) => (
  <div className="row">
    {/*~~~~~ Start Section Header ~~~~~*/}
    <div className="col-12">
      <div className="section-header text-center">
        <h2 className="section-title">
          {header} <span>{boldHeader}</span>
        </h2>
        <p>{paragrah}</p>
        <div className="divider">
          <img src="/assets/images/icon/divider.png" alt="icon" />
        </div>
      </div>
    </div>
    {/*./ section-header */}
  </div>
);
export default SectionHeader;
