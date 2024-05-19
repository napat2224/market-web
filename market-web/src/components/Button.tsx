// import { Children, ReactNode } from "react";
// import Alert from "./Alert";

// interface Props {
//   children: ReactNode;
//   onClick?: () => void;
//   color?: "primary" | "secondary";
// }

// const Button = ({ children, onClick, color = "primary" }: Props) => {
//   return (
//     <button className={"btn btn-" + color} onClick={onClick}>
//       {children}
//     </button>
//   );
// };
// export default Button;
import React from "react";
import { useNavigate } from "react-router-dom";

const Button: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/market"); // Replace with your desired route path
  };

  return <button onClick={handleClick}>Go to Market</button>;
};

export default Button;
