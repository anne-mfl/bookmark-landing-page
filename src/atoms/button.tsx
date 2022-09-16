type ButtonType = {
  children: string
  bgcolor: string
  textcolor: string
  width: string
}

export const Button = (props: ButtonType) => {
 
  return (
    <button className={`shadow-lg py-3 px-3 rounded font-medium text-sm ${props.bgcolor} ${props.textcolor} ${props.width}`}>
      {props.children}
    </button>
  );
};
