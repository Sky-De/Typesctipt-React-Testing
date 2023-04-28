interface name {
    name: string
}

const Person = ({ name }: name) => {
  return (
    <div>
        <p>Name is {name}</p>
        <p role="contentinfo">family</p>
    </div>
  );
};
export default Person;