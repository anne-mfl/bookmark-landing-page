type DescriptionType = {
  children: string,
  addClassName: string|null
}

export const Description = (props: DescriptionType) => {

  return <p className={`text-grayish-blue ${props.addClassName}`}>{props.children}</p>;
};
