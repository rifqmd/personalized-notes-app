import ArchiveNote from "./ArchiveNote";
import ActiveNote from "./ActiveNote";
import PropTypes from "prop-types";

const BodySection = ({
  onDelete,
  onActive,
  onArchive,
  activeDatas,
  archiveDatas,
}) => {
  return (
    <>
      <section className="container">
        <div className="bg-SecondaryColor px-5 sm:px-24 py-10 md:py-20 rounded-lg">
          <h2 className="text-2xl text-white font-bold mb-8">Catatan Aktif</h2>
          {activeDatas.length !== 0 ? (
            <ActiveNote
              onDelete={onDelete}
              notes={activeDatas}
              onActive={onActive}
            />
          ) : (
            <p className="text-gray-500">Tidak ada catatan</p>
          )}
        </div>
      </section>
      <section className="container">
        <div className="px-5 sm:px-24 py-10 md:py-20">
          <h2 className="text-2xl font-bold mb-8">Arsip</h2>
          {archiveDatas.length !== 0 ? (
            <ArchiveNote
              onDelete={onDelete}
              notes={archiveDatas}
              onArchive={onArchive}
            />
          ) : (
            <p className="text-gray-500">Tidak ada catatan</p>
          )}
        </div>
      </section>
    </>
  );
};
BodySection.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onActive: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  activeDatas: PropTypes.array.isRequired,
  archiveDatas: PropTypes.array.isRequired,
};

export default BodySection;
