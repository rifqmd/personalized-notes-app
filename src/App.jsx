import { useState } from "react";
import Navbar from "./components/Navbar";
import FormInput from "./components/FormInput";
import BodySection from "./components/BodySection";
import { getInitialData } from "./utils/index";

function App() {
  const [datas, setDatas] = useState(getInitialData());
  const [search, setSearch] = useState("");

  const onDeleteHandler = (id) => {
    const updatedDatas = datas.filter((data) => data.id !== id);
    setDatas(updatedDatas);
  };

  const onSearchHandler = (event) => {
    const captureValue = event.target.value.toLowerCase();
    setSearch(captureValue);
    event.preventDefault();
  };

  const onActiveHandler = (id) => {
    const updatedDatas = datas.map((data) =>
      data.id === id ? { ...data, archived: false } : data
    );
    setDatas(updatedDatas);
  };

  const onArchiveHandler = (id) => {
    const updatedDatas = datas.map((data) =>
      data.id === id ? { ...data, archived: true } : data
    );
    setDatas(updatedDatas);
  };

  const onAddDatasHandler = ({ title, body }) => {
    setDatas((prevDatas) => [
      ...prevDatas,
      {
        id: +new Date(),
        title,
        body,
        createdAt: new Date().toDateString(),
        archived: false,
      },
    ]);
  };

  const searchDatas = !search
    ? datas
    : datas.filter((data) => data.title.toLowerCase().includes(search));
  const activeDatas = searchDatas.filter((data) => !data.archived);
  const archiveDatas = searchDatas.filter((data) => data.archived);

  return (
    <>
      <Navbar handleSearch={onSearchHandler} />
      <FormInput addDatas={onAddDatasHandler} />
      <BodySection
        onDelete={onDeleteHandler}
        activeDatas={activeDatas}
        archiveDatas={archiveDatas}
        onActive={onActiveHandler}
        onArchive={onArchiveHandler}
      />
    </>
  );
}

export default App;
