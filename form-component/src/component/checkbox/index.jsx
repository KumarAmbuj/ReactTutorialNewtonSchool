//import style from "./checkbox.module.css";
// classes with module.css
// style  ={

//     checkbox-cont: {
//         display: flex;
//         padding: 10px;
//       },

//       left: {
//         right: 1%;
//       },
//       right: {
//         left: 20%;
//       }
//       ,
//       label: {
//         position: relative;
//       }
// }

const CheckBox = (props) => {
  const {
    onChange,
    isSelected,
    label,
    position = "left",
    uniqueKey,
    name,
  } = props;
  return (
    <div>
      <label>{label}</label>
      <input
        id={uniqueKey}
        checked={isSelected}
        onChange={onChange}
        type="checkbox"
        name={name}
      />
    </div>
  );
};

export default CheckBox;

// const object = {
//   name: "Vishal",
//   city: "kanpur",
// };

// object["name"];
