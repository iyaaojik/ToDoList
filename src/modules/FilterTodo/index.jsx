import Button from "../../component/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../store/todosSlice";

const FilterTodo = () => {
  const filterBy = useSelector((state) => state.todos.filterBy);
  const dispatch = useDispatch();
  const selectFilter = [
    {
      id: 1,
      filter: "Semua Kegiatan",
    },
    {
      id: 2,
      filter: "Kegiatan yang aktif",
    },
    {
      id: 3,
      filter: "Kegiatan yang telah selesai",
    },
  ];

  const handleClick = (id, filter) => {
    selectFilter.map((el) =>
      el.id == id ? (el.isSelected = true) : (el.isSelected = false)
    );
    dispatch(
      updateFilter({
        filterBy: filter,
      })
    );
  };

  return (
    <div className="container-FT">
      {selectFilter.map((el, i) => (
        <Button 
          key={i}
          text={el.filter}
          handleClick={() => {
            handleClick(el.id, el.filter);
          }}
        />
      ))}
    </div>
  );
};

export default FilterTodo;
