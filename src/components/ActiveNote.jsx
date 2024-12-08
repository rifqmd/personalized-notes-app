import Card from "./Card";
import PropTypes from "prop-types";

const ActiveNote = ({ onDelete, onActive, notes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
      {notes.map((note) => (
        <Card
          changeButton="Arsip"
          key={note.id}
          onDelete={onDelete}
          buttonData={onActive}
          {...note}
        />
      ))}
    </div>
  );
};
ActiveNote.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onActive: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ActiveNote;
