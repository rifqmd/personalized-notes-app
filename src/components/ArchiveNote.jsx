import Card from "./Card";
import PropTypes from "prop-types";

const ArchiveNote = ({ onDelete, notes, onArchive }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
      {notes.map((note) => (
        <Card
          changeButton="Pindah"
          key={note.id}
          onDelete={onDelete}
          buttonData={onArchive}
          {...note}
        />
      ))}
    </div>
  );
};
ArchiveNote.propTypes = {
  onDelete: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveNote;
