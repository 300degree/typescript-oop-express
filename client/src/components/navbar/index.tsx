import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const dropdownItems = [
    {
      id: 0,
      title: "Login/Signup",
      action: () => {
        navigate("?auth=login");
      },
    },
  ];

  const getDrondown = dropdownItems.map((item, index) => {
    return (
      <div key={index} onClick={item.action}>
        <p>{item.title}</p>
      </div>
    );
  });

  return <div>{getDrondown}</div>;
};

export default Navbar;
